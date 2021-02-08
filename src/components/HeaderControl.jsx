import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { headerSearchFieldChange, searchFieldChange, searchRequest } from '../redux/search/actions';

function HeaderControl(props) {
    const [form, setForm] = useState(false);
    const { headerValue } = useSelector(state => state.search);
    const { cart } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const history = useHistory();

    const catalogSearch = () => {
        history.push('/catalog');
        dispatch(searchFieldChange(headerValue.trim()));
        dispatch(searchRequest(headerValue.trim()));
        dispatch(headerSearchFieldChange(''));
        setForm(false);
    }

    const handleClick = () => {
        if (form === false) {
            setForm(true);
        }
        if (headerValue) {
            catalogSearch();
        } else {
            if (form) {
                setForm(false);
            }
        }
    }

    const handleChange = (event) => {
        const { value } = event.target;
        dispatch(headerSearchFieldChange(value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        catalogSearch();
    }

    const handleCart = () => {
        history.push('/cart');
    }

    return (
        <div>
            <div className="header-controls-pics">
                <div onClick={handleClick} data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                <div onClick={handleCart} className="header-controls-pic header-controls-cart">
                    {cart.length > 0 ? <div className="header-controls-cart-full">{cart.length}</div> : null}
                    <div className="header-controls-cart-menu"></div>
                </div>
            </div>
            <form onSubmit={handleSubmit} data-id="search-form" className={form ? "header-controls-search-form form-inline" : "header-controls-search-form form-inline invisible"}>
                <input onChange={handleChange} className="form-control" placeholder="Поиск" value={headerValue}/>
            </form>
        </div>
    )
}

export default HeaderControl;
