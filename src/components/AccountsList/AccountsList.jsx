import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllAccounts, selectAccountsByPage } from '../../redux/accounts/accountsSelector';
import { useEffect, useState } from 'react';
import { getAccountsThunk, LIMIT } from '../../redux/accounts/operationAccounts';
import {selectFilterByEmail, selectFilterByDate, selectIsCheckedAllAccounts, selectFilteredAccounts} from '../../redux/filter/filterSelector'
import { filteredAccountsSet } from '../../redux/filter/filterSlice';
import { AccountItem } from 'components/AccountItem/AccountItem';

export const AccountsList = () => {
    const dispatch = useDispatch();
    const allAccounts = useSelector(selectAllAccounts);
    const accountsByPage = useSelector(selectAccountsByPage);
    const filterEmail = useSelector(selectFilterByEmail);
    const filterDate = useSelector(selectFilterByDate);
    const isCheckedAllAccounts = useSelector(selectIsCheckedAllAccounts);
    const filteredAccounts = useSelector(selectFilteredAccounts);

    const [page, setPage] = useState(0)
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [isLoadLess, setIsLoadLess] = useState(true);
    console.log('page =>', page);
    console.log('isLoadMore =>', isLoadMore);
    console.log('isLoadLess =>', isLoadLess);

    useEffect(() => {
        isCheckedAllAccounts ? setIsLoadMore(true) : setIsLoadMore(false);
    }, [isCheckedAllAccounts]);

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

    const doFilterAccount = (array, key, filterEmail) => {
        return array.filter((item) =>
            (item[key].toLowerCase().includes(filterEmail)));
    };

    useEffect(() => {
        if (filterEmail === '' && filterDate === '') {
            dispatch(filteredAccountsSet([]));
            return;
        };
        setPage(0);

        console.log('filterEmail', filterEmail);
        console.log('filterDate', filterDate);

        let visibleAccounts = [];
        if (filterEmail !== '' && filterDate !== '') {
            const visibleAccountsByEmail = doFilterAccount(allAccounts, "email", filterEmail);
            visibleAccounts = doFilterAccount(visibleAccountsByEmail, "creationDate", filterDate);
        };
        if (filterEmail !== '' && filterDate === '') {
            visibleAccounts = doFilterAccount(allAccounts, "email", filterEmail);
        };
        if (filterEmail === '' && filterDate !== '') {
            visibleAccounts = doFilterAccount(allAccounts, "creationDate", filterDate);
        };
        dispatch(filteredAccountsSet(visibleAccounts));

    }, [dispatch, allAccounts, filterEmail, filterDate]);

    return (
        <div className='container'>
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
                    {(filterEmail.length > 0 || filterDate.length > 0) ? filteredAccounts?.map((item, index) =>
                        <AccountItem item={item} index={index} page={page} />
                    ) :
                        isCheckedAllAccounts ?
                            allAccounts?.map((item, index) =>
                                <AccountItem item={item} index={index} page={page} />
                            ) :
                            accountsByPage?.map((item, index) =>
                                <AccountItem item={item} index={index} page={page} />
                            )}
                </tbody>
            </table>
            {!isLoadMore && <button type="button" className="btn btn-primary btn-lg" onClick={onClickLoadMore}>Load more</button>}
            {!isLoadLess && <button type="button" className="btn btn-warning btn-lg" onClick={onClickLoadLess}>Load less</button>}
        </div>
    )
};