import React from "react";
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './global.less';
import 'antd/dist/antd.less';

const root = ReactDom.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>
)