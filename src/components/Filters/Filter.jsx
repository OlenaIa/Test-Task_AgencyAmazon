import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterByEmailSet, filterByDateSet, isCheckedAllAccountsSet } from '../../redux/filter/filterSlice';
import css from './Filter.module.css';
import { selectIsCheckedAllAccounts, selectFilterByEmail, selectFilterByDate } from '../../redux/filter/filterSelector';

export const Filters = () => {
    const dispatch = useDispatch();
    const filterEmail = useSelector(selectFilterByEmail);
    const filterDate = useSelector(selectFilterByDate);
    const IsCheckedAllAccounts = useSelector(selectIsCheckedAllAccounts);

    const onChangeFilter = (event) => {
        const { type, value } = event.currentTarget;
        switch (type) {
            case 'email':
                const lowerEmail = value.toLowerCase();
                dispatch(filterByEmailSet(lowerEmail))
                break;
            case 'date':
                dispatch(filterByDateSet(value))
                break;
            default:
                break;
        }
    };

    const checkHandler = () => {
        dispatch(isCheckedAllAccountsSet(!IsCheckedAllAccounts));
    };

    return (
        <div className={css.wrapFilters}>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked={IsCheckedAllAccounts}
                    onChange={checkHandler}
                />
                <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault">
                    Choose all accounts
                </label>
            </div>

            <div className="mb-3">
                <label
                    htmlFor="emailInput"
                    className="form-label">
                    Filter by Email
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    value={filterEmail}
                    onChange={onChangeFilter}
                    placeholder="Write Email"
                />
            </div>

            <div className="mb-3">
                <label
                    htmlFor="dataInput"
                    className="form-label">
                    Sort by Data
                </label>
                <input
                    type="date"
                    className="form-control"
                    id="dataInput"
                    value={filterDate}
                    onChange={onChangeFilter}
                    placeholder="Write Date: year-mm-dd" />
            </div>
        </div>
    )
};

