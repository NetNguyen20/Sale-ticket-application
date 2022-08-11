import ApexCharts, { Props } from 'react-apexcharts';


const options = {
    chart: {

        height: 0,
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100],
                

            }
        },
    },
    colors: ["#FF993C"],
    xaxis: {
        categories: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN']
    },
    dataLabels: {
        enabled: false
    },
  

    
};
const series = [
    {
        data: [150000000, 175000000, 190000000, 230000000, 200000000, 250000000, 195000000]
    }

];



function LineChart() {
  return (
    <div>
      <div className="line-chart" >                
                <label>Bảng thống kê theo ngày</label>
                <p>Doanh thu</p>
                <ApexCharts
                    type="area"
                    options={options}
                    series={series}
                    width={1407}
                    height={394.44}
                />
            </div>
    </div>

  );
}

export default LineChart;