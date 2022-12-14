import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { updateTicket } from "../../context/actions/action";
import { db } from "../../firebase";

interface ITicket {
    tick: {
        ticketID: string,
        ticketName: string,
        createdDate: string,
        createdTime: string,
        ticketPrice: number | string,
        comboPrice: number | string,
        comboQuantity: number | string,
        expireDate: string,
        expireTime: string,
        status: string
    }[]
}
type Ticket = {

    ticketID: string,
    ticketName: string,
    createdDate: string,
    createdTime: string,
    ticketPrice: number | string,
    comboPrice: number | string,
    comboQuantity: number | string,
    expireDate: string,
    expireTime: string,
    status: string
}

const CapNhatVe = (ticketpack: any) => {
    const dispatch = useDispatch()
    const [ticketid, setTicketID] = useState('')
    const [ticketname, setTicketName] = useState('')
    const [createdate, setCreateDate] = useState('')
    const [createtime, setCreateTime] = useState('')
    const [expiredate, setExpireDate] = useState('')
    const [expiretime, setExpireTime] = useState('')
    const [singleticket, setSingleticket] = useState<number | string>(0)
    const [comboticket, setComboTicket] = useState<number | string>(0)
    const [comboquantity, setComboQuantity] = useState<number | string>(0)
    const [Status, setStatus] = useState("")


    console.log(ticketpack.ticketID)
    const updateticket = async (
        id: string,
        ticketID: string,
        ticketName: string,
        createdDate: string,
        createdTime: string,
        expireDate: string,
        expireTime: string,
        ticketPrice: number | string,
        comboPrice: number | string,
        comboQuantity: number | string,
        status: string) => {
        const ticketDoc = doc(db, "tickets", id)
        const fields = { ticketName: ticketname, ticketID: ticketid, createdDate: createdate, createdTime: createtime, expireDate: expiredate, expireTime: expiretime, ticketPrice: singleticket, comboPrice: comboticket, comboQuantity: comboquantity, status: Status }
        await updateDoc(ticketDoc, fields);
        handleledit(fields)
        ticketpack.setCloseUpdate(true)
    }

    const handleledit = (ticket: Ticket) => {
        const action = updateTicket(ticket);
        dispatch(action);
    }

    return (
        <div className="taove">
            <h1 className="header1">C???p nh???t th??ng tin g??i v??</h1>
            <label className="tengoive">M?? s??? ki???n</label>
            <input type="text" className="nhaptengoive1" onChange={(e) => { setTicketID(e.target.value) }} />

            <label className="tensukien">T??n s??? ki???n</label>
            <input className="nhaptensukien" onChange={(e) => {setTicketName(e.target.value)}}/>

            <label className="ngayapdung">Ng??y ??p d???ng</label>

            <input type="date" className="ngayapdung1" onChange={(e) => { setCreateDate(e.target.value) }} />
            <input type="time" className="thoigianapdung" onChange={(e) => { setCreateTime(e.target.value) }} />

            <label className="ngayhethan">Ng??y h???t h???n</label>
            <input type="date" className="ngayhethan1" onChange={(e) => { setExpireDate(e.target.value) }} />
            <input type="time" className="thoigianhethan" onChange={(e) => { setExpireTime(e.target.value) }} />

            <label className="giaveapdung">G??a v?? ??p d???ng</label>
            <div className="vedon">
                <input type="checkbox" />
                <label >V?? l??? (vn??/v??) v???i gi??</label>
                <input className="nhapgiavedon" type="number" onChange={(e) => { setSingleticket(e.target.value) }} placeholder="G??a v??" />
                <label className="slash">/ v??</label>
            </div>

            <div className="vecombo">
                <input type="checkbox" />
                <label >Combo v?? v???i gi??</label>
                <input style={{ left: "10%" }} className="nhapgiavecombo" type="number" onChange={(e) => { setComboTicket(e.target.value) }} placeholder="G??a v??" />
                <label className="slash">/</label>
                <input className="soluongvecombo" type="number" onChange={(e) => { setComboQuantity(e.target.value) }} placeholder="G??a v??" />
                <label className="slash1">v??</label>
            </div>


            <div className="tinhtrang">
                <label>T??nh tr???ng</label>
                <select className="chontinhtrang" defaultValue="Ch??a ??p d???ng" onChange={(e) => setStatus(e.target.value)}>
                    <option value="??ang ??p d???ng">??ang ??p d???ng</option>
                    <option value="Ch??a ??p d???ng">T???t</option>
                </select>
            </div>

            
            <div className="button">
                <button className="huy" onClick={ticketpack.onClose}>H???y</button>
                <button className="luu" onClick={(e) => updateticket(ticketpack.ticketID, ticketname, ticketid, createdate, createtime, expiredate, expiretime, singleticket, comboticket, comboquantity, Status)}>L??u</button>
            </div>
        </div>

    );
}
export default CapNhatVe;