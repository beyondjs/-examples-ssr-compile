System.register(["@beyond-js/widgets@0.1.0/render", "@beyond-js/kernel@0.1.0/bundle", "@beyond-js/react-widgets@18.20.1/page", "@beyond-js/widgets@0.1.0/controller", "@beyond-examples/ssr@0.0.1/store-entries", "react@18.2.0", "@beyond-js/kernel@0.1.0/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, bimport, __Bundle, __pkg, ims, Controller, __beyond_pkg, hmr;

  _export("Controller", void 0);

  return {
    setters: [function (_beyondJsWidgets010Render) {
      dependency_0 = _beyondJsWidgets010Render;
    }, function (_beyondJsKernel010Bundle) {
      dependency_1 = _beyondJsKernel010Bundle;
    }, function (_beyondJsReactWidgets18201Page) {
      dependency_2 = _beyondJsReactWidgets18201Page;
    }, function (_beyondJsWidgets010Controller) {
      dependency_3 = _beyondJsWidgets010Controller;
    }, function (_beyondExamplesSsr001StoreEntries) {
      dependency_4 = _beyondExamplesSsr001StoreEntries;
    }, function (_react) {
      dependency_5 = _react;
    }, function (_beyondJsKernel010Styles) {
      dependency_6 = _beyondJsKernel010Styles;
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
          "vspecifier": "@beyond-examples/ssr@0.0.1/ssr-test"
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;

      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['@beyond-js/widgets/controller', dependency_3], ['@beyond-examples/ssr/store-entries', dependency_4], ['react', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);

      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ssr-page",
        "vspecifier": "@beyond-examples/ssr@0.0.1/ssr-test",
        "is": "page",
        "render": {
          "csr": false,
          "ssr": true
        },
        "route": "/entries-ssr"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@beyond-examples/ssr@0.0.1/ssr-test');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 2811123299,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;

          var _page = require("@beyond-js/react-widgets/page");

          var _storeEntries = require("@beyond-examples/ssr/store-entries");

          var _page2 = require("./page");
          /*bundle*/


          class Controller extends _page.PageReactWidgetController {
            get Widget() {
              return _page2.default;
            }

            createStore() {
              return new _storeEntries.Store();
            }

          }

          exports.Controller = Controller;
        }
      });
      /**********************
      INTERNAL MODULE: ./page
      **********************/

      ims.set('./page', {
        hash: 1690729200,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = Widget;

          var React = require("react");

          const {
            useState
          } = React;
          let autoincrement = 0;

          function Widget({
            store: companies
          }) {
            const [, change] = useState(autoincrement++);
            companies.on('change', () => change(autoincrement++));
            if (!companies?.loaded) return React.createElement("div", null, "...");
            const list = [...companies.value.values()].map(({
              id,
              name
            }) => React.createElement("div", {
              key: id
            }, id, ": ", name));
            return React.createElement(React.Fragment, null, React.createElement("h2", null, "SSR PAGE"), React.createElement("div", null, list));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQTs7VUFFQTs7VUFDQTtVQUVPOzs7VUFBVSxNQUNYQSxVQURXLFNBQ1FDLCtCQURSLENBQ2lDO1lBQ3BDLElBQU5DLE1BQU07Y0FDTixPQUFPQyxjQUFQO1lBQ0g7O1lBRURDLFdBQVc7Y0FDUCxPQUFPLElBQUlDLG1CQUFKLEVBQVA7WUFDSDs7VUFQNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNObEQ7O1VBR0EsTUFBTTtZQUFDQztVQUFELElBQWFDLEtBQW5CO1VBTUEsSUFBSUMsYUFBYSxHQUFHLENBQXBCOztVQUVjLFNBQVVOLE1BQVYsQ0FBaUI7WUFBQ08sS0FBSyxFQUFFQztVQUFSLENBQWpCLEVBQTJDO1lBQ3JELE1BQU0sR0FBR0MsTUFBSCxJQUFhTCxRQUFRLENBQUNFLGFBQWEsRUFBZCxDQUEzQjtZQUNBRSxTQUFTLENBQUNFLEVBQVZGLENBQWEsUUFBYkEsRUFBdUIsTUFBTUMsTUFBTSxDQUFDSCxhQUFhLEVBQWQsQ0FBbkNFO1lBRUEsSUFBSSxDQUFDQSxTQUFTLEVBQUVHLE1BQWhCLEVBQXdCLE9BQU9OLHVDQUFQO1lBRXhCLE1BQU1PLElBQUksR0FBRyxDQUFDLEdBQUdKLFNBQVMsQ0FBQ0ssS0FBVkwsQ0FBZ0JNLE1BQWhCTixFQUFKLEVBQThCTyxHQUE5QixDQUFrQyxDQUFDO2NBQUNDLEVBQUQ7Y0FBS0M7WUFBTCxDQUFELEtBQWdCWjtjQUFLYSxHQUFHLEVBQUVGO1lBQVZYLEdBQWVXLEVBQWZYLFFBQXFCWSxJQUFyQlosQ0FBbEQsQ0FBYjtZQUVBLE9BQ0lBLDBDQUNJQSwyQ0FESkEsRUFFSUEsaUNBQU1PLElBQU5QLENBRkpBLENBREo7VUFNSCIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiUGFnZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmUiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiYXV0b2luY3JlbWVudCIsInN0b3JlIiwiY29tcGFuaWVzIiwiY2hhbmdlIiwib24iLCJsb2FkZWQiLCJsaXN0IiwidmFsdWUiLCJ2YWx1ZXMiLCJtYXAiLCJpZCIsIm5hbWUiLCJrZXkiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy9zc3Ivd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJwcm9qZWN0L21vZHVsZXMvc3NyL3dpZGdldC90cy9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19