import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/286f/5b7e/f17570faf9b905e93709bb8abc274742"
        }}
        style={styles.ImageBackground_2_1075}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/fe14/f6b08306d2413f09c232350e12b116d2"
        }}
        style={styles.ImageBackground_2_1076}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70e5/7c3e/fc145e3c050eecc03bba27876f96bb73"
        }}
        style={styles.ImageBackground_2_1077}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27a6/47a8/562918f43c5e4cb53ace3201e419c525"
        }}
        style={styles.ImageBackground_2_1078}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d55c/7c86/5c5ecf7c008634fd56da2b563da05713"
        }}
        style={styles.ImageBackground_2_1079}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1080}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1051"))
        }
      >
        <Text style={styles.Text_2_1080}>About</Text>
      </TouchableOpacity>
      <View style={styles.View_2_1081}>
        <Text style={styles.Text_2_1081}>Beginners Basic Arms Workout</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a29/c7f8/50daddf4f2b13ce089a1007f8d968ad9"
        }}
        style={styles.ImageBackground_2_1083}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a29/c7f8/50daddf4f2b13ce089a1007f8d968ad9"
        }}
        style={styles.ImageBackground_2_1084}
      />
      <View style={styles.View_2_1085}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67c7/68ce/dd60972ce94dbd9c309fbeda92bb372f"
          }}
          style={styles.ImageBackground_2_1086}
        />
        <View style={styles.View_2_1087}>
          <Text style={styles.Text_2_1087}>
            {" "}
            What you will need: a (light) weight (3 - 5 pounds) a stable chair
            or bench a pair or small dumbbells
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1088}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1113"))
        }
      >
        <View style={styles.View_2_1089} />
        <View style={styles.View_2_1090}>
          <Text style={styles.Text_2_1090}>Exercise 1 Dumbbell Curls</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_2_1091}>
        <View style={styles.View_2_1092} />
        <View style={styles.View_2_1093}>
          <Text style={styles.Text_2_1093}>Exercise 3 Bench Dips</Text>
        </View>
      </View>
      <View style={styles.View_2_1094}>
        <View style={styles.View_2_1095} />
        <View style={styles.View_2_1096}>
          <Text style={styles.Text_2_1096}>Exercise 2 Kick-Backs</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/406a/8896/ff2bbf06d81b1a9526f596d31684c9a8"
        }}
        style={styles.ImageBackground_2_1097}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a793/5dc2/12feac2a04e6cfc56101981e71991c61"
        }}
        style={styles.ImageBackground_2_1098}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a793/5dc2/12feac2a04e6cfc56101981e71991c61"
        }}
        style={styles.ImageBackground_2_1100}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a793/5dc2/12feac2a04e6cfc56101981e71991c61"
        }}
        style={styles.ImageBackground_2_1102}
      />
      <View style={styles.View_2_1104}>
        <View style={styles.View_2_1105} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd18/8c11/9668a349ac062464e077945dda506d5f"
          }}
          style={styles.TouchableOpacity_2_1106}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_1182"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28d0/d551/f52050824996ff853a5a533e7aef51f0"
          }}
          style={styles.ImageBackground_2_1109}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9e8/8704/81791899cb6ff013fc17ff2882a5cfb7"
          }}
          style={styles.TouchableOpacity_2_1112}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_732"))
          }
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(253, 253, 253, 1)" },
  View_2: { height: hp("132%") },
  ImageBackground_2_1075: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("1%")
  },
  ImageBackground_2_1076: {
    width: wp("96%"),
    minWidth: wp("96%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("129%"),
    top: hp("15%")
  },
  ImageBackground_2_1077: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    top: hp("5%")
  },
  ImageBackground_2_1078: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("-19%")
  },
  ImageBackground_2_1079: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%")
  },
  TouchableOpacity_2_1080: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_1080: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1081: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_2_1081: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1083: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("28%")
  },
  ImageBackground_2_1084: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("50%")
  },
  View_2_1085: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("32%")
  },
  ImageBackground_2_1086: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1087: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1087: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_1088: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("54%")
  },
  View_2_1089: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1090: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_1090: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1091: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("97%")
  },
  View_2_1092: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1093: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_1093: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1094: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("76%")
  },
  View_2_1095: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1096: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_1096: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1097: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("108%")
  },
  ImageBackground_2_1098: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_2_1100: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  ImageBackground_2_1102: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("113%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%")
  },
  View_2_1104: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("124%")
  },
  View_2_1105: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_2_1106: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_2_1109: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  TouchableOpacity_2_1112: {
    width: wp("13%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
