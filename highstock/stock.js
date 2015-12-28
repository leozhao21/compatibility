
$(function () {
        
    $('a.media').media({
      width:500, 
      height:400,
    });

    $.getJSON('http://www.hcharts.cn/datas/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
        // Create the chart
        $('#container').highcharts('StockChart', {
            series : [{
                name : '价格',
                data : data,
                // tooltip: {
                //     valueDecimals: 2,
                // }
            }]

            
        })
        
    });
    
});