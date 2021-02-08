import React from 'react';
import Catalog from './Catalog';
import { useSelector, useDispatch } from 'react-redux';
import { searchFieldChange, searchRequest } from '../redux/search/actions';

function CatalogSearch(props) {
    const { value } = useSelector(state => state.search);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { value } = event.target;
        dispatch(searchFieldChange(value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchRequest(value.trim()));
    }

    return (
        <Catalog url="/catalog">
            <form onSubmit={handleSubmit} className="catalog-search-form form-inline">
                <input onChange={handleChange} className="form-control" placeholder="Поиск" value={value}/>
            </form>
        </Catalog>
    )
}

export default CatalogSearch;
