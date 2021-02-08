import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { topSalesFetch } from '../redux/utils/api';
import { useHistory } from "react-router-dom";
import Preloader from './Preloader';
import Error from './Error';

function TopSales(props) {
    const { items, loading, error } = useSelector(state => state.topSales);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(topSalesFetch());
    }, [dispatch]);

    const loadItem = (id) => {
        history.push(`catalog/${id}`);
    }

    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="row">
                {loading && <Preloader/>}
                {error && <Error />}
                {items.map((o) => <div key={o.id} className="col-4">
                    <div className="card">
                        <img src={o.images} className="card-img-top img-fluid" alt={o.title}/>
                        <div className="card-body">
                            <p className="card-text">{o.title}</p>
                            <p className="card-text">{o.price}</p>
                            <div onClick={() => loadItem(o.id)} className="btn btn-outline-primary">Заказать</div>
                        </div>
                    </div>
                </div>)}
            </div>
        </section>
    )
}

export default TopSales;
