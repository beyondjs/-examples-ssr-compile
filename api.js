System.register(["@beyond-js/kernel@0.1.0/bundle"], function (_export, _context) {
  "use strict";

  var dependency_0, bimport, __Bundle, __pkg, ims, Entries, __beyond_pkg, hmr;

  _export("Entries", void 0);

  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["cheerio", "1.0.0-rc.12"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/backend", "0.1.0"], ["@beyond-js/ssr", "0.1.0"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@beyond-examples/ssr", "0.0.1"], ["@beyond-examples/ssr", "0.0.1"]]);
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
        hash: 4264566612,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Entries = void 0;
          /*bundle*/

          class Entries {
            async fetch() {
              await new Promise(resolve => setTimeout(resolve, 2000));
              return [{
                id: 1,
                name: 'Argentina'
              }, {
                id: 2,
                name: 'Brasil'
              }, {
                id: 3,
                name: 'Ecuador'
              }, {
                id: 4,
                name: 'Uruguay'
              }];
            }

          }

          exports.Entries = Entries;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./index",
        "from": "Entries",
        "name": "Entries"
      }];

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Entries') && _export("Entries", Entries = require ? require('./index').Entries : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBTzs7VUFBVSxNQUNYQSxPQURXLENBQ0o7WUFDRSxNQUFMQyxLQUFLO2NBQ1AsTUFBTSxJQUFJQyxPQUFKLENBQVlDLE9BQU8sSUFBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVUsSUFBVixDQUFqQyxDQUFOO2NBRUEsT0FBTyxDQUNIO2dCQUNJRSxFQUFFLEVBQUUsQ0FEUjtnQkFFSUMsSUFBSSxFQUFFO2NBRlYsQ0FERyxFQUtIO2dCQUNJRCxFQUFFLEVBQUUsQ0FEUjtnQkFFSUMsSUFBSSxFQUFFO2NBRlYsQ0FMRyxFQVNIO2dCQUNJRCxFQUFFLEVBQUUsQ0FEUjtnQkFFSUMsSUFBSSxFQUFFO2NBRlYsQ0FURyxFQWFIO2dCQUNJRCxFQUFFLEVBQUUsQ0FEUjtnQkFFSUMsSUFBSSxFQUFFO2NBRlYsQ0FiRyxDQUFQO1lBa0JIOztVQXRCUSIsIm5hbWVzIjpbIkVudHJpZXMiLCJmZXRjaCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImlkIiwibmFtZSJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsicHJvamVjdC9tb2R1bGVzL2FwaS90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==