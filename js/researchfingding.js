

myCharts = echarts.init(document.getElementById('researchfingding'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    legend: {
        data: ['成果', '经费']
    },
    xAxis: [{
        type: 'category',
        data: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: '成果',
            min: 0,
            max: 60000,
            interval: 10000,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '经费',
            min: 0,
            max: 60000,
            interval: 10000,
            axisLabel: {
                formatter: '{value} 元'
            }
        }
    ],
    series: [{
            name: '成果',
            type: 'bar',
            data: [20000, 39000, 40000, 43200, 45600, 56700, 13560, 16225, 32061, 20054, 54541, 33545]
        },

        {
            name: '经费',
            type: 'line',
            yAxisIndex: 1,
            data: [12000, 22132, 31544, 45135, 63132, 10254, 20354, 23454, 23014, 16548, 12032, 62216]
        }
    ]
};
myCharts.setOption(option);

