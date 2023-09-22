Ext.define('classicApp.view.examples.chart.area.Area', {
    extend: 'Ext.Panel',
    xtype: 'areaschart',
    requires: [
        'classicApp.view.examples.chart.area.AreaController',
        'classicApp.view.examples.chart.area.AreaModel'
    ],
    controller: 'examples.areasChart',
    viewModel: {
        type: 'examples.areasChart'
    },
   
    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 600,
        insetPadding: '10 20 10 10',
        store: {
            type: 'gdp'
        },
        legend: {
            docked: 'bottom'
        },
        captions: {
            title: 'Economic Development in the USA, Japan and China',
            credits: {
                text: 'Data: Gross domestic product based on purchasing-power-parity (PPP) valuation of country GDP.\n' +
                    'Figures for FY2014 are forecasts.\n' +
                    'Source: http://www.imf.org/ World Economic Outlook Database October 2014.',
                align: 'left',
                style: {
                    fontSize: 12
                }
            }
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['china', 'japan', 'usa'],
            title: 'GDP in billions of US Dollars',
            grid: true,
            minimum: 0,
            maximum: 20000,
            majorTickSteps: 10,
            renderer: 'onAxisLabelRender'
        }, {
            type: 'category',
            position: 'bottom',
            fields: 'year',
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }]
    }],
    listeners: {
        afterrender: 'onAfterRender'
    }
});

