import {
  SET_Dark,

} from './actions';

const initialState = {
  Darking: false,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_Dark:
      return {...state, Darking: action.payload};
    default:
      return state;
  }
}

export default userReducer;
