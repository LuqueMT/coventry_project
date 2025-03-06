import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Home from "../Components/Home/Home";
import Signin from '../Components/Signin/Signin';
import Produto from '../Components/Products/Produto/Produto';
import ProductDetails from "../Components/ProductDetails";
import Search from "../Components/Products/Search/Search"
import Collections from '../Components/Collections/Collections';
import MyAccount from '../Components/MyAccount/MyAccount';
function AppRoutes(){
    return(
        <BrowserRouter basename='/coventry_project'>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='signin' element={<Signin/>}></Route>
                <Route path='products/id' element={<ProductDetails/>}></Route>
                <Route path='produto' element={<Produto/>}></Route>
                <Route path='search' element={<Search/>}></Route>
                <Route path='collections' element={<Collections/>}></Route>
                <Route path='myaccount' element={<MyAccount/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes