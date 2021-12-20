import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pagesH/Layout";
import Blogs from "./pagesH/Blogs";
import Home from "./pagesH/Home";
import Contact from "./pagesH/Contact";
import CalcH from "./pagesH/CaleH";
import Archangel from "./pagesH/Archangel";
import NoPage from "./pagesH/NoPage";

export default function Block4() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} /> 
                    <Route path="contact" element={<Contact />} />
                    <Route path="calcH" element={<CalcH />} />
                    <Route path="archangel" element={<Archangel />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};