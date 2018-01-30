sap.ui.controller("zfnimport.FnImport", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zfnimport.FnImport
*/
	onInit: function() {
         var oModel = new sap.ui.model.odata.v2.ODataModel(
        "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_BATCH27_PRODUCT_SRV_01/"		 
         );
         var that = this;
         
         oModel.callFunction("/DetermineMostExpensiveProduct", {
        	 urlParameters : {'Category' : 'PCs' },
        	 success : function(data){
        		 debugger;
        		 var oModel = new sap.ui.model.json.JSONModel();
        		 oModel.setData(data);
        		 that.getView().byId("SimpleFormDisplay354").setModel(oModel);
        		 that.getView().byId("SimpleFormDisplay354").bindElement("/");
        	 },
        	 error : function(){}
         })
        
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zfnimport.FnImport
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zfnimport.FnImport
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zfnimport.FnImport
*/
//	onExit: function() {
//
//	}

});