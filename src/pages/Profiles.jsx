import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { selectSelectedAccount } from '../redux/accounts/accountsSelector';

const Profiles = () => {
    const profilesByAccountId = useSelector(selectSelectedAccount);
    const { accountId } = profilesByAccountId[0];

    return (
        <div className='container'>
            <h2>Profiles for accountId: {accountId}</h2>
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
                        <tr key={item.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.id}</td>
                            <td>{item.country}</td>
                            <td>{item.marketplace}</td>
                        </tr>)}

                </tbody>
            </table>
        </div>
    )
};

export default Profiles;