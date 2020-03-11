// Quack! This is a duck. https://github.com/erikras/ducks-modular-redux
const LOAD = "redux-form-examples/account/LOAD";

const initialState = {
  person: {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    sex: "",
    favoriteColor: "",
    employed: false,
    notes: ""
  },
  memberList: []
};

const accountReducer = (state = initialState, action) => {
  if (action.type === "ADD_POST") {


     
      return Object.assign({}, state, {
        memberList: state.memberList.concat(action.payload.value)
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

  
  if (action.type === "ADD_LOGIN") {
    return Object.assign({}, state, {
      loginModal: action.payload
    });
  }

  return state;
};

/**
 * Simulates data loaded into this reducer from somewhere
 */
//export const load = (data: any) => ({ type: LOAD, data })

export default accountReducer;
