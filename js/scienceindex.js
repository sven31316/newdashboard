
scienceindex= echarts.init(document.getElementById('scienceindex'));
    option = {
    tooltip: {},
    legend: {
        data: ['全省', '工大','科大'],
        left:10,
        orient:'vertical'
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#231',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        radius:'60%',
        center:['55%','43%'],
        indicator: [
            { name: 'SSCI', max: 6500},
            { name: 'SCI', max: 16000},
            { name: 'EI', max: 30000},
            { name: 'CSSCI', max: 38000},
            { name: '北大核心', max: 52000},
            { name: '其他', max: 25000}
        ]
    },
    series: [{
        type: 'radar',

        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '全省'
            },
            {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '工大'
            },
            {
                value : [5123, 13000, 22000, 12000, 32000, 12000],
                name : '科大'
            }
        ]
    }]
};
scienceindex.setOption(option);

