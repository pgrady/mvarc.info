'use strict';

angular
  .module('mvarcInfo')
  .factory('mvarcLoader', function ($log, $q) {

    AWS.config.region = 'us-east-1'; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:14f52e55-aad9-4992-b555-72185761caaf'
    });

    var s3 = new AWS.S3({apiVersion: '2006-03-01', sslEnabled: false});

    function loadMVARC() {
      return new $q(function (resolve, reject) {
        s3.getObject({Bucket: 'mvarc.info.data', Key: 'data.json'}, function (err, result) {
          if (err) {
            $log.error(err, err.stack);
            reject(err);
          } else {
            $log.info(result.Body.toString());
            resolve(result.Body.toString());
          }
        });

      });

    }

    return {
      loadMVARC: loadMVARC
    };

  });



















