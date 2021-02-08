import { ITEM_REQUEST, ITEM_FAILURE, ITEM_SUCCESS } from './types';

export function itemRequest() {
    return { type: ITEM_REQUEST };
}

export function itemFailure(error) {
    return { type: ITEM_FAILURE, payload: { error } };
}

export function itemSuccess(item) {
    return { type: ITEM_SUCCESS, payload: { item } };
}
