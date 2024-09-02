sap.ui.define(["sap/ui/integration/Designtime"], function (
    Designtime
) {
    "use strict";   
    return function () {
        return new Designtime({
        "form": {
          "items": {
            "maxItems": {   
              "manifestpath": "/sap.card/configuration/parameters/maxItems/value",
              "type": "integer",
              "label": "Maximum Items",
              "translatable": false,
              "description": "Maximum Items Displayed"   
            }
          }
        },
        "preview": {
          "modes": "LiveAbstract"
        }
      });
    };
});
