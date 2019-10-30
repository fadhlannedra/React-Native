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
import {
  getBillingDetail,
  getAllBilling,
  updateBilling
} from "../../actions/customer.js";
import { RefreshControl, ImageBackground } from "react-native";

class BillingDetail extends Component {
  constructor(props) {
    super(props);

    const { navigation } = this.props;
    this.state = {
      billingId: navigation.getParam("billingId"),
      loanNumber: null,
      ammount: null,
      billDate: null,
      dueDate: null,
      statusCode: null
    };
  }

  componentDidMount() {
    this.reload();
  }

  componentDidUpdate(prevProps, prevState) {
    const { billdetail } = this.props;
    if (prevProps.billdetail !== billdetail) {
      this.setState(billdetail);
    }
  }

  reload() {
    this.props.getBillingDetail(this.state.billingId);
  }

  updateBilling() {
    const data = {
      billingId: this.state.billingId,
      loanNumber: this.state.loanNumber,
      ammount: this.state.ammount,
      billDate: this.state.billDate,
      dueDate: this.state.dueDate,
      statusCode: this.state.statusCode
    };

    this.props.updateBilling(data.billingId, data);
    this.props.getAllBilling();
    this.props.navigation.goBack();
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <CustomHeader navigation={navigation} title="Billing Detail" />
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
            <Form style={{ marginTop: 10 }}>
              <Item floatingLabel>
                <Label>Billing Id</Label>
                <Input disabled value={"" + this.state.billingId} />
              </Item>

              <Item floatingLabel>
                <Label>Loan Number</Label>
                <Input disabled value={"" + this.state.loanNumber} />
              </Item>

              <Item floatingLabel>
                <Label>Ammount</Label>
                <Input disabled value={"" + this.state.ammount} />
              </Item>

              <Item floatingLabel>
                <Label>Bill Date</Label>
                <Input disabled value={this.state.billDate} />
              </Item>

              <Item floatingLabel>
                <Label>Due Date</Label>
                <Input disabled value={this.state.dueDate} />
              </Item>

              <Item floatingLabel>
                <Label>Status Code</Label>
                <Input
                  onChangeText={statusCode => this.setState({ statusCode })}
                  value={"" + this.state.statusCode}
                />
              </Item>
            </Form>
            <Button
              style={{
                marginTop: 15,
                marginHorizontal: 90,
                backgroundColor: "rgb(32, 53, 70)"
              }}
              rounded
              onPress={() => this.updateBilling()}
            >
              <Text style={{ left: 27, marginBottom: 2 }}>Update</Text>
            </Button>
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
    loading: state.billdetail.loading || state.update.loading,
    billdetail: state.billdetail.data,
    Update: state.update.data
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    { getBillingDetail, getAllBilling, updateBilling },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(BillingDetail);
