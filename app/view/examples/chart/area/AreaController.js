Ext.define('classicApp.view.examples.chart.area.AreaController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.examples.areasChart',
    onAxisLabelRender: function (axis, label, layoutContext) {
        var value = layoutContext.renderer(label);
        return value !== '0' ? (value / 1000 + ',000') : value;
    },
    onPreview: function () {
        var chart = this.lookup('chart');
        chart.preview();
    },
    getSeriesConfig: function (field, title) {
        return {
            type: 'area',
            title: title,
            xField: 'year',
            yField: field,
            style: {
                opacity: 0.60
            }
        };
    },
    onAfterRender: function () {
        var me = this,
            chart = me.lookup('chart');

        chart.setSeries([
            me.getSeriesConfig('usa', 'USA'),
            me.getSeriesConfig('china', 'China'),
            me.getSeriesConfig('japan', 'Japan')
        ]);
    }

});
