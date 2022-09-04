import ApexCharts from 'react-apexcharts';


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
        data: [145000000, 175000000, 185000000, 236000000, 220000000, 252000000, 196000000]
    }

];



function LineChart() {
  return (
    <div>
        <div className="line-chart" >                
                <p>Doanh thu</p>
                <ApexCharts
                    type="area"
                    options={options}
                    series={series}
                    width={1527}
                    height={394.44}
                />
        </div>
    </div>

  );
}

export default LineChart;