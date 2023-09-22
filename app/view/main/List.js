/**
 * This view is an example list of people.
 */
Ext.define('classicApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'classicApp.store.Personnel',
        'Ext.grid.feature.Grouping'
    ],

    title: 'Personnel',

    viewConfig: {
        plugins: {
            gridviewdragdrop: {
                dragText: 'Drag and drop to reorganize'
            }
        }
    },
    features: [{
        ftype: 'grouping',
        startCollapsed: true,
        groupHeaderTpl: '{name}'
    }],
    store: {
        type: 'personnel'
    },
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'checkbox',
            boxLabel: 'Filtrer < 10',
            handler: 'filtrer'
        }]
    }],

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Company', dataIndex: 'company', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});

