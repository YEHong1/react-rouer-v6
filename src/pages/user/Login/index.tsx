// 登录界面
// @ts-ignore
import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';

const Login = ()=>{

	const navigate = useNavigate();

	return(
		<div className={styles.container}>
			<span onClick={()=> navigate('/home')}>登录界面</span>
		</div>
	)
}

export default Login;