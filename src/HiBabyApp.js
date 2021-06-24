
import React, { useEffect, useReducer } from 'react';
import { Provider, useSelector } from 'react-redux';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import "./styles/index.scss";




export const HiBabyApp = () => {
    
    


    return (
        <>
        

        <Provider store={store}>
            
        <AppRouter/>
    
        </Provider>
        
        </>
    )
}





