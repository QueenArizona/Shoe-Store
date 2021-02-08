import { ITEM_REQUEST, ITEM_FAILURE, ITEM_SUCCESS } from './types';

const initialState = {
  item: null,
  loading: false,
  error: null,
};

export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case ITEM_REQUEST:
            return { ...state, loading: true, error: null };
        case ITEM_FAILURE:
            const { error } = action.payload;
            return { ...state, loading: false, error };
        case ITEM_SUCCESS:
            const { item } = action.payload;
            return { ...state, item, loading: false, error: null };
        default:
            return state;
    }
}
