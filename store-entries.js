define(["exports", "module", "@beyond-js/kernel/bundle", "@beyond-js/kernel/core", "@beyond-js/widgets/controller", "@beyond-examples/ssr/api"], function (_exports, _amd_module, dependency_0, dependency_1, dependency_2, dependency_3) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Store = void 0;
  const __url = _amd_module.uri;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond-examples/ssr/store-entries",
    "bundle": "ts"
  }, __url).package();

  ;
  externals.register(new Map([]));

  __pkg.dependencies.update(new Set(["@beyond-examples/ssr/api"]));

  const ims = new Map();
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
  let Store; // Module exports

  _exports.Store = Store;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Store') && (_exports.Store = Store = require ? require('./store').Store : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQTs7TUFFQTtNQU9POzs7TUFBVSxNQUNYQSxLQURXLFNBQ0dDLFlBREgsQ0FDUztRQUN0QixZQUFZLElBQUlDLGtCQUFKLEVBQVo7UUFFQSxXQUFXLEtBQVg7O1FBQ1csSUFBUEMsT0FBTztVQUNQLE9BQU8sS0FBSyxRQUFaO1FBQ0g7O1FBRUQsVUFBVSxLQUFWOztRQUNVLElBQU5DLE1BQU07VUFDTixPQUFPLEtBQUssT0FBWjtRQUNIOztRQUVELFNBQXFCLEVBQXJCOztRQUNTLElBQUxDLEtBQUs7VUFDTCxPQUFPLEtBQUssTUFBWjtRQUNIOztRQUVELFlBQVksS0FBWjs7UUFDWSxJQUFSQyxRQUFRO1VBQ1IsT0FBTyxLQUFLLFNBQVo7UUFDSDs7UUFFVSxNQUFMQyxLQUFLO1VBQ1AsS0FBSyxRQUFMLEdBQWdCLElBQWhCO1VBQ0EsS0FBS0MsT0FBTCxDQUFhLFFBQWI7VUFFQSxLQUFLLE1BQUwsQ0FBWUMsTUFBWixHQUFxQixDQUFyQjtVQUNBLE1BQU1DLE9BQU8sR0FBRyxNQUFNLEtBQUssU0FBTCxDQUFlSCxLQUFmLEVBQXRCO1VBQ0FHLE9BQU8sQ0FBQ0MsT0FBUkQsQ0FBZ0JFLEtBQUssSUFBSSxLQUFLLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkQsS0FBakIsQ0FBekJGO1VBRUEsS0FBSyxRQUFMLEdBQWdCLEtBQWhCO1VBQ0EsS0FBSyxPQUFMLEdBQWUsSUFBZjtVQUNBLEtBQUtGLE9BQUwsQ0FBYSxRQUFiO1FBQ0g7O1FBRURNLE9BQU8sQ0FBQ0MsTUFBRCxFQUFtQjtVQUN0QkMsT0FBTyxDQUFDQyxHQUFSRCxDQUFZLFNBQVpBLEVBQXVCRCxNQUF2QkM7VUFDQSxLQUFLLFFBQUwsR0FBZ0IsS0FBaEI7VUFDQSxLQUFLLE9BQUwsR0FBZSxJQUFmO1VBQ0FELE1BQU0sQ0FBQ0osT0FBUEksQ0FBZUwsT0FBTyxJQUFJLEtBQUssTUFBTCxDQUFZRyxJQUFaLENBQWlCSCxPQUFqQixDQUExQks7VUFDQSxLQUFLLFNBQUwsR0FBaUIsSUFBakI7UUFDSDs7UUFFREcsTUFBTTtVQUNGLE9BQU8sS0FBSyxNQUFaO1FBQ0g7O01BOUNxQiIsIm5hbWVzIjpbIlN0b3JlIiwiRXZlbnRzIiwiRW50cmllc0JyaWRnZSIsImxvYWRpbmciLCJsb2FkZWQiLCJ2YWx1ZSIsImh5ZHJhdGVkIiwiZmV0Y2giLCJ0cmlnZ2VyIiwibGVuZ3RoIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInB1c2giLCJoeWRyYXRlIiwiY2FjaGVkIiwiY29uc29sZSIsImxvZyIsInRvSlNPTiJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsic3NyL21vZHVsZXMvc3RvcmUvdHMvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=