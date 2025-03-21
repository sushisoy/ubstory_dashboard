// const { default: plugin } = require("chartjs-plugin-datalabels");

// 당월 전체 AS 접수 비중 바 차트
const bar = document.getElementById("barChart").getContext("2d");
const barChart = new Chart(bar, {
  type: "bar",
  data: {
    labels: [
      "인터넷 망",
      "데스크탑",
      "노트북",
      "모니터",
      "키보드",
      "마우스",
      "프린터",
      "복합기",
      "스캐너",
      "스마트보드",
    ],
    datasets: [
      {
        data: [2, 30, 43, 40, 30, 40, 30, 50, 40, 15],
        backgroundColor: "#F8A92F",
        borderRadius: 4,
        maxBarThickness: 30,
      },
    ],
  },
  options: {
    plugins: {
      // 범례 삭제
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        // x축에 대한 세로선 설정
        grid: {
          display: false,
        },
        ticks: {
          color: "#828282",
          fontSize: 14,
          minRotation: 45,
          padding: 10,
        },
      },
      y: {
        // y축에 대한 가로 선에 대한 설정
        grid: {
          color: "#E9ECED",
        },
        ticks: {
          color: "#828282",
          beginAtZero: true,
          // y축 눈금 단위 설정
          stepSize: 15,
        },
        // y축 최대 값 설정
        max: 90,
        // y축의 간격을 조정하는 설정
        afterDataLimits: (scale) => {
          scale.max = scale.max * 1;
        },
      },
    },
  },
});

// 전체 AS 완료 현황 도넛 차트
const doughnut = document.getElementById("doughnutChart").getContext("2d");
const value = 42;

// centerText plugin block
// const centerText = {
//   id: "centerText",
//   afterDataetDraw(chart, args, pluginOptions) {
//     const { ctx, data } = chart;

//     const text = data.labels[data.labels.length - 1];

//     ctx.save();
//     const x = chart.getDatasetMeta(0).data[0].x;
//     const y = chart.getDatasetMeta(0).data[0].y;
//     ctx.textAlign;
//     ctx.font = "bold 12px";

//     ctx.fillText(text, x, y);
//   },
// };

const doughnutChart = new Chart(doughnut, {
  type: "doughnut",
  data: {
    labels: ["완료", "접수"],
    datasets: [
      {
        data: [58, 42],
        label: false,
        backgroundColor: ["#019EF7", "#EFF2F5"],
        borderRadius: 10,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    title: {
      // display: false,
    },
    // 도넛 두께 설정
    cutout: "85%",
  },
  // plugin: [centerText],
});

// function updatePercent() {
//   doughnutChart.data.datasets[0].data.push(5);
//   doughnutChart.updatePercent();
//   console.log("test");
// }

window.chartColors = {
  col_primary: "#F8A92F",
  col_grey: "#EBEBEB",
};

var summary = document.getElementById("summary_chart").getContext("2d");

var stackedChart = new Chart(summary, {
  type: "bar",
  data: {
    labels: ["김길동", "홍길동", "이하니", "한송이", "고영희"],
    datasets: [
      {
        type: "bar",
        label: "배정 건",
        backgroundColor: window.chartColors.col_primary,
        stack: false,
        data: [10, 34, 10, 5, 30, 15],
        border: false,
        borderRadius: 4,
      },
      {
        type: "bar",
        label: "처리 건",
        backgroundColor: window.chartColors.col_grey,
        stack: true,
        data: [3, 13, 22, 5, 40, 15],
        borderRadius: 4,
        border: false,
        borderRadius: 4,
      },
    ],
  },
  options: {
    // 종횡비 유지 설정
    maintainAspectRatio: false,
    responsive: true,
    maxBarThickness: 15,
    tooltips: {
      mode: "index",
      intersect: true,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        // y축에 대한 가로 선에 대한 설정
        ticks: {
          color: "#828282",
          beginAtZero: true,
          // y축 눈금 단위 설정
          stepSize: 10,
        },
        // y축 최대 값 설정
        max: 50,
        // y축의 간격을 조정하는 설정
        afterDataLimits: (scale) => {
          scale.max = scale.max * 1;
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: true,
        color: "red",
        anchor: "end",
        align: "-135",
        offset: 1,
      },
    },
    responsive: false,
  },
});
