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
import { getCustomerDetail } from "../../actions/customer.js";
import { RefreshControl, ImageBackground } from "react-native";

class CustomerDetail extends Component {
  constructor(props) {
    super(props);

    const { navigation } = this.props;
    this.state = {
      cif: navigation.getParam("cif"),
      firstname: null,
      lastname: null,
      address: null,
      birth_date: null,
      birth_place: null
    };
  }

  componentDidMount() {
    this.reload();
  }

  componentDidUpdate(prevProps, prevState) {
    const { detail } = this.props;
    if (prevProps.detail !== detail) {
      this.setState(detail);
    }
  }

  reload() {
    this.props.getCustomerDetail(this.state.cif);
  }
 
  showDetail(){
    this.props.navigation.navigate("Loan");
  }
  
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <CustomHeader navigation={navigation} title="Customer Detail" />
        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              onRefresh={() => this.reload()}
            />
          }
        >
          <ImageBackground source={require('../../../assets/home/bahan.png')}
        style={{width: "100%", height: "100%"}}>
          <Form>
            <Item floatingLabel>
              <Label>cif</Label>
              <Input style={{fontSize: 20}} disabled value={this.state.cif} />
            </Item>

            <Item floatingLabel>
              <Label>firstname</Label>
              <Input style={{fontSize: 20}} disabled value={this.state.firstname} />
            </Item>

            <Item floatingLabel>
              <Label>Lastname</Label>
              <Input style={{fontSize: 20}} disabled value={this.state.lastname} />
            </Item>

            <Item floatingLabel>
              <Label>Address</Label>
              <Input style={{fontSize: 20}} disabled value={this.state.address} />
            </Item>

            <Item floatingLabel>
              <Label>Birthdate</Label>
              <Input style={{fontSize: 20}} disabled value={this.state.birth_date} />
            </Item>

            <Item floatingLabel>
              <Label>Birthplace</Label>
              <Input style={{fontSize: 20}} disabled value={this.state.birth_place} />
            </Item>
          </Form>
          <Button onPress = {() => this.props.navigation.navigate("Loan")} rounded style={{marginTop: 20, marginHorizontal: 80, backgroundColor: 'rgb(32, 53, 70)', left: 5}}>
            <Text style={{left: 6}}>See Loan Detail</Text>
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
    loading: state.detail.loading,
    detail: state.detail.data
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getCustomerDetail }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CustomerDetail);
