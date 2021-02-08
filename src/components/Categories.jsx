import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { categoriesChange } from '../redux/categories/actions';
import { categoriesFetch } from '../redux/utils/api';
import Preloader from './Preloader';
import Error from './Error';

function Categories(props) {
    const { items, loading, error } = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoriesFetch());
    }, [dispatch]);

    const changeCategory = (event, id) => {
        dispatch(categoriesChange(id));
    }

    return (
        <ul className="catalog-categories nav justify-content-center">
            {loading && <Preloader/>}
            {error && <Error/>}
            {!loading && !error && <><NavLink onClick={(event) => changeCategory(event, null)} className="nav-link" activeClassName="active" to={`${props.url}${1}`}>
                <li className="nav-item">Все</li>
            </NavLink>
            {items.map((o) => <NavLink key={o.id} onClick={(event) => changeCategory(event, o.id)} className="nav-link" activeClassName="active" to={`${props.url}${o.id}`}>
                <li className="nav-item">{o.title}</li>
            </NavLink>)}
            </>}
        </ul>
    )
}

export default Categories;
