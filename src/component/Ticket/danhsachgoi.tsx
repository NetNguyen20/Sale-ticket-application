import { collection, getDocs, Timestamp } from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import edit from "../../image/edit.png";
import Themve from "./themve";
import Capnhatve from "./capnhatve";
import { CSVLink } from "react-csv"
import { db } from "../../firebase";
import Tat from "../../image/tat.png"
import Apdung from "../../image/apdung.png"
import Dasudung from "../../image/dasudung.png"

interface ITicket {
  tick: {
    id: string,
    no: number,
    ticketID: string,
    ticketName: string,
    createdDate: string,
    createdTime: string,
    ticketPrice: number,
    comboPrice: number,
    comboQuantity: number,
    expireDate: string,
    expireTime: string,
    status: string,
  }[]
}
type Ticket = {
  tick: {
    id: string,
    no: number,
    ticketID: string,
    ticketName: string,
    createdDate: string,
    createdTime: string,
    ticketPrice: number,
    comboPrice: number,
    comboQuantity: number,
    expireDate: string,
    expireTime: string,
    status: string,
  }
}

const DanhSachGoiVe = () => {
  const [value, valueUpdate] = useReducer(x => x + 1, 0)

  const [tickets, setTickets] = useState<ITicket["tick"]>([]);
  const packsCollectionRef = collection(db, "tickets");
  const [ticketId, setTicketId] = useState<number>(0)
  const [filteredContacts, setFilteredContacts] = useState([]);

  const [search, setSearch] = useState("")



  useEffect(() => {

    const getTickets = async () => {
      const res = await getDocs(packsCollectionRef)
        .then((res) => setTickets(res.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))))
    };

    getTickets();
  }, [value]);

  useEffect(() => {
    setFilteredContacts(
      tickets.filter(
        (ticket) =>
          ticket.ticketName.toString().includes(search.toString()) ||
          ticket.ticketPrice.toString().includes(search.toString()) ||
          ticket.createdDate.toString().includes(search.toString()) ||
          ticket.createdTime.toString().includes(search.toString()) ||
          ticket.comboPrice.toString().includes(search.toString()) ||
          ticket.status.toString().includes(search.toString())

      )
    );
  }, [search, tickets]);


  const [openCreate, setOpenCreate] = useState(false)
  const [openUpdate, setOpenUpdate] = useState(false)

  const popupcreateticket = () => {
    setOpenCreate(!openCreate)
    valueUpdate()
  }

  const popupcreateupdate = () => {
    setOpenUpdate(!openUpdate)
    valueUpdate()
  }

  const openPopupUpdate = (ticketID: any) => {
    setOpenUpdate(true);
    setTicketId(ticketID);
  }

  const csvLink = {
    filename: "file.csv",
    data: tickets
  }


  return (
    <div className="danhsachgoive">
      <h1 className="title-ticket">Danh sách gói vé</h1>
      <div style={{ top: "15%", left: "0%", backgroundColor: "#F7F7F8" }} className="search-navbar">
        <input type="text" placeholder="Tìm bằng số vé" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <button className="csv">
        <CSVLink {...csvLink} >
          <a>Xuất file (.csv)</a>
        </CSVLink>
      </button>
      <button className="themgoive" onClick={() => setOpenCreate(true)}>
        <p>Thêm gói vé</p>
      </button>




      <table className="styled-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã gói</th>
            <th>Tên gói vé</th>
            <th>Ngày áp dụng</th>
            <th>Ngày hết hạn</th>
            <th>Giá vé (VNĐ/Vé)</th>
            <th>Giá Combo (VNĐ/Combo)</th>
            <th>Tình trạng</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {
            filteredContacts.map((listticket) => {
              return (
                <tr>
                  <td>{listticket.no}</td>
                  <td>{listticket.ticketID}</td>
                  <td>{listticket.ticketName}</td>
                  <td>{listticket.createdDate} <br /> {listticket.createdTime}</td>
                  <td>{listticket.expireDate} <br /> {listticket.expireTime}</td>
                  <td>{listticket.ticketPrice} VNĐ</td>
                  <td>{listticket.comboPrice} / {listticket.comboQuantity} vé</td>
                  <td>
                    {listticket.status === "Đang áp dụng" &&
                      <div className="apdung">
                        <img src={Apdung} /> &nbsp;
                        {listticket.status}
                      </div>

                    }
                    {listticket.status === "Tắt" &&
                      <div className="tat">
                        <img src={Tat} /> &nbsp;
                        {listticket.status}
                      </div>
                    }

                  </td>
                  <td>
                    <button className="capnhat" onClick={() => { openPopupUpdate(listticket.id) }}>
                      <img src={edit} />
                      Cập nhật
                    </button>
                  </td>
                </tr>
              )
            })
          }

        </tbody>
      </table>
      {!openCreate && openUpdate &&
        <Capnhatve onClose={popupcreateupdate} setCloseUpdate={popupcreateupdate} ticketID={ticketId} />
      }
      {!openUpdate && openCreate &&
        <Themve onClose={popupcreateticket} setCloseCreate={popupcreateticket} ticketLength={tickets.length} />
      }

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

    </div>
  );
}

export default DanhSachGoiVe;