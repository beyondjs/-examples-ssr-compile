define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/styles", "@beyond-js/react-widgets/page", "react@18.2.0"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.View = _exports.Controller = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-examples/ssr/home",
    "bundle": "widget"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_4]]));
  brequire('@beyond-js/widgets/render').widgets.register([{
    "name": "home-page",
    "id": "@beyond-examples/ssr/home",
    "is": "page",
    "route": "/"
  }]);
  brequire('@beyond-js/kernel/styles').styles.register('@beyond-examples/ssr/home');
  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 3638196390,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _page = require("@beyond-js/react-widgets/page");

      var _views = require("./views");
      /*bundle*/


      class Controller extends _page.PageReactWidgetController {
        get Widget() {
          return _views.View;
        }

      }

      exports.Controller = Controller;
    }
  });
  /*****************************
  INTERNAL MODULE: ./views/index
  *****************************/

  ims.set('./views/index', {
    hash: 3278817643,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.View = View;

      var React = require("react");
      /*bundle*/


      function View() {
        return React.createElement("div", {
          className: "page__container"
        }, React.createElement("h1", null, "My first page using ", React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"), "!"));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "Controller",
    "name": "Controller"
  }, {
    "im": "./views/index",
    "from": "View",
    "name": "View"
  }];
  let Controller, View; // Module exports

  _exports.View = View;
  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
    (require || prop === 'View') && (_exports.View = View = require ? require('./views/index').View : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BQ0E7TUFFTzs7O01BQVUsTUFDWEEsVUFEVyxTQUNRQywrQkFEUixDQUNpQztRQUNwQyxJQUFOQyxNQUFNO1VBQ04sT0FBT0MsV0FBUDtRQUNIOztNQUg2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0psRDtNQUVPOzs7TUFBVSxTQUNSQSxJQURRLEdBQ0o7UUFDVCxPQUNJQztVQUFLQyxTQUFTLEVBQUM7UUFBZkQsR0FDSUEsd0RBQXdCQTtVQUFNQyxTQUFTLEVBQUM7UUFBaEJELEdBQXdCLFVBQXhCQSxDQUF4QkEsTUFESkEsQ0FESjtNQUtIIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiUmVhY3QiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInNzci9tb2R1bGVzL2hvbWUvdHMvY29udHJvbGxlci50cyIsInNzci9tb2R1bGVzL2hvbWUvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=