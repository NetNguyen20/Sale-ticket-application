import LineChart from "./linechart";

const DashBoard = () =>{
    return(
    <div className="chart">
        <h1 className="title">Thống kê</h1>
        <LineChart/>
        
        <div> 
            <p className="doanhthu">Tổng doanh thu theo tuần</p>
            <h1 className="sotien">525.145.000</h1>
            <p className="dong">đồng</p>
        </div>
       
     
    </div>)
}

export default DashBoard;