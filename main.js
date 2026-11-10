// 등장 효과 · 프로젝트 상세 · 작품 크게 보기
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 등장 효과 */
  const io = 'IntersectionObserver' in window && !reduce
    ? new IntersectionObserver((entries) => {
        for (const e of entries) if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })
    : null;
  const watch = (els) => els.forEach((el) => (io ? io.observe(el) : el.classList.add('on')));
  watch($$('[data-pop]:not([hidden])'));

  /* 대화상자 공통 */
  let lastFocus = null;
  const open = (dlg) => {
    lastFocus = document.activeElement;
    document.documentElement.style.overflow = 'hidden';
    dlg.showModal();
  };
  const closeAll = (dlg) => dlg.open && dlg.close();
  $$('dialog').forEach((dlg) => {
    dlg.addEventListener('close', () => {
      document.documentElement.style.overflow = '';
      if (dlg.id === 'pmodal' && location.hash.startsWith('#p-')) history.replaceState(null, '', location.pathname + location.search);
      lastFocus?.focus?.({ preventScroll: true });
    });
    dlg.addEventListener('click', (e) => {
      if (e.target === dlg || e.target.closest('[data-close]')) closeAll(dlg);
    });
  });

  /* 프로젝트 상세 */
  const pm = $('#pmodal');
  const pmBody = $('#pmodal-body');
  const showProject = (slug, push = true) => {
    const t = document.getElementById(`tpl-${slug}`);
    if (!t) return;
    pmBody.replaceChildren(t.content.cloneNode(true));
    if (!pm.open) open(pm);
    pm.querySelector('.modal-box').scrollTop = 0;
    if (push) history.replaceState(null, '', `#p-${slug}`);
  };
  $$('[data-project]').forEach((b) => b.addEventListener('click', () => showProject(b.dataset.project)));
  const fromHash = () => {
    const m = location.hash.match(/^#p-([\w-]+)$/);
    if (m) showProject(m[1], false);
  };
  fromHash();
  addEventListener('hashchange', fromHash);

  /* 작품 크게 보기 */
  const works = JSON.parse($('#works-data').textContent);
  const lb = $('#lightbox');
  const lbImg = $('#lb-img');
  let cur = null;
  let idx = 0;
  const render = () => {
    const n = cur.imgs.length;
    lbImg.src = `assets/img/works/${cur.imgs[idx]}`;
    lbImg.alt = `${cur.title} ${idx + 1} / ${n}`;
    $('#lb-count').textContent = `${String(idx + 1).padStart(2, '0')} / ${String(n).padStart(2, '0')}`;
    $('#lb-title').textContent = cur.title;
    $('#lb-contest').textContent = cur.award ? `${cur.contest} · ${cur.award}` : cur.contest;
    $('#lb-desc').textContent = cur.desc || '';
    $('#lb-link').innerHTML = cur.link ? `<a class="btn xs" href="${cur.link}" target="_blank" rel="noopener"><span>영상 보기 ↗</span></a>` : '';
    $$('.lb-nav', lb).forEach((b) => (b.hidden = n < 2));
    // 다음 그림 미리 받기
    if (n > 1) { const pre = new Image(); pre.src = `assets/img/works/${cur.imgs[(idx + 1) % n]}`; }
  };
  const step = (d) => { if (!cur) return; idx = (idx + d + cur.imgs.length) % cur.imgs.length; render(); };
  $$('[data-work]').forEach((b) => b.addEventListener('click', () => {
    cur = works.find((w) => w.id === b.dataset.work);
    if (!cur) return;
    idx = 0;
    render();
    open(lb);
  }));
  $('.lb-nav.prev', lb).addEventListener('click', () => step(-1));
  $('.lb-nav.next', lb).addEventListener('click', () => step(1));
  lb.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
  });
  // 휴대폰에서 좌우로 밀어 넘기기
  let x0 = null;
  $('.lb-stage', lb).addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  $('.lb-stage', lb).addEventListener('touchend', (e) => {
    if (x0 == null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
    x0 = null;
  });

  /* 작품 더 보기 */
  const more = $('#more-works');
  more?.addEventListener('click', () => {
    const items = $$('.more-item');
    items.forEach((el) => (el.hidden = false));
    watch(items);
    more.closest('.center').remove();
    items[0]?.querySelector('button')?.focus({ preventScroll: true });
  });
})();
