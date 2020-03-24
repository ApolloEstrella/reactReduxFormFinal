import { ADD_POST, EDIT_POST, DEL_POST } from "./action/actions";

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
  counterId: 0
};

const accountReducer = (state = initialState, action) => {
  
  if (action.type === LOAD) {
    return { personInfo: action.personInfo, memberList: state.memberList };
  }

  if (action.type === EDIT_POST) {
    return { personInfo: action.person, memberList: state.memberList };
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
    var member = {person: { ...action.person.person, id: action.counterId }};

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
    memberList: state.memberList.filter((per) => per.person.id !== action.id)}
  return {
    ...state,
    memberList: state.memberList.filter((per) => per.person.id !== action.id)
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
