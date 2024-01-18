import 'bootstrap/dist/css/bootstrap.min.css'; // Підключення стилів Bootstrap
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <div class='container'>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div class="nav-link active" aria-current="page"><NavLink  to="/">Accounts</NavLink></div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link"><NavLink class="nav-link" to="/profiles">Profiles</NavLink></div>
                        </li>
                        <li class="nav-item">
                            <div class="nav-link"><NavLink class="nav-link" to="/campaigns">Campaigns</NavLink></div>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
            </div>
    )
};