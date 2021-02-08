import { CATEGORIES_REQUEST, CATEGORIES_FAILURE, CATEGORIES_SUCCESS, CATEGORIES_CHANGE } from './types';

export function categoriesRequest() {
    return { type: CATEGORIES_REQUEST };
}

export function categoriesFailure(error) {
    return { type: CATEGORIES_FAILURE, payload: { error } };
}

export function categoriesSuccess(items) {
    return { type: CATEGORIES_SUCCESS, payload: { items } };
}

export function categoriesChange(id) {
    return { type: CATEGORIES_CHANGE, payload: { id } };
}
