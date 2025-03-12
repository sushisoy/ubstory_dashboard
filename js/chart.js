// bar chart
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

// doughnut chart
const doughnut = document.getElementById("doughnutChart").getContext("2d");
const value = 42;
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
      annotation: {
        annotations: {
          dLabel: {
            type: "doughnutLabel",
            content: ({ chart }) => [
              "Total",
              chart.getDatasetMeta(0).total,
              "last 7 months",
            ],
            font: { size: 20 },
            color: ["black"],
          },
        },
      },
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
});
