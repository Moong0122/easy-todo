import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class ToDo extends React.Component {
  state = {
    isEditing: false
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <View style={styles.circle} />
        </TouchableOpacity>
        <Text style={styles.text}>Hello, I'm a TO DO</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    // flexDirection 덕분에 alignItem을 하면 세로 정렬이 된다
    flexDirection: "row",
    alignItems: "center"
  },
  circle: {
    // 원을 만들려면 borderRadius는 width, height의 절반으로 하면 된다
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "red",
    borderWidth: 3,
    marginRight: 20
  },
  text: {
    fontWeight: "600",
    fontSize: 20,
    marginVertical: 20
  }
});
