let asideBtn = document.querySelector('.aside-btn');
let aside = document.querySelector('.aside');
let backdrop = document.querySelector('.__backdrop');


asideBtn.addEventListener('click' , () => {
    aside.classList.add('show');
    backdrop.classList.add('offcanvas-backdrop');
    backdrop.classList.add('show');

});

backdrop.addEventListener('click' , () => {
    aside.classList.remove('show');
    backdrop.classList.remove('offcanvas-backdrop');
    backdrop.classList.remove('show');
});

// char js 
const labels = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      borderRadius: '6',
      data: [0, 10, 5, 2, 20, 30, 55, 34, 12, 5, 25, 29, 12, 31, 18, 2, 41, 53, 23, 14, 15],
    }, {
      label: 'My Second dataset',
      backgroundColor: '#9BDEAC',
      borderColor: '#9BDEAC',
      borderRadius: '6',
      data: [2, 5, 10, 12, 7, 34, 50, 4, 16, 15, 20, 39, 10, 29, 14, 12, 45, 54, 20, 4, 20],
    }
  ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false,
          }
        },
        y: {
          grid: {
            borderDash: [5],
            borderColor: "transparent",
          },
          ticks: {
            // forces step size to be 50 units
            stepSize: 20
          }
        },
      },
      plugins: {
        legend: {
          position: 'bottom',
          align: 'start',
          labels: {
            usePointStyle: true,
          }
        }
      }
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );


  // dataTable

  $(document).ready(function () {
    $('#example').DataTable({
      pageLength : 5,
    });
});

// myVisitor chart 


const vLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
];
const vData = {
  labels: vLabels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }, 
    {
      label: 'My Second dataset',
      backgroundColor: '#9BDEAC',
      borderColor: '#9BDEAC',
      data: [0, 14, 7, 25, 23, 35, 45],
    }
]
};

const vConfig = {
  type: 'line',
  data: vData,
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        }
      },
      y: {
        grid: {
          borderDash: [5],
          borderColor: "transparent",
        },
        ticks: {
          // forces step size to be 50 units
          stepSize: 10
        }
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
        align: 'start',
        labels: {
          usePointStyle: true,
        }
      }
    }
  }
};

const myVisitor = new Chart(
  document.getElementById('myVisitor'),
  vConfig
);