function CustomerList() {
    return (
        <div className="col">
            <h1>Customers</h1>
            <a href="#" className="btn btn-primary">
                Add new
            </a>

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
                    <tr>
                        <td>1</td>
                        <td>John Smith</td>
                        <td>john@gmail.com</td>
                        <td>
                            <a href="#">Edit</a> | <a href="#">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>John Smith</td>
                        <td>john@gmail.com</td>
                        <td>
                            <a href="#">Edit</a> | <a href="#">Delete</a>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>John Smith</td>
                        <td>john@gmail.com</td>
                        <td>
                            <a href="#">Edit</a> | <a href="#">Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CustomerList;
