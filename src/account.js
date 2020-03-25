import { ADD_POST, EDIT_POST, DEL_POST, ADD_MODE, EDIT_SAVE } from "./action/actions";

// Quack! This is a duck. https://github.com/erikras/ducks-modular-redux
const LOAD = "redux-form-examples/account/LOAD";

const initialState = {
  person: {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    sex: "",
    favoriteColor: "",
    employed: false,
    notes: ""
  },
  memberList: [],
  counterId: 0,
  addMode: true
};

const accountReducer = (state = initialState, action) => {
  
  if (action.type === LOAD) {
    return { personInfo: action.personInfo, memberList: state.memberList };
  }

  if (action.type === EDIT_POST) {

    //const index = state.memberList.findIndex(member => member.id === action.person.id)
    

    //state.memberList[index] = action.person

    return { person: action.person, memberList: state.memberList, addMode: false };
  }

  if (action.type === EDIT_SAVE) {

    const index = state.memberList.findIndex(member => member.id === action.person.id)

    state.memberList[index] = action.person

    return { personInfo: action.person, memberList: state.memberList, addMode: false };
  }


  if (action.type === ADD_POST) {
    /*  var w = Object.assign({}, state, {
      person: action.person
    });

    w.person.id = action.counterId

    var x = {
      ...action.person,
      person: {
        ...action.person,
        [action.person]: { id:98799}
      }
    }; 
*/
    var member = {...action.person, id: action.counterId };

    return Object.assign({}, state, {
      memberList: state.memberList.concat(member)
    });

    /* var x = {
      ...state,
      person: {
        ...state.person,
        [action.payload.prop]: action.payload.value
      }
    }; */

    /*Object.assign({}, state, {
      memberList: state.memberList.concat(action.payload.value)
    });*/

    /* return {
      ...state,
      memberList: state.memberList.concat(action.payload.value)
    };*/
  }

  
if (action.type === DEL_POST){
  var x = {...state,
    memberList: state.memberList.filter((person) => person.id !== action.id)}
  return {
    ...state,
    memberList: state.memberList.filter((person) => person.id !== action.id)
  } 
}

if (action.type === ADD_MODE) {
  return { 
   ...state,
   addMode: action.addMode
  }
}

  return state;
};

/**
 * Simulates data loaded into this reducer from somewhere
 */
//export const load = (data: any) => ({ type: LOAD, data })
export const load = personInfo => ({ type: LOAD, personInfo });
export default accountReducer;
