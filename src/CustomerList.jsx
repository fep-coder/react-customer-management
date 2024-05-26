import { Link } from "react-router-dom";
import { useGetCustomersQuery } from "./slices/customersApiSlice";

function CustomerList() {
    const { data: customers, isLoading, error } = useGetCustomersQuery();

    return (
        <div className="col">
            <h1>Customers</h1>
            <Link to="/add" className="btn btn-primary">
                Add new
            </Link>

            {isLoading ? (
                <p>Loading customer list...</p>
            ) : error ? (
                error
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subscribed</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.subscribed ? "Yes" : "No"}</td>
                                <td>
                                    <Link to={`/edit/${customer.id}`}>
                                        Edit
                                    </Link>{" "}
                                    | <a href="#">Delete</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default CustomerList;
