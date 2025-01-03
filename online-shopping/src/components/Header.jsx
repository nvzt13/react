import {React, useState} from 'react'
import logo from '../images/logo.jpeg'
import '../css/header.css'
import { FaRegMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Badge from '@mui/material/Badge';


const Header = () => {
	const [isDark, setIsdark] = useState(false);
	const changeTheme = () => {
		const root = document.getElementById("root");
		if(isDark) {
			root.style.backgroundColor = "#fff";
			root.style.color = "#000";
			setIsdark(false);
		}else {
			root.style.backgroundColor = "#000";
			root.style.color = "#fff";
			setIsdark(true);
		}
	}
  return (
   <div className="header">
		<div className="flex-row">
		<img src={logo} className="logo-eagle" alt="React logo" />
		<p className="nevzat">Nevzat Atalay</p>
		 </div>
		<div className="flex-row">
			<input type="text" placeholder="search" />
			{
				isDark ? <FaRegMoon className="icon" onClick={changeTheme} />:
			<FaSun className="icon" onClick={changeTheme} />
			}
			<Badge badgeContent={4} color="primary">
			<FaShoppingCart className="icon"  />
			</Badge>
		</div>
   </div>
  )
}

export default Header