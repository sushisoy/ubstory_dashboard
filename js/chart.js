// chart.js

const ctx = document.getElementById("barChart").getContext("2d");
const myChart = new Chart(ctx, {
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
          stepSize: -10,
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
