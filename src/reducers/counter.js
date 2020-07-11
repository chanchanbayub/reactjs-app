let counterReducer = (state=0, action) => {
    switch (action.type) {
        case 'SUKA':
            return state + 1
    
        default:
            return state;
    }
}

export default counterReducer;