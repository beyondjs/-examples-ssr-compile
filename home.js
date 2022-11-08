System.register(["@beyond-js/widgets@0.1.0/render", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/styles", "@beyond-js/react-widgets@18.20.1/page", "react@18.2.0"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;

  _export({
    Controller: void 0,
    View: void 0
  });

  return {
    setters: [function (_beyondJsWidgets010Render) {
      dependency_0 = _beyondJsWidgets010Render;
    }, function (_beyondJsKernel010Bundle) {
      dependency_1 = _beyondJsKernel010Bundle;
    }, function (_beyondJsKernel010Styles) {
      dependency_2 = _beyondJsKernel010Styles;
    }, function (_beyondJsReactWidgets18201Page) {
      dependency_3 = _beyondJsReactWidgets18201Page;
    }, function (_react) {
      dependency_4 = _react;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["cheerio", "1.0.0-rc.12"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/backend", "0.1.0"], ["@beyond-js/ssr", "0.1.0"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@beyond-examples/ssr", "0.0.1"], ["@beyond-examples/ssr", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };

      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-examples/ssr@0.0.1/home"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;

      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-widgets/page', dependency_3], ['react', dependency_4]]);

      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "home-page",
        "vspecifier": "@beyond-examples/ssr@0.0.1/home",
        "is": "page",
        "route": "/"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond-examples/ssr@0.0.1/home');
      ims = new Map();
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

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
      };

      _export("__beyond_pkg", __beyond_pkg = __pkg);

      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);

        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());

      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBQ0E7VUFFTzs7O1VBQVUsTUFDWEEsVUFEVyxTQUNRQywrQkFEUixDQUNpQztZQUNwQyxJQUFOQyxNQUFNO2NBQ04sT0FBT0MsV0FBUDtZQUNIOztVQUg2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0psRDtVQUVPOzs7VUFBVSxTQUNSQSxJQURRLEdBQ0o7WUFDVCxPQUNJQztjQUFLQyxTQUFTLEVBQUM7WUFBZkQsR0FDSUEsd0RBQXdCQTtjQUFNQyxTQUFTLEVBQUM7WUFBaEJELEdBQXdCLFVBQXhCQSxDQUF4QkEsTUFESkEsQ0FESjtVQUtIIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiUmVhY3QiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy9ob21lL3RzL2NvbnRyb2xsZXIudHMiLCJwcm9qZWN0L21vZHVsZXMvaG9tZS90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==