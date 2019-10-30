import React, { Component } from "react";
import { getAllLoan } from "../../actions/customer.js";
import {
  Container,
  Content,
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
import { ImageBackground } from "react-native";
// import { styles } from "./style.js";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import SearchInput, { createFilter } from "react-native-search-filter";
const KEYS_TO_FILTERS = ["cif", "loanNumber"];

class Loan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  componentDidMount() {
    this.reload();
  }

  reload() {
    this.props.getAllLoan();
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  render() {
    const { navigation } = this.props;
    const filteredLoan = this.props.loan.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    return (
      <Container>
        <CustomHeader navigation={navigation} title="Loan" />
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../assets/home/bahan.png")}
            style={{ width: "100%", height: "100%" }}
          >
            <SearchInput
              onChangeText={term => {
                this.searchUpdated(term);
              }}
              style={styles.searchInput}
              placeholder="Search Cif"
            />

            <ScrollView>
              {filteredLoan.map(res => {
                return (
                  <ListItem key={res.loanNumber} style={styles.emailItem}>
                    <Left>
                      <Icon type="AntDesign" name="user"></Icon>
                    </Left>
                    <Body>
                      <Text style={{ left: -30, fontSize: 17 }}>
                        Loan Number = {res.loanNumber}
                      </Text>
                      <Text style={{ left: -30, marginTop: 15, fontSize: 17 }}>
                        Loan Type Code = {res.loanTypeCode}
                      </Text>
                      <Text style={{ left: -30, marginTop: 15, fontSize: 17 }}>
                        Ammount = {res.ammount}
                      </Text>
                      <Text style={{ left: -30, marginTop: 15, fontSize: 17 }}>
                        Balance = {res.balance}
                      </Text>
                      <Text style={{ left: -30, marginTop: 15, fontSize: 17 }}>
                        Open Date = {res.openDate}
                      </Text>
                      <Text style={{ left: -30, marginTop: 15, fontSize: 17 }}>
                        Due Date = {res.dueDate}
                      </Text>
                      <Text style={{ left: -30, marginTop: 15, fontSize: 17 }}>
                        Tenor = {res.tenor}
                      </Text>
                      <Text style={{ left: -30, marginTop: 15, fontSize: 17 }}>
                        Cif = {res.cif}
                      </Text>
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
              })}
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
    loading: state.loan.loading,
    loan: state.loan.data
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getAllLoan }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Loan);
