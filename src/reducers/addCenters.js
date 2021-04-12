const addCenters = (state = {}, action) => {
    switch(action.type) {
        case 'ADDCENTERS': 
            return action.payload;
        default:
            return state;
    }
}

export default addCenters;