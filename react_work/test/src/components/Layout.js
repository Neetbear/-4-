import {Outlet, Link} from 'react-router-dom';

const Layout = () => {
    const ulStyle = {
        display: 'inline'
    };
    return(
        <>
            <nav>
                <ul style={ulStyle}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/Signin">Signin</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;