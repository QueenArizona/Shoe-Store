import { SEARCH_FIELD_CHANGE, HEADER_SEARCH_FIELD_CHANGE, SEARCH_REQUEST } from './types';

export function searchFieldChange(value) {
    return { type: SEARCH_FIELD_CHANGE, payload: { value } };
}

export function headerSearchFieldChange(headerValue) {
    return { type: HEADER_SEARCH_FIELD_CHANGE, payload: { headerValue } };
}

export function searchRequest(value) {
    return { type: SEARCH_REQUEST, payload: { value } };
}
