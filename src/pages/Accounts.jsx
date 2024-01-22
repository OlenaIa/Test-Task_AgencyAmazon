import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllAccounts, selectAccountsByPage } from '../redux/accounts/accountsSelector';
import { useEffect, useState } from 'react';
import { getAllAccountsThunk, getAccountsThunk, getProfilesByAccountIdThank, LIMIT } from '../redux/accounts/operationAccounts';
import { NavLink } from 'react-router-dom';
import { filterByEmailSet, filterByDateSet, selectFilterByEmail, selectFilterByDate } from '../redux/filter/filterSlice';

const Accounts = () => {
    const allAccounts = useSelector(selectAllAccounts);
    const accountsByPage = useSelector(selectAccountsByPage);
    const dispatch = useDispatch();

    const [page, setPage] = useState(0)
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [isLoadLess, setIsLoadLess] = useState(true);
    const [isChecked, setIsChecked] = useState(false)

    console.log('page =>', page);
    console.log('isLoadMore =>', isLoadMore);
    console.log('isLoadLess =>', isLoadLess);

    const filterEmail = useSelector(selectFilterByEmail);
    const filterDate = useSelector(selectFilterByDate);
console.log('filterDate', filterDate);

    const onChangeFilter = (event) => {
        console.log(event.currentTarget);
        const { type, value } = event.currentTarget;
        switch (type) {
            case 'email':
                        dispatch(filterByEmailSet(value))

                break;
        case 'date':
                        dispatch(filterByDateSet(value))

                break;
            default:
                break;
        }
    };

    const checkHandler = () => {
        setIsChecked(!isChecked)
        isChecked ? setIsLoadMore(false) : setIsLoadMore(true);
    };

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

    const lowerFilter = filterEmail.toLowerCase();
    const visibleAccounts = allAccounts.filter(({ email }) =>
        (email.toLowerCase().includes(lowerFilter)));
        const visibleAccountsByDate = visibleAccounts.filter(({ creationDate }) =>
        (creationDate.includes(filterDate)));
        console.log('visibleAccountsByDate', visibleAccountsByDate);
    
    return (
        <div className='container'>
            <h2>Accounts</h2>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                    checked={isChecked}
                    onChange={checkHandler}
                />
                <label className="form-check-label" for="flexCheckDefault">
                    All accounts  </label>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"
                                

                >Filter by Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput"
                    value={filterEmail}
                    onChange={onChangeFilter}
                    placeholder="Write Email" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label"
                >Sort by Data</label>
                <input type="date" className="form-control" id="exampleFormControlInput2"
                    value={filterDate}
                    onChange={onChangeFilter}
                    placeholder="Write Date: year-mm-dd" />
            </div>
            
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
                    {(filterEmail.length > 0 && filterEmail.length > 0) ? visibleAccountsByDate?.map((acc, index) =>
                            <tr key={acc.accountId}>
                                <th scope="row">{index + 1 + (page * 10 - 10)}</th>
                                <td onClick={() => onClickAccountId(acc.accountId)}><NavLink className="btn btn-secondary" role="button" to="/profiles">{acc.accountId}</NavLink></td>
                                <td>{acc.email}</td>
                                <td>{acc.authToken}</td>
                                <td>{acc.creationDate}</td>
                            </tr>) :
                    filterEmail.length > 0 ?
                        visibleAccounts?.map((acc, index) =>
                            <tr key={acc.accountId}>
                                <th scope="row">{index + 1 + (page * 10 - 10)}</th>
                                <td onClick={() => onClickAccountId(acc.accountId)}><NavLink className="btn btn-secondary" role="button" to="/profiles">{acc.accountId}</NavLink></td>
                                <td>{acc.email}</td>
                                <td>{acc.authToken}</td>
                                <td>{acc.creationDate}</td>
                            </tr>) :
                        isChecked ?
                            allAccounts?.map((acc, index) =>
                                <tr key={acc.accountId}>
                                    <th scope="row">{index + 1 + (page * 10 - 10)}</th>
                                    <td onClick={() => onClickAccountId(acc.accountId)}><NavLink className="btn btn-secondary" role="button" to="/profiles">{acc.accountId}</NavLink></td>
                                    <td>{acc.email}</td>
                                    <td>{acc.authToken}</td>
                                    <td>{acc.creationDate}</td>
                                </tr>) :
                            accountsByPage?.map((acc, index) =>
                                <tr key={acc.accountId}>
                                    <th scope="row">{index + 1 + (page * 10 - 10)}</th>
                                    <td onClick={() => onClickAccountId(acc.accountId)}><NavLink className="btn btn-secondary" role="button" to="/profiles">{acc.accountId}</NavLink></td>
                                    <td>{acc.email}</td>
                                    <td>{acc.authToken}</td>
                                    <td>{acc.creationDate}</td>
                                </tr>)}

                </tbody>
            </table>
            {!isLoadMore && <button type="button" className="btn btn-primary btn-lg" onClick={onClickLoadMore}>Load more</button>}
            {!isLoadLess && <button type="button" className="btn btn-warning btn-lg" onClick={onClickLoadLess}>Load less</button>}
        </div>
    )
};

export default Accounts;