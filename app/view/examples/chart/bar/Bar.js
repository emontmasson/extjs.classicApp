
Ext.define('classicApp.view.examples.chart.bar.Bar',{
    extend: 'Ext.panel.Panel',
    xtype: 'barchart',

    requires: [
        'classicApp.view.examples.chart.bar.BarController',
        'classicApp.view.examples.chart.bar.BarModel'
    ],

    controller: 'examples-chart-bar',
    viewModel: {
        type: 'examples-chart-bar'
    },

    width: 650,

    profiles: {
        classic: {
            width: 650
        },
        neptune: {
            width: 650
        },
        graphite: {
            width: 800
        },
        'classic-material': {
            width: 800
        }
    },

    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 500,
        insetPadding: '10 30 10 10',
        flipXY: true,
        captions: {
            title: 'Industry size in major economies (2011)',
            credits: 'Source: http://en.wikipedia.org/wiki/List_of_countries_by_GDP_sector_composition'
        },
        interactions: {
            type: 'itemedit',
            style: {
                lineWidth: 2
            },
            tooltip: {
                renderer: 'onItemEditTooltipRender'
            }
        },
        animation: {
            easing: 'easeOut',
            duration: 500
        },
        store: {
            type: 'economy-sectors'
        },
        axes: [{
            type: 'numeric',
            position: 'bottom',
            fields: 'ind',
            grid: true,
            maximum: 4000000,
            majorTickSteps: 10,
            title: 'Billions of USD',
            renderer: 'onAxisLabelRender'
        }, {
            type: 'category',
            position: 'left',
            fields: 'country',
            grid: true
        }],
        series: [{
            type: 'bar',
            xField: 'country',
            yField: 'ind',
            style: {
                opacity: 0.80,
                minGapWidth: 10
            },
            highlightCfg: {
                strokeStyle: 'black',
                radius: 10
            },
            label: {
                field: 'ind',
                display: 'insideEnd',
                renderer: 'onSeriesLabelRender'
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }]
    }]
});
