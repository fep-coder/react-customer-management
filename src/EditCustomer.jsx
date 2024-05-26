import { useEffect, useState } from "react";
import {
    useGetCustomerQuery,
    useUpdateCustomerMutation,
} from "./slices/customersApiSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditCustomer() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);

    const { id: customerId } = useParams();

    const navigate = useNavigate();

    const {
        data: customer,
        isLoading,
        error,
    } = useGetCustomerQuery(customerId);

    const [updateCustomer, { isLoading: loadingUpdate }] =
        useUpdateCustomerMutation();

    useEffect(() => {
        if (customer) {
            setId(customer.id);
            setName(customer.name);
            setEmail(customer.email);
            setSubscribed(customer.subscribed);
        }
    }, [customer]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateCustomer({ id, name, email, subscribed });
            toast.success("Customer updated successfully");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Failed to update customer");
        }
    };

    return (
        <div className="col-6 mx-auto mt-5 ">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    <h1>Edit Customer</h1>

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
                                onChange={(e) =>
                                    setSubscribed(e.target.checked)
                                }
                            />
                        </div>
                        <button className="btn btn-primary">Edit</button>
                        <Link to="/" className="btn btn-secondary ms-2">
                            Back to List
                        </Link>
                    </form>
                </>
            )}
        </div>
    );
}

export default EditCustomer;
