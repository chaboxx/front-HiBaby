
import React from 'react';
import { Redirect, Route } from 'react-router';

import PropTypes from 'prop-types';
import { LoginScreen } from '../components/hibaby/login/LoginScreen';
import {RegisterScreen} from "../components/hibaby/login/RegisterScreen";
export const LoginRegisterRoutes = ({
    isAuthenticated,
    component:Component,
    ...rest
    
    
}) => {
    return (
        <Route {...rest}
            component={ (props) =>(

                (isAuthenticated)
                ? (<Component {...props}/>)
                : (<Redirect to="/login"/>)
                )
            }
        />
    )


}

LoginRegisterRoutes.propTypes={
    isAuthenticated:PropTypes.bool.isRequired,
    component:PropTypes.func.isRequired
}