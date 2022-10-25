// 给主页面添加公共逻辑的地方
import React from "react";
import { Outlet } from 'react-router-dom';

const LayoutPage = ()=>{

	return(
		<>
			<p>Hello LayoutPage</p>
			<Outlet/>
		</>
	)
}

export default LayoutPage;