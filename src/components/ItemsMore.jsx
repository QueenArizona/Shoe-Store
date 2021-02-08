import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemsMoreFetch } from '../redux/utils/api';

function ItemsMore(props) {
    const { items, value, more } = useSelector(state => state.itemsList);
    const { id } = useSelector(state => state.categories);
    const dispatch = useDispatch();

    const load = (id, value, length) => {
        dispatch(itemsMoreFetch(id, value, length));
    }

    return (<>
        {more && <div className="text-center">
            <button onClick={() => load(id, value, items.length)} className="btn btn-outline-primary">Загрузить ещё</button>
        </div>}
    </>)
}

export default ItemsMore;
