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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2005/4f86/4fad73dc82e6a1cecfe76a9ce02ecda2"
        }}
        style={styles.ImageBackground_2_1183}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70e5/7c3e/fc145e3c050eecc03bba27876f96bb73"
        }}
        style={styles.ImageBackground_2_1184}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/286f/5b7e/f17570faf9b905e93709bb8abc274742"
        }}
        style={styles.ImageBackground_2_1185}
      />
      <View style={styles.View_2_1190}>
        <Text style={styles.Text_2_1190}>Welcome back, User</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a29/c7f8/50daddf4f2b13ce089a1007f8d968ad9"
        }}
        style={styles.ImageBackground_2_1192}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc14/50fc/29ba1f461ac8d1a95d5518b5f30150ca"
        }}
        style={styles.ImageBackground_2_1193}
      />
      <View style={styles.View_2_1194} />
      <View style={styles.View_2_1195}>
        <Text style={styles.Text_2_1195}>Set Your Workout Goal</Text>
      </View>
      <View style={styles.View_2_1196}>
        <Text style={styles.Text_2_1196}>Continue Workout</Text>
      </View>
      <View style={styles.View_2_1197}>
        <Text style={styles.Text_2_1197}>Popular Workouts</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d50c/1d26/a9bb179c01f7d209b6334d485d9d92e8"
        }}
        style={styles.ImageBackground_2_1198}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d50c/1d26/a9bb179c01f7d209b6334d485d9d92e8"
        }}
        style={styles.ImageBackground_2_1199}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d50c/1d26/a9bb179c01f7d209b6334d485d9d92e8"
        }}
        style={styles.ImageBackground_2_1200}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d50c/1d26/a9bb179c01f7d209b6334d485d9d92e8"
        }}
        style={styles.ImageBackground_2_1201}
      />
      <View style={styles.View_2_1202}>
        <Text style={styles.Text_2_1202}>15 minutes</Text>
      </View>
      <View style={styles.View_2_1203}>
        <Text style={styles.Text_2_1203}>20 minutes</Text>
      </View>
      <View style={styles.View_2_1204}>
        <Text style={styles.Text_2_1204}>25 minutes</Text>
      </View>
      <View style={styles.View_2_1205}>
        <Text style={styles.Text_2_1205}>30 minutes</Text>
      </View>
      <View style={styles.View_2_1206}>
        <Text style={styles.Text_2_1206}>Submit</Text>
      </View>
      <View style={styles.View_2_1207}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6223/a441/ce998ba7848b05d4616bf1c76a169e6d"
          }}
          style={styles.ImageBackground_2_1208}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b7e/fe82/b1c91d1133a4bf40a688acd054fd97d2"
          }}
          style={styles.ImageBackground_2_1209}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a52d/50cf/0f43e1b3859d05bbb8475528e0518c99"
          }}
          style={styles.ImageBackground_2_1210}
        />
        <View style={styles.View_2_1211}>
          <View style={styles.View_I2_1211_564_10}>
            <View style={styles.View_I2_1211_564_11}>
              <Text style={styles.Text_I2_1211_564_11}>Mountain Climber</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_1212}>
          <View style={styles.View_I2_1212_564_10}>
            <View style={styles.View_I2_1212_564_11}>
              <Text style={styles.Text_I2_1212_564_11}>Leg Raises</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_1213}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4cb/977f/8f89578dc8ba5612e8e5ac0b77bcee89"
          }}
          style={styles.ImageBackground_2_1214}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a88e/0475/bb8a97a3b2463b626001681b29e573b3"
          }}
          style={styles.ImageBackground_2_1215}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f572/7590/b3903ad56f7783fff06c5f4b9da010e4"
        }}
        style={styles.ImageBackground_2_1216}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f572/7590/b3903ad56f7783fff06c5f4b9da010e4"
        }}
        style={styles.ImageBackground_2_1217}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbfc/8ece/6d76beb07f4eeca390fc2d38113f4466"
        }}
        style={styles.ImageBackground_2_1218}
      />
      <View style={styles.View_2_1219}>
        <View style={styles.View_2_1220} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca91/66f0/7e23b0cc7566a71653e0a2ff8d6727df"
          }}
          style={styles.ImageBackground_2_1221}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28d0/d551/f52050824996ff853a5a533e7aef51f0"
          }}
          style={styles.ImageBackground_2_1224}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9e8/8704/81791899cb6ff013fc17ff2882a5cfb7"
          }}
          style={styles.TouchableOpacity_2_1227}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_732"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(250, 250, 250, 1)" },
  View_2: { height: hp("202%") },
  ImageBackground_2_1183: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("-18%")
  },
  ImageBackground_2_1184: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("6%")
  },
  ImageBackground_2_1185: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("3%")
  },
  View_2_1190: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_2_1190: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1192: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("23%")
  },
  ImageBackground_2_1193: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  View_2_1194: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("59%"),
    minHeight: hp("59%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("30%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    borderColor: "rgba(255, 215, 75, 1)",
    borderWidth: 3
  },
  View_2_1195: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_2_1195: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_2_1196: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_2_1196: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_2_1197: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("137%"),
    justifyContent: "flex-start"
  },
  Text_2_1197: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  ImageBackground_2_1198: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("46%")
  },
  ImageBackground_2_1199: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("55%")
  },
  ImageBackground_2_1200: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("63%")
  },
  ImageBackground_2_1201: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("72%")
  },
  View_2_1202: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_2_1202: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1203: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_2_1203: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1204: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_2_1204: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1205: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_2_1205: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1206: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_2_1206: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1207: {
    width: wp("181%"),
    minWidth: wp("181%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_1208: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_1209: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%")
  },
  ImageBackground_2_1210: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("0%")
  },
  View_2_1211: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("111%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1211_564_10: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1211_564_11: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_1211_564_11: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1212: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1212_564_10: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1212_564_11: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_1212_564_11: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1213: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("146%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_1214: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_1215: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("0%")
  },
  ImageBackground_2_1216: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_2_1217: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_2_1218: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("83%")
  },
  View_2_1219: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("195%")
  },
  View_2_1220: {
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
  ImageBackground_2_1221: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_2_1224: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  TouchableOpacity_2_1227: {
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
