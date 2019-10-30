import React, { Component } from "react";
import { getAllBilling } from "../../actions/customer.js";
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
import { RefreshControl, Alert, ImageBackground } from "react-native";

class Billing extends Component {
  componentDidMount() {
    this.reload();
  }

  reload() {
    this.props.getAllBilling();
  }

  showDetail(billingId) {
    this.props.navigation.navigate("BillingDetail", { billingId });
  }

  renderListItem(data, index) {
    return (
      <ListItem
        key={"item-" + index}
        onPress={() => this.showDetail(data.billingId)}
      >
        <Left>
          <Icon type="AntDesign" name="user"></Icon>
        </Left>
        <Body>
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
          title="Billing Id"
          disableBackButton={true}
        />
        <ImageBackground
          source={require("../../../assets/home/bahan.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <Content
            refreshControl={
              <RefreshControl
                refreshing={this.props.loading}
                onRefresh={() => this.reload()}
              />
            }
          >
            {this.props.billing.map((data, index) =>
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
    loading: state.getAllBilling.loading,
    billing: state.getAllBilling.data
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getAllBilling }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Billing);
