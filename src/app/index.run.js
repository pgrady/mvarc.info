(function() {
  'use strict';

  angular
    .module('mvarcInfo')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
