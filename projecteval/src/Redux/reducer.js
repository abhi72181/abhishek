
import { IS_AUTH } from "./actions";
const init = {isAuth:"false"};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case IS_AUTH:
      return {isAuth:payload}
    default:
      return store;
  }
};
