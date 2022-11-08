System.register(["@beyond-js/kernel@0.1.0/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, EntriesBridge, __beyond_pkg, hmr;

  _export("EntriesBridge", void 0);

  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["react", "18.2.0"], ["react-dom", "18.2.0"], ["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["cheerio", "1.0.0-rc.12"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/backend", "0.1.0"], ["@beyond-js/ssr", "0.1.0"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@beyond-examples/ssr", "0.0.1"], ["@beyond-examples/ssr", "0.0.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };

      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-examples/ssr@0.0.1/api"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;

      __pkg.dependencies.update([]);

      ims = new Map();
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

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'EntriesBridge') && _export("EntriesBridge", EntriesBridge = require ? require('./index').EntriesBridge : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTzs7VUFBVSxNQUNYQSxhQURXLENBQ0U7WUFDSixNQUFMQyxLQUFLO2NBQ1AsTUFBTSxJQUFJQyxPQUFKLENBQVlDLE9BQU8sSUFBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVUsSUFBVixDQUFqQyxDQUFOO2NBRUEsT0FBTyxDQUFDO2dCQUNKRSxFQUFFLEVBQUUsQ0FEQTtnQkFFSkMsSUFBSSxFQUFFO2NBRkYsQ0FBRCxFQUdKO2dCQUNDRCxFQUFFLEVBQUUsQ0FETDtnQkFFQ0MsSUFBSSxFQUFFO2NBRlAsQ0FISSxDQUFQO1lBT0g7O1VBWGMiLCJuYW1lcyI6WyJFbnRyaWVzQnJpZGdlIiwiZmV0Y2giLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJpZCIsIm5hbWUiXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy9hcGkvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=