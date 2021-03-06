const redux = require('redux')

//action constants
const BUY_CAKE = 'BUY_CAKE',BUY_ICECREAM = 'BUY_ICECREAM'

//ACTION Creator 
const buyCake = (quantity) => {
    //ACTION
    return {
        type:BUY_CAKE,
        quantity: quantity,
        info: 'First readux action'
    }
}

const buyIceCreams = (quantity) => {
    //ACTION
    return {
        type:BUY_ICECREAM,
        quantity: quantity,
        info: 'First readux action'
    }
}


//Initial state
const initState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}


const reducer = (state = initState, action) =>{
    switch(action.type) {
        case BUY_CAKE: 
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.quantity
            }
        case BUY_ICECREAM: 
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - action.quantity
            }
        default:
            return state
    }   
}

const store = redux.createStore(reducer)

console.log("Opening stock = ",store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Current inventory', store.getState())
})

console.log('order 2 cakes')
store.dispatch(buyCake(2))

console.log('order 2 icecreams')
store.dispatch(buyIceCreams(2))

console.log('order 3 cakes')
store.dispatch(buyCake(3))

unsubscribe()

