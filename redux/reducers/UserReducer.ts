import produce from "immer";
import { actionUser } from "../actions/UserAcctions";

const initialState = {
  user: null,
  error: null
};

const successLoadData = (draft: any, { data }: any) => {
  draft.user = data;
};

const failureLoadData = (draft: any, { error }: any) => {
  draft.error = error;
};
const reducer = (state = initialState, action: any) => {
    return produce(state, draft => {
      switch (action.type) {
        case actionUser.LOAD_RESIGN_SUCCESS:
          successLoadData(draft, action.payload);
          break;
        case actionUser.LOAD_RESIGN_FAILURE:
          failureLoadData(draft, action.payload);
          break;
        case actionUser.LOAD_OUT_SUCCESS:
          successLoadData(draft, action.payload);
          break;
        case actionUser.LOAD_OUT_FAILURE:
          failureLoadData(draft, action.payload);
          break;
      }
    });
  };
  
  export default reducer;