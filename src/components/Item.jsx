import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { cartAddService } from '../redux/cart/actions';
import { itemFetch } from '../redux/utils/api';
import Preloader from './Preloader';
import Error from './Error';

function Item({match}) {
    const [size, setSize] = useState(null);
    const [count, setCount] = useState(1);
    const { item, loading, error } = useSelector(state => state.item);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(itemFetch(match.params.id));
    }, [dispatch, match.params.id]);

    const selectSize = (size) => {
        setSize(size);
    }

    const addCount = () => {
        if (count < 10) {
            setCount((prevCount) => prevCount + 1);
        }
    }

    const subCount = () => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    }

    const addToCart = (item, size, count) => {
        if (size) {
            const product = {
                id: `${item.id} ${size}`,
                title: item.title,
                size: size,
                count: count,
                price: item.price,
            }
            dispatch(cartAddService(product));
            history.push('/cart');
        }
    }

    return (<>
        {loading && <Preloader/>}
        {error && <Error />}
        {item && <section className="catalog-item">
            <h2 className="text-center">{item.title}</h2>
            <div className="row">
                <div className="col-5">
                    <img src={item.images[0]} className="img-fluid" alt="" />
                </div>
                <div className="col-7">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>{item.sku}</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>{item.manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>{item.color}</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>{item.material}</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>{item.season}</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>{item.reason}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                        <p>Размеры в наличии: {item.sizes.map((o) => o.avalible ? <span key={o.size} onClick={() => selectSize(o.size)} className={o.size == size ? "catalog-item-size selected" : "catalog-item-size"}>{o.size}</span> : null)}</p>
                        {item.sizes.find(o => o.avalible === true) ? <p>Количество:
                            <span className="btn-group btn-group-sm pl-2">
                                <button onClick={() => subCount()} className="btn btn-secondary">-</button>
                                <span className="btn btn-outline-primary">{count}</span>
                                <button onClick={() => addCount()} className="btn btn-secondary">+</button>
                            </span>
                        </p> : null}
                    </div>
                    {item.sizes.find(o => o.avalible === true) ? <button onClick={() => addToCart(item, size, count)} className="btn btn-danger btn-block btn-lg">В корзину</button> : null}
                </div>
            </div>
        </section>}
    </>)
}

export default Item;
