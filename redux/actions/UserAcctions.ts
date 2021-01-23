export const actionUser = {
    LOAD_RESIGN: "LOAD_RESIGN",
    LOAD_RESIGN_SUCCESS: "LOAD_RESIGN_SUCCESS",
    LOAD_RESIGN_FAILURE: "LOAD_RESIGN_FAILURE"
}
export function loadResign(user:any) {
    return {
      type: actionUser.LOAD_RESIGN,
      payload: user

    };
}
export function loadDataSuccess(data: []) {
    return {
      type: actionUser.LOAD_RESIGN_SUCCESS,
      payload: {
        data: data
      }
    };
  }
  
  export function loadDataFailure(error: any) {
    return {
      type: actionUser.LOAD_RESIGN_FAILURE,
      payload: {
        error: error
      }
    };
  }