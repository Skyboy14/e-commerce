import { FETCH_PRODUCTS, DELETE_PRODUCT, UPDATE_PRODUCT, ADD_PRODUCT, SORT_PRODUCT } from '../Action/Type';

const initialState = {
    products: [],
    // sortedAscending: false,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload.updatedProduct : product
                ),
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case SORT_PRODUCT:
            return {
                ...state,
                products: action.payload.slice().sort((a, b) => a.price - b.price),
            };
        default:
            return state;
    }
};

export default productReducer;

