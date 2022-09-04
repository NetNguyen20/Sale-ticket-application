import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useReducer, useState } from "react";
import { CSVLink } from "react-csv"
import { db } from "../../firebase";


interface ITickets {
    ticks: {
        no: number,
        ticketID: string,
        UseDate: string,
        ReleaseDate: string,
        Gate: string
        tinhtrang: string
    }[]
}
const Doisoatve = () => {
    const [search, setSearch] = useState("")
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [tickets, setTickets] = useState<ITickets["ticks"]>([]);
    const packsCollectionRef = collection(db, "ticket");
    const [value, valueUpdate] = useReducer(x => x + 1, 0)

    useEffect(() => {

        const getTickets = async () => {
            const res = await getDocs(packsCollectionRef)
                .then((res) => setTickets(res.docs.map((doc: any) => ({ ...doc.data(), key: doc.id }))))
        };

        getTickets();
    }, [value]);

    useEffect(() => {
        setFilteredContacts(
            tickets.filter(
                (ticket) =>
                    ticket.ticketID.toString().includes(search.toString()) ||
                    ticket.UseDate.toString().includes(search.toString()) ||
                    ticket.tinhtrang.toString().includes(search.toString()) 

            )
        );
    }, [search, tickets]);

    const csvLink = {
        filename: "file.csv",
        data: tickets
    }


    return (
        <div>
            <div className="doisoatve">
                <h1 className="title-ticket">Đối soát vé</h1>
                <div style={{ top: "15%", left: "0%", backgroundColor: "#F7F7F8" }} className="search-navbar">
                    <input type="text" placeholder="Tìm bằng số vé" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <button className="chotdoisoat">
                    <p>Chốt đối soát</p>
                </button>

                <button className="csv2">
                    <CSVLink {...csvLink} >
                        <a>Xuất file (.csv)</a>
                    </CSVLink>
                </button>


                <table className="styled-table" style={{ width: "1049px" }}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Số vé</th>
                            <th>Ngày sử dụng</th>
                            <th>Tên loại vé</th>
                            <th>Cổng check - in</th>
                            <th style={{ width: "100px" }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredContacts.map((listticket) => {
                                return (
                                    <tr>
                                        <td>{listticket.no}</td>
                                        <td>{listticket.ticketID}</td>
                                        <td>{listticket.UseDate}</td>
                                        <td>Vé cổng</td>
                                        <td>{listticket.Gate}</td>
                                        <td>
                                            {listticket.tinhtrang === "Chưa đối soát" &&
                                                <div className="chuadoisoat">
                                                    {listticket.tinhtrang}
                                                </div>

                                            }
                                        
                                            {listticket.tinhtrang === "Đã đối soát" &&
                                                <div className="dadoisoat">
                                                    {listticket.tinhtrang}
                                                </div>
                                            }
                                        </td>

                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                <div className="centerPagination1">
                    <div className="pagination">
                        <a href="#">&laquo;</a>
                        <a href="#" className="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">&raquo;</a>
                    </div>
                </div>



            </div>

            <div className="locve-table">
                <h2 className="locve-title">Lọc vé</h2>
                <label className="tinhtrangdoisoat">Tình trạng đối soát</label>
                <div className="chontinhtrangdoisoat">
                    <div>
                        <input type="radio" value="" onChange={(e) => setSearch(e.target.value)}/>
                        <p>Tất cả</p>
                    </div>
                    <div>
                        <input type="radio" value="Đã đối soát" onChange={(e) => setSearch(e.target.value)}/>
                        <p>Đã đối soát</p>
                    </div>
                    <div>
                        <input type="radio" value="Chưa đối soát" onChange={(e) => setSearch(e.target.value)}/>
                        <p>Chưa đối soát</p>
                    </div>

                </div>
                <label className="loaivedoisoat">Loại vé</label>
                <p className="vecong">Vé cổng</p>
                <label className="tungaydoisoat">Từ ngày</label>
                <input className="tungay-text" type="date" />
                <label className="denngaydoisoat">Đến ngày</label>
                <input className="denngay-text"  type="date" onChange={(e) => setSearch(e.target.value)}/>

                <button className="locdoisoat">
                    Lọc
                </button>
            </div>
        </div>
    )
}

export default Doisoatve