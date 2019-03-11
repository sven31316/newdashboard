
$(document).ready(function() {

    $.get('json/comparison.json').done(function(data) {
        var mychart = echarts.init(document.getElementById('periodicalsnum'));
        var dataMap = {};

        function dataFormatter(obj) {
            var pList = ['中国科技大学', '安徽大学', '合肥工业大学', '安徽工业大学', '安徽理工大学', '安徽工程大学', '安徽农业大学', '安徽医科大学', '蚌埠医科大学', '皖南医学院', '安徽中医药大学', '安徽师范大学', '阜阳幼儿师范', '安庆师范学院', '淮北煤炭师范大学', '黄山大学', '巢湖学院', '淮南师范学院', '铜陵大学', '安徽建筑大学', '合肥学院', '皖西学院', '安徽财经大学', '安徽科技学院', '滁州学院', '宿州学院', '淮南联合大学', '安徽医学高等专科学校', '亳州学院', '安徽中医药高等专科学校', '安徽新华学院'];
            var temp;
            for (var year = 2002; year <= 2011; year++) {
                var max = 0;
                var sum = 0;
                temp = obj[year];
                for (var i = 0, l = temp.length; i < l; i++) {
                    max = Math.max(max, temp[i]);
                    sum += temp[i];
                    obj[year][i] = {
                        name: pList[i],
                        value: temp[i]
                    }
                }
                obj[year + 'max'] = Math.floor(max / 100) * 100;
                obj[year + 'sum'] = sum;
            }
            return obj;
        }
        console.dir(data);
        dataMap.dataThesis = dataFormatter(data.Thesis);
        dataMap.dataAward = dataFormatter(data.Award);
        dataMap.dataWork = dataFormatter(data.Work);
        dataMap.dataProject = dataFormatter(data.Project);
        dataMap.dataPatent = dataFormatter(data.Patent);
        option = {
            baseOption: {
                dataZoom: [{
                    type: 'slider',
                    show: true,
                    start: 0,
                    end: 20,
                    /*handleSize: 50*/
                    zoomLock: true
                },
                    {
                        type: 'inside',
                        start: 94,
                        end: 100
                    }
                    /*{
                        type: 'slider',
                        show: true,
                        yAxisIndex: 0,
                        filterMode: 'empty',
                        width: 5,
                        height: '70%',
                        handleSize: 8,
                        showDataShadow: false,
                        left: '93%'
                    }*/
                ],
                timeline: {
                    // y: 0,
                    axisType: 'category',
                    show: false,
                    // realtime: false,
                    // loop: false,
                    autoPlay: true,
                    // currentIndex: 2,
                    //playInterval: 1000,
                    // controlStyle: {
                    //     position: 'left'
                    // },
                    data: [
                        '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01',
                        '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01',
                        '2010-01-01', '2006-01-01'
                    ],
                    label: {
                        formatter: function(s) {
                            return (new Date(s)).getFullYear();
                        }
                    }
                },
                title: {
                    subtext: '数据来自国家统计局'
                },
                tooltip: {},
                legend: {
                    x: 'right',
                    data: ['论文', '著作', '专利', '获奖', '项目'],
                    selected: {
                        '获奖': false,
                        '项目': false
                    }
                },
                calculable: true,
                grid: {
                    top: 80,
                    /*bottom: 100,*/
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow',
                            label: {
                                show: true,
                                formatter: function(params) {
                                    return params.value.replace('\n', '');
                                }
                            }
                        }
                    }
                },
                xAxis: [{
                    'type': 'category',
                    'axisLabel': { 'interval': 0 },
                    'data': data.toponymy,
                    splitLine: { show: false }
                }],
                yAxis: [{
                    type: 'value',
                    name: '数目'
                }],
                series: [
                    { name: '论文', type: 'bar' },
                    { name: '著作', type: 'bar' },
                    { name: '专利', type: 'bar' },
                    { name: '获奖', type: 'bar' },
                    { name: '项目', type: 'bar' },
                    {
                        name: '成果占比',
                        type: 'pie',
                        center: ['75%', '35%'],
                        radius: '28%',
                        z: 100
                    }
                ]
            },
            options: [{
                title: { text: '2002全国研究成果指标' },
                series: [
                    { data: dataMap.dataThesis['2002'] },
                    { data: dataMap.dataProject['2002'] },
                    { data: dataMap.dataPatent['2002'] },
                    { data: dataMap.dataWork['2002'] },
                    { data: dataMap.dataAward['2002'] },
                    {
                        data: [
                            { name: '论文', value: dataMap.dataPatent['2002sum'] },
                            { name: '著作', value: dataMap.dataWork['2002sum'] },
                            { name: '专利', value: dataMap.dataAward['2002sum'] }
                        ]
                    }
                ]
            },
                {
                    title: { text: '2003全国研究成果指标' },
                    series: [
                        { data: dataMap.dataThesis['2003'] },
                        { data: dataMap.dataProject['2003'] },
                        { data: dataMap.dataPatent['2003'] },
                        { data: dataMap.dataWork['2003'] },
                        { data: dataMap.dataAward['2003'] },
                        {
                            data: [
                                { name: '论文', value: dataMap.dataPatent['2003sum'] },
                                { name: '著作', value: dataMap.dataWork['2003sum'] },
                                { name: '专利', value: dataMap.dataAward['2003sum'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2004全国研究成果指标' },
                    series: [
                        { data: dataMap.dataThesis['2004'] },
                        { data: dataMap.dataProject['2004'] },
                        { data: dataMap.dataPatent['2004'] },
                        { data: dataMap.dataWork['2004'] },
                        { data: dataMap.dataAward['2004'] },
                        {
                            data: [
                                { name: '论文', value: dataMap.dataPatent['2004sum'] },
                                { name: '著作', value: dataMap.dataWork['2004sum'] },
                                { name: '专利', value: dataMap.dataAward['2004sum'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2005全国研究成果指标' },
                    series: [
                        { data: dataMap.dataThesis['2005'] },
                        { data: dataMap.dataProject['2005'] },
                        { data: dataMap.dataPatent['2005'] },
                        { data: dataMap.dataWork['2005'] },
                        { data: dataMap.dataAward['2005'] },
                        {
                            data: [
                                { name: '论文', value: dataMap.dataPatent['2005sum'] },
                                { name: '著作', value: dataMap.dataWork['2005sum'] },
                                { name: '专利', value: dataMap.dataAward['2005sum'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2006全国研究成果指标' },
                    series: [
                        { data: dataMap.dataThesis['2006'] },
                        { data: dataMap.dataProject['2006'] },
                        { data: dataMap.dataPatent['2006'] },
                        { data: dataMap.dataWork['2006'] },
                        { data: dataMap.dataAward['2006'] },
                        {
                            data: [
                                { name: '论文', value: dataMap.dataPatent['2006sum'] },
                                { name: '著作', value: dataMap.dataWork['2006sum'] },
                                { name: '专利', value: dataMap.dataAward['2006sum'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2007全国研究成果指标' },
                    series: [
                        { data: dataMap.dataThesis['2007'] },
                        { data: dataMap.dataProject['2007'] },
                        { data: dataMap.dataPatent['2007'] },
                        { data: dataMap.dataWork['2007'] },
                        { data: dataMap.dataAward['2007'] },
                        {
                            data: [
                                { name: '论文', value: dataMap.dataPatent['2007sum'] },
                                { name: '著作', value: dataMap.dataWork['2007sum'] },
                                { name: '专利', value: dataMap.dataAward['2007sum'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2008全国研究成果指标' },
                    series: [
                        { data: dataMap.dataThesis['2008'] },
                        { data: dataMap.dataProject['2008'] },
                        { data: dataMap.dataPatent['2008'] },
                        { data: dataMap.dataWork['2008'] },
                        { data: dataMap.dataAward['2008'] },
                        {
                            data: [
                                { name: '论文', value: dataMap.dataPatent['2008sum'] },
                                { name: '著作', value: dataMap.dataWork['2008sum'] },
                                { name: '专利', value: dataMap.dataAward['2008sum'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2009全国研究成果指标' },
                    series: [
                        { data: dataMap.dataThesis['2009'] },
                        { data: dataMap.dataProject['2009'] },
                        { data: dataMap.dataPatent['2009'] },
                        { data: dataMap.dataWork['2009'] },
                        { data: dataMap.dataAward['2009'] },
                        {
                            data: [
                                { name: '论文', value: dataMap.dataPatent['2009sum'] },
                                { name: '著作', value: dataMap.dataWork['2009sum'] },
                                { name: '专利', value: dataMap.dataAward['2009sum'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2010全国研究成果指标' },
                    series: [
                        { data: dataMap.dataThesis['2010'] },
                        { data: dataMap.dataProject['2010'] },
                        { data: dataMap.dataPatent['2010'] },
                        { data: dataMap.dataWork['2010'] },
                        { data: dataMap.dataAward['2010'] },
                        {
                            data: [
                                { name: '论文', value: dataMap.dataPatent['2010sum'] },
                                { name: '著作', value: dataMap.dataWork['2010sum'] },
                                { name: '专利', value: dataMap.dataAward['2010sum'] }
                            ]
                        }
                    ]
                },
                {
                    title: { text: '2011全国研究成果指标' },
                    series: [
                        { data: dataMap.dataThesis['2011'] },
                        { data: dataMap.dataProject['2011'] },
                        { data: dataMap.dataPatent['2011'] },
                        { data: dataMap.dataWork['2011'] },
                        { data: dataMap.dataAward['2011'] },
                        {
                            data: [
                                { name: '论文', value: dataMap.dataPatent['2011sum'] },
                                { name: '著作', value: dataMap.dataWork['2011sum'] },
                                { name: '专利', value: dataMap.dataAward['2011sum'] }
                            ]
                        }
                    ]
                }
            ]
        };

        mychart.setOption(option);
    });
    $.get('json/expenditure.json').done(function(data) {
        var mychart = echarts.init(document.getElementById('expenditure'));
        console.dir(data);
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            dataZoom: [{
                type: 'slider',
                show: true,
                start: 60,
                end: 100,
                handleSize: 10
            },
                {
                    type: 'inside',
                    start: 94,
                    end: 100
                }
                /*{
                    type: 'slider',
                    show: true,
                    yAxisIndex: 0,
                    filterMode: 'empty',
                    width: 5,
                    height: '70%',
                    handleSize: 8,
                    showDataShadow: false,
                    left: '93%'
                }*/
            ],
            legend: {
                data: ['论文', '著作', '专利', '项目']
            },
            grid: {
                left: '3%',
                right: '4%',
                //bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: data.toponymy
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: '论文',
                type: 'bar',
                stack: '经费',
                data: data.thesis
            },
                {
                    name: '专利',
                    type: 'bar',
                    stack: '经费',
                    data: data.patent
                },
                {
                    name: '著作',
                    type: 'bar',
                    stack: '经费',
                    data: data.work
                },
                {
                    name: '项目',
                    type: 'bar',
                    stack: '经费',
                    data: data.project
                }
            ]
        };
        mychart.setOption(option);
    })
});