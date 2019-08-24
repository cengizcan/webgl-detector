export function isWebGLSupported() {
  if (typeof window !== 'undefined' && window.WebGLRenderingContext) {
    const canvas = document.createElement('canvas');
    return canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  }
  return false;
}
const webGLdetector = { isWebGLSupported };

export default webGLdetector;
