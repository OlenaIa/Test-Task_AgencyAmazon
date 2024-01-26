import 'bootstrap/dist/css/bootstrap.min.css'; 
import { NavLink } from 'react-router-dom';
import css from './Header.module.css'
import { useSelector } from 'react-redux';
import { selectAccountId, selectProfileId } from '../../redux/chosenIdSlice';

export const Header = () => {
    const accountId = useSelector(selectAccountId);
    const profileId = useSelector(selectProfileId);

    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="nav-link active" aria-current="page">
                                    <NavLink className={css.navLink} to="/">Accounts</NavLink>
                                </div>
                            </li>
                            {accountId && <li className="nav-item">
                                <div className="nav-link">
                                    <NavLink className={css.navLink} to="/profiles">Profiles</NavLink>
                                </div>
                            </li>}
                            {profileId && <li className="nav-item">
                                <div className="nav-link">
                                    <NavLink className={css.navLink} to="/campaigns">Campaigns</NavLink>
                                </div>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
};