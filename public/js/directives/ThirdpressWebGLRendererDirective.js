angular.module('Thirdpress').directive(
    'thirdpressCanvas',
    function () {
      return {
        restrict: 'A',
        controller: 'ThirdpressWebGLRendererController'
      };
    }
  );