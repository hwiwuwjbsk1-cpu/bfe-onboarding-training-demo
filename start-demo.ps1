$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$rootFull = ([System.IO.Path]::GetFullPath($root)).TrimEnd('\') + '\'

function Get-FreePort {
  param([int] $StartPort = 5826)

  for ($port = $StartPort; $port -lt ($StartPort + 80); $port++) {
    $tcp = $null
    try {
      $tcp = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $port)
      $tcp.Start()
      return $port
    } catch {
    } finally {
      if ($tcp) {
        $tcp.Stop()
      }
    }
  }

  throw 'No free local port was found.'
}

$mimeTypes = @{
  '.html' = 'text/html; charset=utf-8'
  '.js' = 'text/javascript; charset=utf-8'
  '.css' = 'text/css; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.png' = 'image/png'
  '.jpg' = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.webp' = 'image/webp'
  '.svg' = 'image/svg+xml'
  '.mp4' = 'video/mp4'
  '.glb' = 'model/gltf-binary'
  '.pdf' = 'application/pdf'
  '.woff' = 'font/woff'
  '.woff2' = 'font/woff2'
}

$port = Get-FreePort
$url = "http://127.0.0.1:$port/"
$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add($url)
$listener.Start()

Start-Process $url
Write-Host "Newcomer training demo is running at $url"
Write-Host "Close this window to stop the demo server."

while ($listener.IsListening) {
  $context = $listener.GetContext()

  try {
    $requestPath = [System.Uri]::UnescapeDataString($context.Request.Url.AbsolutePath.TrimStart('/'))
    if ([string]::IsNullOrWhiteSpace($requestPath)) {
      $requestPath = 'index.html'
    }

    $localPath = $requestPath.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
    $fullPath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($rootFull, $localPath))

    if (-not $fullPath.StartsWith($rootFull, [System.StringComparison]::OrdinalIgnoreCase)) {
      $context.Response.StatusCode = 403
      $bytes = [System.Text.Encoding]::UTF8.GetBytes('Forbidden')
    } else {
      if (-not [System.IO.File]::Exists($fullPath)) {
        $fullPath = [System.IO.Path]::Combine($rootFull, 'index.html')
      }

      $bytes = [System.IO.File]::ReadAllBytes($fullPath)
      $ext = [System.IO.Path]::GetExtension($fullPath).ToLowerInvariant()
      if ($mimeTypes.ContainsKey($ext)) {
        $context.Response.ContentType = $mimeTypes[$ext]
      } else {
        $context.Response.ContentType = 'application/octet-stream'
      }
    }

    $context.Response.ContentLength64 = $bytes.Length
    $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } catch {
    $context.Response.StatusCode = 500
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($_.Exception.Message)
    $context.Response.ContentType = 'text/plain; charset=utf-8'
    $context.Response.ContentLength64 = $bytes.Length
    $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } finally {
    $context.Response.OutputStream.Close()
  }
}
