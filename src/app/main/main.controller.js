'use strict';

angular
  .module('mvarcInfo')
  .controller('MainController', function ($timeout, mvarcLoader, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1455822847349;
    vm.showToastr = showToastr;

    vm.mvarc = null;


    mvarcLoader.loadMVARC().then(function (data) {
      console.log('I got back real data!!!');
      vm.mvarc = data;
    });

    activate();

    function activate() {
      $timeout(function () {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

      function getWebDevTec() {
        vm.awesomeThings = vm.mvarc;

//      angular.forEach(vm.awesomeThings, function(awesomeThing) {
//        awesomeThing.rank = Math.random();
//          });
    }
  });


