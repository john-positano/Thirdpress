class ThirdpressRenderWorkerRouter {
  constructor () {
    var self = this;

    self.routes = [];
  }

  pushRoute ($route, $fn) {
    if (typeof $route !== 'string') { throw 'Parameter 1 of this.pushRoute needs to be string'; }
    if (typeof $fn !== 'function') { throw 'Parameter 2 of this.pushRoute needs to be function'; }
    var obj = {};
    obj[$route] = $fn;
    this.routes.push(obj);
  }

  route ($route) {
    var $routeKey = Object.keys($route).shift();
    var $routePayload = $route[$routeKey];

    for (var $routeObject in this.routes) {
      var $r = this.routes[$routeObject];
      var $rKey = Object.keys($r).shift();
      var $rFunction = $r[$rKey];

      if ($rKey == $routeKey) { $rFunction.apply(this, $routePayload); }
    }
  }
}