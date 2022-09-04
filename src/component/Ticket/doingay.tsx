import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase";


const Doingay = (date:any)=>{
    const [changeday, setchangeday] = useState("")

    const updateTicket = async (id:string, days:string) => {
        const ticketDoc = doc(db,"ticket", id)
        const newFields ={days: changeday}
        await updateDoc(ticketDoc, newFields);
        date.setCloseChangeDate(true)
    }
    return(

        <div className="doingay-popup">
            
            <label className="doingaysudung">Đổi ngày sử dụng vé</label>
            
            <label className="changesove">Số vé</label>
            <p className="changesove-text">{date.sove}</p>

            <label className="changeloaive">Loại vé</label>
            <p className="changeloaive-text">{date.loaive}</p>

            <label className="changetensukien">Tên sự kiện</label>
            <p className="changetensukien-text">{date.tensukien}</p>

            <label className="changehansudung">Hạn sử dụng</label>
            <input type="date" className="changehansudung-text" defaultValue={date.hansudung} onChange={(e) =>setchangeday(e.target.value)}/>
            <div className="button-changeday">
                    <button className="changeday-huy" onClick={date.onClose}>Hủy</button>
                    <button className="changeday-luu" onClick={() => updateTicket(date.code, changeday)}>Lưu</button>
            </div>
        </div>
    )
}

export default Doingay