import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { getCustomerDetail } from "../../actions/customer.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BarCodeScanner } from "expo-barcode-scanner";

class Scanner extends Component {
  state = {
    hasCameraPermission: null,
    scanned: false
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end"
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => this.setState({ scanned: false })}
          />
        )}
      </View>
    );
  }

  handleBarCodeScanned = ({ type, detail }) => {
    this.setState({ scanned: true });
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    this.props.getCustomerDetail(cif);
    if (this.props.error == null) {
      Alert.alert(
        `Open ${type} ${cif} URL?`,
        this.state.scanned,
        [
          {
            text: "Scan?",
            onPress: () => {
              this.props.navigation.navigate("CutomerDetail", {
                cif: cif
              });
            }
            // onPress: () => Linking.openURL(this.state.scanned)
          },
          { text: "No", onPress: () => {} }
        ],
        { cancellable: false }
      );
    } else {
      alert("cif not found");
    }
  };
}

function mapStateToProps(state) {
  return {
    detail: state.detail.detail,
    error: state.detail.error
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ getCustomerDetail }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Scanner);
