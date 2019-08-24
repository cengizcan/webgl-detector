# WebGL Detector

[![dependencies Status](https://david-dm.org/cengizcan/webgl-detector.svg)](https://david-dm.org/cengizcan/webgl-detector) [![devDependencies Status](https://david-dm.org/cengizcan/webgl-detector/dev-status.svg)](https://david-dm.org/flexdinesh/npm-module-boilerplate?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Test & mock friendly WebGL detection utility.

**Install**
```
npm install --save webgl-detector
```
**Usage**
```javascript
import { isWebGLSupported } from 'webgl-detector';

if (isWebGLSupported()){
  // WebGL is supported!
}
```
**Example in React**

Suppose we have a component named `My3DAnimation` that requires WebGL:
```javascript
import React from 'react';
import { isWebGLSupported } from 'webgl-detector';

import My3DAnimation from '../My3DAnimation';

const AnimationContainer = ({ foo, bar }) => (
  <div>
    {isWebGLSupported() ? (
      <My3DAnimation foo={foo} bar={bar} />
      ) : (
      <p>WebGL is not supported</p>
      )}
  </div>
);
export default AnimationContainer;
```
# License

MIT © Cengiz Can
