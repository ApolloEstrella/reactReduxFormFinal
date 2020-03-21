export const ADD_POST = 'ADD_POST'
export const ADD_LOGIN = 'ADD_LOGIN'
export const EDIT_POST = 'EDIT_POST'


let counterId = 1
export function addPost(person)
{
    
    return {type: ADD_POST, person: person, counterId: counterId++}
}

export function editPost(person)
{
    return {type: EDIT_POST, person: person}
}

export function addLogin(text)
{
    return {type: ADD_LOGIN, payload: text}
}
