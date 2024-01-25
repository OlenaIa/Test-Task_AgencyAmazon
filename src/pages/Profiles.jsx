import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedAccountById } from '../redux/accounts/accountsSelector';
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';
import { profileIdSet, selectAccountId } from '../redux/chosenIdSlice';
import { FiltersProfile } from 'components/FiltersProfile/FiltersProfile';
import { useEffect, useState } from 'react';

const Profiles = () => {
    const dispatch = useDispatch();
    const profilesByAccountId = useSelector(selectSelectedAccountById);
    const accountId = useSelector(selectAccountId);
    const [market, setMarket] = useState('');
    const [country, setCountry] = useState({ value: 'all', label: 'All country' });

    const onClickProfileId = (profileId) => {
        dispatch(profileIdSet(profileId))
    };

    const onChangeSetMarket = (value) => {
        const lowerMarket = value.toLowerCase();
        setMarket(lowerMarket);
    };

    useEffect(() => {
        if (market === '' && country.value === 'all') {
            return;
        };
        const visibleProfilesByAccountId = profilesByAccountId.filter(item =>
            item.country.toLowerCase().includes(country.value));
    console.log('visibleProfilesByAccountId', visibleProfilesByAccountId);
    }, [market, country.value, profilesByAccountId]);


    return (
        <div className='container'>
            <h2>Profiles for accountId: {accountId}</h2>
            <FiltersProfile onChangeSetMarket={onChangeSetMarket} onSelectSetCountry={setCountry} market={market} country={country} />
            <table className="table table-striped table-bordered">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ProfileId</th>
                        <th scope="col">Country</th>
                        <th scope="col">Marketplace</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {profilesByAccountId?.map((item, index) =>
                        <tr key={nanoid(3)}>
                            <th scope="row">{index + 1}</th>
                            <td onClick={() => onClickProfileId(item.profileId)}>
                                <NavLink className="btn btn-secondary" role="button" to="/campaigns">
                                    Click id {item.profileId}
                                </NavLink>
                            </td>
                            <td>{item.country}</td>
                            <td>{item.marketplace}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
};

export default Profiles;