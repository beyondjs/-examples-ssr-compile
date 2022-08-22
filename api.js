define(["exports", "module", "@beyond-js/kernel/bundle"], function (_exports, _amd_module, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.EntriesBridge = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-examples/ssr/api",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /***********************
  INTERNAL MODULE: ./index
  ***********************/

  ims.set('./index', {
    hash: 2199010481,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.EntriesBridge = void 0;
      /*bundle*/

      class EntriesBridge {
        async fetch() {
          await new Promise(resolve => setTimeout(resolve, 1000));
          return [{
            id: 1,
            name: 'Pepsi'
          }, {
            id: 2,
            name: 'Coca Cola'
          }];
        }

      }

      exports.EntriesBridge = EntriesBridge;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./index",
    "from": "EntriesBridge",
    "name": "EntriesBridge"
  }];
  let EntriesBridge; // Module exports

  _exports.EntriesBridge = EntriesBridge;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'EntriesBridge') && (_exports.EntriesBridge = EntriesBridge = require ? require('./index').EntriesBridge : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUFPOztNQUFVLE1BQ1hBLGFBRFcsQ0FDRTtRQUNKLE1BQUxDLEtBQUs7VUFDUCxNQUFNLElBQUlDLE9BQUosQ0FBWUMsT0FBTyxJQUFJQyxVQUFVLENBQUNELE9BQUQsRUFBVSxJQUFWLENBQWpDLENBQU47VUFFQSxPQUFPLENBQUM7WUFDSkUsRUFBRSxFQUFFLENBREE7WUFFSkMsSUFBSSxFQUFFO1VBRkYsQ0FBRCxFQUdKO1lBQ0NELEVBQUUsRUFBRSxDQURMO1lBRUNDLElBQUksRUFBRTtVQUZQLENBSEksQ0FBUDtRQU9IOztNQVhjIiwibmFtZXMiOlsiRW50cmllc0JyaWRnZSIsImZldGNoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiaWQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJzc3IvbW9kdWxlcy9hcGkvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=