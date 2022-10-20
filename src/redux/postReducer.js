export function postReducer(
    state = {country:(localStorage.getItem("doctors") ) ? JSON.parse(localStorage.getItem("doctors")) : null, loading: false, error:false},action) {
    switch (action.type) {
        case "POST_REQUEST":
            return {...state,loading:true,error:""}
          case "POST_SUCCESS" :
            return {
                ...state,
                loading: false,
                country:action.payload,
                error: ""
            }
      
        case "POST_ERROR" :
            return {
              ...state,
              loading: false,
              error: action.payload
            }
      
           default :
            return state 
    }
}