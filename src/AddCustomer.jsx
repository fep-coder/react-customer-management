import { useState } from "react";

function AddCustomer() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    return (
        <div className="col-6 mx-auto mt-5 ">
            <h1>Add Customer</h1>

            <form>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">
                        ID
                    </label>
                    <input
                        className="form-control"
                        id="id"
                        value={id}
                        onChange={(e) => setId(parseInt(e.target.value))}
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
            </form>
        </div>
    );
}

export default AddCustomer;
