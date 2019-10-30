import { put, takeLatest, actionChannel } from "redux-saga/effects";
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

  
  GET_BILLPAYMENT_DETAIL_SUCCESS,
  GET_BILLPAYMENT_DETAIL_ERROR,
  GET_BILLPAYMENT_DETAIL,

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
import { filterFetch } from "../utils/apiUtil.js";
import { func } from "prop-types";

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* getAllCustomer() {
  try {
    yield delay(2000);

    const res = yield filterFetch(
        fetch("http://192.168.137.156:8080/customer/"));
    yield put({
        //clg kalau datanya kebaca ini masuk
      type: GET_ALL_CUSTOMER_SUCCESS,
      data: res
    });
    
  } catch (error) {
    yield put({
        // clg kalau datanya ga kebaca
      type: GET_ALL_CUSTOMER_ERROR,
      error: error
    });

    //kalau error cek di filter fetch, respon code harus sama
  }
}


export function* getCustomerDetail(action) {
    try {
        
        const res = yield filterFetch(
            fetch("http://192.168.137.156:8080/customer/" + action.cif)
        )
        // console.log("data masuk");
        yield put({
            type: GET_CUSTOMER_DETAIL_SUCCESS,
            data: res
        });
    } catch (error) {
        // console.log("data ga masuk");
        yield put({
            type: GET_CUSTOMER_DETAIL_ERROR,
            error: error
        });
    }
}

export function* getAllBilling() {
  try {
    yield delay(2000);

    const res = yield filterFetch(fetch("http://192.168.137.156:8080/billing/"));
    yield put({
      //clg kalau datanya kebaca ini masuk
      type: GET_ALL_BILLING_SUCCESS,
      data: res
    });
  } catch (error) {
    yield put({
      // clg kalau datanya ga kebaca
      type: GET_ALL_BILLING_ERROR,
      error: error
    });

    //kalau error cek di filter fetch, respon code harus sama
  }
}

export function* getBillingDetail(action) {
  try {
      
      const res = yield filterFetch(
          fetch("http://192.168.137.156:8080/billing/" + action.billingId)
      )
      yield put({
          type: GET_BILLING_DETAIL_SUCCESS,
          data: res
      });
  } catch (error) {
      yield put({
          type: GET_BILLING_DETAIL_ERROR,
          error: error
      });
  }
}

export function* updateBilling(action) {
  try{
    const res = yield filterFetch(
      fetch("http://192.168.137.156:8080/billing/" + action.data.billingId, {

      method: "PUT",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(action.data)
      })
    )
    yield put({
      type: UPDATE_BILLING_SUCCESS,
      data: json
    });
  } catch (error) {
    yield put({
      type: UPDATE_BILLING_ERROR,
      error: error
    });
  }
}

export function* getAllLoan() {
  try {
    yield delay(2000);

    const res = yield filterFetch(
        fetch("http://192.168.137.156:8080/loan/"));
    yield put({
        //clg kalau datanya kebaca ini masuk
      type: GET_ALL_LOAN_SUCCESS,
      data: res
    });
    
  } catch (error) {
    yield put({
        // clg kalau datanya ga kebaca
      type: GET_ALL_LOAN_ERROR,
      error: error
    });

    //kalau error cek di filter fetch, respon code harus sama
  }
}







export function* getLoanDetail(action) {
  try {
      
      const res = yield filterFetch(
          fetch("http://192.168.137.156:8080/loan/cif?cif=" + action.cif)
      )
      console.log("data masuk");
      yield put({
          type: GET_LOAN_DETAIL_SUCCESS,
          data: res
      });
  } catch (error) {
      console.log("data ga masuk");
      yield put({
          type: GET_LOAN_DETAIL_ERROR,
          error: error
      });
  }
}

export function* getAllBillPayment() {

  try {
    yield delay(2000);

    const res = yield filterFetch(
        fetch("http://192.168.137.156:8080/billing/billpayment"));
    yield put({
        //clg kalau datanya kebaca ini masuk
      type: GET_ALL_BILLPAYMENT_SUCCESS,
      data: res
    });
    
  } catch (error) {
    yield put({
        // clg kalau datanya ga kebaca
      type: GET_ALL_BILLPAYMENT_ERROR,
      error: error
    });

    //kalau error cek di filter fetch, respon code harus sama
  }
}

export function* getBillDetail(action) {
  try {
      
      const res = yield filterFetch(
          fetch("http://192.168.137.156:8080/billing/billpayment" + action.billingId)
      )
      console.log("tes data");
      yield put({
          type: GET_BILLPAYMENT_DETAIL_SUCCESS,
          data: res
      });
  } catch (error) {
    console.log("data ga masuk")
      yield put({
          type: GET_BILLPAYMENT_DETAIL_ERROR,
          error: error
      });
  }
}

export function* getAllPayment() {
  try {
    yield delay(2000);

    const res = yield filterFetch(
        fetch("http://192.168.1.11:8080/billing/dailypayment/"));
    yield put({
        //clg kalau datanya kebaca ini masuk
      type: GET_ALL_PAYMENT_SUCCESS,
      data: res
    });
    
  } catch (error) {
    yield put({
        // clg kalau datanya ga kebaca
      type: GET_ALL_PAYMENT_ERROR,
      error: error
    });

    //kalau error cek di filter fetch, respon code harus sama
  }
}

export function* getDetailPayment(action) {
  try {
      
      const res = yield filterFetch(
          fetch("http://192.168.1.11:8080/billing/dailypayment/" + action.cif)
      )
      // console.log("data masuk");
      yield put({
          type: GET_DETAIL_PAYMENT_SUCCESS,
          data: res
      });
  } catch (error) {
      // console.log("data ga masuk");
      yield put({
          type: GET_DETAIL_PAYMENT_ERROR,
          error: error
      });
  }
}



export function* addPayment(action) {

  try {

    const json = yield filterFetch(
      fetch("http://192.168.1.11:8080/billing/dailypayment/", {
      
       method: "POST",
       headers: {"content-type": "application/json"},
       body: JSON.stringify(action.data)

    })
    )
    
    yield put({
      type: ADD_PAYMENT_SUCCESS,
      data: json
    });
  } catch (error) {
    yield put({
      type: ADD_PAYMENT_ERROR,
      error: error
    });
  }
}









export function* watchGetAllCustomer() {
  yield takeLatest(GET_ALL_CUSTOMER, getAllCustomer)
}

export function* watchGetCustomerDetail() {
    yield takeLatest(GET_CUSTOMER_DETAIL, getCustomerDetail)
}

export function* watchGetAllBilling() {
  yield takeLatest(GET_ALL_BILLING, getAllBilling)
}

export function* watchGetBillingDetail() {
  yield takeLatest(GET_BILLING_DETAIL, getBillingDetail)
}

export function* watchupdateBilling() {
  yield takeLatest(UPDATE_BILLING, updateBilling)
}

export function* watchGetAllLoan() {
  yield takeLatest(GET_ALL_LOAN, getAllLoan)
}

export function* watchGetLoanDetail() {
  yield takeLatest(GET_LOAN_DETAIL, getLoanDetail)
}

export function* watchGetAllBillPayment() {
  yield takeLatest(GET_ALL_BILLPAYMENT, getAllBillPayment)
}

export function* watchGetBillDetail() {
  yield takeLatest(GET_BILLPAYMENT_DETAIL, getBillDetail)
}

export function* watchgetAllPayment(){
  yield takeLatest(GET_ALL_PAYMENT, getAllPayment)
}

export function* watchgetDetailPayment() {
  yield takeLatest(GET_DETAIL_PAYMENT, getDetailPayment)
}

export function* watchaddPayment() {
  yield takeLatest(ADD_PAYMENT, addPayment)
}