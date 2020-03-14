export const ADD_POST = 'ADD_POST'
export const ADD_LOGIN = 'ADD_LOGIN'



let counterId = 1
export function addPost(person)
{
    
    return {type: ADD_POST, person: person, counterId: counterId++}
}

export function addLogin(text)
{
    return {type: ADD_LOGIN, payload: text}
}
