import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import Dashboard from '../components/dashboard';
import AuthUser from '../components/AuthUser';
import Create from '../pages/create'
import Edit from '../pages/edit'
import View from '../pages/view'


function Auth() {
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                    </li>
                    <li className='nav-item'>
                        <Link to={"/create"} className="nav-link">Create</Link>
                    </li>

                </ul>

            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/edit/:id' element={<Edit />} />
                    <Route path='/view/:id' element={<View />} />
                </Routes>
            </div>
        </>
    );
}

export default Auth;
