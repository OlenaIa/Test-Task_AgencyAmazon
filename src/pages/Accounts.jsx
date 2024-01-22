import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllAccounts, selectAccountsByPage } from '../redux/accounts/accountsSelector';
import { useEffect, useState } from 'react';
import { getAllAccountsThunk, getAccountsThunk, getProfilesByAccountIdThank, LIMIT } from '../redux/accounts/operationAccounts';
import { NavLink } from 'react-router-dom';

const Accounts = () => {
    const allAccounts = useSelector(selectAllAccounts);
    const accountsByPage = useSelector(selectAccountsByPage);
    const dispatch = useDispatch();

    const [page, setPage] = useState(0)
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [isLoadLess, setIsLoadLess] = useState(true);
    console.log('page =>', page);
    console.log('isLoadMore =>', isLoadMore);
    console.log('isLoadLess =>', isLoadLess);


    useEffect(() => {
        dispatch(getAllAccountsThunk())
    }, [dispatch]);
    const totalPage = allAccounts.length / LIMIT;

    useEffect(() => {
        if (page === 0) {
            setPage(page + 1)
            return;
        };
        if (page > 1) {
            setIsLoadLess(false);
        };
        if (page === totalPage) {
            setIsLoadMore(true);
        };
        dispatch(getAccountsThunk(page))
    }, [dispatch, page, totalPage]);

    const onClickAccountId = (accountId) => {
        console.log('click onClickAccountId', accountId);
dispatch(getProfilesByAccountIdThank(accountId))
    };

    
    const onClickLoadMore = () => {
        if (page === totalPage - 1) {
            setIsLoadMore(true);
        };
        if (page > 1) {
            setIsLoadLess(false);
        };
        setPage(page + 1)
    };

    const onClickLoadLess = () => {
            if (page < totalPage + 1) {
            setIsLoadMore(false);
        };

        if (page > 2) {
            setIsLoadLess(false);
        };
        if (page === 2) {
            setIsLoadLess(true);
        };
        setPage(page - 1)
    };

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
                    {accountsByPage?.map((acc, index) =>
                        <tr key={acc.accountId}>
                            <th scope="row">{index + 1 + (page*10 - 10)}</th>
                            <td onClick={() => onClickAccountId(acc.accountId)}><NavLink className="btn btn-secondary" role="button" to="/profiles">{acc.accountId}</NavLink></td>
                            <td>{acc.email}</td>
                            <td>{acc.authToken}</td>
                            <td>{acc.creationDate}</td>
                        </tr>)}

                </tbody>
            </table>
            {!isLoadMore && <button type="button" class="btn btn-primary btn-lg" onClick={onClickLoadMore}>Load more</button>}
            {!isLoadLess && <button type="button" class="btn btn-warning btn-lg" onClick={onClickLoadLess}>Load less</button>}
        </div>
    )
};

export default Accounts;