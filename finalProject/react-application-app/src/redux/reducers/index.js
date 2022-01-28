const INITIAL_STATE = {
     users: [],
     application: [],
     lastApplicationCode: "",
     adminInfos:{},
     message: "",
}


export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_TICKET_USERS_SUCCES': return { ...state, users: action.payload }
        case 'GET_TICKET_USERS_ERROR': return { ...state, message: action.payload }
        case 'GET_TICKET_APPLICATION_SUCCES': return { ...state, application: action.payload }
        case 'GET_TICKET_APPLICATION_ERROR': return { ...state, message: action.payload }
        case "GET_LAST_APPLICATION_CODE_SUCCES": return {...state, lastApplicationCode: action.payload}
        case "GET_LAST_APPLICATION_CODE_ERROR": return {...state, message: action.payload}
        case "POST_TICKET_USERS_SUCCES": return {...state, message: action.payload}
        case "POST_TICKET_USERS_ERROR": return {...state, message: action.payload}
        case "POST_TICKET_APPLICATION_SUCCES": return {...state, message: action.payload}
        case "POST_TICKET_APPLICATION_ERROR": return {...state, message: action.payload}
        case "POST_LAST_APPLICATION_CODE_SUCCES": return {...state, lastApplicationCode: action.payload}
        case "POST_LAST_APPLICATION_CODE_ERROR": return {...state, message: action.payload}
        default: return state
    }
}