export const ADD_POST = 'ADD_POST'
export const ADD_LOGIN = 'ADD_LOGIN'




export function addPost(text)
{
    return {type: ADD_POST, payload: text}
}

export function addLogin(text)
{
    return {type: ADD_LOGIN, payload: text}
}
