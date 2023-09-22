Ext.define('classicApp.store.Company', {
    extend: 'Ext.data.Store',
    alias: 'store.company',
    model: 'classicApp.model.Company',
    storeId: 'storeCompany',
    proxy: {
        type: 'rest',
        url: 'https://retoolapi.dev/AqNq0X/data',
       
        useDefaultXhrHeader: false,
        writer: {
            writeRecordId: false
        }
    },
    autoLoad: true
});