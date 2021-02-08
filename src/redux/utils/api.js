import { topSalesRequest, topSalesFailure, topSalesSuccess } from '../topSales/actions';
import { categoriesRequest, categoriesFailure, categoriesSuccess } from '../categories/actions';
import { itemsListRequest, itemsListFailure, itemsListSuccess, itemsMoreRequest, itemsMoreFailure, itemsMoreSuccess } from '../itemsList/actions';
import { itemRequest, itemFailure, itemSuccess } from '../item/actions';

// Action для элемента "Хиты продаж" (TopSales)
export const topSalesFetch = () => async dispatch => {
    dispatch(topSalesRequest());
    try {
        const response = await fetch('https://qa-store-shoe.herokuapp.com/api/top-sales');
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(topSalesSuccess(data));
    } catch (e) {
        dispatch(topSalesFailure(e.message));
    }
}

// Action для элемента "Категории" (Categories)
export const categoriesFetch = () => async dispatch => {
    dispatch(categoriesRequest());
    try {
        const response = await fetch('https://qa-store-shoe.herokuapp.com/api/categories');
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(categoriesSuccess(data));
    } catch (e) {
        dispatch(categoriesFailure(e.message));
    }
}

// Action для элемента "Список товаров" (ItemsList)
export const itemsListFetch = (id, value) => async dispatch => {
    dispatch(itemsListRequest());
    try {
        let response;
        if (value) {
            if (id) {
                response = await fetch(`https://qa-store-shoe.herokuapp.com/api/items?q=${value}&categoryId=${id}`);
            } else {
                response = await fetch(`https://qa-store-shoe.herokuapp.com/api/items?q=${value}`);
            }
        } else {
            if (id) {
                response = await fetch(`https://qa-store-shoe.herokuapp.com/api/items?categoryId=${id}`);
            } else {
                response = await fetch('https://qa-store-shoe.herokuapp.com/api/items');
            }
        }

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(itemsListSuccess(data));
    } catch (e) {
        dispatch(itemsListFailure(e.message));
    }
}

// Action для элемента "Загрузить еще" (ItemsMore)
export const itemsMoreFetch = (id, value, length) => async dispatch => {
    dispatch(itemsMoreRequest());
    try {
        let response;
        if (value) {
            if (id) {
                response = await fetch(`https://qa-store-shoe.herokuapp.com/api/items?q=${value}&categoryId=${id}&offset=${length}`);
            } else {
                response = await fetch(`https://qa-store-shoe.herokuapp.com/api/items?q=${value}&offset=${length}`);
            }
        } else {
            if (id) {
                response = await fetch(`https://qa-store-shoe.herokuapp.com/api/items?categoryId=${id}&offset=${length}`);
            } else {
                response = await fetch(`https://qa-store-shoe.herokuapp.com/api/items?offset=${length}`);
            }
        }
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(itemsMoreSuccess(data));
    } catch (e) {
        dispatch(itemsMoreFailure(e.message));
    }
}

// Action для элемента "Товар" (Item)
export const itemFetch = (id) => async dispatch => {
    dispatch(itemRequest());
    try {
        const response = await fetch(`https://qa-store-shoe.herokuapp.com/api/items/${id}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(itemSuccess(data));
    } catch (e) {
        dispatch(itemFailure(e.message));
    }
}
