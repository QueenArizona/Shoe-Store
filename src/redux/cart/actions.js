import { CART_ADD_SERVICE, CART_REMOVE_SERVICE, CART_CHANGE_FIELD, POST_ORDER_REQUEST, POST_ORDER_FAILURE, POST_ORDER_SUCCESS } from './types';

export function cartAddService(item) {
    return { type: CART_ADD_SERVICE, payload: { item } };
}

export function cartRemoveService(id) {
    return { type: CART_REMOVE_SERVICE, payload: { id } };
}

export function cartChangeField(name, value) {
    return { type: CART_CHANGE_FIELD, payload: { name, value } };
}

export function postOrderRequest() {
    return { type: POST_ORDER_REQUEST };
}

export function postOrderFailure(error) {
    return { type: POST_ORDER_FAILURE, payload: { error } };
}

export function postOrderSuccess() {
    return { type: POST_ORDER_SUCCESS };
}
