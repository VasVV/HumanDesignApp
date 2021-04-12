import update from 'immutability-helper';

const addUserData = (state = {}, action) => {
    switch(action.type) {
        case 'ADDUSERDATA': 
            return action.payload;
        case 'HASBOUGHT':
            return update(state, { 
                productsBought: {
                    [action.payload]: {$set: true}
                }
            });
        default:
            return state;
    }
}

export default addUserData;