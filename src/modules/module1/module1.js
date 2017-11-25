'use strict';

import aop from './aop';

export default class Module1 {

  @aop.testAop()
  async fuction1 (){
    return 1;
  }

  async fuction2() {
    return 2;
  }

}