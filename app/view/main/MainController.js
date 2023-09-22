/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('classicApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    

    filtrer: function(checkbox, isChecked) {

        var storePersonnel = Ext.data.StoreManager.lookup('storePersonnel');

        storePersonnel.clearFilter();

        if(isChecked) {
            storePersonnel.filterBy(function(record) {

                return record.data.id < 10;
    
            });
        }

        
    },

   
});
