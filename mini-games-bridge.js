(() => {
  const COMPLETE = 'bfe-mini-games-complete';
  const CANCEL = 'bfe-mini-games-cancel';
  const RULES_COMPLETE = 'bfe-twelve-rules-complete';
  const ORG_COMPLETE = 'bfe-org-game-complete';
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

  const openTwelveRules = () => {
    const iframe = document.querySelector(`#${FRAME_ID} iframe`);
    if (!iframe) {
      continueOriginalGame();
      return;
    }
    iframe.src = './twelve-rules.html?embed=1';
    iframe.title = '十二条令训练营';
  };

  const openOrgGame = () => {
    const iframe = document.querySelector(`#${FRAME_ID} iframe`);
    if (!iframe) {
      continueOriginalGame();
      return;
    }
    iframe.src = './org-structure-game.html?embed=1';
    iframe.title = '组织导航局';
  };

  const openLayer = () => {
    closeLayer();
    document.documentElement.classList.add('bfe-mini-games-open');

    const layer = document.createElement('div');
    layer.id = FRAME_ID;
    layer.innerHTML = `
      <div class="bfe-mini-games-panel" role="dialog" aria-modal="true" aria-label="培训小游戏">
        <button type="button" class="bfe-mini-games-close" aria-label="关闭小游戏" title="关闭小游戏">×</button>
        <iframe src="./mini-games.html?embed=1" title="出口易新人培训小游戏"></iframe>
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
    if (type === COMPLETE) openTwelveRules();
    if (type === RULES_COMPLETE) openOrgGame();
    if (type === ORG_COMPLETE) continueOriginalGame();
    if (type === CANCEL) closeLayer();
  });
})();
