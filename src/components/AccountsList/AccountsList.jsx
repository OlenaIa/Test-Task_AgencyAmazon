import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllAccounts, selectAccountsByPage } from '../../redux/accounts/accountsSelector';
import { useEffect, useState } from 'react';
import { getAccountsThunk, LIMIT } from '../../redux/accounts/operationAccounts';
import {selectFilterByEmail, selectFilterByDate, selectIsCheckedAllAccounts, selectFilteredAccounts} from '../../redux/filter/filterSelector'
import { filteredAccountsSet } from '../../redux/filter/filterSlice';
import { AccountItem } from 'components/AccountItem/AccountItem';
import css from './AccountList.module.css'
import { doFiltering } from '../../services/servicesFunc';

export const AccountsList = () => {
    const dispatch = useDispatch();
    const allAccounts = useSelector(selectAllAccounts);
    const accountsByPage = useSelector(selectAccountsByPage);
    const filterEmail = useSelector(selectFilterByEmail);
    const filterDate = useSelector(selectFilterByDate);
    const isCheckedAllAccounts = useSelector(selectIsCheckedAllAccounts);
    const filteredAccounts = useSelector(selectFilteredAccounts);

    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(1);
    const [isLoadMore, setIsLoadMore] = useState(false);
    const [isLoadLess, setIsLoadLess] = useState(false);

    useEffect(() => {
        if (page === 0) {
            setPage(page + 1)
            return;
        };
        dispatch(getAccountsThunk(page))
    }, [dispatch, page, totalPage]);

    useEffect(() => {
        if (filteredAccounts.length === 0) {
            setTotalPage(allAccounts.length / LIMIT);
            return;
        }
        setTotalPage(1);
    }, [filteredAccounts, allAccounts]);

    useEffect(() => {
        if (page >= 1 && page < totalPage) {
            setIsLoadMore(true)
        } else {
            setIsLoadMore(false)
        };
        if (page > 1 && page <= totalPage) {
            setIsLoadLess(true)
        } else {
            setIsLoadLess(false)
        }
    }, [page, totalPage]);

    const onClickLoadMore = () => {
        setPage(page + 1);
    };

    const onClickLoadLess = () => {
        setPage(page - 1);
    };

    useEffect(() => {
        if (filterEmail === '' && filterDate === '' && isCheckedAllAccounts === false) {
            dispatch(filteredAccountsSet([]));
            return;
        };
        setPage(1);

        let visibleAccounts = [];
        if (isCheckedAllAccounts) {
            visibleAccounts = allAccounts;
        };
        if (filterEmail !== '' && filterDate !== '') {
            const visibleAccountsByEmail = doFiltering(allAccounts, "email", filterEmail);
            visibleAccounts = doFiltering(visibleAccountsByEmail, "creationDate", filterDate);
        };
        if (filterEmail !== '' && filterDate === '') {
            visibleAccounts = doFiltering(allAccounts, "email", filterEmail);
        };
        if (filterEmail === '' && filterDate !== '') {
            visibleAccounts = doFiltering(allAccounts, "creationDate", filterDate);
        };
        dispatch(filteredAccountsSet(visibleAccounts));

    }, [dispatch, allAccounts, filterEmail, filterDate, isCheckedAllAccounts]);

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
                    {(filterEmail.length > 0 || filterDate.length > 0 || isCheckedAllAccounts) ? filteredAccounts?.map((item, index) =>
                        <AccountItem item={item} key={item.accountId} index={index} page={page} />
                    ) :
                        accountsByPage?.map((item, index) =>
                            <AccountItem item={item} key={item.accountId} index={index} page={page} />
                        )}
                </tbody>
            </table>
            <div className={css.wrapButton}>
                <button disabled={!isLoadMore} type="button" className="btn btn-primary btn-lg" onClick={onClickLoadMore}>Load more</button>
                <button disabled={!isLoadLess} type="button" className="btn btn-warning btn-lg" onClick={onClickLoadLess}>Load less</button>
            </div>
        </div>
    )
};