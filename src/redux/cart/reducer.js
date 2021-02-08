import { CART_ADD_SERVICE, CART_REMOVE_SERVICE, CART_CHANGE_FIELD, POST_ORDER_REQUEST, POST_ORDER_FAILURE, POST_ORDER_SUCCESS } from './types';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  owner: {
    phone: '',
    address: '',
    agreement: false,
  },
  loading: false,
  error: null,
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case CART_ADD_SERVICE:
            const { item } = action.payload;
            if (state.cart.find((o) => o.id === item.id)) {
                const cart = state.cart.map((o) => {
                    if (o.id === item.id) {
                        o.count += item.count;
                        return o;
                    }
                    return o;
                })
                localStorage.setItem('cart', JSON.stringify(cart));
                return { ...state, cart: cart };
            }
            localStorage.setItem('cart', JSON.stringify([...state.cart].concat(item)));
            return { ...state, cart: [...state.cart].concat(item) };
        case CART_REMOVE_SERVICE:
            const { id } = action.payload;
            localStorage.setItem('cart', JSON.stringify(state.cart.filter((o) => o.id !== id)));
            return { ...state, cart: state.cart.filter((o) => o.id !== id) };
        case CART_CHANGE_FIELD:
            const { name, value } = action.payload;
            return { ...state, owner: { ...state.owner, [name]: value} };
        case POST_ORDER_REQUEST:
            return { ...state, loading: true, error: null };
        case POST_ORDER_FAILURE:
            const { error } = action.payload;
            return { ...state, loading: false, error };
        case POST_ORDER_SUCCESS:
            localStorage.removeItem('cart');
            return { ...initialState };
        default:
            return state;
    }
}
