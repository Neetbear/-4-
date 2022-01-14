import {Outlet, Link} from 'react-router-dom';
import './Layout.css'


const Layout = () => {
    // const ulStyle = {
    //     display: 'flex'
        
    // };
    const onLogoutHandler  = () => {
        window.localStorage.clear("loginUser")
        window.location.replace("/")
    };

    if ( window.localStorage.getItem("loginStatus") ) {
        return(
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Genie Market</Link>
                        </li>
                        <li>
                            <input type="search" />
                        </li>
                        <li>
                            <Link to="/mypage">Mypage</Link>
                        </li>
                        <li>
                            <a onClick={onLogoutHandler}>Logout</a>
                        </li>
                        <li>
                            <Link to="/map">MapContainer</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </>
        );
    } else {
        return(
            <>
                <nav className='layoutNav'>
                    <div className='navLeft'>
                        <div><Link to="/">Genie Market</Link></div>       
                        <div><input type="search" /></div>
                    </div>
                    <div className='navRight'>
                        <div><Link to="/Signup">Signup</Link></div>
                        <div><Link to="/Signin">Signin</Link></div>
                    </div>
                </nav>
                <Outlet />
            </>
        );
    };
};

export default Layout;