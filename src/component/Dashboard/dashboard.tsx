import LineChart from "./linechart";
import PieChart from "./piechart";
const DashBoard = () =>{
    return(
    <div className="chart">
        <h1 className="title">Thống kê</h1><br />
        <br />
        <div><LineChart/></div>
        
        <div> 
            <p className="doanhthu">Tổng doanh thu theo tuần</p>
            <h1 className="sotien">525.145.000</h1>
            <p className="dong">đồng</p>
        </div>
        
        <div className="lichdashboard">
            <input type="date" />

        </div>

        <div><PieChart/></div>
        
     
    </div>)
}

export default DashBoard;