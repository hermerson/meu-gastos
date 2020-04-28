import {createReducer, createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  createAccount: ['account'],
  updateAccount: ['account', 'accountId'],
  deleteAccount: ['accountId'],
});

export const AccountsTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  accounts: [],
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_ACCOUNT]: (state, action) => {
    return {
      ...state,
      accounts: [...state.accounts, action.account],
    };
  },
  [Types.DELETE_ACCOUNT]: (state, action) => {
    return {
      ...state,
      accounts: state.accounts.filter(
        (elem) => !action.accountId.includes(elem.id),
      ),
    };
  },
  [Types.UPDATE_ACCOUNT]: (state, action) => {
    return {
      ...state,
      accounts: state.accounts.map((elem) =>
        elem.id === action.accountId ? {...elem, ...action.account} : elem,
      ),
    };
  },
});
