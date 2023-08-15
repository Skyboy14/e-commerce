import { FETCH_PRODUCTS, UPDATE_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT } from './Type';

const url = `https://my-json-server.typicode.com/Skyboy14/e-commerce/product`

export const fetchProducts = () => dispatch => {
    // Fetch products from an API
    fetch(url)
        .then(response => response.json())
        .then(data =>
            dispatch({
                type: FETCH_PRODUCTS,
                payload: data,
            })
        );
};

export const deleteProduct = (productId) => dispatch => {
    // You can dispatch a DELETE_PRODUCT action here and pass the product ID
    dispatch({
        type: DELETE_PRODUCT,
        payload: productId,
    });
};

export const updateProduct = (productId, updatedProduct) => dispatch => {
    console.log(productId, updatedProduct)
    dispatch({
        type: UPDATE_PRODUCT,
        payload: {
            id: productId,
            updatedProduct: updatedProduct,
        },
    });
};

export const addProduct = (newProduct) => {
    return {
        type: ADD_PRODUCT,
        payload: newProduct,
    };
};