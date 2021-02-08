import { TOP_SALES_REQUEST, TOP_SALES_FAILURE, TOP_SALES_SUCCESS } from './types';

export function topSalesRequest() {
    return { type: TOP_SALES_REQUEST };
}

export function topSalesFailure(error) {
    return { type: TOP_SALES_FAILURE, payload: { error } };
}

export function topSalesSuccess(items) {
    return { type: TOP_SALES_SUCCESS, payload: { items } };
}
