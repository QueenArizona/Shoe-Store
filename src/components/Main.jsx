import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Banner from './Banner';
import HomePage from './HomePage';
import About from './About';
import Contacts from './Contacts';
import CatalogSearch from './CatalogSearch';
import Item from './Item';
import Cart from './Cart';
import ThankYouPage from './ThankYouPage';
import Page404 from './Page404';

function Main(props) {
    const { id } = useSelector(state => state.categories);
    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <Banner />
                    <Switch>
                        <Route path='/about' component={About} />
                        <Route path='/contacts' component={Contacts} />
                        <Route path='/cart' component={Cart} />
                        <Route path='/thank' component={ThankYouPage} />
                        <Route path='/catalog/:id' component={Item} />
                        <Route path={`/catalog${id || "1"}`} component={CatalogSearch} />
                        <Route path='/catalog' component={CatalogSearch} />
                        <Route path='/' component={HomePage} />
                        <Route path='*' component={Page404}/>
                    </Switch>
                </div>
            </div>
        </main>
    )
}

export default Main;
