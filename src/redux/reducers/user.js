import * as actionTypes from '../actionTypes/actionTypes'

let initialState={
    username:null,
    userId: null,
  
    email:null,
    contactNo:null,
    DetailImage:null,
    userAddress:null,
    userToken:null
}
const user=(state=initialState,action)=>{
const {type,payload}=action

switch (type) {
  case actionTypes.SET_USER_TOKEN:
        return{
          ...state,
          userToken:payload
        }
    case actionTypes.SET_USER_NAME:
        return{
          ...state,
          username:payload
        }
    case actionTypes.SET_USER_ID:
        return{
          ...state,
          userId:payload
        }
    case actionTypes.SET_EMAIl:
        return{
          ...state,
          email:payload
        }
  
    case actionTypes.SET_DETAIL_IMAGE:
        return{
          ...state,
          userDetailImage:payload
        }
  
        
        case actionTypes.SET_USER_PHONE_NO:
            return{
              ...state,
              contactNo:payload
            }
        case actionTypes.SET_USER_ADDRESS:
            return{
              ...state,
              userAddress :payload
            }
      

    default:
        return state
      
}

}
export default user