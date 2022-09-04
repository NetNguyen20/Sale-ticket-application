import Chart from 'react-apexcharts'


const options1 = {
  
    legend: {
        show: false
    },
    colors: ["#4F75FF", "#FF8A48"],
    dataLabels: {
        enabled: false
    },
    title: {
        text: "Gói gia đình"
    },
    
  

}

const series1 = [56024, 13568]


const options2 = {

    labels: ["Vé đã sử dụng", "Vé chưa sử dụng"],
    colors: ["#4F75FF", "#FF8A48"],
    dataLabels: {
        enabled: false
    },
    title: {
        text: "Gói sự kiện"
    },

}

const series2 = [30256, 28302]


function PieChart() {

    return (
        <div>

            <div className="donut1">
                <Chart options={options1} series={series1} type="donut" width="410px" />
            </div>
            <div className="donut2">
                <Chart options={options2} series={series2} type="donut" width="500px" />
            </div>

        </div>

    );
}

export default PieChart;