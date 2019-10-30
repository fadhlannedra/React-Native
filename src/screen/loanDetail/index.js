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
  Form,
  Item,
  Input,
  Label
} from "native-base";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CustomHeader from "../../components/customHeader";
import { RefreshControl } from "react-native";
import { getLoanDetail } from "../../actions/customer.js";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from "react-native";
// import SearchInput, { createFilter } from "react-native-search-filter";
// const KEYS_TO_FILTERS = ["cif", "loanNumber"];

class LoanDetail extends Component {
  constructor(props) {
    super(props);

    const { navigation } = this.props;
    this.state = {
      searchTerm: "",
      cif: navigation.getParam("cif"),
      loanNumber: null,
      loanTypeCode: null,
      ammount: null,
      balance: null,
      openDate: null,
      duedate: null,
      tenor: null
    };
  }

  componentDidMount() {
    this.reload();
  }

  componentDidUpdate(prevProps, prevState) {
    const { getLoanDetail } = this.props;
    if (prevProps.getLoanDetail !== getLoanDetail) {
      this.setState({
        // loanNumber: loandel.loanNumber,
        // loanTypeCode: loandel.loanTypeCode,
        // ammount: loandel.ammount,
        // balance: loandel.balance,
        // openDate: loandel.openDate,
        // duedate: loandel.duedate,
        // tenor: loandel.tenor
        getLoanDetail
      });
    }
  }

  reload() {
    this.props.getLoanDetail(this.props.navigation.getParam("cif"));
    // console.log(this.props.getLoanDetail(this.state.cif));
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    const { navigation, loandel } = this.props;
    // const filteredLoan = this.props.loandel.filter(
    //   createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    // );
    return (
      <Container>
        <CustomHeader
          navigation={this.props.navigation}
          title="Loan Detail"
          disableBackButton={true}
        />

        <View style={styles.container}>
          <ImageBackground
            source={require("../../../assets/home/bahan.png")}
            style={{ width: "100%", height: "100%" }}
          >
            {/* <SearchInput
            onChangeText={term => {
              this.searchUpdated(term);
            }}
            style={styles.searchInput}
            placeholder="asdf"
          /> */}

            <ScrollView>
              <Text>{this.props.navigation.getParam("cif")}</Text>
              <Text>{this.state.loanNumber}</Text>
              {this.props.getLoanDetail.length ? (
                this.props.getLoanDetail.map(data => (
                  <Text>{data.loanNumber}</Text>
                ))
              ) : (
                <Text>data kosong</Text>
              )}

              {/* <Text>{loandel.loanNumber}</Text> */}
              {/* {filteredLoan.map(res => {
              return (
                <ListItem
                  key={res.cif}
                  style={styles.emailItem}
                  
                >
                  <Left>
                    <Icon type="AntDesign" name="user"></Icon>
                  </Left>
                  <Body>
                    <Text style={{left: -10}}>{res.cif}</Text>
                    <Text style={{left: -10}}>{res.loanNumber}</Text>
                    <Text style={{left: -10}}>{res.loanTypeCode}</Text>
                    <Text style={{left: -10}}>{res.ammount}</Text>
                    <Text style={{left: -10}}>{res.balance}</Text>
                    <Text style={{left: -10}}>{res.openDate}</Text>
                    <Text style={{left: -10}}>{res.duedate}</Text>
                    <Text style={{left: -10}}>{res.tenor}</Text>
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
            })} */}
            </ScrollView>
          </ImageBackground>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  },
  emailItem: {
    borderBottomWidth: 0.5,
    borderColor: "rgba(0,0,0,0.3)",
    padding: 10
  },
  emailSubject: {
    color: "rgba(0,0,0,0.5)"
  },
  searchInput: {
    padding: 10,
    borderColor: "#CCC",
    borderWidth: 1
  }
});
function mapStateToProps(state) {
  return {
    loading: state.getLoanDetail.loading,
    getLoanDetail: state.getLoanDetail.data
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getLoanDetail }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(LoanDetail);
