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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b9/51f3/341c1416644d95333782f41e15f95d3a"
        }}
        style={styles.ImageBackground_2_1114}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f3/fe14/f6b08306d2413f09c232350e12b116d2"
        }}
        style={styles.ImageBackground_2_1115}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70e5/7c3e/fc145e3c050eecc03bba27876f96bb73"
        }}
        style={styles.ImageBackground_2_1116}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27a6/47a8/562918f43c5e4cb53ace3201e419c525"
        }}
        style={styles.ImageBackground_2_1117}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d55c/7c86/5c5ecf7c008634fd56da2b563da05713"
        }}
        style={styles.ImageBackground_2_1118}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1119}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1074"))
        }
      >
        <Text style={styles.Text_2_1119}>Exercise Layout</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/406a/8896/ff2bbf06d81b1a9526f596d31684c9a8"
        }}
        style={styles.ImageBackground_2_1121}
      />
      <View style={styles.View_2_1122}>
        <View style={styles.View_2_1123}>
          <View style={styles.View_2_1124}>
            <View style={styles.View_2_1125}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b237/3dd8/e4c57f2da47e1ca18cabbef184842fb4"
                }}
                style={styles.ImageBackground_2_1126}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9387/e8de/e23d69077566018ae57fb7f978df09d0"
                }}
                style={styles.ImageBackground_2_1127}
              />
              <View style={styles.View_2_1128}>
                <Text style={styles.Text_2_1128}>
                  1 . Keep your elbows close to your body and rotate your hands
                  until they are facing forward 2. Bring the dumbbell all the
                  way up to your shoulders by bending your elbow. Once at the
                  top, hold for a second 3. Reverse the curl slowly and repeat
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a07/1541/d222cdb8671d53333887e21fd9090cfa"
                }}
                style={styles.ImageBackground_2_1129}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef41/07ca/b44b151c899b9a31d397f6749cf02294"
                }}
                style={styles.ImageBackground_2_1130}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c86/0067/564c61253b5cffbdf3c7bde4a2ebe0a3"
                }}
                style={styles.ImageBackground_2_1133}
              />
              <View style={styles.View_2_1134}>
                <Text style={styles.Text_2_1134}>1 . Dumbbell Curls</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a6/18a6/a1bac3b6c5cbb4a3e721c7ef9b6d4e2e"
              }}
              style={styles.ImageBackground_2_1135}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e848/676e/4ae1956326ff2eae0a4cf526e4875951"
              }}
              style={styles.ImageBackground_2_1136}
            />
          </View>
          <View style={styles.View_2_1140}>
            <View style={styles.View_2_1141}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2263/d59a/ed33239b2701051ec3d688b7b706fc70"
                }}
                style={styles.ImageBackground_2_1142}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e84e/c8c8/d57b85f6282e77a97109b75af6fc5b62"
                }}
                style={styles.ImageBackground_2_1143}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a07/1541/d222cdb8671d53333887e21fd9090cfa"
                }}
                style={styles.ImageBackground_2_1144}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34cc/b470/b17f0b0552d798d3c12fbde4e98ca68f"
                }}
                style={styles.ImageBackground_2_1145}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c86/0067/564c61253b5cffbdf3c7bde4a2ebe0a3"
                }}
                style={styles.ImageBackground_2_1148}
              />
              <View style={styles.View_2_1149}>
                <Text style={styles.Text_2_1149}>2 . Kick-Backs</Text>
              </View>
              <View style={styles.View_2_1150}>
                <Text style={styles.Text_2_1150}>
                  1 . Grab a set of dumbbells, bring your torso forward and bend
                  your knees slightly 2. Bring your elbows up, so that your
                  upper arms are parallel to the floor, and kick back until your
                  arms are fully extended 3. Slowly lower the weights to the
                  starting position and repeat
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a6/18a6/a1bac3b6c5cbb4a3e721c7ef9b6d4e2e"
              }}
              style={styles.ImageBackground_2_1151}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d4b/d870/ff8ed12320535536e172400119feeb50"
              }}
              style={styles.ImageBackground_2_1152}
            />
          </View>
          <View style={styles.View_2_1156}>
            <View style={styles.View_2_1157}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2263/d59a/ed33239b2701051ec3d688b7b706fc70"
                }}
                style={styles.ImageBackground_2_1158}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99e8/6549/a5e07c406482f36d87b6ef77f87c3a3d"
                }}
                style={styles.ImageBackground_2_1159}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a07/1541/d222cdb8671d53333887e21fd9090cfa"
                }}
                style={styles.ImageBackground_2_1160}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fd6a/8b4b/e5c0154750be8269752d30c5626bdb69"
                }}
                style={styles.ImageBackground_2_1161}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c86/0067/564c61253b5cffbdf3c7bde4a2ebe0a3"
                }}
                style={styles.ImageBackground_2_1164}
              />
              <View style={styles.View_2_1165}>
                <Text style={styles.Text_2_1165}>3 . Bench Dips</Text>
              </View>
              <View style={styles.View_2_1166}>
                <Text style={styles.Text_2_1166}>
                  1 . Sit down on a bench or chair, hands next to your thighs 2.
                  Walk your feet out and extend your legs, lifting your bottom
                  off the bench and holding there with extended arms 3. Hinging
                  at the elbow, lower your body down as far as you can go, or
                  until your arms form a 90-degree angle. Push up through your
                  palms back to start
                </Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a6/18a6/a1bac3b6c5cbb4a3e721c7ef9b6d4e2e"
              }}
              style={styles.ImageBackground_2_1167}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/8919/40f9e4172e998150053a8d04ce4367a1"
              }}
              style={styles.ImageBackground_2_1168}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2_1172}>
        <View style={styles.View_2_1173} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd18/8c11/9668a349ac062464e077945dda506d5f"
          }}
          style={styles.TouchableOpacity_2_1174}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_1182"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28d0/d551/f52050824996ff853a5a533e7aef51f0"
          }}
          style={styles.ImageBackground_2_1177}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9e8/8704/81791899cb6ff013fc17ff2882a5cfb7"
          }}
          style={styles.TouchableOpacity_2_1180}
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
  ImageBackground_2_1114: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("2%")
  },
  ImageBackground_2_1115: {
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
  ImageBackground_2_1116: {
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
  ImageBackground_2_1117: {
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
  ImageBackground_2_1118: {
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
  TouchableOpacity_2_1119: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_1119: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1121: {
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
  View_2_1122: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_1123: {
    width: wp("301%"),
    minWidth: wp("301%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_1124: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1125: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_1126: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_1127: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("13%")
  },
  View_2_1128: {
    width: wp("67%"),
    minWidth: wp("67%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_2_1128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1129: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("13%")
  },
  ImageBackground_2_1130: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_2_1133: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("80%")
  },
  View_2_1134: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_2_1134: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1135: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("80%")
  },
  ImageBackground_2_1136: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("80%")
  },
  View_2_1140: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("110%"),
    top: hp("0%")
  },
  View_2_1141: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_1142: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_1143: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("13%")
  },
  ImageBackground_2_1144: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("13%")
  },
  ImageBackground_2_1145: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_2_1148: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("80%")
  },
  View_2_1149: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_2_1149: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1150: {
    width: wp("67%"),
    minWidth: wp("67%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_2_1150: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1151: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("80%")
  },
  ImageBackground_2_1152: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("80%")
  },
  View_2_1156: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("221%"),
    top: hp("0%")
  },
  View_2_1157: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_1158: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_1159: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("13%")
  },
  ImageBackground_2_1160: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("13%")
  },
  ImageBackground_2_1161: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_2_1164: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("80%")
  },
  View_2_1165: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_2_1165: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1166: {
    width: wp("67%"),
    minWidth: wp("67%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_2_1166: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1167: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("80%")
  },
  ImageBackground_2_1168: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("80%")
  },
  View_2_1172: {
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
  View_2_1173: {
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
  TouchableOpacity_2_1174: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_2_1177: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  TouchableOpacity_2_1180: {
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
