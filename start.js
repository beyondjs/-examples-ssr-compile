System.register(["@beyond-js/kernel@0.1.0/bundle", "@beyond-js/kernel@0.1.0/transversals", "@beyond-js/widgets@0.1.0/render"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, Transversal, __beyond_transversal, widgets, bundles;

  return {
    setters: [function (_beyondJsKernel010Bundle) {
      dependency_0 = _beyondJsKernel010Bundle;
    }, function (_beyondJsKernel010Transversals) {
      dependency_1 = _beyondJsKernel010Transversals;
    }, function (_beyondJsWidgets010Render) {
      dependency_2 = _beyondJsWidgets010Render;
    }],
    execute: function () {
      ({
        Transversal
      } = brequire('@beyond-js/kernel/transversals'));

      _export("__beyond_transversal", __beyond_transversal = new Transversal('start', ''));

      __beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2]]);
      /*************
      BUNDLE: WIDGET
      *************/


      ({
        widgets
      } = brequire('@beyond-js/widgets/render'));
      widgets.register([{
        "name": "csr-page",
        "vspecifier": "@beyond-examples/ssr@0.0.1/csr-test",
        "is": "page",
        "route": "/csr-page"
      }, {
        "name": "sr-page",
        "vspecifier": "@beyond-examples/ssr@0.0.1/sr",
        "is": "page",
        "render": {
          "csr": false,
          "sr": ["/page/test", "/page/example"]
        },
        "route": "/page/${entry}"
      }, {
        "name": "ssr-page",
        "vspecifier": "@beyond-examples/ssr@0.0.1/ssr-test",
        "is": "page",
        "render": {
          "csr": false,
          "ssr": true
        },
        "route": "/entries-ssr"
      }]);
      bundles = [];

      __beyond_transversal.initialise(bundles);
    }
  };
});