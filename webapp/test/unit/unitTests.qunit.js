/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZIMM/ZIMM_FIORI_01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});