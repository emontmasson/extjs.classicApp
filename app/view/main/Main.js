/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('classicApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'classicApp.view.main.MainController',
        'classicApp.view.main.MainModel',
        'classicApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        {
            title: 'Home',
            iconCls: 'fa-home',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]

        }, {
            title: 'Add Company',
            iconCls: 'fa-user',
            items: [{
                xtype: 'companyform'
            }]
        } , {
            title: 'Charts area',
            iconCls: 'fa-bell',
            items: [{
                xtype: 'areaschart'
            }]
        }, {
            title: 'Charts bar',
            iconCls: 'fa-bell',
            items: [{
                xtype: 'barchart'
            }]
        }, {
            title: 'Charts line',
            iconCls: 'fa-bell',
            items: [{
                xtype: 'linechart'
            }]
        }, {
            title: 'Charts Pie',
            iconCls: 'fa-bell',
            items: [{
                xtype: 'piechart'
            }]
        }, {
            title: 'Charts Scatted',
            iconCls: 'fa-bell',
            items: [{
                xtype: 'scattedchart'
            }]
        }
    ]
});






