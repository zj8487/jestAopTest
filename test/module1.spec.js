'use strict';

const assert = require('assert');

jest.mock('src/modules/module1');

import module from 'src/modules/module1';

describe('test.aop', () => {
  describe('test aop funtion', () => {

    it('should return ""', async () => {
      let m = new module.Module1();

      assert(typeof m.fuction2 ==='function');
      // let r2 = m.fuction2();
      // assert(r2 === 22); // not work!!!!

      assert(typeof m.fuction1 === 'function');
    });

  });

});
