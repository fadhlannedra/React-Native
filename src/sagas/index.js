import { all, fork } from "redux-saga/effects";
import {
  watchGetAllCustomer,
  watchGetCustomerDetail,
  watchGetAllBilling,
  watchGetBillingDetail,
  watchGetLoanDetail,
  watchGetAllLoan,
  watchupdateBilling,
  watchGetAllBillPayment,
  watchGetBillDetail,
  watchgetAllPayment,
  watchaddPayment,
  watchgetDetailPayment
} from "./customer.js";

export default function* sagas() {
  yield all([
    fork(watchGetAllCustomer),
    fork(watchGetCustomerDetail),
    fork(watchGetAllBilling),
    fork(watchGetBillingDetail),
    fork(watchGetAllLoan),
    fork(watchGetLoanDetail),
    fork(watchupdateBilling),
    fork(watchGetAllBillPayment),
    fork(watchGetBillDetail),
    fork(watchgetAllPayment),
    fork(watchaddPayment),
    fork(watchgetDetailPayment)
  ]);
}
