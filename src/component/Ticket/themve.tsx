import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import { addTicket } from '../../context/actions/action'

interface ITicket {
    tick: {
        id: string,
        no: number,
        ticketID: string,
        ticketName: string,
        createdDate: string,
        createdTime: string,
        ticketPrice: number | string,
        comboPrice: number | string,
        comboQuantity: number | string,
        expireDate: string,
        expireTime: string,
        status: string,
    }[]
}

type Ticket = {
    id: string,
    no: number,
    ticketID: string,
    ticketName: string,
    createdDate: string,
    createdTime: string,
    ticketPrice: number | string,
    comboPrice: number | string,
    comboQuantity: number | string,
    expireDate: string,
    expireTime: string,
    status: string,
}
const Themve = (ticketpack: any) => {
    const dispatch = useDispatch();
    const packCollectionRef = collection(db, "tickets")
    const [status, setStatus] = useState("")
    const [choosedate, setChoosedate] = useState(false)
    const [newTicket, setNewTicket] = useState<Ticket>()
    const [tickets, setTickets] = useState<ITicket["tick"]>([])
    const [ticketname, setTicketName] = useState('')
    const [createDate, setCreateDate] = useState('')
    const [createTime, setCreateTime] = useState('')
    const [expireDate, setExpireDate] = useState('')
    const [expiretime, setExpireTime] = useState('')
    const [singleticket, setSingleticket] = useState<number | string>(0)
    const [comboticket, setComboTicket] = useState<number | string>(0)
    const [comboquantity, setComboQuantity] = useState<number | string>(0)


    const ticketsCollectionRef = collection(db, "tickets");
    const createTicket = async (ticketname: string) => {
        try {
            await addDoc(ticketsCollectionRef, {
                no: Number(ticketpack.ticketLength) + 1,
                ticketID: "ALT20210501",
                ticketName: ticketname,
                createdDate: createDate,
                createdTime: createTime,
                expireDate: expireDate,
                expireTime: expiretime,
                ticketPrice: singleticket,
                comboPrice: comboticket,
                comboQuantity: comboquantity,
                status: status
            })
            console.log("success")
        } catch (err: any) {
            console.error(err);
            alert(err.message);
        }
    }


    const handleAddticket = () => {
        const action = addTicket(newTicket);
        console.log(action)
        dispatch(action)
        setNewTicket(newTicket)
        console.log(newTicket)
        createTicket(ticketname)
        ticketpack.setCloseCreate(true)
    }

    useEffect(() => {

        const getTickets = async () => {
            const res = await getDocs(packCollectionRef)
                .then((res) => setTickets(res.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))))
        };
        getTickets();
    }, []);

    
    

    return (
        <div>
            <div className="taove">
                <h1 className="header">Thêm gói vé</h1>
                <label className="tengoive">Tên gói vé</label>
                <input type="text" className="nhaptengoive" onChange={(e) => { setTicketName(e.target.value) }} />

                <label className="ngayapdung">Ngày áp dụng</label>

                <input type="date" className="ngayapdung1" onChange={(e) => { setCreateDate(e.target.value) }} />
                <input type="time" className="thoigianapdung" onChange={(e) => { setCreateTime(e.target.value) }} />

                <label className="ngayhethan">Ngày hết hạn</label>
                <input type="date" className="ngayhethan1" onChange={(e) => { setExpireDate(e.target.value) }}/>
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
                    <input style={{left: "10%"}} className="nhapgiavecombo" type="number" onChange={(e) => { setComboTicket(e.target.value) }} placeholder="Gía vé" />
                    <label className="slash">/</label>
                    <input className="soluongvecombo" type="number" onChange={(e) => { setComboQuantity(e.target.value) }} placeholder="Gía vé" />
                    <label className="slash1">vé</label>
                </div>


                <div className="tinhtrang">
                    <label>Tình trạng</label>
                    <select className="chontinhtrang" onChange={(e) => setStatus(e.target.value)}>
                        <option value="Đang áp dụng">Đang áp dụng</option>
                        <option value="Tắt">Tắt</option>
                    </select>
                </div>

                <div className="button">
                    <button className="huy" onClick={ticketpack.onClose}>Hủy</button>
                    <button className="luu" onClick={handleAddticket}>Lưu</button>
                </div>

            </div>

        </div>
    )
}

export default Themve