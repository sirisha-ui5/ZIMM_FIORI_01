sap.ui.define([
	"ZIMM/controller/BaseController"
], function (Controller) {
	"use strict";

	return Controller.extend("ZIMM.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZIMM.view.View2
		 */
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel();

			var oTable1 = this.getView().byId("Table1");
			oTable1.bindRows("/Notif_temp");

		},

		onSearch: function (oEvent) {
			//Step 1: get the value of search what user entered in search field
			// var oSearchField = oEvent.getSource();
			// var searchVal = oSearchField.getValue();

			var srchVal = oEvent.getParameter("query");
			if (!srchVal) {
				srchVal = oEvent.getParameter("newValue");
			}
			//Step 2: based on the value what user enters, we need to filter list items
			var aFilter = [];
			var oFilter = new sap.ui.model.Filter("Notification",
				sap.ui.model.FilterOperator.Contains,
				srchVal);
			aFilter.push(oFilter);
			this.getView().byId("Table1").getBinding("rows").filter(aFilter);
		},

		getReading: function (oEvent) {

			var oButton = oEvent.getSource();
			var oBindingContext = oButton.getBindingContext();
			var sPath = oBindingContext.getPath();
			var oView3 = this.getView().getParent().getPages()[2];
			oView3.bindElement(sPath);
			var oView = this.getView();
			//App Container Object
			var oApp = oView.getParent();
			//App has an API called to in order to navigate
			oApp.to("idView3");

		},
		onBack: function () {
			this.getView().getParent().to("idView1");
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZIMM.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZIMM.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZIMM.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});