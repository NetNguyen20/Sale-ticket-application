import React, { useEffect, useState } from "react";

interface ITickets {
    ticks: {
      id: string,
      no: number,
      Code: string,
      ticketID: string,
      ticketname: string,
      Status: string,
      UseDate: string,
      ReleaseDate: string,
      Gate: string
    }[]
  }

const Locve = (loc: any) => {

    const [tickets, setTickets] = useState<ITickets["ticks"]>([]);
    const [search, setSearch] = useState("")
    const [filteredContacts, setFilteredContacts] = useState([]);

    useEffect(() => {
        setFilteredContacts(
          tickets.filter(
            (ticket) =>
              ticket.no.toString().includes(search.toString()) ||
              ticket.Code.toString().includes(search.toString()) ||
              ticket.ticketID.toString().includes(search.toString()) ||
              ticket.ticketname.toString().includes(search.toString()) ||
              ticket.Status.toString().includes(search.toString()) ||
              ticket.UseDate.toString().includes(search.toString()) ||
              ticket.ReleaseDate.toString().includes(search.toString()) ||
              ticket.Gate.toString().includes(search.toString())
    
          )
        );
      }, [search, tickets]);

    return (
        <div className="locve-popup">
            <h1 className="tieudelocve">Lọc vé</h1>
            <label className="tungay" >Từ ngày</label>
            <input type="date" className="nhaptungay" onChange={(e) => setSearch(e.target.value)}/>
            <label className="denngay">Đến ngày</label>
            <input type="date" className="nhapdenngay" onChange={(e) => setSearch(e.target.value)} />
            <label className="tinhtrangsudung1">Tình trạng sử dụng</label>


            <div className="chontinhtranglocve">
                <div className="chontatca">
                    <input type="radio" className="chontatca1" onChange={(e) => setSearch(e.target.value)}/>
                    <label>Tất cả</label>
                </div>
                <div className="chondasudung">
                    <input type="radio" className="chondasudung1" onChange={(e) => setSearch(e.target.value)}/>
                    <label>Đã sử dụng</label>
                </div>
                <div className="chonchuasudung">
                    <input type="radio" className="chonchuasudung1" onChange={(e) => setSearch(e.target.value)}/>
                    <label>Chưa sử dụng</label>
                </div>
                <div className="chonhethan">
                    <input type="radio" className="chonhethan1" onChange={(e) => setSearch(e.target.value)}/>
                    <label>Hết hạn</label>
                </div>
            </div>
            

            <label className="congcheckin">Cổng Check - in</label>

            <div className="tatcacong">
                <input type="checkbox" className="tatcacong1" onChange={(e) => setSearch(e.target.value)}/>
                <label>Tất cả</label>
            </div>
            <div className="cong1">
                <input type="checkbox" className="choncong1" onChange={(e) => setSearch(e.target.value)}/>
                <label>Cổng 1</label>

            </div>
            <div className="cong2">
                <input type="checkbox" className="choncong2" onChange={(e) => setSearch(e.target.value)}/>
                <label>Cổng 2</label>

            </div>
            <div className="cong3">
                <input type="checkbox" className="choncong3" onChange={(e) => setSearch(e.target.value)}/>
                <label>Cổng 3</label>

            </div>
            <div className="cong4">
                <input type="checkbox" className="choncong4" onChange={(e) => setSearch(e.target.value)}/>
                <label>Cổng 4</label>

            </div>
            <div className="cong5">
                <input type="checkbox" className="choncong5" onChange={(e) => setSearch(e.target.value)}/>
                <label>Cổng 5</label>

            </div>

            <div className="loc">
                <button  className="huy" onClick={loc.onClose}>Lọc</button>
            </div>


        </div>
    )

}


export default Locve