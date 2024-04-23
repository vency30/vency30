import React from 'react'
import ReactApexChart from 'react-apexcharts'


const Chart = () => {
  const data = {
          
        series: [14, 23, 21, 12, 15, 10, 12, 17, 21],
        options: {
          chart: {
            type: 'polarArea',
          },
          stroke: {
            colors: ['#fff']
          },
          fill: {
            opacity: 0.8
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
    }
  return (
    <>
       <div>
              <div id="chart">
                <ReactApexChart options={data.options} series={data.series} type="polarArea" height={'500px'}/>
              </div>
              <div id="html-dist"></div>
            </div>
    </>
  )
}

export default Chart
