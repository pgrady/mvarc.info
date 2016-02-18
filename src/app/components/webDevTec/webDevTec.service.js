(function() {
  'use strict';

  angular
      .module('mvarcInfo')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec() {
    var data = [

      {
        "title": "Testing March 12, 2016",
        "url": "https://www.google.com/maps/place/First+Christian+Church+of+Alexandria/",
        "url_label": "Location on Google Maps",
        "description": "Testing starts at 9:30 am at First Christian Church, King Street, Alexandria",
        "logo": "LarcVEC175.png",
        "rank": 1
      }, {
        "title": "Testing April 9, 2016",
        "url": "https://www.google.com/maps/place/First+Christian+Church+of+Alexandria/",
        "url_label": "Location on Google Maps",
        "description": "Testing starts at 9:30 am at First Christian Church, King Street, Alexandria",
        "logo": "LarcVEC175.png",
        "rank": 2
      }, {
        "title": "Mount Vernon ARC",
        "url": "http://mvarc.org",
        "url_label": "Club Web Site",
        "description": "In and around George Washington's Mount Vernon Estate",
        "logo": "node-sass.png",
        "rank": 3
      }
    ];

    this.getTec = getTec;

    function getTec() {
      return data;
    }
  }

})();
