
Ext.define('classicApp.view.examples.chart.scatter.Scatter',{
    extend: 'Ext.panel.Panel',
    xtype: 'scattedchart',

    requires: [
        'classicApp.view.examples.chart.scatter.ScatterController',
        'classicApp.view.examples.chart.scatter.ScatterModel'
    ],

    controller: 'examples-chart-scatter',
    viewModel: {
        type: 'examples-chart-scatter'
    },

    width: 650,

    tbar: {
        reference: 'toolbar',
        items: [
            '->',
            {
                text: 'Preview',
                handler: 'onPreview'
            },
            {
                text: 'Reset pan/zoom',
                handler: 'onPanZoomReset'
            }
        ]
    },

    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        
        width: '100%',
        height: 600,
        innerPadding: 20,
        captions: {
            title: 'Life expectancy at birth in 2013'
        },
        store: {
            type: 'life-expectancy'
        },
        interactions: [
            {
                type: 'panzoom',
                zoomOnPanGesture: true
            },
            'itemhighlight'
        ],
        axes: [{
            type: 'numeric',
            position: 'bottom',
            fields: 'spending',
            title: 'Health care spending per person, in U.S. dollars',
            minimum: 0,
            maximum: 10000,
            majorTickSteps: 10,
            limits: {
                value: 3980,
                line: {
                    title: {
                        text: 'OECD average',
                        fontWeight: 'bold'
                    },
                    lineDash: [2, 2]
                }
            }
        }, {
            type: 'numeric',
            position: 'left',
            fields: 'expectancy',
            title: 'Average life expectancy at birth',
            limits: {
                value: 80.1,
                line: {
                    title: {
                        text: 'OECD average',
                        fontWeight: 'bold'
                    },
                    lineDash: [2, 2]
                }
            }
        }],
        series: [{
            type: 'scatter',
            xField: 'spending',
            yField: 'expectancy',
            marker: { // defaults to 'circle' sprite
                radius: 4
            },
            highlight: {
                fillStyle: 'yellow',
                lineWidth: 2
            },
            style: {
                // Defaults to 20. Scatter series use simple kind of hit testing:
                // hit point should be within selectionTolerance from the data point.
                // We make selectionTolerance equal to the marker's radius here.
                selectionTolerance: 4
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            },
            label: {
                field: 'country',
                display: 'over',
                fontSize: 10,
                translateY: 5, // lower label closer to the marker
                renderer: 'onSeriesLabelRender'
            }
        }]
    }],

    listeners: {
        afterrender: 'onAfterRender'
    }
});
