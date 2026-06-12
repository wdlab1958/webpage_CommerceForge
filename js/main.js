/* WDLAB-CommerceForge 소개 페이지 — scrollspy · reveal · counter (Forge 패밀리 공통 패턴) */
(function () {
  "use strict";

  /* ---------- Scrollspy: 현재 섹션 ↔ 사이드바 active 동기화 ---------- */
  const navItems = Array.from(document.querySelectorAll(".nav-item"));
  const sections = navItems
    .map((a) => document.getElementById(a.dataset.target))
    .filter(Boolean);

  function syncNav() {
    const y = window.scrollY + window.innerHeight * 0.32;
    let current = sections[0];
    for (const s of sections) if (s.offsetTop <= y) current = s;
    navItems.forEach((a) =>
      a.classList.toggle("active", a.dataset.target === current.id)
    );
  }
  window.addEventListener("scroll", syncNav, { passive: true });
  syncNav();

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries)
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* ---------- Hero stat counter ---------- */
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    const dur = 1100;
    const t0 = performance.now();
    function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))); // easeOutCubic
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const cio = new IntersectionObserver(
    (entries) => {
      for (const e of entries)
        if (e.isIntersecting) {
          animateCount(e.target);
          cio.unobserve(e.target);
        }
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));
})();
