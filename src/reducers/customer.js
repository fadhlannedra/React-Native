import {
  GET_ALL_CUSTOMER,
  GET_ALL_CUSTOMER_SUCCESS,
  GET_ALL_CUSTOMER_ERROR,
  GET_CUSTOMER_DETAIL,
  GET_CUSTOMER_DETAIL_SUCCESS,
  GET_CUSTOMER_DETAIL_ERROR,
  GET_ALL_BILLING,
  GET_ALL_BILLING_SUCCESS,
  GET_ALL_BILLING_ERROR,
  GET_BILLING_DETAIL,
  GET_BILLING_DETAIL_SUCCESS,
  GET_BILLING_DETAIL_ERROR,
  UPDATE_BILLING,
  UPDATE_BILLING_SUCCESS,
  UPDATE_BILLING_ERROR,
  GET_ALL_LOAN,
  GET_ALL_LOAN_SUCCESS,
  GET_ALL_LOAN_ERROR,
  GET_LOAN_DETAIL,
  GET_LOAN_DETAIL_SUCCESS,
  GET_LOAN_DETAIL_ERROR,
  GET_ALL_BILLPAYMENT,
  GET_ALL_BILLPAYMENT_SUCCESS,
  GET_ALL_BILLPAYMENT_ERROR,
  GET_BILLPAYMENT_DETAIL,
  GET_BILLPAYMENT_DETAIL_SUCCESS,
  GET_BILLPAYMENT_DETAIL_ERROR,
  GET_ALL_PAYMENT,
  GET_ALL_PAYMENT_SUCCESS,
  GET_ALL_PAYMENT_ERROR,
  GET_DETAIL_PAYMENT,
  GET_DETAIL_PAYMENT_SUCCESS,
  GET_DETAIL_PAYMENT_ERROR,
  ADD_PAYMENT,
  ADD_PAYMENT_SUCCESS,
  ADD_PAYMENT_ERROR

} from "../actions/customer.js";

export function getAllCustomer(state = { data: [], loading: false }, action) {
  switch (action.type) {
    case GET_ALL_CUSTOMER:
      return {
        ...state,
        data: [],
        loading: true
      };
    case GET_ALL_CUSTOMER_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case GET_ALL_CUSTOMER_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function getCustomerDetail(
  state = { data: [], loading: false },
  action
) {
  switch (action.type) {
    case GET_CUSTOMER_DETAIL:
      return {
        ...state,
        data: null,
        loading: true
      };
    case GET_CUSTOMER_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case GET_CUSTOMER_DETAIL_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function getAllBilling(state = { data: [], loading: false }, action) {
  switch (action.type) {
    case GET_ALL_BILLING:
      return {
        ...state,
        data: [],
        loading: true
      };
    case GET_ALL_BILLING_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case GET_ALL_BILLING_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function getBillingDetail(state = { data: [], loading: false }, action) {
  switch (action.type) {
    case GET_BILLING_DETAIL:
      return {
        ...state,
        data: null,
        loading: true
      };
    case GET_BILLING_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case GET_BILLING_DETAIL_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function updateBilling(state = { data: [], loading: false }, action) {
  switch (action.type) {
    case UPDATE_BILLING:
      return {
        ...state,
        //data: [],
        loading: true
      };
    case UPDATE_BILLING_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case UPDATE_BILLING_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function getAllLoan(state = { data: [], loading: false }, action) {
  switch (action.type) {
    case GET_ALL_LOAN:
      return {
        ...state,
        data: [],
        loading: true
      };
    case GET_ALL_LOAN_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case GET_ALL_LOAN_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function getLoanDetail(state = { data: [], loading: false }, action) {
  console.log(action);
  switch (action.type) {
    case GET_LOAN_DETAIL:
      return {
        ...state,
        data: null,
        loading: true
      };
    case GET_LOAN_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case GET_LOAN_DETAIL_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function getAllBillPayment(
  state = { data: [], loading: false },
  action
) {
  switch (action.type) {
    case GET_ALL_BILLPAYMENT:
      return {
        ...state,
        data: [],
        loading: true
      };
    case GET_ALL_BILLPAYMENT_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case GET_ALL_BILLPAYMENT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function getBillDetail(state = { data: [], loading: false }, action) {
  switch (action.type) {
    case GET_BILLPAYMENT_DETAIL:
      return {
        ...state,
        data: null,
        loading: true
      };
    case GET_BILLPAYMENT_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case GET_BILLPAYMENT_DETAIL_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function getAllPayment(state = { data: [], loading: false }, action) {
  switch (action.type) {
    case GET_ALL_PAYMENT:
      return {
        ...state,
        data: [],
        loading: true
      };
    case GET_ALL_PAYMENT_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case GET_ALL_PAYMENT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function getDetailPayment(state = { data: [], loading: false }, action) {
  switch (action.type) {
    case GET_DETAIL_PAYMENT:
      return {
        ...state,
        data: null,
        loading: true
      };
    case GET_DETAIL_PAYMENT_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case GET_DETAIL_PAYMENT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}

export function addPayment(state = {data: [], loading: false}, action) {
  switch (action.type) {
    case ADD_PAYMENT:
      return {
        ...state,
        // data: null,
        loading: true
      };
    case ADD_PAYMENT_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false
      };
    case ADD_PAYMENT_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
}
