import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllAccountsThunk } from '../redux/accounts/operationAccounts';
import { Filters } from 'components/Filters/Filter';
import { AccountsList } from 'components/AccountsList/AccountsList';

const Accounts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllAccountsThunk())
    }, [dispatch]);

    return (
        <div className='container'>
            <h2>Accounts</h2>
            <Filters/>
            <AccountsList />
        </div>
    )
};

export default Accounts;