// index.html 생성기 — 의존성 없음. 실행: node build.mjs
// 문구는 content/*.mjs, 모양은 styles.css, 동작은 main.js
import fs from 'node:fs';
import { meta, hero, sfx, projects, more, steps, stack, author } from './content/site.mjs';
import { works } from './content/works.mjs';
import { awards } from './content/awards.mjs';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const img = (f) => `assets/img/${f}`;
const ext = (url) => /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : '';
const tag = ([t, c]) => `<span class="tag${c ? ' ' + c : ''}">${esc(t)}</span>`;
const GRADE = { '대상': 'y', '최우수': 'p', '우수': 'c', '은상': 'w', '장려': 'w' };

/* ── 머리 ── */
const head = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(meta.title)}</title>
<meta name="description" content="${esc(meta.description)}">
<meta name="theme-color" content="#ffe500">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(meta.title)}">
<meta property="og:description" content="${esc(meta.description)}">
${meta.url ? `<meta property="og:url" content="${esc(meta.url.replace(/\/$/, ''))}/">\n` : ''}<meta property="og:image" content="${esc((meta.url ? meta.url.replace(/\/$/, '') + '/' : '') + 'assets/og.jpg')}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css">
<link rel="stylesheet" href="styles.css">
<script>document.documentElement.classList.add('js')</script>
</head>
<body>
<a class="skip" href="#main">본문으로 건너뛰기</a>`;

/* ── 상단 바 ── */
const nav = `
<nav class="bar" aria-label="주요 메뉴">
  <div class="bar-in">
    <a class="logo" href="#top"><b>박세준</b><span>PORTFOLIO</span></a>
    <ul>
      <li><a href="#projects">프로젝트</a></li>
      <li class="opt"><a href="#how">일하는 법</a></li>
      <li><a href="#awards">수상</a></li>
      <li><a href="#works">작품</a></li>
      <li><a class="hot" href="#contact">연락</a></li>
    </ul>
  </div>
</nav>`;

/* ── 히어로 ── */
const heroHtml = `
<header class="hero speed" id="top">
  <div class="hero-in">
    <div class="copy">
      <p class="kicker">${esc(hero.kicker)}</p>
      <h1>${hero.lines.map((l, i) => `<span${i === hero.pop ? ' class="pop"' : ''}>${esc(l)}</span>`).join('')}</h1>
      <p class="sub">${esc(hero.sub)}</p>
    </div>
    <div class="cover" aria-hidden="true">
      <figure class="sheet s3"><img src="${img('thumb/pandaepe_01.webp')}" alt=""></figure>
      <figure class="sheet s2"><img src="${img('threebot.webp')}" alt=""></figure>
      <figure class="sheet s1"><img src="${img('thumb/co2_01.webp')}" alt=""></figure>
      <p class="bubble">ACK ≠ DONE</p>
      <p class="burst"><span>수상<br>14건</span></p>
    </div>
    <div class="act">
      <a class="btn" href="#projects"><span>${esc(hero.cta)}</span></a>
      <p class="info">${esc(hero.info)}</p>
      <p class="links"><a href="${meta.github}" target="_blank" rel="noopener">GitHub</a><a href="${meta.blog}" target="_blank" rel="noopener">기술 블로그</a></p>
    </div>
  </div>
</header>`;

/* ── 효과음 띠 ── */
const sfxRun = sfx.map((s) => `<span>${esc(s)}</span><i>★</i>`).join('');
const sfxHtml = `
<div class="sfx" role="marquee" aria-label="${esc(sfx.join(', '))}">
  <div class="sfx-track" aria-hidden="true">${sfxRun}${sfxRun}</div>
</div>`;

/* ── 섹션 머리 ── */
const secHead = (ep, title, lead) => `
    <div class="sec-head" data-pop>
      <p class="ep">${ep}</p>
      <h2>${title}</h2>
      ${lead ? `<p class="lead">${lead}</p>` : ''}
    </div>`;

/* ── 프로젝트 ── */
const card = (p, i) => `
      <article class="card file" data-pop style="--d:${i % 2}">
        <button class="file-open" type="button" data-project="${p.slug}" aria-label="${esc(p.title)} 이야기 보기">
          <span class="file-img"><img src="${img(p.img)}" alt="${esc(p.title)} 대표 이미지" loading="lazy"></span>
          ${p.badge ? `<span class="stamp">${esc(p.badge)}</span>` : ''}
        </button>
        <div class="file-body">
          <p class="tags">${p.tags.map(tag).join('')}</p>
          <h3>${esc(p.title)}</h3>
          <p class="desc">${esc(p.line)}</p>
          <button class="btn sm" type="button" data-project="${p.slug}"><span>이야기 보기</span></button>
          <p class="info">${esc(p.info)}</p>
        </div>
      </article>`;

const moreCard = (m) => `
      <article class="mini" data-pop>
        ${m.img ? `<img src="${img(m.img)}" alt="" loading="lazy">` : ''}
        <div>
          <p class="tags">${m.tags.map((t) => tag([t, ''])).join('')}</p>
          <h4>${esc(m.title)}</h4>
          <p>${esc(m.line)}</p>
          <p class="mini-links">${m.links.map(([t, u]) => `<a href="${u}"${ext(u)}>${esc(t)} ↗</a>`).join('')}</p>
        </div>
      </article>`;

const projectsHtml = `
  <section class="sec cyan" id="projects">
    <div class="sec-in">${secHead('EP.01', '대표 프로젝트', '카드를 누르면 문제를 어떻게 풀었는지 이어서 볼 수 있습니다.')}
      <div class="files">${projects.map(card).join('')}
      </div>
      <h3 class="more-title" data-pop>그 외 프로젝트</h3>
      <div class="minis">${more.map(moreCard).join('')}
      </div>
    </div>
  </section>`;

/* ── 프로젝트 상세(모달에 넣을 템플릿) ── */
const tpl = (p) => `
<template id="tpl-${p.slug}">
  <header class="m-head">
    <p class="kicker sm">${esc(p.kicker)}</p>
    <h2 id="m-title">${esc(p.title)}</h2>
    <p class="m-headline">${esc(p.headline)}</p>
  </header>
  <figure class="m-hero"><img src="${img(p.img)}" alt="${esc(p.title)}"></figure>
  <dl class="m-meta">${p.meta.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
  <ul class="m-kpis">${p.kpis.map(([v, l]) => `<li><b>${esc(v)}</b><span>${esc(l)}</span></li>`).join('')}</ul>
  <ol class="m-story">${p.story.map(([t, d]) => `<li><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join('')}</ol>
  ${p.gallery ? `<div class="m-gallery">${p.gallery.map(([f, c]) => `<figure><img src="${img(f)}" alt="${esc(c)}" loading="lazy"><figcaption>${esc(c)}</figcaption></figure>`).join('')}</div>` : ''}
  <p class="m-links">${p.links.map(([t, u]) => `<a class="btn xs" href="${u}"${ext(u)}><span>${esc(t)} ↗</span></a>`).join('')}</p>
</template>`;

/* ── 일하는 법 ── */
const howHtml = `
  <section class="sec" id="how">
    <div class="sec-in">${secHead('EP.02', '문제를 푸는 순서', '증상 → 원인 → 구조 → 기준 → 검증 → 반복 → 기록 → 번역')}
      <ol class="map">${steps.map(([t, d, tg], i) => `
        <li data-pop style="--d:${i % 4}"><span class="fmt${tg[1] ? ' ' + tg[1] : ''}">${esc(tg[0])}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join('')}
      </ol>
    </div>
  </section>`;

/* ── 수상 ── */
const RANK = Object.keys(GRADE);
const counts = Object.entries(awards.reduce((o, a) => ((o[a[1]] = (o[a[1]] || 0) + 1), o), {}))
  .sort(([a], [b]) => (RANK.indexOf(a) + 1 || 99) - (RANK.indexOf(b) + 1 || 99));
const grand = awards.filter((a) => a[1] === '대상');
const rest = awards.filter((a) => a[1] !== '대상');
const awardsHtml = `
  <section class="sec ink" id="awards">
    <div class="sec-in">${secHead('EP.03', '상 받은 기록', '')}
      <div class="tally" data-pop>
        <p class="tally-n"><b>${awards.length}</b>건</p>
        <ul>${counts.map(([g, n]) => `<li class="${GRADE[g] || 'w'}">${esc(g)} <b>${n}</b></li>`).join('')}</ul>
      </div>
      <div class="grand">${grand.map((a, i) => `
        <article class="trophy" data-pop style="--d:${i}">
          <p class="burst sm"><span>대상</span></p>
          <p class="t-date">${esc(a[0])}</p>
          <h3>${esc(a[2])}</h3>
        </article>`).join('')}
      </div>
      <ul class="tickets">${rest.map((a, i) => `
        <li data-pop style="--d:${i % 3}"><span class="grade ${GRADE[a[1]] || 'w'}">${esc(a[1])}</span><b>${esc(a[2])}</b>${a[0] ? `<time>${esc(a[0])}</time>` : ''}</li>`).join('')}
      </ul>
    </div>
  </section>`;

/* ── 작품 ── */
const SHOW = 8;
const shapeOf = (ratio) => {
  const [a, b] = String(ratio || '1/1').split('/').map(Number);
  const r = a / (b || 1);
  return r < 0.62 ? 'k-tall' : r < 0.9 ? 'k-port' : r > 1.25 ? 'k-wide' : 'k-sq';
};
const panel = (w, i) => `
        <li class="panel ${shapeOf(w.ratio)}${i >= SHOW ? ' more-item' : ''}" data-pop${i >= SHOW ? ' hidden' : ''}>
          <button type="button" data-work="${w.id}" aria-label="${esc(w.title)} 크게 보기">
            <img src="${img('thumb/' + w.imgs[0])}" alt="${esc(w.title)}" loading="lazy">
            ${w.award ? `<span class="grade ${GRADE[w.award] || 'w'}">${esc(w.award)}</span>` : ''}
            ${w.link ? '<span class="play" aria-hidden="true">▶</span>' : ''}
            <span class="cap"><b>${esc(w.title)}</b><small>${esc(w.contest)}</small></span>
          </button>
        </li>`;
const worksHtml = `
  <section class="sec dots" id="works">
    <div class="sec-in">${secHead('EP.04', '만든 것들', '콘셉트 · 대사 · 규격은 직접 정하고 이미지는 AI로, CAD 도면은 계산값과 대조해 그렸습니다. 그림을 누르면 크게 볼 수 있습니다.')}
      <ul class="panels">${works.map(panel).join('')}
      </ul>
      ${works.length > SHOW ? `<p class="center"><button class="btn sm ghost" type="button" id="more-works"><span>작품 ${works.length - SHOW}개 더 보기</span></button></p>` : ''}
    </div>
  </section>`;

/* ── 도구 ── */
const toolsHtml = `
  <section class="sec" id="tools">
    <div class="sec-in">${secHead('EP.05', '쓰는 도구', '')}
      <div class="shelf">${stack.map(([k, items], i) => `
        <div class="shelf-row" data-pop style="--d:${i % 3}"><h3>${esc(k)}</h3><p>${items.map((t) => `<span>${esc(t)}</span>`).join('')}</p></div>`).join('')}
      </div>
    </div>
  </section>`;

/* ── 연락 ── */
const contactHtml = `
<footer class="contact speed" id="contact">
  <div class="contact-in">
    <div class="profile card" data-pop>
      <p class="kicker sm">작가 소개</p>
      <h2>${esc(author.name)}</h2>
      <dl>${author.rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
      <ul class="rules">${author.principles.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
    </div>
    <div class="call" data-pop>
      <p class="tbc">다음 화에 계속</p>
      <h2>다음 화는,<br><span class="pop">같이.</span></h2>
      <p class="sub">채용 · 협업 문의는 메일로 편하게 연락 주세요.</p>
      <a class="btn" href="mailto:${meta.email}"><span>메일 보내기</span></a>
      <p class="info">${esc(meta.email)}</p>
      <p class="links"><a href="${meta.github}" target="_blank" rel="noopener">GitHub</a><a href="${meta.blog}" target="_blank" rel="noopener">기술 블로그</a><a href="${meta.motion}" target="_blank" rel="noopener">모션 포트폴리오</a></p>
    </div>
  </div>
  <p class="copy-line">© 2026 박세준</p>
</footer>`;

/* ── 대화상자 ── */
const dialogs = `
<dialog class="modal" id="pmodal" aria-labelledby="m-title">
  <div class="modal-box">
    <button class="close" type="button" data-close aria-label="닫기"><span>닫기 ✕</span></button>
    <div class="modal-body" id="pmodal-body"></div>
  </div>
</dialog>
<dialog class="lb" id="lightbox" aria-label="작품 크게 보기">
  <div class="lb-box">
    <button class="close" type="button" data-close aria-label="닫기"><span>닫기 ✕</span></button>
    <div class="lb-stage"><img id="lb-img" alt=""><button class="lb-nav prev" type="button" aria-label="이전 그림">◀</button><button class="lb-nav next" type="button" aria-label="다음 그림">▶</button></div>
    <div class="lb-info">
      <p class="lb-count" id="lb-count"></p>
      <h3 id="lb-title"></h3>
      <p class="lb-contest" id="lb-contest"></p>
      <p class="lb-desc" id="lb-desc"></p>
      <p id="lb-link"></p>
    </div>
  </div>
</dialog>
<script type="application/json" id="works-data">${JSON.stringify(works.map((w) => ({ id: w.id, title: w.title, contest: w.contest, award: w.award, desc: w.desc, imgs: w.imgs, link: w.link || '' }))).replace(/</g, '\\u003c')}</script>
<script src="main.js" defer></script>
</body>
</html>
`;

const html = [head, nav, heroHtml, sfxHtml, '<main id="main">', projectsHtml, howHtml, awardsHtml, worksHtml, toolsHtml, '</main>', contactHtml, projects.map(tpl).join(''), dialogs].join('\n');
fs.writeFileSync(new URL('./index.html', import.meta.url), html);
console.log(`index.html ${(html.length / 1024).toFixed(1)} KB · 프로젝트 ${projects.length} · 작품 ${works.length} · 수상 ${awards.length}`);
