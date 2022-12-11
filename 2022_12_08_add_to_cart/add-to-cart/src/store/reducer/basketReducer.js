const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const INCREMENT_COUNT = 'INCREMENT_COUNT'

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const deleteFromCart = (payload) => ({ type: DELETE_FROM_CART, payload })
export const incrementCount = (payload) => ({ type: INCREMENT_COUNT, payload })

const checkProduct = (state, payload) => {
    const productInState = state.find(el => el.id === payload.id); // находим элемент в стэйте
    if (productInState) {
        productInState.count++
        return [...state]
    } else {
        return [...state, { ...payload, count: 1 }]
    }
}

const incrementQuantity = (state, payload) => {
    const product = state.find(el => el.id === payload.id);
    product.count++
    return [...state]
}

const decrementQuantity = (state, payload) => {
    const product = state.find(el => el.id === payload.id);
    if (product.count === 1) {
        return [...state.filter(el => el.id !== payload.id)]
        
    } else {
        product.count--
        return [...state]
    }
}

// const deleteProduct = (state, payload) => {
//     // const productInState = state.find(el => el.id === payload.id); // находим элемент в стэйте
//     // if (productInState) {
//     //     productInState.count--
//     //     return [...state]
//     // } else {
//     //     return [...state, { ...payload, count: 0 }]
//     // }


//     const productInState = state.find(el => el.id === payload.id); // находим элемент в стэйте
//     if (productInState) {
//         productInState.count--
//         return [...state.filter(el => el !== payload)]
//     } else {
//         return [...state]
//     }

// }

// нужно проверять, есть ли товар в массиве
// если нет - то добавлять новый объект в массив с count 1
// если да - то увеличивать свойство count на 1


export const basketReducer = (state = defaultState, action) => {
    if (action.type === ADD_TO_CART) {
        return checkProduct(state, action.payload)
    } else if (action.type === DELETE_FROM_CART) {
        return decrementQuantity(state, action.payload)
    } else if (action.type === INCREMENT_COUNT) {
        return incrementQuantity(state, action.payload)
    } else {
        return state
    }
}