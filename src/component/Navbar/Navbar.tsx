import React from "react";
import { NavLink, Link } from 'react-router-dom';
import bell from '../../image/bell.png'
import mail from '../../image/mail.png'
import img from '../../image/img.png'
import logo from '../../image/logo.png'
import search from '../../image/search.png'
import home from '../../image/home.png';
import manage from '../../image/manage.png';
import check from '../../image/control.png';
import setting from '../../image/setting.png';
const Navbar = (props: any) =>{

    return(
        <div>      
            <div className="search-navbar">
                <input type="text" placeholder="Search"/>
            </div>
            <div className="icon-navbar">
                <img src={mail} alt="" />
                <img src={bell} alt="" />
                <img src={img} alt="" />

            </div>

            <div className="menu">
                <div className="logo">
                    <img src={logo} />
                </div>
                <ul className="choose-menu">
                    <li className="nav-active">
                        <NavLink className="nav-link" to="/Page-dashboard">
                            <img src={home} alt="" />
                            Trang chủ
                        </NavLink>
                    </li>
                    <li className="nav">
                        <NavLink className="nav-link " to="/Page-danhsachve">
                            <img src={manage} alt="" />
                            Quản lý vé
                        </NavLink>
                    </li>
                    <li className="nav">
                        <NavLink className="nav-link" to="/Page-doisoatve">
                            <img src={check} alt="" />
                            Đối soát vé
                        </NavLink>
                    </li>
                    <li className="nav">
                        <NavLink className="nav-link" to="/Page-danhsachgoive">
                            <img src={setting} alt="" />
                            Cài đặt
                        </NavLink>
                        <NavLink className="nav-link-child" to="/Page-danhsachgoive">Gói dịch vụ</NavLink>
                    </li>

                </ul>

            </div>
        </div>
    )
}



export default Navbar