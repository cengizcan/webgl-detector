export function isWebGLSupported(): boolean {
  if (WebGLRenderingContext != null) {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    return canvas.getContext('webgl') != null || canvas.getContext('experimental-webgl') != null;
  }
  return false;
}
