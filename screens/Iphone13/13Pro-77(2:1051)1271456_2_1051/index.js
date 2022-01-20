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
        style={styles.ImageBackground_2_1052}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/fe14/f6b08306d2413f09c232350e12b116d2"
        }}
        style={styles.ImageBackground_2_1053}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70e5/7c3e/fc145e3c050eecc03bba27876f96bb73"
        }}
        style={styles.ImageBackground_2_1054}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27a6/47a8/562918f43c5e4cb53ace3201e419c525"
        }}
        style={styles.ImageBackground_2_1055}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d55c/7c86/5c5ecf7c008634fd56da2b563da05713"
        }}
        style={styles.ImageBackground_2_1056}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1057}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_962"))
        }
      >
        <Text style={styles.Text_2_1057}>Arm</Text>
      </TouchableOpacity>
      <View style={styles.View_2_1058}>
        <Text style={styles.Text_2_1058}>
          About: Beginners Basic Arms Workout
        </Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5648/a783/34f068c9225ae306b16b1237225a8edb"
        }}
        style={styles.TouchableOpacity_2_1059}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1074"))
        }
      />
      <View style={styles.View_2_1060}>
        <Text style={styles.Text_2_1060}>
          Strengthening your arms are often frowned upon by most women, but it
          is important that this is done so that the ligaments, tendons and
          cartilage that hold your bones together can become stronger. These
          joints can be affected by menopause and are at risk of injury when
          they become unsatable.
        </Text>
      </View>
      <View style={styles.View_2_1061}>
        <Text style={styles.Text_2_1061}>
          tip - warm up your arms beforehand for 5-10 minutes
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/406a/8896/ff2bbf06d81b1a9526f596d31684c9a8"
        }}
        style={styles.ImageBackground_2_1063}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a29/c7f8/50daddf4f2b13ce089a1007f8d968ad9"
        }}
        style={styles.ImageBackground_2_1064}
      />
      <View style={styles.View_2_1065}>
        <View style={styles.View_2_1066} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd18/8c11/9668a349ac062464e077945dda506d5f"
          }}
          style={styles.TouchableOpacity_2_1067}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_1182"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28d0/d551/f52050824996ff853a5a533e7aef51f0"
          }}
          style={styles.ImageBackground_2_1070}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9e8/8704/81791899cb6ff013fc17ff2882a5cfb7"
          }}
          style={styles.TouchableOpacity_2_1073}
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
  View_2: { height: hp("115%") },
  ImageBackground_2_1052: {
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
  ImageBackground_2_1053: {
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
  ImageBackground_2_1054: {
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
  ImageBackground_2_1055: {
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
  ImageBackground_2_1056: {
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
  TouchableOpacity_2_1057: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_1057: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1058: {
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
  Text_2_1058: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_1059: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("31%")
  },
  View_2_1060: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_2_1060: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1061: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_2_1061: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1063: {
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
  ImageBackground_2_1064: {
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
  View_2_1065: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("108%")
  },
  View_2_1066: {
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
  TouchableOpacity_2_1067: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_2_1070: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  TouchableOpacity_2_1073: {
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
