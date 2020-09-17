sap.ui.define([
"ZIMM/controller/BaseController",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, MsgBox, MsgToast) {
	"use strict";

	return Controller.extend("ZIMM.controller.View3", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZIMM.view.View3
		 */
		//	onInit: function() {
		//
		//	},

		onBack: function() {
				this.getView().getParent().to("idView2");
			},
			
			
			Validate_Reading: function(oEvent) {
			//this.getView().getModel("personData").getProperty("/name");
			debugger;
			//	var oElement = oEvent.getParameters("Reading");
			var oContext = oEvent.getSource().getBindingContext();
			var sPath = oContext.getPath();
			var oSource = oEvent.getSource();
			var oReading = oContext.getProperty("Reading");
			var Prev_r = oContext.getProperty("Previous_R");
			var regNum = /^[0-9]*$/;
			if (!oReading.match(regNum)) {
				oSource.setValueState(sap.ui.core.ValueState.Error);
				sap.m.MessageToast.show("Please enter numeric value only");
				//this.getView().getModel().setProperty(sPath + "/Error_flag", "Y");
				return false;
			} else {
				oSource.setValueState(sap.ui.core.ValueState.None);
				//this.getView().getModel().setProperty(sPath + "/Error_flag", "N");
			}

			if (Prev_r > oReading) {
				oSource.setValueState(sap.ui.core.ValueState.Error);
				sap.m.MessageToast.show("Please enter number greater than previous reading");
				return false;
			} else {
				oSource.setValueState(sap.ui.core.ValueState.None);
			}

		},
		
			onSave: function(){
			MsgBox.confirm("Would like to save the object.",{
				title: "Confirmation",
				onClose: function(choice){
					if(choice === "OK"){
						MsgToast.show("Your object have been saved successfully!");
					}
				}
			});
		}
			/**
			 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
			 * (NOT before the first rendering! onInit() is used for that one!).
			 * @memberOf ZIMM.view.View3
			 */
			//	onBeforeRendering: function() {
			//
			//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZIMM.view.View3
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZIMM.view.View3
		 */
		//	onExit: function() {
		//
		//	}

	});

});