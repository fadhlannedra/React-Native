import { func } from "prop-types";

export const GET_ALL_CUSTOMER = "GET_ALL_CUSTOMER";
export const GET_ALL_CUSTOMER_SUCCESS = "GET_ALL_CUSTOMER_SUCCESS";
export const GET_ALL_CUSTOMER_ERROR = "GET_ALL_CUSTOMER_ERROR";

export const GET_CUSTOMER_DETAIL = "GET_CUSTOMER_DETAIL";
export const GET_CUSTOMER_DETAIL_SUCCESS = "GET_CUSTOMER_DETAIL_SUCCESS";
export const GET_CUSTOMER_DETAIL_ERROR = "GET_CUSTOMER_DETAIL_ERROR";

export const GET_ALL_BILLING = "GET_ALL_BILLING";
export const GET_ALL_BILLING_SUCCESS = "GET_ALL_BILLING_SUCCESS";
export const GET_ALL_BILLING_ERROR = "GET_ALL_CUSTOMER_ERROR";

export const GET_BILLING_DETAIL = "GET_BILLING_DETAIL";
export const GET_BILLING_DETAIL_SUCCESS = "GET_BILLING_DETAIL_SUCCESS";
export const GET_BILLING_DETAIL_ERROR = "GET_BILLING_DETAIL_ERROR";

export const UPDATE_BILLING = "UPDATE_BILLING";
export const UPDATE_BILLING_SUCCESS = "UPDATE_BILLING_SUCCESS";
export const UPDATE_BILLING_ERROR = "UPDATE_BILLING_ERROR";

export const GET_ALL_LOAN = "GET_ALL_LOAN";
export const GET_ALL_LOAN_SUCCESS = "GET_ALL_LOAN_SUCCESS";
export const GET_ALL_LOAN_ERROR = "GET_ALL_LOAN_ERROR";

export const GET_LOAN_DETAIL = "GET_LOAN_DETAIL";
export const GET_LOAN_DETAIL_SUCCESS = "GET_LOAN_DETAIL_SUCCESS";
export const GET_LOAN_DETAIL_ERROR = "GET_LOAN_DETAIL_ERROR";

export const GET_ALL_BILLPAYMENT = "GET_ALL_BILLPAYMENT";
export const GET_ALL_BILLPAYMENT_SUCCESS = "GET_ALL__BILLPAYMENT_SUCCESS";
export const GET_ALL_BILLPAYMENT_ERROR = "GET_ALL_BILLPAYMENT_ERROR";

export const GET_BILLPAYMENT_DETAIL = "GET_BILLPAYMENT";
export const GET_BILLPAYMENT_DETAIL_SUCCESS = "GET_BILPAYMENT_DETAIL_SUCCESS";
export const GET_BILLPAYMENT_DETAIL_ERROR = "GET_BILLPAYMENT_DETAIL_ERROR";

export const GET_ALL_PAYMENT = "GET_ALL_PAYMENT";
export const GET_ALL_PAYMENT_SUCCESS = "GET_ALL_PAYMENT_SUCCESS";
export const GET_ALL_PAYMENT_ERROR =  "GET_ALL_PAYMENT_ERROR";

export const GET_DETAIL_PAYMENT = "GET_DETAIL_PAYMENT";
export const GET_DETAIL_PAYMENT_SUCCESS = "GET_DETAIL_PAYMENT";
export const GET_DETAIL_PAYMENT_ERROR = "GET_ DETAIL_PAYMENT";


export const ADD_PAYMENT = "ADD_PAYMENT";
export const ADD_PAYMENT_SUCCEES = "ADD_PAYMENT_SUCCESS";
export const ADD_PAYMENT_ERROR = "ADD_PAYMENT_ERROR";

export function getAllCustomer() {
  return {
    type: GET_ALL_CUSTOMER
  };
}

export function getCustomerDetail(cif) {
  return {
    cif: cif,
    type: GET_CUSTOMER_DETAIL
  };
}

export function getAllBilling() {
  return {
    type: GET_ALL_BILLING
  };
}

export function getBillingDetail(billingId) {
  return {
    billingId: billingId,
    type: GET_BILLING_DETAIL
  };
}

export function updateBilling(billingId, data) {
  return {
    billingId: billingId,
    data: data,
    type: UPDATE_BILLING
  };
}

export function getAllLoan() {
  return {
    type: GET_ALL_LOAN
  };
}

export function getLoanDetail(cif) {
  return {
    cif: cif,
    type: GET_LOAN_DETAIL
  };
}

export function getAllBillPayment() {
  return {
    type: GET_ALL_BILLPAYMENT
  };
}

export function getBillDetail(billingId) {
  return {
    type: GET_BILLPAYMENT_DETAIL,
    billingId: billingId
  };
}

export function getAllPayment() {
    return {
        type: GET_ALL_PAYMENT
    }
}


export function getDetailPayment(billingId) {
    return{
        type: GET_DETAIL_PAYMENT,
        billingId: billingId
    }
}

export function addPayment(data) {
    return {
        type: ADD_PAYMENT,
        data: data
    }
}
