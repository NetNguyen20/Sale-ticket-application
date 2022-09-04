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
            <h1 className="header1">Cập nhật thông tin gói vé</h1>
            <label className="tengoive">Mã sự kiện</label>
            <input type="text" className="nhaptengoive1" onChange={(e) => { setTicketID(e.target.value) }} />

            <label className="tensukien">Tên sự kiện</label>
            <input className="nhaptensukien" onChange={(e) => {setTicketName(e.target.value)}}/>

            <label className="ngayapdung">Ngày áp dụng</label>

            <input type="date" className="ngayapdung1" onChange={(e) => { setCreateDate(e.target.value) }} />
            <input type="time" className="thoigianapdung" onChange={(e) => { setCreateTime(e.target.value) }} />

            <label className="ngayhethan">Ngày hết hạn</label>
            <input type="date" className="ngayhethan1" onChange={(e) => { setExpireDate(e.target.value) }} />
            <input type="time" className="thoigianhethan" onChange={(e) => { setExpireTime(e.target.value) }} />

            <label className="giaveapdung">Gía vé áp dụng</label>
            <div className="vedon">
                <input type="checkbox" />
                <label >Vé lẻ (vnđ/vé) với giá</label>
                <input className="nhapgiavedon" type="number" onChange={(e) => { setSingleticket(e.target.value) }} placeholder="Gía vé" />
                <label className="slash">/ vé</label>
            </div>

            <div className="vecombo">
                <input type="checkbox" />
                <label >Combo vé với giá</label>
                <input style={{ left: "10%" }} className="nhapgiavecombo" type="number" onChange={(e) => { setComboTicket(e.target.value) }} placeholder="Gía vé" />
                <label className="slash">/</label>
                <input className="soluongvecombo" type="number" onChange={(e) => { setComboQuantity(e.target.value) }} placeholder="Gía vé" />
                <label className="slash1">vé</label>
            </div>


            <div className="tinhtrang">
                <label>Tình trạng</label>
                <select className="chontinhtrang" defaultValue="Chưa áp dụng" onChange={(e) => setStatus(e.target.value)}>
                    <option value="Đang áp dụng">Đang áp dụng</option>
                    <option value="Chưa áp dụng">Tắt</option>
                </select>
            </div>

            
            <div className="button">
                <button className="huy" onClick={ticketpack.onClose}>Hủy</button>
                <button className="luu" onClick={(e) => updateticket(ticketpack.ticketID, ticketname, ticketid, createdate, createtime, expiredate, expiretime, singleticket, comboticket, comboquantity, Status)}>Lưu</button>
            </div>
        </div>

    );
}
export default CapNhatVe;