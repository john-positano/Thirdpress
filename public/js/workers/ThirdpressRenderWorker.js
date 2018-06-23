importScripts(
  '/wp-content/plugins/thirdpress/node_modules/promise-polyfill/dist/polyfill.js',
  '/wp-content/plugins/thirdpress/public/js/fetch/fetch.js',
  '/wp-content/plugins/thirdpress/vendor/components/three.js/three.js',
  '/wp-content/plugins/thirdpress/public/js/three.css3drenderer.js',
  '/wp-content/plugins/thirdpress/public/js/proxy-polyfill/proxy.min.js',
  '/wp-content/plugins/thirdpress/public/js/workers/workerRouters/ThirdpressRenderWorkerRouter.js'
);

class ThirdpressRenderWorker {
  constructor () {
    var ce = this;

    this.References = [];
    this.ThirdpressRenderWorkerRouter = new ThirdpressRenderWorkerRouter();

    this.ThirdpressRenderWorkerRouter.pushRoute('windowInit', this.windowInit);
    this.ThirdpressRenderWorkerRouter.pushRoute('canvasProxyInit', this.canvasProxyInit);
    this.ThirdpressRenderWorkerRouter.pushRoute('canvasProxyReturnEnd', this.canvasProxyReturnEnd);

    self.onmessage = function ($messageEvent) {
      ce.ThirdpressRenderWorkerRouter.route($messageEvent.data);
    }      
  }

  windowInit (_window) {
    this._window = _window;
  }

  canvasProxyInit (_canvas) {
    this._canvas = _canvas;
    this._canvasProxy = new Proxy(
      _canvas, 
      {
        get: this.proxy
      }
    );
    this._canvasProxy['a'];
  }

  canvasProxyReturnEnd ($message) {
    console.log('$message', $message);
  }

  proxy ($target, $name) {
    self.postMessage({ canvasProxy: $name });

    while (!this.references.length) {

    }

    console.log('done');
  }

  RenderWorkerInit () {
    this.Scene = new THREE.Scene();
    this.Camera = new THREE.PerspectiveCamera( 75, this._window.innerWidth / this._window.innerHeight, 0.1, 1000 );
    this.Renderer = new THREE.WebGLRenderer();
  }

  render () {}
}

self.ThirdpressRenderWorker = new ThirdpressRenderWorker();