import { combineReducers } from "redux";
import {
  getAllCustomer,
  getCustomerDetail,
  getAllBilling,
  getBillingDetail,
  getLoanDetail,
  getAllLoan,
  updateBilling,
  getAllBillPayment,
  getBillDetail,
  getAllPayment,
  getDetailPayment,
  addPayment
} from "./customer.js";

const allReducers = combineReducers({
  customer: getAllCustomer,
  detail: getCustomerDetail,
  getAllBilling,
  billdetail: getBillingDetail,
  loan: getAllLoan,
  getLoanDetail,
  update: updateBilling,
  billpayment: getAllBillPayment,
  billpaydet: getBillDetail,
  allpayment: getAllPayment,
  detpayment: getDetailPayment,
  addpayment: addPayment
});

export default allReducers;
