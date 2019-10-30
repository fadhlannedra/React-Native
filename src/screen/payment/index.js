import React, { Component } from "react";
import {getAllBillPayment, getBillDetail} from "../../actions/customer.js"
import {
  Container,
  Content,
  Text,
  Body,
  ListItem,
  Icon,
  Fab,
  Right,
  Left
} from "native-base";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CustomHeader from "../../components/customHeader.js";
import { RefreshControl, ImageBackground } from "react-native";

class Payment extends Component {
  componentDidMount() {
    this.reload();
  }

  reload() {
    this.props.getAllBillPayment();
  }

  

  showDetail(billingId) {
    this.props.navigation.navigate("PaymentDetail", { billingId });
  }

  renderListItem(data, index) {
    return (
      <ListItem key={'item-' + index} onPress={() =>
        this.showDetail(data.billingId)
    }>
        <Left>
          <Icon type="AntDesign" name="user"></Icon>
        </Left>
        <Body style={{left: -10}}>
          <Text>{data.billingId}</Text>
        </Body>
        <Right>
          <Icon
            type="EvilIcons"
            name="navicon"
            style={{ color: "#6b0026", padding: 10 }}
          ></Icon>
        </Right>
      </ListItem>
    );
  }

  render() {
    return (
      <Container>
        <CustomHeader
          navigation={this.props.navigation}
          title="Bill Payment"
          disableBackButton={true}
        />
         <ImageBackground source={require('../../../assets/home/bahan.png')}
        style={{width: "100%", height: "100%"}}>

        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              onRefresh={() => this.reload()}
            />
          }
        >
          {this.props.billpayment.map((data, index) =>
            this.renderListItem(data, index)
          )}
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.billpayment.loading,
    billpayment: state.billpayment.data
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getAllBillPayment }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Payment);
