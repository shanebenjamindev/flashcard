import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    return (

        <nav>

            Logo

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    <Link to='/auth'>
                        <button>Login</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )

}