importScripts(
  '/wp-content/plugins/thirdpress/node_modules/promise-polyfill/dist/polyfill.js',
  '/wp-content/plugins/thirdpress/public/js/fetch/fetch.js',
  '/wp-content/plugins/thirdpress/vendor/components/three.js/three.js',
  '/wp-content/plugins/thirdpress/public/js/three.css3drenderer.js',
  '/wp-content/plugins/thirdpress/public/js/proxy-polyfill/proxy.min.js'
);



window = new Proxy(
  {
    width: 500,
    height: 500,
    innerWidth: 500,
    innerHeight: 500
  }, 
  {
    get: function (target, name) {
      postMessage({property: name, element: 'window'});
      return target[name] ? target[name] : window;
    }
  }
);

document = new Proxy(
  {
    createElementNS: function () {},
    width: 500,
    height: 500
  }, 
  {
    get: function (target, name) {
      postMessage({property: name, element: 'document'});
      return target[name] ? target[name] : document;
    }
  }
);

canvas = new Proxy(
  {
    width: 500,
    height: 500,
    getContext: function () {
      return {
        drawingBufferWidth: 500,
        drawingBufferHeight: 500,
        canvas: canvas,
        getExtension: console.log
      }
    },
    addEventListener: function () {
      console.log('arguments', arguments);
    }
  },
  {
    get: function (target, name) {
      postMessage({property: name, element: 'canvas'});
      return target[name] ? target[name] : canvas;
    }
  }
);


self.get = function (url) {
  return fetch(
    url,
    {
      method: 'GET',
      mode: 'same-origin',
      header: new Headers({ 
        'Access-Control-Allow-Origin': '*' 
      })
    }
  );
}

self.fetch('http://localhost:10000').then(
  function (r) {
    console.log('r', r);
  }
);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({ canvas: canvas });;
renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

console.log(navigator.budget);