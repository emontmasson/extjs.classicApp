
Ext.define('classicApp.view.examples.chart.pie.Pie',{
    extend: 'Ext.panel.Panel',
    xtype: 'piechart',

    requires: [
        'classicApp.view.examples.chart.pie.PieController',
        'classicApp.view.examples.chart.pie.PieModel'
    ],

    controller: 'examples-chart-pie',
    viewModel: {
        type: 'examples-chart-pie'
    },
    width: 650,

    tbar: [
        '->',
        {
            text: 'Preview',
            handler: 'onPreview'
        }
    ],

    items: [{
        xtype: 'polar',
        reference: 'chart',
        captions: {
            title: 'Pie Charts - Basic',
            credits: {
                text: 'Data: IDC Predictions - 2017\n' +
                    'Source: Internet',
                align: 'left'
            }
        },
       
        width: '100%',
        height: 500,
        insetPadding: 40,
        innerPadding: 20,
        store: {
            type: 'mobile-os'
        },
        legend: {
            docked: 'bottom'
        },
        interactions: ['rotate'],
        series: [{
            type: 'pie',
            angleField: 'data1',
            label: {
                field: 'os',
                calloutLine: {
                    length: 60,
                    width: 3
                    // specifying 'color' is also possible here
                }
            },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }]
    }]
});
