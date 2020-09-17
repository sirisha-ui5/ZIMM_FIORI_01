sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createJSONModel: function (sPath) {
			var oModel = new JSONModel();
			oModel.loadData(sPath);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createResourceModel: function () {

			var oModel = new sap.ui.model.resource.ResourceModel({
				bundleUrl: "i18n/i18n.properties"
			});
			return oModel;
		}

	};
});