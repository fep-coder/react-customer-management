import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound.jsx";
import AddCustomer from "./AddCustomer.jsx";
import CustomerList from "./CustomerList.jsx";
import EditCustomer from "./EditCustomer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<CustomerList />} />
                        <Route path="/add" element={<AddCustomer />} />
                        <Route path="/edit/:id" element={<EditCustomer />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
