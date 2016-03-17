var w = d3.select('#plot').node().clientWidth,
    h = d3.select('#plot').node().clientHeight;

var canvas = d3.select('#plot')
        .append('canvas')
        .attr('width',w)
        .attr('height',h)
        .node(),
    ctx = canvas.getContext('2d');

var stationLoc = d3.map();

//Geo projection


var queue = d3_queue.queue()
    .defer(d3.csv, "../data/hubway_trips_reduced.csv",parse)
    .defer(d3.csv, "../data/hubway_stations.csv",parseStations)
    .await(function(err,trips,stations){

    })

function parse(d){
    if(+d.duration<0) return;

    return {
        duration: +d.duration,
        startTime: parseDate(d.start_date),
        endTime: parseDate(d.end_date),
        startStation: d.strt_statn,
        endStation: d.end_statn
    }
}

function parseDate(date){
    var day = date.split(' ')[0].split('/'),
        time = date.split(' ')[1].split(':');

    return (new Date(+day[2],+day[0]-1, +day[1], +time[0], +time[1])).getTime();
}

function parseStations(d){
    stationLoc.set(d.id, {
        lngLat: [+d.lng, +d.lat]
    });
}
