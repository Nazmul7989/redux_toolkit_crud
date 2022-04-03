import React, {Fragment} from 'react';
import {Routes,Route} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

const AppRoute = () => {
    return (
        <Fragment>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>

        </Fragment>
    );
};

export default AppRoute;