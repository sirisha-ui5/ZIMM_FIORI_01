sap.ui.define([
	"ZIMM/controller/BaseController",
	"sap/m/SelectDialog"
], function(Controller, SelectDialog) {
	"use strict";

	return Controller.extend("ZIMM.controller.View1", {
		oCore: sap.ui.getCore(),
		defaultDate: function() {
			//default date field in the first screen 
			var oDate;
			var d = new Date();
			var month = d.getMonth() + 1;

			var oMonth;
			if (month < 10) {
				oMonth = "0" + month;
			} else {
				oMonth = month;
			}
			oDate = oMonth + "/" + 16 + "/" + d.getFullYear();
			this.oCurrentDate = new Date();
			return oDate;

		},
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZIMM.view.View1
		 */
		onInit: function() {
			var oDate = this.defaultDate();
			this.getView().byId("DP1").setValue(oDate);
		},

		idOfTableField: null,
		onF4Help: function(oEvent) {
			//console.log("you have prssed F4 on field inside table : ", oEvent.getSource().getId());
			this.idOfTableField = oEvent.getSource().getId();
			var oSelectDialog = new SelectDialog({
				title: "Notification Numbers",
				items: {
					path: "/Notif_tab",
					template: new sap.m.DisplayListItem({

						value: "{Notification}"
					})
				},
				confirm: [this.onConfirm, this]
			});
			//It makes the select dialog which is a foreign entity accessible for view and now
			//select dialog can access the model @ view level easily
			this.getView().addDependent(oSelectDialog);
			oSelectDialog.open();
		},

		onConfirm: function(oEvent) {
			var valueItem = oEvent.getParameter("selectedItem").getValue();
			sap.ui.getCore().byId(this.idOfTableField).setValue(valueItem);
		},
		getData: function() {
		
			//Step1 get Notification number  from the selection screen 
			var oNotif = this.getView().byId("NOTF");

			//Step2: Get model of Current View 
			var aNotif = this.getView().getModel().getProperty("/Notif_tab");

			//Step3: Create Temp Table
			var aNotifTemp = [];
			var oNotifValue = oNotif.getValue();
			//Step4:loop through the Notif_tab and filter the rows that match the notification in the selection screen 
			if (oNotifValue.length > 0) {
				for (var i = 0; i < aNotif.length; i++) {
					if (aNotif[i].Notification === oNotif.getValue()) {
						aNotifTemp.push(aNotif[i]);
						break;
					}
				}

			} else {
				for (var j = 0; j < aNotif.length; j++) {
					aNotifTemp.push(aNotif[j ]);
				}
			}
			//Step5:Set Notiftab_temp to Model
			this.getView().getModel().setProperty("/Notif_temp", aNotifTemp);

			//Step6: get App Container Object by navigating to the parent of the current view 
			var oView = this.getView();

			var oApp = oView.getParent();

			//Step7: Call View2 
			oApp.to("idView2");

		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZIMM.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZIMM.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZIMM.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});