google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawCharts);
function drawCharts() {
  // BEGIN BAR CHART

  // create zero data so the bars will 'grow'
  var barZeroData = google.visualization.arrayToDataTable([
    ["Day", ""],
    ["인터넷 망", 0],
    ["데스크탑", 0],
    ["노트북", 0],
    ["모니터", 0],
    ["키보드", 0],
    ["마우스", 0],
    ["프린터", 0],
  ]);

  // actual bar chart data
  var barData = google.visualization.arrayToDataTable([
    ["Day", ""],
    ["인터넷 망", 400],
    ["데스크탑", 430],
    ["노트북", 224],
    ["모니터", 90],
    ["키보드", 690],
    ["마우스", 90],
    ["키보드", 94],
    ["프린터", 666],
  ]);
  // set bar chart options
  var barOptions = {
    focusTarget: "category",
    backgroundColor: "transparent",
    colors: ["F8A92F", "tomato"],
    fontName: "Open Sans",
    chartArea: {
      left: 30,
      top: 10,
      width: "100%",
      height: "70%",
    },
    bar: {
      groupWidth: "30%",
    },
    hAxis: {
      textStyle: {
        fontSize: 14,
        color: "#828282",
      },
    },
    vAxis: {
      minValue: 0,
      maxValue: 900,
      baselineColor: "#DDD",
      gridlines: {
        color: "#DDD",
        count: 4,
      },
      textStyle: {
        fontSize: 11,
      },
    },
    legend: {
      position: "bottom",
      textStyle: {
        fontSize: 12,
      },
    },
    animation: {
      duration: 1200,
      easing: "out",
      startup: true,
    },
  };
  // draw bar chart twice so it animates
  var barChart = new google.visualization.ColumnChart(
    document.getElementById("bar-chart")
  );
  //barChart.draw(barZeroData, barOptions);
  barChart.draw(barData, barOptions);

  // BEGIN LINE GRAPH

  function randomNumber(base, step) {
    return Math.floor(Math.random() * step + base);
  }
  function createData(year, start1, start2, step, offset) {
    var ar = [];
    for (var i = 0; i < 12; i++) {
      ar.push([
        new Date(year, i),
        randomNumber(start1, step) + offset,
        randomNumber(start2, step) + offset,
      ]);
    }
    return ar;
  }
  // var randomLineData = [["Year", "Page Views"]];
  // for (var x = 0; x < 7; x++) {
  //   var newYear = createData(2007 + x, 10000, 5000, 4000, 800 * Math.pow(x, 2));
  //   for (var n = 0; n < 12; n++) {
  //     randomLineData.push(newYear.shift());
  //   }
  // }
  var lineData = google.visualization.arrayToDataTable(randomLineData);

  // var animLineData = [["Year", "Page Views"]];
  // for (var x = 0; x < 7; x++) {
  //   var zeroYear = createData(2007 + x, 0, 0, 0, 0);
  //   for (var n = 0; n < 12; n++) {
  //     animLineData.push(zeroYear.shift());
  //   }
  // }
  var zeroLineData = google.visualization.arrayToDataTable(animLineData);

  var lineOptions = {
    backgroundColor: "transparent",
    colors: ["cornflowerblue", "tomato"],
    fontName: "Open Sans",
    focusTarget: "category",
    chartArea: {
      left: 50,
      top: 10,
      width: "100%",
      height: "70%",
    },
    hAxis: {
      //showTextEvery: 12,
      textStyle: {
        fontSize: 11,
      },
      baselineColor: "transparent",
      gridlines: {
        color: "transparent",
      },
    },
    vAxis: {
      minValue: 0,
      maxValue: 50000,
      baselineColor: "#DDD",
      gridlines: {
        color: "#DDD",
        count: 4,
      },
      textStyle: {
        fontSize: 11,
      },
    },
    legend: {
      position: "bottom",
      textStyle: {
        fontSize: 12,
      },
    },
    animation: {
      duration: 1200,
      easing: "out",
      startup: true,
    },
  };

  var lineChart = new google.visualization.LineChart(
    document.getElementById("line-chart")
  );
  //lineChart.draw(zeroLineData, lineOptions);
  lineChart.draw(lineData, lineOptions);

  // draw pie chart
  var pieChart = new google.visualization.PieChart(
    document.getElementById("pie-chart")
  );
  pieChart.draw(pieData, pieOptions);
}
