import axios from 'axios';
export const getTicketApplication = (applicationCode) => dispatch => {
    axios.get('https://61e710d9ce3a2d00173595e7.mockapi.io/application?search', { params: { applicationCode: applicationCode } })
    .then(
        response => dispatch ({ type: 'GET_TICKET_APPLICATION_SUCCES', payload: response.data }))
    .catch(error => dispatch({ type: 'GET_TICKET_APPLICATION_ERROR', payload: error }))
}
export const getLastApplicationCode = () => dispatch => {
    axios.get('https://61e710d9ce3a2d00173595e7.mockapi.io/lastApplicationCode')
    .then(
        response => dispatch ({ type: 'GET_LAST_APPLICATION_CODE_SUCCES', payload: response.data }))
    .catch(error => dispatch({ type: 'GET_LAST_APPLICATION_CODE_ERROR', payload: error }))
}
export const getTicketUsers = () => dispatch => {
    axios.get('https://61e710d9ce3a2d00173595e7.mockapi.io/user')
    .then(
        response => dispatch ({ type: 'GET_TICKET_USERS_SUCCES', payload: response.data }))
    .catch(error => dispatch({ type: 'GET_TICKET_USERS_ERROR', payload: error }))
}

export const postTicketApplication = (info) => dispatch => {
    axios.post('https://61e710d9ce3a2d00173595e7.mockapi.io/application',info)
    .then(
        response => dispatch ({ type: 'POST_TICKET_APPLICATION_SUCCES', payload: response.data }))
    .catch(error => dispatch({ type: 'POST_TICKET_APPLICATION_ERROR', payload: error }))
}
export const postTicketUsers = (info) => dispatch => {
    axios.post('https://61e710d9ce3a2d00173595e7.mockapi.io/user',info)
    .then(
        response => dispatch ({ type: 'POST_TICKET_USERS_SUCCES', payload: response.data }))
    .catch(error => dispatch({ type: 'POST_TICKET_USERS_ERROR', payload: error }))
}
export const postLastApplicationCode = (code) => dispatch => {
    axios.put('https://61e710d9ce3a2d00173595e7.mockapi.io/lastApplicationCode/1',code)
    .then(
        response => dispatch ({ type: 'POST_LAST_APPLICATION_CODE_SUCCES', payload: response.data }))
    .catch(error => dispatch({ type: 'POST_LAST_APPLICATION_CODE_ERROR', payload: error }))
}