export const actionUser = {
    LOAD_RESIGN: "LOAD_RESIGN",
    LOAD_RESIGN_SUCCESS: "LOAD_RESIGN_SUCCESS",
    LOAD_RESIGN_FAILURE: "LOAD_RESIGN_FAILURE",

    LOAD_LOGIN:"LOAD_LOGIN",
    LOAD_LOGIN_SUCCESS: "LOAD_LOGIN_SUCCESS",
    LOAD_LOGIN_FAILURE: "LOAD_RESIGN_FAILURE",

    LOAD_OUT :"LOG_OUT",
    LOAD_OUT_SUCCESS: "LOAD_OUT_SUCCESS",
    LOAD_OUT_FAILURE: "LOAD_RESIGN_FAILURE",
}
export function loadResign(user:any) {
    return {
      type: actionUser.LOAD_RESIGN,
      payload: user

    };
};


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


  export function loginLoad(user:any) {
    return {
      type: actionUser.LOAD_LOGIN,
      payload: user
  
    };
  }
  
  export function loginLoadSuccess(data: []) {
    return {
      type: actionUser.LOAD_LOGIN_SUCCESS,
      payload: {
        data: data
      }
    };
  }
  
  export function loginLoadFailure(error: any) {
    return {
      type: actionUser.LOAD_RESIGN_FAILURE,
      payload: {
        error: error
      }
    };
  }


  export function logOut () {
    return {
      type: actionUser.LOAD_OUT,
    }; 
  }
  export function logOutFailure(error: any) {
    return {
      type: actionUser.LOAD_OUT_FAILURE,
      payload: {
        error: error
      }
    };
  }
  export function logOutSuccess(data: []) {
    return {
      type: actionUser.LOAD_OUT_SUCCESS,
      payload: {
        data: data
      }
    };
  }