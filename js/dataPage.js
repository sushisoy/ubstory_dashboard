window.chartColors = {
  col_computer: "rgb(30, 86, 163)",
  col_network: "rgb(57, 119, 203)",
  col_printer: "rgb(106, 156, 225)",
  col_tablet: "rgb(166, 201, 242",
  col_etc: "rgb(221, 232, 254)",
};

var test = document.getElementById("stacked_chart").getContext("2d");

var stackedChart = new Chart(test, {
  type: "bar",
  data: {
    labels: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    datasets: [
      {
        type: "bar",
        label: "컴퓨터",
        backgroundColor: window.chartColors.col_computer,
        stack: "Stack 0",
        data: [20, 21, 14, 17, 10, 23, 10, 30, 12, 20, 20, 10],
        border: false,
      },
      {
        type: "bar",
        label: "네트워크",
        backgroundColor: window.chartColors.col_network,
        stack: "Stack 0",
        stacked: true,
        data: [1, 14, 11, 13, 17, 13, 16, 12, 20, 14, 10, 22],
        border: false,
      },
      {
        type: "bar",
        label: "복합기",
        backgroundColor: window.chartColors.col_printer,
        stack: "Stack 0",
        border: false,
        fill: true,
        data: [20, 14, 11, 13, 17, 12, 26, 20, 10, 24, 10, 32],
      },
      {
        type: "bar",
        label: "태블릿",
        backgroundColor: window.chartColors.col_tablet,
        stack: "Stack 0",
        border: false,
        fill: true,
        data: [11, 24, 11, 13, 17, 12, 16, 12, 10, 14, 20, 5],
      },
      {
        type: "bar",
        label: "기타",
        backgroundColor: window.chartColors.col_etc,
        stack: "Stack 0",
        border: false,
        fill: true,
        data: [11, 24, 21, 10, 27, 12, 16, 12, 10, 14, 10, 15],
      },
    ],
  },
  options: {
    // 종횡비 유지 설정
    maintainAspectRatio: false,
    responsive: true,
    maxBarThickness: 30,
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
          stepSize: 20,
        },
        // y축 최대 값 설정
        max: 80,
        // y축의 간격을 조정하는 설정
        afterDataLimits: (scale) => {
          scale.max = scale.max * 1.4;
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          // 범례 도형 모양 설정, 원형은 true
          usePointStyle: false,
          padding: 30,
          font: {
            size: 20,
          },
        },
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

const container = document.getElementById("containerBody").getContext("2d");
const totalLables = stackedChart.data.labels.length;
if (totalLables > 7) {
  const newWidth = 1000 + (totalLables - 5) * 30;
  container.style.width = newWidth + "1500px";
}
