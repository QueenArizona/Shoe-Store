import { SEARCH_FIELD_CHANGE, HEADER_SEARCH_FIELD_CHANGE } from './types';

const initialState = {
  value: '',
  headerValue: '',
};

export default function searchFieldReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_FIELD_CHANGE:
            const { value } = action.payload;
            return { ...state, value };
        case HEADER_SEARCH_FIELD_CHANGE:
            const { headerValue } = action.payload;
            return { ...state, headerValue };
        default:
            return state;
    }
}
