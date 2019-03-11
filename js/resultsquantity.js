var myCharts = echarts.init(document.getElementById('resultsquantity'));
option = {
    tooltip: {
        trigger: 'item'
        /*formatter: "{a} <br/>{b}: {c} ({d}%)"*/
    },
    /*legend: {
        orient: 'vertical',
        x: 'left',
        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    },*/
    series: [{
        name: '数目',
        type: 'pie',
        selectedMode: 'single',
        radius: [0, '30%'],

        label: {
            normal: {
                position: 'inner'
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [
            { value: 912, name: '专利', selected: true },
            { value: 679, name: '获奖' },
            { value: 1548, name: '著作' },
            { value: 1242, name: '论文' },
            { value: 1232, name: '项目' }
        ]
    },
        {
            name: '数目',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                normal: {
                    /*formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',*/
                    backgroundColor: '#eee',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    // padding: [0, 7],
                    rich: {
                        a: {
                            color: '#999',
                            lineHeight: 22,
                            align: 'center'
                        },
                        // abg: {
                        //     backgroundColor: '#333',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: '#aaa',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: '#334455',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data: [
                { value: 400, name: '发明专利' },
                { value: 300, name: '实用新型专利' },
                { value: 212, name: '外观设计专利' },
                { value: 679, name: '获奖' },
                { value: 1548, name: '著作' },
                { value: 372, name: '设计性论文' },
                { value: 240, name: '描述性论文' },
                { value: 288, name: '实验性论文' },
                { value: 342, name: '理论性论文' },
                { value: 1232, name: '项目' }
            ]
        }
    ]
};
myCharts.setOption(option);
