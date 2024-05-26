import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="container">
            <div className="row">
                <Outlet />
            </div>
            <ToastContainer />
        </div>
    );
}

export default App;
