System.register(["@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/core", "@beyond-js/widgets@0.1.0/controller", "@beyond-examples/ssr@0.0.1/api"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, Store, __beyond_pkg, hmr;

  _export("Store", void 0);

  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_beyondJsKernel010Core) {
      dependency_1 = _beyondJsKernel010Core;
    }, function (_beyondJsWidgets010Controller) {
      dependency_2 = _beyondJsWidgets010Controller;
    }, function (_beyondExamplesSsr001Api) {
      dependency_3 = _beyondExamplesSsr001Api;
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
          "vspecifier": "@beyond-examples/ssr@0.0.1/store-entries"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;

      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/widgets/controller', dependency_2], ['@beyond-examples/ssr/api', dependency_3]]);

      ims = new Map();
      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2290000723,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Store = void 0;

          var _core = require("@beyond-js/kernel/core");

          var _api = require("@beyond-examples/ssr/api");
          /*bundle*/


          class Store extends _core.Events {
            #provider = new _api.EntriesBridge();
            #loading = false;

            get loading() {
              return this.#loading;
            }

            #loaded = false;

            get loaded() {
              return this.#loaded;
            }

            #value = [];

            get value() {
              return this.#value;
            }

            #hydrated = false;

            get hydrated() {
              return this.#hydrated;
            }

            async fetch() {
              this.#loading = true;
              this.trigger('change');
              this.#value.length = 0;
              const entries = await this.#provider.fetch();
              entries.forEach(entry => this.#value.push(entry));
              this.#loading = false;
              this.#loaded = true;
              this.trigger('change');
            }

            hydrate(cached) {
              console.log('hydrate', cached);
              this.#loading = false;
              this.#loaded = true;
              cached.forEach(entries => this.#value.push(entries));
              this.#hydrated = true;
            }

            toJSON() {
              return this.#value;
            }

          }

          exports.Store = Store;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./store",
        "from": "Store",
        "name": "Store"
      }];

      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Store') && _export("Store", Store = require ? require('./store').Store : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUE7VUFPTzs7O1VBQVUsTUFDWEEsS0FEVyxTQUNHQyxZQURILENBQ1M7WUFDdEIsWUFBWSxJQUFJQyxrQkFBSixFQUFaO1lBRUEsV0FBVyxLQUFYOztZQUNXLElBQVBDLE9BQU87Y0FDUCxPQUFPLEtBQUssUUFBWjtZQUNIOztZQUVELFVBQVUsS0FBVjs7WUFDVSxJQUFOQyxNQUFNO2NBQ04sT0FBTyxLQUFLLE9BQVo7WUFDSDs7WUFFRCxTQUFxQixFQUFyQjs7WUFDUyxJQUFMQyxLQUFLO2NBQ0wsT0FBTyxLQUFLLE1BQVo7WUFDSDs7WUFFRCxZQUFZLEtBQVo7O1lBQ1ksSUFBUkMsUUFBUTtjQUNSLE9BQU8sS0FBSyxTQUFaO1lBQ0g7O1lBRVUsTUFBTEMsS0FBSztjQUNQLEtBQUssUUFBTCxHQUFnQixJQUFoQjtjQUNBLEtBQUtDLE9BQUwsQ0FBYSxRQUFiO2NBRUEsS0FBSyxNQUFMLENBQVlDLE1BQVosR0FBcUIsQ0FBckI7Y0FDQSxNQUFNQyxPQUFPLEdBQUcsTUFBTSxLQUFLLFNBQUwsQ0FBZUgsS0FBZixFQUF0QjtjQUNBRyxPQUFPLENBQUNDLE9BQVJELENBQWdCRSxLQUFLLElBQUksS0FBSyxNQUFMLENBQVlDLElBQVosQ0FBaUJELEtBQWpCLENBQXpCRjtjQUVBLEtBQUssUUFBTCxHQUFnQixLQUFoQjtjQUNBLEtBQUssT0FBTCxHQUFlLElBQWY7Y0FDQSxLQUFLRixPQUFMLENBQWEsUUFBYjtZQUNIOztZQUVETSxPQUFPLENBQUNDLE1BQUQsRUFBbUI7Y0FDdEJDLE9BQU8sQ0FBQ0MsR0FBUkQsQ0FBWSxTQUFaQSxFQUF1QkQsTUFBdkJDO2NBQ0EsS0FBSyxRQUFMLEdBQWdCLEtBQWhCO2NBQ0EsS0FBSyxPQUFMLEdBQWUsSUFBZjtjQUNBRCxNQUFNLENBQUNKLE9BQVBJLENBQWVMLE9BQU8sSUFBSSxLQUFLLE1BQUwsQ0FBWUcsSUFBWixDQUFpQkgsT0FBakIsQ0FBMUJLO2NBQ0EsS0FBSyxTQUFMLEdBQWlCLElBQWpCO1lBQ0g7O1lBRURHLE1BQU07Y0FDRixPQUFPLEtBQUssTUFBWjtZQUNIOztVQTlDcUIiLCJuYW1lcyI6WyJTdG9yZSIsIkV2ZW50cyIsIkVudHJpZXNCcmlkZ2UiLCJsb2FkaW5nIiwibG9hZGVkIiwidmFsdWUiLCJoeWRyYXRlZCIsImZldGNoIiwidHJpZ2dlciIsImxlbmd0aCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJwdXNoIiwiaHlkcmF0ZSIsImNhY2hlZCIsImNvbnNvbGUiLCJsb2ciLCJ0b0pTT04iXSwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy9zdG9yZS90cy9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==