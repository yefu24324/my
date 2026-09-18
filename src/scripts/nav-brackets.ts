const BRACKET_GAP_PX = 5;

type BracketTargets = {
  brackets: HTMLElement;
  left: HTMLElement;
  links: HTMLElement[];
  menu: HTMLElement;
  right: HTMLElement;
};

const reflows = new Map<HTMLElement, () => void>();

function findActiveLink(links: HTMLElement[]): HTMLElement | null {
  return links.find((link) => link.getAttribute("aria-current") === "page") ?? null;
}

function placeBrackets(root: HTMLElement, targets: BracketTargets, link: HTMLElement, animate: boolean): void {
  const { brackets, left, right } = targets;
  const rootRect = root.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();
  const leftX = linkRect.left - rootRect.left - left.offsetWidth - BRACKET_GAP_PX;
  const rightX = linkRect.right - rootRect.left + BRACKET_GAP_PX;
  // 垂直方向跟随目标链接所在行（导航换行、菜单竖向排列时也正确）
  const centerY = linkRect.top - rootRect.top + linkRect.height / 2;

  if (!animate) {
    brackets.classList.add("is-measuring");
  }

  left.style.transform = `translate3d(${leftX}px, calc(${centerY}px - 50%), 0)`;
  right.style.transform = `translate3d(${rightX}px, calc(${centerY}px - 50%), 0)`;
  brackets.classList.add("is-ready");

  if (!animate) {
    void brackets.offsetWidth;
    brackets.classList.remove("is-measuring");
  }
}

function setupNavRoot(root: HTMLElement): void {
  const menu = root.querySelector<HTMLElement>("[data-nav-menu]");
  const brackets = root.querySelector<HTMLElement>("[data-nav-brackets]");
  const left = brackets?.querySelector<HTMLElement>('[data-bracket="left"]');
  const right = brackets?.querySelector<HTMLElement>('[data-bracket="right"]');
  const links = Array.from(root.querySelectorAll<HTMLElement>("[data-nav-link]"));

  if (!menu || !brackets || !left || !right || links.length === 0) {
    return;
  }

  // 括号层是绝对定位的：容器必须是定位元素（页面缺少 CSS 时兜底，避免括号跑到别处）
  if (getComputedStyle(root).position === "static") {
    root.style.position = "relative";
  }

  const targets: BracketTargets = { brackets, left, links, menu, right };
  const firstLink = links[0];

  const place = (link: HTMLElement, animate = true): void => {
    placeBrackets(root, targets, link, animate);
  };

  const returnToActive = (): void => {
    const active = findActiveLink(links);
    if (active) {
      place(active);
    } else {
      brackets.classList.remove("is-ready");
    }
  };

  const reflow = (): void => {
    place(findActiveLink(links) ?? firstLink, false);
    if (!findActiveLink(links)) {
      brackets.classList.remove("is-ready");
    }
  };

  // 首次定位不做动画，避免从左侧滑入
  const initial = findActiveLink(links);
  place(initial ?? firstLink, false);
  if (!initial) {
    brackets.classList.remove("is-ready");
  }

  for (const link of links) {
    link.addEventListener("pointerenter", (event) => {
      // 触屏上的 pointerenter 是“点按”引起的假 hover，不移动括号
      if (event.pointerType !== "touch") {
        place(link);
      }
    });
    link.addEventListener("focus", () => place(link));
    link.addEventListener("click", () => place(link));
  }

  menu.addEventListener("pointerleave", returnToActive);
  menu.addEventListener("focusout", (event) => {
    const next = event.relatedTarget;
    if (!(next instanceof Node) || !menu.contains(next)) {
      returnToActive();
    }
  });

  reflows.set(root, reflow);
}

function setupNavBrackets(): void {
  for (const root of reflows.keys()) {
    if (!root.isConnected) {
      reflows.delete(root);
    }
  }

  for (const root of document.querySelectorAll<HTMLElement>("[data-nav-root]")) {
    if (!reflows.has(root)) {
      setupNavRoot(root);
    }
  }
}

function reflowNavBrackets(): void {
  for (const [root, reflow] of reflows) {
    if (root.isConnected) {
      reflow();
    } else {
      reflows.delete(root);
    }
  }
}

window.addEventListener("load", reflowNavBrackets, { once: true });
window.addEventListener("resize", reflowNavBrackets);
document.fonts.ready.then(reflowNavBrackets);

setupNavBrackets();
document.addEventListener("astro:page-load", setupNavBrackets);
document.addEventListener("astro:after-swap", setupNavBrackets);
