'use client';

import { useRef, useEffect, type RefObject } from 'react';

interface ScrollRevealOptions {
  /** Percentage of element visible before triggering (0–1) */
  threshold?: number;
  /** IntersectionObserver rootMargin */
  rootMargin?: string;
}

// ─── Single Element ─────────────────────────────────────────────

/**
 * Observes a single element and adds the `revealed` class
 * when it enters the viewport. Unobserves after first trigger.
 */
export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {},
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const { threshold = 0.15, rootMargin = '0px 0px -80px 0px' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}

// ─── Children of a Container ────────────────────────────────────

/**
 * Observes every child with `[data-reveal]` inside the container.
 * Each child independently gets the `revealed` class when visible.
 */
export function useScrollRevealChildren<T extends HTMLElement>(
  options: ScrollRevealOptions = {},
): RefObject<T | null> {
  const containerRef = useRef<T>(null);
  const { threshold = 0.15, rootMargin = '0px 0px -80px 0px' } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin },
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return containerRef;
}
