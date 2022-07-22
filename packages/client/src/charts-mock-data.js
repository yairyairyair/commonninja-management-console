const LINE_CHART_STATE = {
    options: {
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    },
    series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }]
};

const statuses = ['cancelled', 'completed', 'failed', 'refunded', 'pending', 'processing', 'on-hold', 'partial'];

const DONUT_CHART_STATE = {
    options: {
        title: {
            text: 'Orders Status',
        },
        labels: statuses,
        dataLabels: {
            enabled: false,
        },
    },
    series: [2, 74, 1, 3, 20, 0, 0, 0]
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
    BUBBLE_CHART_STATE,
}