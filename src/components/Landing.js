import React from 'react';
import css from 'components/Landing.module.css'
import { Link } from 'react-router-dom';


function Landing(){
    return (
        <div className={css.landing}>
            <div className={css.greeting}>
                Welcome to Eagles 4 BC!
            </div>
            <div className={css.desc}>
                This is an app for the BC community designed to empower everyone to be the best men & women 
                for and with others that we can be! It is a platform where anyone from the community can post
                anything that they need help with from others, or that they can help others with. Click below to sign
                in and get started :)
            </div>
            <Link to='/signIn'>
                <button className={css.button}>
                    Click me!
                </button>
            </Link>

        </div>
    )
}

export default Landing;