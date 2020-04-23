import { IProduct, ActionTypeCreator } from "src/_core/interfaces/interface";

class Type {
  static readonly FETCH_START = Symbol("FetchStart");
  static readonly FETCH_SUCCESS = Symbol("FetchSuccess");
  static readonly FETCH_END = Symbol("FetchEnd");
}

const initialState = {
  products: [] as IProduct[],
};

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case Type.FETCH_START: {
      return {
        ...state,
      };
    }
    case Type.FETCH_SUCCESS: {
      return {
        ...state,
        products: action.products,
      };
    }
    case Type.FETCH_END: {
      return {
        ...state,
      };
    }
  }
};

interface IActions {
  [Type.FETCH_START]: {};
  [Type.FETCH_SUCCESS]: {
    products: IProduct[];
  };
  [Type.FETCH_END]: {};
}

type IAction = ActionTypeCreator<IActions>;
type IState = typeof initialState;

export {
  reducer as ProductReducer,
  IState as ProductState,
  IAction as ProductAction,
  Type as ProductActionType,
  initialState as InitialProductState,
};
