import { ITEMS_LIST_REQUEST, ITEMS_LIST_FAILURE, ITEMS_LIST_SUCCESS, ITEMS_MORE_REQUEST, ITEMS_MORE_FAILURE, ITEMS_MORE_SUCCESS } from './types';

export function itemsListRequest() {
    return { type: ITEMS_LIST_REQUEST };
}

export function itemsListFailure(error) {
    return { type: ITEMS_LIST_FAILURE, payload: { error } };
}

export function itemsListSuccess(items) {
    return { type: ITEMS_LIST_SUCCESS, payload: { items } };
}

export function itemsMoreRequest() {
    return { type: ITEMS_MORE_REQUEST };
}

export function itemsMoreFailure(error) {
    return { type: ITEMS_MORE_FAILURE, payload: { error } };
}

export function itemsMoreSuccess(itemsMore) {
    return { type: ITEMS_MORE_SUCCESS, payload: { itemsMore } };
}
