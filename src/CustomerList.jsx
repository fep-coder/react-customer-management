import { Link } from "react-router-dom";
import {
    useDeleteCustomerMutation,
    useGetCustomersQuery,
} from "./slices/customersApiSlice";
import { toast } from "react-toastify";

function CustomerList() {
    const {
        data: customers,
        refetch,
        isLoading,
        error,
    } = useGetCustomersQuery();
    const [deleteCustomer] = useDeleteCustomerMutation();

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure?")) {
            try {
                await deleteCustomer(id);
                refetch();
                toast.success("Customer deleted successfully");
            } catch (error) {
                toast.error("Failed to delete customer");
                console.log(error);
            }
        }
    };

    return (
        <div className="col mt-5">
            <h1 className="text-center">Customers</h1>
            <Link to="/add" className="btn btn-primary">
                Add new
            </Link>

            {isLoading ? (
                <p>Loading customer list...</p>
            ) : error ? (
                error
            ) : (
                <table className="table table-light table-hover mt-3">
                    <thead>
                        <tr className="table-dark">
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
                                    <Link
                                        className="btn btn-sm btn-primary"
                                        to={`/edit/${customer.id}`}
                                    >
                                        Edit
                                    </Link>{" "}
                                    <button
                                        onClick={() =>
                                            handleDelete(customer.id)
                                        }
                                        className="btn btn-sm btn-danger"
                                    >
                                        Delete
                                    </button>
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
