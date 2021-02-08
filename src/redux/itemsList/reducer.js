import { ITEMS_LIST_REQUEST, ITEMS_LIST_FAILURE, ITEMS_LIST_SUCCESS, ITEMS_MORE_REQUEST, ITEMS_MORE_FAILURE, ITEMS_MORE_SUCCESS } from './types';
import { CATEGORIES_CHANGE } from '../categories/types';
import { SEARCH_REQUEST, SEARCH_FIELD_CHANGE } from '../search/types';

const initialState = {
  items: [],
  loading: false,
  error: null,
  more: true,
  value: null,
};

export default function itemsListReducer(state = initialState, action) {
    switch (action.type) {
        case ITEMS_LIST_REQUEST:
            return { ...state, loading: true, error: null };
        case ITEMS_LIST_FAILURE:
            const { error } = action.payload;
            return { ...state, loading: false, error };
        case ITEMS_LIST_SUCCESS:
            const { items } = action.payload;
            return { ...state, items, loading: false, error: null };
        case ITEMS_MORE_REQUEST:
            return { ...state, loading: true, error: null };
        case ITEMS_MORE_FAILURE:
            return { ...state, loading: false, error: action.payload.error };
        case ITEMS_MORE_SUCCESS:
            const { itemsMore } = action.payload;
            return { ...state, items: [...state.items].concat(itemsMore), loading: false, error: null, more: itemsMore.length > 5 };
        case SEARCH_REQUEST:
            return { ...state, value: action.payload.value };
        case SEARCH_FIELD_CHANGE:
            const { value } = action.payload;
            if (value === '') {
                return { ...state, value: null };
            }
            return state;
        case CATEGORIES_CHANGE:
            return { ...state, more: true }
        default:
            return state;
    }
}
