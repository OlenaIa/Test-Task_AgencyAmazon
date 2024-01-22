import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedAccountById } from '../redux/accounts/accountsSelector';
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';
import { profileIdSet } from '../redux/chosenIdSlice';

const Profiles = () => {
    const profilesByAccountId = useSelector(selectSelectedAccountById);
    // const { accountId } = profilesByAccountId[0];
    const dispatch = useDispatch();

    const onClickProfileId = (profileId) => {
        console.log('click onClickProfileId', profileId);
dispatch(profileIdSet(profileId))
    };

    return (
        <div className='container'>
            <h2>Profiles for accountId: {}</h2>
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
                            <td onClick={() => onClickProfileId(item.profileId)}><NavLink className="btn btn-secondary" role="button" to="/campaigns">{item.profileId}</NavLink></td>
                            <td>{item.country}</td>
                            <td>{item.marketplace}</td>
                        </tr>)}

                </tbody>
            </table>
        </div>
    )
};

export default Profiles;