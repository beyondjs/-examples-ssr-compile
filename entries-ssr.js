define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/react-widgets/page", "@beyond-js/widgets/controller", "@beyond-examples/ssr/store-entries", "react@18.2.0", "@beyond-js/kernel/styles"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Controller = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-examples/ssr/entries-ssr",
    "bundle": "widget"
  }, __url).package();

  ;
  externals.register(new Map([["react", dependency_5]]));

  __pkg.dependencies.update(new Set(["@beyond-examples/ssr/store-entries"]));

  brequire('@beyond-js/widgets/render').widgets.register([{
    "name": "entries-ssr-page",
    "id": "@beyond-examples/ssr/entries-ssr",
    "is": "page",
    "route": "/entries-ssr"
  }]);
  brequire('@beyond-js/kernel/styles').styles.register('@beyond-examples/ssr/entries-ssr');
  const ims = new Map();
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
    hash: 463643727,
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
        return React.createElement("div", null, list);
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "Controller",
    "name": "Controller"
  }];
  let Controller; // Module exports

  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUE7O01BRUE7O01BQ0E7TUFFTzs7O01BQVUsTUFDWEEsVUFEVyxTQUNRQywrQkFEUixDQUNpQztRQUNwQyxJQUFOQyxNQUFNO1VBQ04sT0FBT0MsY0FBUDtRQUNIOztRQUVEQyxXQUFXO1VBQ1AsT0FBTyxJQUFJQyxtQkFBSixFQUFQO1FBQ0g7O01BUDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DTmxEOztNQUdBLE1BQU07UUFBQ0M7TUFBRCxJQUFhQyxLQUFuQjtNQU1BLElBQUlDLGFBQWEsR0FBRyxDQUFwQjs7TUFFYyxTQUFVTixNQUFWLENBQWlCO1FBQUNPLEtBQUssRUFBRUM7TUFBUixDQUFqQixFQUEyQztRQUNyRCxNQUFNLEdBQUdDLE1BQUgsSUFBYUwsUUFBUSxDQUFDRSxhQUFhLEVBQWQsQ0FBM0I7UUFDQUUsU0FBUyxDQUFDRSxFQUFWRixDQUFhLFFBQWJBLEVBQXVCLE1BQU1DLE1BQU0sQ0FBQ0gsYUFBYSxFQUFkLENBQW5DRTtRQUVBLElBQUksQ0FBQ0EsU0FBUyxFQUFFRyxNQUFoQixFQUF3QixPQUFPTix1Q0FBUDtRQUV4QixNQUFNTyxJQUFJLEdBQUcsQ0FBQyxHQUFHSixTQUFTLENBQUNLLEtBQVZMLENBQWdCTSxNQUFoQk4sRUFBSixFQUE4Qk8sR0FBOUIsQ0FBa0MsQ0FBQztVQUFDQyxFQUFEO1VBQUtDO1FBQUwsQ0FBRCxLQUFnQlo7VUFBS2EsR0FBRyxFQUFFRjtRQUFWWCxHQUFlVyxFQUFmWCxRQUFxQlksSUFBckJaLENBQWxELENBQWI7UUFFQSxPQUNJQSxpQ0FBTU8sSUFBTlAsQ0FESjtNQUdIIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZSIsInVzZVN0YXRlIiwiUmVhY3QiLCJhdXRvaW5jcmVtZW50Iiwic3RvcmUiLCJjb21wYW5pZXMiLCJjaGFuZ2UiLCJvbiIsImxvYWRlZCIsImxpc3QiLCJ2YWx1ZSIsInZhbHVlcyIsIm1hcCIsImlkIiwibmFtZSIsImtleSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsic3NyL21vZHVsZXMvc3NyL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwic3NyL21vZHVsZXMvc3NyL3dpZGdldC90cy9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19