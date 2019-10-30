import React, { Component } from "react";
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
import CustomHeader from "../../components/customHeader.js";
import { RefreshControl, ImageBackground, Image} from "react-native";

class Home extends Component {
  render() {
    return (
      <Container>
        <CustomHeader
          navigation={this.props.navigation}
          title="Home"
          disableBackButton={true}
        />
        <ImageBackground source={require('../../../assets/home/bahan.png')}
        style={{width: "100%", height: "100%"}}>
          <Image style={{position: "absolute", height: 145, width: 325}}
          source={require("../../../assets/home/welcome.png")}
          ></Image>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;