import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { itemsListFetch } from '../redux/utils/api';
import Preloader from './Preloader';
import Error from './Error';

function ItemsList(props) {
    const { items, loading, error, value } = useSelector(state => state.itemsList);
    const { id } = useSelector(state => state.categories);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(itemsListFetch(id, value));
    }, [dispatch, id, value]);

    const loadItem = (id) => {
        history.push(`catalog/${id}`);
    }

    return (
        <div className="row">
            {loading && <Preloader />}
            {error && <Error />}
            {items.map((o)=> <div key={o.id} className="col-4">
                <div className="card catalog-item-card">
                    <img src={o.images[0]} className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                    <div className="card-body">
                        <p className="card-text">{o.title}</p>
                        <p className="card-text">{o.price} руб.</p>
                        <div onClick={() => loadItem(o.id)} className="btn btn-outline-primary">Заказать</div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default ItemsList;
