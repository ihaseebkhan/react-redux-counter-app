const rootReducer = (state={count:0},action) => {

    if (action.type === 'increment') {
        return {count:state.count+1};
    }
    
    if (action.type === 'decrement') {
        return {count:state.count-1};
    }
    
    if (action.type === 'add') {
        return {count:state.count+action.payload};
    }
    
    if (action.type === 'subtract') {
        return {count:state.count-action.payload};
    }
    
        return state;
    }

export default rootReducer;