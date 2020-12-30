import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableHighlight,
  Alert,
  Image,
} from "react-native";
import db from "../config";
import firebase from "firebase";
import { RFValue } from "react-native-responsive-fontsize";
import { SearchBar, ListItem, Input } from "react-native-elements";

import MyHeader from "../components/MyHeader";

export default class SubmitScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      name: "",
      address: "",
      contact: "",
     problem:"",
      requestId: "",
      docId: "",
      showFlatlist: false,
    };
  }

  createUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  addRequest = async (name, problem) => {
    var userId = this.state.userId;
    var randomRequestId = this.createUniqueId();
   

    db.collection("Problems").add({
      user_name: name,
      problem: problem,
      request_id: randomRequestId,
      date: firebase.firestore.FieldValue.serverTimestamp(),
      //image_link: pets.data[0].volumeInfo.imageLinks.thumbnail,
    });

    this.setState({
      name: "",
      problem: "",
      requestId: randomRequestId,
    });

    return Alert.alert("Problem Submitted Successfully");
  };

  

  updatepetRequestStatus = () => {
    //getting the  doc id to update the users doc
    db.collection("users")
      .where("email_id", "==", this.state.userId)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          //updating the doc
          db.collection("users").doc(doc.id).update({
            
          });
        });
      });
  };

  

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1 }}>
          <MyHeader title="Report A Problem" navigation={this.props.navigation} />
        </View>
        <View style={{ flex: 0.9 }}>
          <Input
            style={styles.formTextInput}
            label={"Name"}
            placeholder={"name"}
            containerStyle={{ marginTop: RFValue(60) }}
            onChangeText={(text) => this.getpetsFromApi(text)}
            onClear={(text) => this.getpetsFromApi("")}
            value={this.state.name}
          />
          {this.state.showFlatlist ? (
            <FlatList
              data={this.state.dataSource}
              renderItem={this.renderItem}
              enableEmptySections={true}
              style={{ marginTop: RFValue(10) }}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : (
            <View style={{ alignItems: "center" }}>
              <Input
                style={styles.formTextInput}
                containerStyle={{ marginTop: RFValue(30) }}
                multiline
                numberOfLines={8}
                label={"Problem"}
                placeholder={"Elaborate on the issue that needs to be resolved"}
                onChangeText={(text) => {
                  this.setState({
                    problem: text,
                  });
                }}
                value={this.state.problem}
              />
              <TouchableOpacity
                style={[styles.button, { marginTop: RFValue(30) }]}
                onPress={() => {
                  this.addRequest(
                    this.state.name,
                    this.state.problem
                  );
                }}
              >
                <Text
                  style={styles.requestbuttontxt}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyBoardStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formTextInput: {
    width: "75%",
    height: RFValue(35),
    borderWidth: 1,
    padding: 10,
  },
  ImageView:{
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    marginTop:20
  },
  imageStyle:{
    height: RFValue(150),
    width: RFValue(150),
    alignSelf: "center",
    borderWidth: 5,
    borderRadius: RFValue(10),
  },
  buttonView:{
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontxt:{
    fontSize: RFValue(18),
    fontWeight: "bold",
    color: "#fff",
  },
  touchableopacity:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "90%",
  },
  requestbuttontxt:{
    fontSize: RFValue(20),
    fontWeight: "bold",
    color: "#fff",
  },
  button: {
    width: "75%",
    height: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});
