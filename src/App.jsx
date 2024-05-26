import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="container">
            <div className="row">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
