export const actionTypes = {
    LOAD_DATA: "LOAD_DATA",
    LOAD_DATA1: "LOAD_DATA1",
    LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS",
    LOAD_DATA_FAILURE: "LOAD_DATA_FAILURE",

    LOAD_ADD_PRODUCT:"LOAD_ADD_PRODUCT"
    
  };

  export function loadData(page,limit) {
    return {
      type: actionTypes.LOAD_DATA,
      payload: {
        page:page,
        limit:limit
      }
    };
  }
  export function loadData1(name:String) {
    return {
      type: actionTypes.LOAD_DATA1,
      payload: name

    };
  }
  export function loadDataSuccess(data) {
    return {
      type: actionTypes.LOAD_DATA_SUCCESS,
      payload: {
        data: data
      }
    };
  }
  
  export function loadDataFailure(error: any) {
    return {
      type: actionTypes.LOAD_DATA_FAILURE,
      payload: {
        error: error
      }
    };
  }
  export function loadAddProduct(param:{}) {
    return {
      type: actionTypes.LOAD_ADD_PRODUCT,
      payload: param

    };
  }