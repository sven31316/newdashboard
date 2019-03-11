myCharts = echarts.init(document.getElementById('awardnum'));
var scale = 1;
var echartData = [{
    value: 2145,
    name: '安徽大学'
}, {
    value: 3854,
    name: '合肥大学'
}, {
    value: 3555,
    name: '林子大学'
}, {
    value: 3523,
    name: '林子大学'
}, {
    value: 2145,
    name: '林子大学'
}]
var rich = {
    yellow: {
        color: "#ffc72b",
        fontSize: 30 * scale,
        padding: [5, 4],
        align: 'center'
    }, total: {
        color: "#ffc72b",
        fontSize: 40 * scale,
        align: 'center'
    }, white: {
        color: "#fff",
        fontSize: 14 * scale,
        padding: [21, 0],
    }, blue: {
        color: "#49dff0",
        fontSize: 16 * scale,
        align: 'center'
    }, hr: {
        borderColor: '#0b5263',
        width: '100%',
        borderWidth: 1,
        height: 0
    }
}
option = {
    backgroundColor: '#031f2d',
    title: {
        text: '总获奖数量',
        left: 'center',
        top: '53%',
        padding: [24, 0],
        textStyle: {
            color: '#fff',
            fontSize: 18 * scale,
            align: 'center'
        }
    }, legend: {
        selecteMode: false,
        formatter: function (name) {
            var total = 0;
            var avg;
            echartData.forEach(function (value, index, array) {
                total += value.value;
            });
            return '{total|' + total + '}';
        }, data: [echartData[0].name],
        left: 'center',
        top: 'center',
        icon: 'none',
        align: 'center',
        textStyle: {
            color: "#fff",
            fontSize: 16 * scale,
            rich: rich
        },
    },
    series:
        [{
            name: '总数量',
            type: 'pie',
            radius: ['42%', '50%'],
            hoverAnimation: false,
            color: ['#c487ee', '#deb140', '#49dff0', '#034097', '#6f81da', '#00ffb4'],
            label: {
                normal: {
                    formatter: function (params, ticket, callback) {
                        var total = 0;
                        var percent = 0;
                        echartData.forEach(function (value, index, array) {
                            total += value.value;
                        });
                        percent = ((params.value / total) * 100).toFixed(1);
                        return '{white|' + params.name + '}\n{hr|}\n{yellow|' + params.value + '}\n{blue|' + percent + '%}';

                    },
                    rich: rich
                },
            },
            lableLine: {
                normal: {
                    length: 55 * scale,
                    length2: 0,
                    lineStyle: {
                        color: '#0b5263'
                    }
                }
            },
            data: echartData

        }]
};
myCharts.setOption(option);