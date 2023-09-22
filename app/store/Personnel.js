Ext.define('classicApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    storeId: 'storePersonnel',
    model: 'classicApp.model.Personnel',

    pageSize: 3,

    groupField: 'name',
    proxy: {
        type: 'rest',
        url: 'https://retoolapi.dev/qzqTKm/data',
       
        useDefaultXhrHeader: false,
        writer: {
            writeRecordId: false
        }
    },
    autoLoad: true
});
