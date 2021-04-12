const userCity = (state = {}, action) => {
    switch(action.type) {
        case 'ADDUSERCITY': 
            return action.payload;
        default:
            return state;
    }
}

export default userCity;