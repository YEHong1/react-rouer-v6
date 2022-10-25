import { useRoutes } from 'react-router-dom';
import router from "./routers";

const App = ()=>{
	return useRoutes(router)
}

export default App;