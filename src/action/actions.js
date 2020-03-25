export const ADD_POST = 'ADD_POST'
export const ADD_LOGIN = 'ADD_LOGIN'
export const EDIT_POST = 'EDIT_POST'
export const DEL_POST = "DEL_POST"
export const ADD_MODE = "ADD_MODE"
export const EDIT_SAVE = "EDIT_SAVE"


let counterId = 1
export function addPost(person)
{
    
    return {type: ADD_POST, person: person, counterId: counterId++}
}

export function editPost(person)
{
    return {type: EDIT_POST, person: person}
}

export function editSave(person)
{
    return {type: EDIT_SAVE, person: person}
}

export function delPost(id)
{
    return {type: DEL_POST, id: id}
}

export function addMode(addMode)
{
    return {type: ADD_MODE, addMode: addMode}
}

export function addLogin(text)
{
    return {type: ADD_LOGIN, payload: text}
}
