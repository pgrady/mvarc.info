(function() {
  'use strict';

  angular
      .module('mvarcInfo')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec($log) {
   // AWS.config.region = 'us-east-1'; // Region

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
        "logo": "radio-icon.png",
        "rank": 3
      }
    ];
    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:14f52e55-aad9-4992-b555-72185761caaf'
    });

    this.getTec = getTec;

    function getTec() {
      var s3 = new AWS.S3({apiVersion: '2006-03-01', sslEnabled: false});
      s3.getObject({Bucket:'mvarc.info.data',Key:'data.json'}, function(err, data){
        if (err) {
          $log.error(err, err.stack);
        } else {
          $log.info(data.Body.toString());
        }
      });

      return data;
    }
  }

})();
