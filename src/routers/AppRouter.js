import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route,Switch, BrowserRouter as Router, Redirect, Link } from "react-router-dom";
import { startChecking } from '../actions/auth';
import { AboutScreen } from '../components/hibaby/about/AboutScreen';
import { CarritoCompras } from '../components/hibaby/carrito/CarritoCompras';
import { HomeScreen } from '../components/hibaby/HomeScreen';
import { LoginScreen } from '../components/hibaby/login/LoginScreen';
import { PedidosScreen } from '../components/hibaby/login/PedidosScreen';
import { RegisterScreen } from '../components/hibaby/login/RegisterScreen';
import { UserScreen } from '../components/hibaby/login/userScreen';
import { StoreScreen } from '../components/hibaby/store/StoreScreen';
import { LoginRegisterRoutes } from './LoginRegisterRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import { RegisterLoginRoutes } from './RegisterLoginRoutes';

import {DespachoPagos } from "../components/checkout/despachoPagos";
export const AppRouter = () => {

    const dispatch = useDispatch();
    
    
    const {checking,uid} = useSelector(state => state.auth);

    useEffect(() => {
        
        dispatch(startChecking());
    }, [dispatch])
 
    if (checking){
        return <h1>Cargando</h1>
    };
    
    
    
    
    

    return (
        
        <Router>

            <div>
                <Switch>
                    <Route exact path="/">
                        <HomeScreen/>
                    </Route>
                    <Route exact path="/store">
                        <StoreScreen/>
                    </Route>
                    <Route exact path="/about">
                        <AboutScreen/>
                    </Route>


                    <Route exact path="/carrito-compras">
                        <CarritoCompras />

                    </Route>

                    <Route exact path="/despacho">
                        <DespachoPagos />

                    </Route>


                    <Route exact path="/pedidos" >
                        <PedidosScreen/>
                    </Route>
                    
                    <RegisterLoginRoutes exact path="/register" component={RegisterScreen} isAuthenticated={!!uid}/>
                        
                    <LoginRegisterRoutes exact path="/user" component={UserScreen} isAuthenticated={!!uid}/>

                    <RegisterLoginRoutes exact path="/login" component={LoginScreen} isAuthenticated={!!uid}/>
                        
                    

                    <Redirect to="/"/>
                    
                </Switch>

                  
                    
                        
                    

            </div>
        </Router>


    )
}
