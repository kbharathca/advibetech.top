'use client';

export function useHaptic() {
  const triggerLightTap = () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(10);
      } catch (e) {
        // Ignore fallback
      }
    }
  };

  const triggerSelectionTap = () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate(18);
      } catch (e) {
        // Ignore fallback
      }
    }
  };

  const triggerSuccessHaptic = () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      try {
        navigator.vibrate([15, 60, 20]);
      } catch (e) {
        // Ignore fallback
      }
    }
  };

  return { triggerLightTap, triggerSelectionTap, triggerSuccessHaptic };
}
