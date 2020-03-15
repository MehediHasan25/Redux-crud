import { addreqApi } from './../Services/Allapi';

export const ADDDATA = 'ADDDATA';

export const addSuccess = data => {
  return {
    type: ADDDATA,
    payload: data
  }
};



export const addReq = data => async dispatch => {
  try {
    let res = await addreqApi(data);
    dispatch(addSuccess(res.data))
  } catch (e) {
    dispatch(addSuccess(e));
  }
}