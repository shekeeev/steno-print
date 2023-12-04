import React from 'react';
import m from './Main.module.css'
import { Route, Routes } from 'react-router-dom';
import AboutStudio from './Pages/AboutStudio/AboutStudio'
// import Home from './Main'
import Contacs from './Pages/Contacs/Contacs';
import Blog from './Pages/Blog/Blog'
import BlogDetal from './Pages/BlogDetal/BlogDetal'
import Services from './Pages/Services/Services'
import ServicesDetal from './Pages/ServicesDetal/ServicesDetal';
import Portfolio from './Pages/Portfolio/Portfolio'
import Catalog from './Pages/Catalog/Catalog'
import DisainOboi from './Pages/DisainOboi/DisainOboi'
import CatalogCard from './Pages/CatalogCard/CatalogCard'

// import imageNain from '../../Assets/Images/image 9.png'
// import imageTen from '../../Assets/Images/image 10.png'
// import imageEleven from '../../Assets/Images/image 11.png'
// import arrowBottom from '../../Assets/Images/arrowBottom.svg'
// import three from '../../Assets/Images/three.png'
import Home from './Home/Home';
import NotFound from './Pages/NotFound/NotFound';
const Main = () => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/disain_oboi' element={<DisainOboi />} />
                <Route path='/catalog_card' element={<CatalogCard />} />
                <Route path='/services' element={<Services />} />
                <Route path='/services_detail' element={<ServicesDetal />} />
                <Route path='/about_studio' element={<AboutStudio />} />
                <Route path='/contacs' element={< Contacs />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog_detal' element={<BlogDetal />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            {/* <CatalogCard /> */}
            {/* <Blog /> */}
            {/* <NotFound /> */}
            {/* <Contacs /> */}


        </main >
    );
};

export default Main;