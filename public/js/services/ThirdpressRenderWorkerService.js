angular.module('Thirdpress').service(
    'ThirdpressRenderWorkerService', 
    function ($log) {
      var self = this;
      this.canvas = document.createElement('canvas');

      window.RenderWorker = self.RenderWorker = new Worker('/wp-content/plugins/thirdpress/public/js/workers/ThirdpressRenderWorker.js');

      self.RenderWorker.onmessage = function ($message) {
        var $data = $message.data;
        var $dataKey = Object.keys($data).shift();
        self.RenderWorker.postMessage({'canvasProxyReturnEnd': JSON.stringify(this.canvas[$dataKey]) });
      }

      self.RenderWorker.postMessage(
        {
          'windowInit': 
          [
            {
              innerWidth: 500,
              innerHeight: 500,
              width: 500,
              height: 500
            }
          ]
        }
      );

      self.RenderWorker.postMessage(
        { 
          'canvasProxyInit':
          [
            {
              width: 500,
              height: 500
            }
          ]
        }
      );

      return self;
    }
  );