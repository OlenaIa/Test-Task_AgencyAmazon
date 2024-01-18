import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccounts } from '../redux/accounts/accountsSelector';
import { useEffect } from 'react';
import { getAccountsThunk } from '../redux/accounts/operationAccounts';

const Accounts = () => {
    const accounts = useSelector(selectAccounts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAccountsThunk())
    }, [dispatch]);

    return (
        <div className='container'>
            <h2>Accounts</h2>
            <table className="table table-striped table-bordered">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">AccountId</th>
                        <th scope="col">Email</th>
                        <th scope="col">AuthToken</th>
                        <th scope="col">CreationDate</th>

                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {accounts?.map((acc, index) =>
                        <tr key={acc.accountId}>
                            <th scope="row">{index + 1}</th>
                            <td>{acc.accountId}</td>
                            <td>{acc.email}</td>
                            <td>{acc.authToken}</td>
                            <td>{acc.creationDate}</td>

                        </tr>)}

                </tbody>
            </table>
        </div>
    )
};

export default Accounts;