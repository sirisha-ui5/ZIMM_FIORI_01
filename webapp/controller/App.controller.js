sap.ui.define([
	"sap/ui/core/mvc/Controller"
	
], function(Controller) {
	"use strict";

	return Controller.extend("ZIMM.controller.App",

		{

			/**
			 * Called when a controller is instantiated and its View controls (if available) are already created.
			 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
			 * @memberOf ZIMM.view.App
			 */
			onInit: function() {

			
				//Create both the view objects
				var oView1 = new sap.ui.view({
					id: "idView1",
					viewName: "ZIMM.view.View1",
					type: "XML"
				});
				var oView2 = new sap.ui.view({
					id: "idView2",
					viewName: "ZIMM.view.View2",
					type: "XML"
				});
				var oView3 = new sap.ui.view({
					id: "idView3",
					viewName: "ZIMM.view.View3",
					type: "XML"
				});
				//Add the view objects inside pages aggregation 
				var oAppContainer = this.getView().byId("App");
				oAppContainer.addPage(oView1);
				oAppContainer.addPage(oView2);
                oAppContainer.addPage(oView3);
			}

			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf ZIMM.view.App
			 */
			//	onBeforeRendering: function() {
			//
			//	},

			/**
			 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
			 * This hook is the same one that SAPUI5 controls get after being rendered.
			 * @memberOf ZIMM.view.App
			 */
			//	onAfterRendering: function() {
			//
			//	},

			/**
			 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
			 * @memberOf ZIMM.view.App
			 */
			//	onExit: function() {
			//
			//	}

		});

});