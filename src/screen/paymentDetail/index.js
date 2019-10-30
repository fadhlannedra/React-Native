import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Card,
  CardItem,
  Thumbnail,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Input,
  Label
} from "native-base";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Image, StyleSheet } from "react-native";
import CustomHeader from "../../components/customHeader";
import { getBillDetail } from "../../actions/customer.js";
import { RefreshControl, ImageBackground } from "react-native";

class PaymentDetail extends Component {
  constructor(props) {
    super(props);

    const { navigation } = this.props;
    this.state = {
      billingId: navigation.getParam("billingId"),
      ammount: null,
      paymentDate: null
    };
  }

  componentDidMount() {
    this.reload();
  }

  componentDidUpdate(prevProps, prevState) {
    const { billpaydet } = this.props;
    if (prevProps.billpaydet !== billpaydet) {
      this.setState(billpaydet);
    }
  }

  reload() {
    this.props.getBillDetail(this.state.billingId);
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <CustomHeader navigation={navigation} title="Detail Bill Payment" />
        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              onRefresh={() => this.reload()}
            />
          }
        >
          <ImageBackground
            source={require("../../../assets/home/bahan.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <Form>
              <Item floatingLabel>
                <Label>Billing Id</Label>
                <Input disabled value={"" + this.state.billingId} />
              </Item>

              <Item floatingLabel>
                <Label>Ammount</Label>
                <Input disabled value={"" + this.state.ammount} />
              </Item>

              <Item floatingLabel>
                <Label>Payment Date</Label>
                <Input disabled value={"" + this.state.paymentDate} />
              </Item>
            </Form>
          </ImageBackground>
        </Content>
      </Container>
    );
  }
}

// const styles = StyleSheet.create({

// })

function mapStateToProps(state) {
  return {
    loading: state.billpaydet.loading,
    billpaydet: state.billpaydet.data
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getBillDetail }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(PaymentDetail);
