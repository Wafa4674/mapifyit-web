/**
 * devToolsGuard.ts
 * ------------------------------------------------------------
 * Provides `initDevToolsGuard` which:
 *   1. Silences console.log / error / warn / info.
 *   2. Blocks common DevTools keyboard shortcuts (F12, Ctrl+Shift+I/J, etc.).
 *   3. Blocks right-click context menu.
 *   4. Detects DevTools via viewport size change (no timing / no debugger).
 *   5. Shows a confirm dialog on detection; cancelling redirects to home.
 * ------------------------------------------------------------
 */
export function initDevToolsGuard() {

  // ---- 1️⃣ Silence console output ----
  const noop = () => {};
  console.log   = noop;
  console.error = noop;
  console.warn  = noop;
  console.info  = noop;

  // ---- 2️⃣ Block right-click context menu ----
  const blockCtx = (e: Event) => { e.preventDefault(); };
  window.addEventListener('contextmenu', blockCtx, true);
  document.addEventListener('contextmenu', blockCtx, true);

  // ---- 3️⃣ Block keyboard shortcuts that open DevTools ----
  const blockedKeys: Array<{
    key: string;
    ctrl?: boolean;
    shift?: boolean;
    alt?: boolean;
    meta?: boolean;
  }> = [
    { key: 'F12' },
    { key: 'I', ctrl: true, shift: true },
    { key: 'J', ctrl: true, shift: true },
    { key: 'C', ctrl: true, shift: true },
    { key: 'U', ctrl: true },
    { key: 'K', ctrl: true, shift: true },
    { key: 'I', meta: true, alt: true }, // macOS ⌘+⌥+I
  ];

  function isBlocked(e: KeyboardEvent): boolean {
    const k = e.key.toUpperCase();
    return blockedKeys.some(rule => {
      if (rule.key !== k)                                        return false;
      if (rule.ctrl  !== undefined && rule.ctrl  !== e.ctrlKey) return false;
      if (rule.shift !== undefined && rule.shift !== e.shiftKey) return false;
      if (rule.alt   !== undefined && rule.alt   !== e.altKey)   return false;
      if (rule.meta  !== undefined && rule.meta  !== e.metaKey)  return false;
      return true;
    });
  }

  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (isBlocked(e)) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  // ---- 4️⃣ Detect DevTools via viewport size change ----
  // When DevTools is docked (side or bottom), innerWidth/innerHeight shrinks
  // while outerWidth/outerHeight stays the same → difference exceeds threshold.
  let accessGranted = false;
  let dialogOpen    = false;

  function checkAndReact() {
    if (accessGranted || dialogOpen) return;

    const widthDiff  = window.outerWidth  - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    const devtoolsOpen = widthDiff > 160 || heightDiff > 160;

    if (!devtoolsOpen) return;

    // DevTools detected – show confirm dialog
    dialogOpen = true;
    const proceed = window.confirm(
      'DevTools has been detected.\nDo you want to continue on this page?'
    );
    dialogOpen = false;

    if (proceed) {
      // Developer confirmed – allow page to stay
      accessGranted = true;
    } else {
      // Cancelled – redirect to home
      window.location.replace('/');
    }
  }

  const guardTimer = setInterval(checkAndReact, 600);

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    clearInterval(guardTimer);
  });
}
