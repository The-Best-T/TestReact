import React from 'react';
import {Navigate, Routes} from "react-router";
import {Route} from "react-router-dom";
import About from "../Pages/About";
import Posts from "../Pages/Posts";
import ErrorPage from "../Pages/ErrorPage";
import PostIdPage from "../Pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route exact path="/posts" element={<Posts/>}/>
            <Route exact path="/posts/:id" element={<PostIdPage/>}/>
            <Route path="/error-page" element={<ErrorPage/>}/>
            <Route path="" element={<Navigate replace to="/posts"/>}/>
            <Route path="*" element={<Navigate replace to="/error-page"/>}/>
        </Routes>
    );
};

export default AppRouter;