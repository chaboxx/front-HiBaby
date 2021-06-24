
import React from 'react';
import { Redirect, Route } from 'react-router';

import PropTypes from 'prop-types';

export const PrivateRoutes = ({
    isAuthenticated,
    component:Component,
    ...rest
    
    
}) => {
    return (
        <Route {...rest}
            component={ (props) =>(

                (isAuthenticated) 
                ? ( <Redirect to="/" />)
                : (<Component {...props} />)
                )
            }
        />
    )


}

PrivateRoutes.propTypes={
    isAuthenticated:PropTypes.bool.isRequired,
    Component:PropTypes.func.isRequired
}