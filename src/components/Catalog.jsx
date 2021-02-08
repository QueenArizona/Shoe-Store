import React from 'react';
import Categories from './Categories';
import ItemsList from './ItemsList';
import ItemsMore from './ItemsMore';

function Catalog(props) {
    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            {props.children}
            <Categories url={props.url}/>
            <ItemsList />
            <ItemsMore />
        </section>
    )
}

export default Catalog;
