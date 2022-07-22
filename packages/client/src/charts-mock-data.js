const LINE_CHART_STATE = {
    options: {
        labels: [...Array(24).keys()].map(n => `2022-07-0${n + 1}`),
        xaxis: {
            type: 'datetime',
        },
        title: {
            text: '$13,595',
            offsetX: 30,
            style: {
                fontSize: '24px',
            }
        },
        subtitle: {
            text: 'Revenue',
            offsetX: 30,
            style: {
                fontSize: '14px',
            }
        },
    },
    series: [{
        name: 'Revenue',
        data: [30, 40, 37, 10, 35, 50, 49, 60, 70, 91, 125, 130, 140, 150, 160, 170, 170, 170, 180, 200, 200, 220, 220, 230]
    }]
};

const statuses = ['cancelled', 'completed', 'failed', 'refunded', 'pending', 'processing', 'on-hold', 'partial'];

const DONUT_CHART_STATE = {
    options: {
        title: {
            text: 'Orders Status',
            style: {
                fontSize: '24px',
            },
        },
        labels: statuses,
        dataLabels: {
            enabled: false,
        },
    },
    series: [2, 74, 1, 3, 20, 0, 0, 0]
}

const BAR_CHART_STATE = {
    options: {
        chart: {
            type: 'bar',
            height: 380,
            width: '100%',
            stacked: true,
        },
        plotOptions: {
            bar: {
                columnWidth: '45%',
            }
        },
        labels: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
        },
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                style: {
                    colors: '#78909c'
                }
            }
        },
        title: {
            text: 'Monthly Sales',
            align: 'left',
            style: {
                fontSize: '18px'
            }
        },
        dataLabels: {
            enabled: false,
        },
    },
    series: [{
        name: "Clothing",
        data: [42, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51, 42, 56],
    }, {
        name: "Shoes",
        data: [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6, 7, 4],
    }],
}


/*
// this function will generate output in this format
// every array in data is of the format [x, y, z] where x (timestamp) and y are the two axes coordinates,
// z is the third coordinate, which you can interpret as the size of the bubble formed too.
// data = [
   [timestamp, 23, 10],
   [timestamp, 33, 11],
   [timestamp, 12, 8]
  ...
]
*/
const generateData = (baseval, count, yrange) => {
    var i = 0;
    var series = [];
    while (i < count) {
        //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

        series.push([baseval, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}


const BUBBLE_CHART_STATE = {
    series: [{
        name: 'Region 1 Users',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 10, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Region 2 Users',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 10, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Region 3 Users',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 10, {
            min: 10,
            max: 60
        })
    },
    {
        name: 'Region 4 Users',
        data: generateData(new Date('11 Feb 2017 GMT').getTime(), 10, {
            min: 10,
            max: 60
        })
    }],
    options: {
        chart: {
            type: 'bubble',
            background: 'url(/example-store-2.png)'
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 0.8
        },
        title: {
            text: 'Users Activity'
        },
        xaxis: {
            tickAmount: 12,
            type: 'category',
        },
        yaxis: {
            max: 70
        }
    },


};

export {
    LINE_CHART_STATE,
    DONUT_CHART_STATE,
    BAR_CHART_STATE,
    BUBBLE_CHART_STATE,
}