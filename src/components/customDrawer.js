import React, { Component } from "react";
import { ImageBackground } from "react-native";
import {
  Container,
  Header,
  Content,
  ListItem,
  Left,
  Icon,
  Button,
  Text,
  Right,
  Switch,
  Body
} from "native-base";

const MenuItems = [
  {
    id: "1",
    icon: "home",
    label: "Home",
    target: "Home"
  },

  {
    id: "2",
    icon: "person",
    label: "Customer",
    target: "Customer"
  },

  {
    id: "3",
    icon: "ios-calculator",
    label: "Bill Payment",
    target: "Payment"
  },

  {
    id: "4",
    icon: "md-wifi",
    label: "Billing",
    target: "Billing"
  },

  {
    id: "5",
    icon: "search",
    label: "Find By Scanner",
    target: "Scanner"
  },
  
];

class CustomDrawer extends Component {
  closeDrawer = () => {
    this.props.navigation.closeDrawer();
  };

  openDrawer = () => {
    this.props.navigation.openDrawer();
  };

  navigate = target => {
    this.props.navigation.navigate(target);
  };

  renderListItem(data, index) {
    return (
      <ListItem
        key={"item-" + index}
        icon
        onPress={() => this.navigate(data.target)}
      >
        <Left style={{ marginTop: 22 }}>
          <Icon style={{ color: "white" }} active name={data.icon} />
        </Left>
        <Body>
          <Text style={{ marginTop: 20, left: 10, color: "white" }}>
            {data.label}
          </Text>
        </Body>
      </ListItem>
    );
  }

  render() {
    return (
      <Container style={{ backgroundColor: "rgb(32, 53, 70)" }}>
        <Content>
          <ImageBackground
            source={require("../../assets/home/logos.jpg")}
            style={{
              height: 95,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          />
          {MenuItems.map((item, index) => this.renderListItem(item, index))}
        </Content>
      </Container>
    );
  }
}

export default CustomDrawer;
