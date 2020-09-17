sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"ZIMM/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("ZIMM.Component", {

		//Contains all the properties, dependencies, models,
			//views, themes, devices, libs, etc...
			metadata: {},
			//will be used to initialize our component and its properties
			//it will also helps us to call the base class contrcutor
			init: function() {
				///super->constructor();
				//This statement is calling the base class constructor
				//The purpose is to initialize the super class object
				//A router object is activated in base class and now can be used here
				sap.ui.core.UIComponent.prototype.init.apply(this);
			},
			createContent: function() {

				//similar code what we had in index.html
				var oView = new sap.ui.view({
					id: "myApp",
					viewName: "ZIMM.view.App",
					type: "XML"
				});

				var oJSONModel = models.createJSONModel("model/mockdata/Notif.json");
				//If you want your model @ app level - all the views and controller to access
				//set model at App View level
				oView.setModel(oJSONModel);
				var oI18nModel = models.createResourceModel();
				oView.setModel(oI18nModel, "i18n");
				return oView;
			},
			destroy: function() {}

		});
	});