const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const DECREMENT_COUNT = 'DECREMENT_COUNT'
const INCREMENT_COUNT = 'INCREMENT_COUNT'
const CLEAR_BASKET = 'CLEAR_BASKET'
const DELETE_PRODUCT = 'DELETE_PRODUCT'


export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const decrementCount = (payload) => ({ type: DECREMENT_COUNT, payload })
export const incrementCount = (payload) => ({ type: INCREMENT_COUNT, payload })
export const clearBasket = () => ({ type: CLEAR_BASKET })
export const deleteProduct = (payload) => ({type: DELETE_PRODUCT, payload})

const checkProduct = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id); // находим элемент в стэйте
    if (productInState) {
        productInState.count++
        return [...state]
    } else {
        return [...state, { ...payload, count: 1 }]
    }
}

// нужно проверять, есть ли товар в массиве
// если нет - то добавлять новый объект в массив с count 1
// если да - то увеличивать свойство count на 1

const incrementQuantity = (state, payload) => {
    const product = state.find(el => el.id === payload)
    product.count++;
    return [...state]
}

const decrementQuantity = (state, payload) => {
    const product = state.find(el => el.id === payload);
    if (product.count === 1) {
        return [...state.filter(el => el.id !== payload)]

    } else {
        product.count--
        return [...state]
    }
}






export const basketReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_CART) {
        return checkProduct(state, action.payload)
    } else if (action.type === DECREMENT_COUNT) {
        return decrementQuantity(state, action.payload)
    } else if (action.type === INCREMENT_COUNT) {
        return incrementQuantity(state, action.payload)
    } else if (action.type === CLEAR_BASKET) {
        return defaultState
    } else if (action.type === DELETE_PRODUCT) {
        return [...state.filter(el => el.id !== action.payload)]
    } else {
        return state
    }
}