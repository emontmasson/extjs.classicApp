
Ext.define('classicApp.view.view.examples.chart.bar.Bar',{
    extend: 'Ext.panel.Panel',

    requires: [
        'classicApp.view.view.examples.chart.bar.BarController',
        'classicApp.view.view.examples.chart.bar.BarModel'
    ],

    controller: 'view-examples-chart-bar-bar',
    viewModel: {
        type: 'view-examples-chart-bar-bar'
    },

    html: 'Hello, World!!'
});
