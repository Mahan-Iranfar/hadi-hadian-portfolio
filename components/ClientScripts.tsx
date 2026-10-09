'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    /* ============ MOBILE MENU (SLIDE-IN PANEL) ============ */
    const burger = document.getElementById('burger');
    const navList = document.getElementById('navList');
    const navBackdrop = document.getElementById('navBackdrop');

    if (!burger || !navList || !navBackdrop) return;

    let savedScrollY = 0;

    const lockScroll = () => {
      savedScrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    };
    const unlockScroll = () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, savedScrollY);
    };

    const openMenu = () => {
      burger.classList.add('open');
      navList.classList.add('open');
      navBackdrop.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
      lockScroll();
    };
    const closeMenu = () => {
      if (!navList.classList.contains('open')) return;
      burger.classList.remove('open');
      navList.classList.remove('open');
      navBackdrop.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      unlockScroll();
    };
    const toggleMenu = () => {
      navList.classList.contains('open') ? closeMenu() : openMenu();
    };

    burger.addEventListener('click', toggleMenu);
    navBackdrop.addEventListener('click', closeMenu);

    const navAnchors = navList.querySelectorAll('a');
    const handleAnchor = () => closeMenu();
    navAnchors.forEach((link) => link.addEventListener('click', handleAnchor));

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKey);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth > 980) closeMenu();
      }, 150);
    };
    window.addEventListener('resize', onResize);

    /* ============ HEADER SCROLL STATE ============ */
    const header = document.getElementById('header');
    const onScroll = () => {
      if (header) header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ============ REVEAL ON SCROLL ============ */
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    /* ============ ACTIVE NAV LINK ============ */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id;
            navLinks.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === '#' + id);
            });
          }
        });
      },
      { threshold: 0.35, rootMargin: '-80px 0px -55% 0px' }
    );
    sections.forEach((s) => navObserver.observe(s));

    /* ============ STAT COUNTERS ============ */
    const faDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const toFa = (n: number | string) =>
      String(n).replace(/\d/g, (d) => faDigits[parseInt(d, 10)]);

    const counters = document.querySelectorAll<HTMLElement>('[data-count]');
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseInt(el.dataset.count || '0', 10);
          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = toFa(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => counterObserver.observe(c));

    /* ============ CLEANUP ============ */
    return () => {
      burger.removeEventListener('click', toggleMenu);
      navBackdrop.removeEventListener('click', closeMenu);
      navAnchors.forEach((link) => link.removeEventListener('click', handleAnchor));
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      revealObserver.disconnect();
      navObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return null;
}