import { useGetCustomersQuery } from "./slices/customersApiSlice";

function CustomerList() {
    const { data, isLoading, error } = useGetCustomersQuery();

    return (
        <div className="col">
            <h1>Customers</h1>
            <a href="#" className="btn btn-primary">
                Add new
            </a>

            {isLoading ? (
                <p>Loading...</p>
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
                        {data.map((customer) => (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.subscribed ? "Yes" : "No"}</td>
                                <td>
                                    <a href="#">Edit</a> |{" "}
                                    <a href="#">Delete</a>
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
