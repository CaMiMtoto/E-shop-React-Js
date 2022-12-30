import {Header} from "./components/Header.jsx";
import './App.scss'
import {Outlet} from "react-router-dom";

function App() {

    return (
        <div className="tw-bg-slate-100 min-vh-100 tw-pt-[60px]">
            <Header/>
            <Outlet/>
        </div>
    )
}

export default App;
