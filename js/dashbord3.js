var source = echarts.init(document.getElementById('source'), 'js/shine.js');
sourceOption = {
    tooltip: {
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        itemGap: 3,
        padding: 2,
        itemWidth: 5,
        itemHeight: 5,
        top: 3,
        textStyle: {
            fontSize: '10.5px'
        },
        data: ['中国科学技术大学', '合肥工业大学',
            '安徽师范大学', '安徽工程大学', '安徽财经大学'
        ]
    },
    grid: {
        top: '25%',
        left: '1%',
        right: '3%',
        bottom: '1%',
        containLabel: true
    },
    calculable: true,
    xAxis: [{
        axisLabel: {
            textStyle: {
                fontSize: '10px'
            },
        },
        type: 'category',
        data: ['百度贴吧', '微博', '校园bbs', '其他']
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            textStyle: {
                fontSize: '10.5px'
            },
        }
    }],
    series: [{
        name: '中国科学技术大学',
        type: 'bar',
        stack: '合肥',
        data: [1420, 182, 591, 334]
    }, {
        name: '合肥工业大学',
        type: 'bar',
        stack: '合肥',
        data: [1350, 132, 701, 254]
    }, {
        name: '安徽师范大学',
        type: 'bar',
        barWidth: 5,
        stack: '芜湖',
        data: [1220, 232, 701, 134]
    }, {
        name: '安徽工程大学',
        type: 'bar',
        stack: '芜湖',
        data: [1120, 632, 601, 634]
    }, {
        name: '安徽财经大学',
        type: 'bar',
        stack: '蚌埠',
        data: [1160, 972, 1071, 874]
    }]
};
source.setOption(sourceOption);