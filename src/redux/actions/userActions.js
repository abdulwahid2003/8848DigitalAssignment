import * as actionType from '../actionTypes/actionTypes'

export const setUserName=(payload)=>({
    type:actionType.SET_USER_NAME,
    payload:payload
})
export const setUserId=(payload)=>({
    type:actionType.SET_USER_ID,
    payload:payload
})
export const setDetailImage=(payload)=>({
    type:actionType.SET_DETAIL_IMAGE,
    payload:payload
})
export const setUserPhoneNumber=(payload)=>({
    type:actionType.SET_USER_PHONE_NO,
    payload:payload
})
export const setUserAddress=(payload)=>({
    type:actionType.SET_USER_ADDRESS,
    payload:payload
})
export const setUserEmail=(payload)=>({
    type:actionType.SET_EMAIl,
    payload:payload
})

export const setUserToken=(payload)=>({
    type:actionType.SET_USER_TOKEN,
    payload:payload
})
