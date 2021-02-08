import React from 'react';
import TopSales from './TopSales';
import Catalog from './Catalog';

function HomePage(props) {
    return (<>
        <TopSales />
        <Catalog url='/'/>
    </>)
}


export default HomePage;
