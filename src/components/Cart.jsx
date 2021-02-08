import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { cartRemoveService, cartChangeField, postOrderRequest, postOrderFailure, postOrderSuccess } from '../redux/cart/actions';
import Preloader from './Preloader';
import Error from './Error';

function Cart(props) {
    const { cart, owner, loading, error } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleRemove = (id) => {
        dispatch(cartRemoveService(id));
    }

    const handleChange = ({target}) => {
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        dispatch(cartChangeField(name, value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (cart.length > 0 && owner.phone && owner.address && owner.agreement) {
            const order = {
                owner: {
                    phone: owner.phone,
                    address: owner.address,
                },
                items: cart.map((o) => {
                    return {
                        id: Number(o.id.substring(0, 2)),
                        price: o.price,
                        count: o.count,
                    }
                }),
            };
            (async () => {
                dispatch(postOrderRequest());
                try {
                    const response = await fetch('https://qa-store-shoe.herokuapp.com/api/order', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(order),
                    });
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    dispatch(postOrderSuccess());
                    history.push('/thank');
                } catch (e) {
                    dispatch(postOrderFailure(e.message));
                }
            })();
        }
    }

    return (<>
        <section className="cart">
            <h2 className="text-center">Корзина</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название</th>
                        <th scope="col">Размер</th>
                        <th scope="col">Кол-во</th>
                        <th scope="col">Стоимость</th>
                        <th scope="col">Итого</th>
                        <th scope="col">Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((o) => <tr key={o.id}>
                        <th scope="row">{cart.indexOf(o) + 1}</th>
                        <td><Link to={`/catalog/${o.id.substring(0, 2)}`}>{o.title}</Link></td>
                        <td>{o.size}</td>
                        <td>{o.count}</td>
                        <td>{o.price}</td>
                        <td>{o.count * o.price}</td>
                        <td><button onClick={() => handleRemove(o.id)} className="btn btn-outline-danger btn-sm">Удалить</button></td>
                    </tr>)}
                    <tr>
                        <td colSpan="5" className="text-right">Общая стоимость</td>
                        <td>{cart.reduce((sum, o) => sum + o.count * o.price, 0)}</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            {loading && <Preloader />}
            {error && <Error />}
            <div className="card" style={{ 'maxWidth': '30rem', 'margin': '0 auto', }}>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input onChange={handleChange} className="form-control" name="phone" id="phone" placeholder="Ваш телефон" value={owner.phone}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Адрес доставки</label>
                        <input onChange={handleChange} className="form-control" name="address" id="address" placeholder="Адрес доставки" value={owner.address}/>
                    </div>
                    <div className="form-group form-check">
                        <input onChange={handleChange} type="checkbox" className="form-check-input" name="agreement" id="agreement" checked={owner.agreement}/>
                        <label className="form-check-label" htmlFor="agreement">Согласен с правилами доставки</label>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary">Оформить</button>
                </form>
            </div>
        </section>
    </>)
}

export default Cart;
