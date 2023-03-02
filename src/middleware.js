const asyncActionMiddleware = (store) => (next) => async (action) => {
    if(typeof action == 'function'){
        return action(store.dispatch);
    }
    next(action);
}


module.exports = {
    asyncActionMiddleware,
}