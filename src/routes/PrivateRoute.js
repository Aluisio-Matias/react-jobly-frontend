import React, { useContext } from "react";
import {Route, Redirect} from 'react-router-dom';
import UserContext from '../auth/UserContext'

/** This private route component will verify if the current user is a 
 * valid user. If the user is not authorized, the route will not continue
 * and the user will be Redirected to the /login page.
 */

const PrivateRoute = ({exact, path, children}) => {
    const {currentUser} = useContext(UserContext);

    console.debug(
        "PrivateRoute", 
        "exact=", exact,
        "path=", path,
        "currentUser=", currentUser,
    );

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    );
}

export default PrivateRoute;