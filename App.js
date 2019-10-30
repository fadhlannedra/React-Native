import React, { Component } from "react";
import { store } from "./src/utils/store.js";
import { Provider } from "react-redux";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import CustomDrawer from "./src/components/customDrawer.js";
import { createStackNavigator } from "react-navigation-stack";
import { Container } from "native-base";
import Home from "./src/screen/home/index.js";
import LoginForm from "./src/screen/loginform/index.js"; // LoginForm adalah var, bukan nama folder
import Customer from "./src/screen/customer/index.js";
import Payment from "./src/screen/payment/index.js";
import Loan from "./src/screen/loan/index.js";
import Billing from "./src/screen/billing/index.js";
import CustomerDetail from "./src/screen/customerDetail/index.js";
import Scanner from "./src/screen/scanner/index.js";
import BillingDetail from "./src/screen/billingDetail/index.js";
import LoanDetail from "./src/screen/loanDetail/index.js";
import PaymentDetail from "./src/screen/paymentDetail/index.js";


const HomeNavigator = createDrawerNavigator(
  {
    Home: { screen: Home },
    Customer: { screen: Customer },
    Payment: { screen: Payment },

    Billing: { screen: Billing },
    Scanner: { screen: Scanner },
    
    
  },

  {
    initialRouteName: "Home",
    contentComponent: props => <CustomDrawer {...props} />
  }
);

const Navigator = createStackNavigator(
  {
    HomeNavigator,
    Loan: { screen: Loan },
    LoginForm: { screen: LoginForm },
    CustomerDetail: { screen: CustomerDetail },
    BillingDetail: { screen: BillingDetail },
    LoanDetail: { screen: LoanDetail },
    PaymentDetail: { screen: PaymentDetail },
  
  },

  { initialRouteName: "LoginForm", headerMode: "none" }
);

const AppContainer = createAppContainer(Navigator);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
