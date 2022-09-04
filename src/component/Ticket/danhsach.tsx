import { collection, getDocs } from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import Locve from "./locve";
import Doingay from "./doingay";
import { CSVLink } from "react-csv"
import { db } from "../../firebase";
import Tat from "../../image/tat.png"
import Apdung from "../../image/apdung.png"
import Dasudung from "../../image/dasudung.png"
import Loc from "../../image/locve.png"
import Change from "../../image/changeday.png"

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

const Danhsachve = (props) => {
  const [value, valueUpdate] = useReducer(x => x + 1, 0)

  const [tickets, setTickets] = useState<ITickets["ticks"]>([]);
  const packsCollectionRef = collection(db, "ticket");
  const [filteredContacts, setFilteredContacts] = useState([]);

  const [search, setSearch] = useState("")
 

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

          ticket.ticketID.toString().includes(search.toString())


      )
    );
  }, [search, tickets]);
  const [openlocve, setopenlocve] = useState(false)
  const popuplocve = () => {
    setopenlocve(!openlocve)
    valueUpdate()
  }




  const csvLink = {
    filename: "file.csv",
    data: tickets
  }


  const [ticketcode, setticketcode] = useState<number>(0)
  const [openchange, setopenchangeday] = useState(false)
  const [sove, setsove] = useState("")
  const [loaive, setloaive] = useState("")
  const [tensukien, settensukien] = useState("")
  const [hansudung, sethansudung] = useState("")
  const popupchangeday = (id:any,sove:any, loaive:any, tensukien:any, hansudung:any) => {
    setopenchangeday(!openchange);
    setticketcode(id)
    setsove(sove)
    setloaive(loaive)
    settensukien(tensukien)
    sethansudung(hansudung)
    valueUpdate()
  }



  return (
    <div className="danhsachgoive">
      <h1 className="title-ticket">Danh sách vé</h1>
      <div style={{ top: "15%", left: "0%", backgroundColor: "#F7F7F8" }} className="search-navbar">
        <input type="text" placeholder="Tìm bằng số vé" onChange={(e) => setSearch(e.target.value)} />
      </div>

      <button className="locve" onClick={() => setopenlocve(true)}>
        <img src={Loc} />
        <p>Lọc vé</p>
      </button>
      <button className="csv1">
        <CSVLink {...csvLink} >
          <a>Xuất file (.csv)</a>
        </CSVLink>
      </button>


      <table className="styled-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Booking code</th>
            <th>Số vé</th>
            <th>Tên sự kiện</th>
            <th>Tình trạng sử dụng</th>
            <th>Ngày sử dụng</th>
            <th>Ngày xuất vé</th>
            <th>Cổng check - in</th>
            <th style={{width:"100px"}}></th>
          </tr>
        </thead>
        <tbody>
          {
            filteredContacts.map((listticket) => {
              return (
                <tr>
                  <td>{listticket.no}</td>
                  <td>{listticket.Code}</td>
                  <td>{listticket.ticketID}</td>
                  <td>{listticket.ticketname}</td>
                  <td>
                    {listticket.Status === "Chưa sử dụng" &&
                      <div className="chuasudung">
                        <img src={Apdung} /> &nbsp;
                        {listticket.Status}
                      </div>

                    }
                    {listticket.Status === "Đã sử dụng" &&
                      <div className="dasudung">
                        <img src={Dasudung} /> &nbsp;
                        {listticket.Status}
                      </div>
                    }
                    {listticket.Status === "Hết hạn" &&
                      <div className="hethan">
                        <img src={Tat} /> &nbsp;
                        {listticket.Status}
                      </div>
                    }

                  </td>
                  <td>{listticket.UseDate}</td>
                  <td>{listticket.ReleaseDate}</td>
                  <td>{listticket.Gate}</td>
                  <td><button className="buttonchange" onClick={()=>{popupchangeday(listticket.id, listticket.sove, listticket.loaive, listticket.tensukien, listticket.hansudung)}}>
                        <img src={Change} />
                      </button>

                  </td>

                </tr>
              )
            })
          }

        </tbody>
      </table>


      <div className="centerPagination">
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

      {!openchange && openlocve &&
        <Locve onClose={popuplocve} setCloseCreate={popuplocve} ticketLength={tickets.length} />
      }
      {!openlocve && openchange &&
        <Doingay onClose={popupchangeday} setClosedoingay={popupchangeday} Code={ticketcode} sove= {sove} loaive= {loaive} tensukien= {tensukien} hansudung= {hansudung} />

      }

    </div>
  );
}

export default Danhsachve