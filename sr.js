System.register(["@beyond-js/widgets@0.1.0/render", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/react-widgets@18.20.1/page", "react@18.2.0", "@beyond-js/kernel@0.1.0/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;

  _export("Controller", void 0);

  return {
    setters: [function (_beyondJsWidgets010Render) {
      dependency_0 = _beyondJsWidgets010Render;
    }, function (_beyondJsKernel010Bundle) {
      dependency_1 = _beyondJsKernel010Bundle;
    }, function (_beyondJsReactWidgets18201Page) {
      dependency_2 = _beyondJsReactWidgets18201Page;
    }, function (_react) {
      dependency_3 = _react;
    }, function (_beyondJsKernel010Styles) {
      dependency_4 = _beyondJsKernel010Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["cheerio", "1.0.0-rc.12"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/backend", "0.1.0"], ["@beyond-js/ssr", "0.1.0"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@beyond-examples/ssr", "0.0.1"], ["@beyond-examples/ssr", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };

      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-examples/ssr@0.0.1/sr"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;

      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);

      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "sr-page",
        "vspecifier": "@beyond-examples/ssr@0.0.1/sr",
        "is": "page",
        "render": {
          "csr": false,
          "sr": ["/page/test", "/page/example"]
        },
        "route": "/page/${entry}"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond-examples/ssr@0.0.1/sr');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 2940256921,
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
              return _views.Page;
            }

          }

          exports.Controller = Controller;
        }
      });
      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2824734992,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Page = Page;

          var React = require("react");

          function Page(props) {
            const entry = props.uri.vars.get('entry');
            return React.createElement("div", {
              className: "page-container"
            }, React.createElement("h2", null, "Im a page with static rendering."), entry && `URL parameter: ${entry}`);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }];

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBOztVQUNBO1VBRU87OztVQUFVLE1BQ1hBLFVBRFcsU0FDUUMsK0JBRFIsQ0FDaUM7WUFDcEMsSUFBTkMsTUFBTTtjQUNOLE9BQU9DLFdBQVA7WUFDSDs7VUFINkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNKbEQ7O1VBRU0sU0FBVUEsSUFBVixDQUFlQyxLQUFmLEVBQW9CO1lBQ3RCLE1BQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxHQUFORixDQUFVRyxJQUFWSCxDQUFlSSxHQUFmSixDQUFtQixPQUFuQkEsQ0FBZDtZQUVBLE9BQ0lLO2NBQUtDLFNBQVMsRUFBQztZQUFmRCxHQUNJQSxtRUFESkEsRUFJS0osS0FBSyxJQUFJLGtCQUFrQkEsS0FBSyxFQUpyQ0ksQ0FESjtVQVFIIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwicHJvcHMiLCJlbnRyeSIsInVyaSIsInZhcnMiLCJnZXQiLCJSZWFjdCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsicHJvamVjdC9tb2R1bGVzL3NyL3RzL2NvbnRyb2xsZXIudHMiLCJwcm9qZWN0L21vZHVsZXMvc3IvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=