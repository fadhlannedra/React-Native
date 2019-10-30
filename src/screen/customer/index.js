import React, { Component } from "react";
import { getAllCustomer } from "../../actions/customer.js";
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
import { RefreshControl, Alert, ImageBackground } from "react-native";
// import { styles } from "./style.js";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import SearchInput, { createFilter } from "react-native-search-filter";
const KEYS_TO_FILTERS = ["cif", "firstname"];

class Customer extends Component {
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
    this.props.getAllCustomer();
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }

  showDetail(cif) {
    this.props.navigation.navigate("CustomerDetail", { cif });
  }

  

  render() {
    const { navigation } = this.props;
    const filteredCustomer = this.props.customer.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );
    return (
      <Container>
        <CustomHeader
          navigation={this.props.navigation}
          title="Customer"
          disableBackButton={true}
        />
        
        <View style={styles.container}>
        <ImageBackground source={require('../../../assets/home/bahan.png')}
        style={{width: "100%", height: "100%"}}>
          <SearchInput
            onChangeText={term => {
              this.searchUpdated(term);
            }}
            style={styles.searchInput}
            placeholder="Cari Nasabah"
          />

          <ScrollView>
            {filteredCustomer.map(res => {
              return (
                <ListItem
                  onPress={() => this.showDetail(res.cif)}
                  key={res.firstname}
                  style={styles.emailItem}
                  
                >
                  <Left>
                    <Icon type="AntDesign" name="user"></Icon>
                  </Left>
                  <Body>
                    <Text style={{left: -10, fontSize: 20}}>{res.firstname}</Text>
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
    loading: state.customer.loading,
    customer: state.customer.data
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getAllCustomer }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Customer);
