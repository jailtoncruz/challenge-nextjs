import "@testing-library/jest-dom";
import { vi, beforeEach } from "vitest";

class IntersectionObserverMock {
  callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  observe = () => {
    // simula o elemento entrando em view
    this.callback(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver
    );
  };

  unobserve = vi.fn();
  disconnect = vi.fn();
}

beforeEach(() => {
  vi.clearAllMocks();
  global.IntersectionObserver =
    IntersectionObserverMock as unknown as typeof IntersectionObserver;
});
