import axios from 'axios';

import {
  ADD_ACCOUNT,
  DELETE_ACCOUNT,
  GET_ACCOUNTS,
  ACCOUNTS_LOADING,
  GET_TRANSACTIONS,
  TRANSACTIONS_LOADING,
} from '../types';

// Accounts loading
export const setAccountsLoading = () => {
  return {
    type: ACCOUNTS_LOADING,
  };
};

// Transactions loading
export const setTransactionsLoading = () => {
  return {
    type: TRANSACTIONS_LOADING,
  };
};

// Get Transactions
export const getTransactions = plaidData => dispatch => {
  dispatch(setTransactionsLoading());
  axios
    .post('/api/plaid/accounts/transactions', plaidData)
    .then(res =>
      dispatch({
        type: GET_TRANSACTIONS,
        payload: res.data,
      })
    )
    .catch(() =>
      dispatch({
        type: GET_TRANSACTIONS,
        payload: null,
      })
    );
};

// Add account
export const addAccount = plaidData => dispatch => {
  const { accounts } = plaidData;
  axios
    .post('/api/plaid/accounts', plaidData)
    .then(res =>
      dispatch({
        type: ADD_ACCOUNT,
        payload: res.data,
      })
    )
    .then(data =>
      accounts ? dispatch(getTransactions(accounts.concat(data.payload))) : null
    )
    .catch(err => console.log(err));
};

// Delete account
export const deleteAccount = plaidData => dispatch => {
  // eslint-disable-next-line no-alert
  if (window.confirm('Are you sure you want to remove this account?')) {
    const { id } = plaidData;
    const newAccounts = plaidData.accounts.filter(
      // eslint-disable-next-line no-underscore-dangle
      account => account._id !== id
    );
    axios
      .delete(`/api/plaid/accounts/${id}`)
      .then(() =>
        dispatch({
          type: DELETE_ACCOUNT,
          payload: id,
        })
      )
      .then(newAccounts ? dispatch(getTransactions(newAccounts)) : null)
      .catch(err => console.log(err));
  }
};

// Get all accounts for specific user
export const getAccounts = () => dispatch => {
  dispatch(setAccountsLoading());
  axios
    .get('/api/plaid/accounts')
    .then(res =>
      dispatch({
        type: GET_ACCOUNTS,
        payload: res.data,
      })
    )
    .catch(() =>
      dispatch({
        type: GET_ACCOUNTS,
        payload: null,
      })
    );
};
