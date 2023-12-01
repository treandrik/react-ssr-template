import React from 'react';
import { NavLink as Link, Route, Routes } from 'react-router-dom';

// import child components
import { Counter } from '../counter';
import { Post } from '../post';

// export app component
export class App extends React.Component {
    constructor() {
        super();
    }

    // render view
    render() {
        return (
            <div className='ui-app'>
                {/* navigation */}
                <div className='ui-app__navigation'>
                    <Link
                        className='ui-app__navigation__link'
                        activeClassName='ui-app__navigation__link--active'
                        to='/'
                        exact={ true }
                    >Counter</Link>

                    <Link
                        className='ui-app__navigation__link'
                        activeClassName='ui-app__navigation__link--active'
                        to='/post'
                        exact={ true }
                    >Post</Link>
                </div>

                <Routes>
                    <Route
                        path='/'
                        exact={ true }
                        element={ <Counter name='Increment now' /> }
                    />

                    <Route
                        path='/post'
                        exact={ true }
                        element={ <Post /> }
                    />
                </Routes>
                
            </div>
        );
    }
}