import {
    CATEGORIES_REQUEST,
    CATEGORIES_FAILURE,
    CATEGORIES_SUCCESS,
    CATEGORIES_CHANGE,
} from './types';

const initialState = {
  items: [],
  loading: false,
  error: null,
  id: null,
};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case CATEGORIES_REQUEST:
            return { ...state, loading: true, error: null };
        case CATEGORIES_FAILURE:
            const { error } = action.payload;
            return { ...state, loading: false, error };
        case CATEGORIES_SUCCESS:
            const { items } = action.payload;
            return { ...state, items, loading: false, error: null };
        case CATEGORIES_CHANGE:
            const { id } = action.payload;
            return { ...state, id };
        default:
            return state;
    }
}
