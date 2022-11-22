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
        const dependencies = new Map([["socket.io", "4.5.3"], ["socket.io-client", "4.5.3"], ["cheerio", "1.0.0-rc.12"], ["@beyond-js/kernel", "0.1.0"], ["@beyond-js/backend", "0.1.0"], ["@beyond-js/ssr", "0.1.0"], ["@beyond-js/widgets", "0.1.0"], ["@beyond-js/react-widgets", "18.20.1"], ["@beyond-examples/ssr", "0.0.1"], ["@beyond-examples/ssr", "0.0.1"]]);
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
        hash: 1456733888,
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
            #provider = new _api.Entries();
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
              console.log(`fetch: ${this.#loaded}`);
              this.#loading = true;
              this.trigger('change');
              this.#value.length = 0;
              const entries = await this.#provider.fetch();
              entries.forEach(entry => this.#value.push(entry));
              this.#loading = false;
              this.#loaded = true;
              this.trigger('change');
              console.log(`fetch: ${this.#loaded}`);
            }

            hydrate(cached) {
              console.log('hydrate', cached);
              this.#loading = false;
              this.#loaded = true;
              cached.forEach(entries => this.#value.push(entries));
              this.#hydrated = true;
            }

            toJSON() {
              console.log('toJSON', this.#value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7O1VBRUE7VUFPTzs7O1VBQVUsTUFDWEEsS0FEVyxTQUNHQyxZQURILENBQ1M7WUFDdEIsWUFBWSxJQUFJQyxZQUFKLEVBQVo7WUFFQSxXQUFXLEtBQVg7O1lBQ1csSUFBUEMsT0FBTztjQUNQLE9BQU8sS0FBSyxRQUFaO1lBQ0g7O1lBRUQsVUFBVSxLQUFWOztZQUNVLElBQU5DLE1BQU07Y0FDTixPQUFPLEtBQUssT0FBWjtZQUNIOztZQUVELFNBQXFCLEVBQXJCOztZQUNTLElBQUxDLEtBQUs7Y0FDTCxPQUFPLEtBQUssTUFBWjtZQUNIOztZQUVELFlBQVksS0FBWjs7WUFDWSxJQUFSQyxRQUFRO2NBQ1IsT0FBTyxLQUFLLFNBQVo7WUFDSDs7WUFFVSxNQUFMQyxLQUFLO2NBQ1BDLE9BQU8sQ0FBQ0MsR0FBUkQsQ0FBWSxVQUFVLEtBQUssT0FBTyxFQUFsQ0E7Y0FDQSxLQUFLLFFBQUwsR0FBZ0IsSUFBaEI7Y0FDQSxLQUFLRSxPQUFMLENBQWEsUUFBYjtjQUVBLEtBQUssTUFBTCxDQUFZQyxNQUFaLEdBQXFCLENBQXJCO2NBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQU0sS0FBSyxTQUFMLENBQWVMLEtBQWYsRUFBdEI7Y0FDQUssT0FBTyxDQUFDQyxPQUFSRCxDQUFnQkUsS0FBSyxJQUFJLEtBQUssTUFBTCxDQUFZQyxJQUFaLENBQWlCRCxLQUFqQixDQUF6QkY7Y0FFQSxLQUFLLFFBQUwsR0FBZ0IsS0FBaEI7Y0FDQSxLQUFLLE9BQUwsR0FBZSxJQUFmO2NBQ0EsS0FBS0YsT0FBTCxDQUFhLFFBQWI7Y0FDQUYsT0FBTyxDQUFDQyxHQUFSRCxDQUFZLFVBQVUsS0FBSyxPQUFPLEVBQWxDQTtZQUNIOztZQUVEUSxPQUFPLENBQUNDLE1BQUQsRUFBbUI7Y0FDdEJULE9BQU8sQ0FBQ0MsR0FBUkQsQ0FBWSxTQUFaQSxFQUF1QlMsTUFBdkJUO2NBQ0EsS0FBSyxRQUFMLEdBQWdCLEtBQWhCO2NBQ0EsS0FBSyxPQUFMLEdBQWUsSUFBZjtjQUNBUyxNQUFNLENBQUNKLE9BQVBJLENBQWVMLE9BQU8sSUFBSSxLQUFLLE1BQUwsQ0FBWUcsSUFBWixDQUFpQkgsT0FBakIsQ0FBMUJLO2NBQ0EsS0FBSyxTQUFMLEdBQWlCLElBQWpCO1lBQ0g7O1lBRURDLE1BQU07Y0FDRlYsT0FBTyxDQUFDQyxHQUFSRCxDQUFZLFFBQVpBLEVBQXNCLEtBQUssTUFBM0JBO2NBQ0EsT0FBTyxLQUFLLE1BQVo7WUFDSDs7VUFqRHFCIiwibmFtZXMiOlsiU3RvcmUiLCJFdmVudHMiLCJFbnRyaWVzIiwibG9hZGluZyIsImxvYWRlZCIsInZhbHVlIiwiaHlkcmF0ZWQiLCJmZXRjaCIsImNvbnNvbGUiLCJsb2ciLCJ0cmlnZ2VyIiwibGVuZ3RoIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInB1c2giLCJoeWRyYXRlIiwiY2FjaGVkIiwidG9KU09OIl0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJwcm9qZWN0L21vZHVsZXMvc3RvcmUvdHMvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=