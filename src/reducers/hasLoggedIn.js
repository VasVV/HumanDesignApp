const hasLoggedIn = (state = false, action) => {
    switch(action.type) {
        case 'HASLOGGEDIN': 
            return !state
        default:
            return state;
    }
}

export default hasLoggedIn;