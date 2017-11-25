'use strict';


const _converter = (promiseCaller, options = {}) => {
  return (...args) => {
    return promiseCaller.apply(null, args);
  };

};


export default function convertError (options) {
  return (target, key, descriptor) => {
    return {
      configurable: true,
      enumerable: true,
      get () {
        let classMethod = (typeof descriptor.get !== 'function') ? descriptor.value : descriptor.get.call(this);

        if (typeof classMethod !== 'function') {
          throw new Error(`@convertError decorator can only be applied to methods not: ${typeof classMethod}`);
        }

        let bindedClassMethod = classMethod.bind(this);
        let callFn = _converter(bindedClassMethod, options);

        Object.defineProperty(this, key, {
          value: callFn,
          configurable: true,
          writable: true
        });

        return callFn;
      }

    };

  };

}
