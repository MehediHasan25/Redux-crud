import { ADDDATA } from '../actions/addAction';

const initialState = {
  addDataResponse: {}
}

const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDDATA:
      return Object.assign({}, state, {
        addDataResponse: action.payload
      })
    default:
      return state;
  }
}

export default addReducer;