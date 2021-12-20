import {Outlet, Link} from 'react-router-dom';
import './Layout.css'

const Layout = () => {
    return(
        <>
            <nav>
                <ul className='ulStyle'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/CalcH">Calc</Link>
                    </li>
                    <li>
                        <Link to="/Archangel">Archangel</Link>
                    </li>
                    <li>
                        <Link to="/Headercomp">Headercomp</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;