
const INITIAL_STATE={
    user:[{name:"Abdul sammad khan",email:"abdulsamadkhan.me@gmail.com"}]
}

export default (state=INITIAL_STATE,action)=>{

    switch(action.type){
        case "setdata":
            return({
                ...state,
                user:[...state.user,action.users]
            })
    }
    return state;

}