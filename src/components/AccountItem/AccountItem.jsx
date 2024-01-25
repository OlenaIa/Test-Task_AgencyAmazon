import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getProfilesByAccountIdThank } from '../../redux/accounts/operationAccounts';
import { accountIdSet } from '../../redux/chosenIdSlice';

export const AccountItem = ({ item, index, page }) => {
    const dispatch = useDispatch();

    const onClickAccountId = (accountId) => {
        dispatch(accountIdSet(accountId))
        dispatch(getProfilesByAccountIdThank(accountId))
    };

    return (
        <tr key={item.accountId}>
            <th scope="row">{index + 1 + (page * 10 - 10)}</th>
            <td onClick={() => onClickAccountId(item.accountId)}>
                <NavLink className="btn btn-secondary" role="button" to="/profiles">
                    Click id {item.accountId} 
                </NavLink>
            </td>
            <td>{item.email}</td>
            <td>{item.authToken}</td>
            <td>{item.creationDate}</td>
        </tr>
    )
};