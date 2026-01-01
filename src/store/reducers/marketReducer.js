
import { SET_TOTAL_COUNT } from "../types";

const initialState = {
  totalCount: null,
};

export default function marketReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    default:
      return state;
  }
}
