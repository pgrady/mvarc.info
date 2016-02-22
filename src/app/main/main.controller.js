(function() {
  'use strict';

  angular
    .module('mvarcInfo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1455822847349;
    vm.showToastr = showToastr;

    vm.mvarc = null;

    webDevTec.loadMVARC().then(function(data) {
      vm.mvarc = data;
    });

    activate();

    function activate() {
      webDevTec.loadMVARC();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

  //  function getWebDevTec() {
  //    vm.awesomeThings = webDevTec.getTec();

//      angular.forEach(vm.awesomeThings, function(awesomeThing) {
//        awesomeThing.rank = Math.random();
  //      });
//    }
  }
})();
