export function isWebGLSupported(): boolean {
  if (window?.WebGLRenderingContext !== undefined) {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    return canvas.getContext('webgl') != null || canvas.getContext('experimental-webgl') != null;
  }
  return false;
}
export function isWebGL2Supported(): boolean {
  if (window?.WebGLRenderingContext !== undefined) {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    return canvas.getContext('webgl2') != null;
  }
  return false;
}
