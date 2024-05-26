import { useState } from "react";
import { useAddCustomerMutation } from "./slices/customersApiSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddCustomer() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const navigate = useNavigate();

    const [addCustomer] = useAddCustomerMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addCustomer({ id, name, email, subscribed });
            toast.success("Customer added successfully");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Failed to add customer");
        }
    };

    return (
        <div className="col-6 mx-auto mt-5 ">
            <h1>Add Customer</h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">
                        ID
                    </label>
                    <input
                        className="form-control"
                        id="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Subscribed</label>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="subscribed"
                        checked={subscribed}
                        onChange={(e) => setSubscribed(e.target.checked)}
                    />
                </div>
                <button className="btn btn-primary">Add</button>
                <Link to="/" className="btn btn-secondary ms-2">
                    Back to List
                </Link>
            </form>
        </div>
    );
}

export default AddCustomer;
