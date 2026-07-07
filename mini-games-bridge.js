(() => {
  const COMPLETE = 'bfe-mini-games-complete';
  const CANCEL = 'bfe-mini-games-cancel';
  const FRAME_ID = 'bfe-mini-games-layer';
  let bypassNextClick = false;
  let pendingTrigger = null;

  const sameOriginMessage = (event) => {
    return window.location.protocol === 'file:' || event.origin === window.location.origin;
  };

  const isChallengeTrigger = (node) => {
    if (!node || !(node instanceof HTMLElement)) return false;
    if (node.closest(`#${FRAME_ID}`)) return false;
    if (node.hasAttribute('disabled') || node.getAttribute('aria-disabled') === 'true') return false;

    const label = `${node.getAttribute('aria-label') || ''} ${node.textContent || ''}`.replace(/\s+/g, ' ').trim();
    if (!label) return false;
    if (label.includes('首次需先学习知识库')) return false;
    if (label.includes('点击前往学习')) return false;

    return label.includes('进入趣味闯关') || label === '进入测试' || label.includes('进入测试');
  };

  const closeLayer = () => {
    const layer = document.getElementById(FRAME_ID);
    if (layer) layer.remove();
    document.documentElement.classList.remove('bfe-mini-games-open');
  };

  const continueOriginalGame = () => {
    closeLayer();
    const trigger = pendingTrigger;
    pendingTrigger = null;
    if (!trigger || !document.contains(trigger)) return;

    bypassNextClick = true;
    window.setTimeout(() => {
      trigger.click();
      window.setTimeout(() => {
        bypassNextClick = false;
      }, 120);
    }, 80);
  };

  const openLayer = () => {
    closeLayer();
    document.documentElement.classList.add('bfe-mini-games-open');

    const layer = document.createElement('div');
    layer.id = FRAME_ID;
    layer.innerHTML = `
      <div class="bfe-mini-games-panel" role="dialog" aria-modal="true" aria-label="行走问答前置小游戏">
        <header class="bfe-mini-games-head">
          <div>
            <span>PRE-GAME</span>
            <strong>先玩一组轻量小游戏，再进入原来的行走问答</strong>
          </div>
          <button type="button" class="bfe-mini-games-close" aria-label="关闭小游戏">关闭</button>
        </header>
        <iframe src="./mini-games.html?embed=1" title="出口易新人培训前置小游戏"></iframe>
      </div>
    `;

    layer.querySelector('.bfe-mini-games-close')?.addEventListener('click', closeLayer);
    document.body.appendChild(layer);
  };

  document.addEventListener('click', (event) => {
    if (bypassNextClick) return;
    const trigger = event.target instanceof Element ? event.target.closest('button, a') : null;
    if (!isChallengeTrigger(trigger)) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    pendingTrigger = trigger;
    openLayer();
  }, true);

  window.addEventListener('message', (event) => {
    if (!sameOriginMessage(event)) return;
    const type = event.data && event.data.type;
    if (type === COMPLETE) continueOriginalGame();
    if (type === CANCEL) closeLayer();
  });
})();
