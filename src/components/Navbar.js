import React from 'react';
import css from './Navbar.module.css';
import  {Link, useLocation} from 'react-router-dom';
import {HomeRounded, MessageRounded, AddRounded, PersonRounded} from '@material-ui/icons'

function Navbar() {
    
    let location = useLocation();
    console.log(location)
    let hideNav = (location.pathname === '/creative-project-adam-esther-tommy') || (location.pathname === '/signIn')
    console.log(hideNav)
    
    return (
        <div>
            { hideNav ? null :  
            <nav className={css.navbar}>
                <div className={css.navItem}>
                    <Link to='/home'>
                        <HomeRounded fontSize='large' />
                    </Link>
                </div>
                <div className={css.navItem}>
                    <Link to='/responses'>
                        <MessageRounded fontSize='large' />
                    </Link>
                </div>
                <div className={css.navItem}>
                    <Link to='/createNew'>
                        <AddRounded fontSize='large' />
                    </Link>
                </div>
                <div className={css.navItem}>
                    <Link to='/profile'>
                        <PersonRounded fontSize='large' />
                    </Link>
                </div>
         </nav>}
        </div>
    )
}

export default Navbar;