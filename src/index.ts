export function isWebGLSupported(): boolean {
  if (typeof WebGLRenderingContext === 'function') {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    return canvas.getContext('webgl') != null || canvas.getContext('experimental-webgl') != null;
  }
  return false;
}
