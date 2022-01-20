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
        style={styles.ImageBackground_2_963}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96f0/4499/dfc91dad6f3037f08449d9f93452b256"
        }}
        style={styles.ImageBackground_2_964}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70e5/7c3e/fc145e3c050eecc03bba27876f96bb73"
        }}
        style={styles.ImageBackground_2_965}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27a6/47a8/562918f43c5e4cb53ace3201e419c525"
        }}
        style={styles.ImageBackground_2_966}
      />
      <View style={styles.View_2_967}>
        <Text style={styles.Text_2_967}>
          Work every muscle, not just your favourites.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a29/c7f8/50daddf4f2b13ce089a1007f8d968ad9"
        }}
        style={styles.ImageBackground_2_968}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_2_969}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_732"))
        }
      >
        <Text style={styles.Text_2_969}>Beginner</Text>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d55c/7c86/5c5ecf7c008634fd56da2b563da05713"
        }}
        style={styles.ImageBackground_2_970}
      />
      <View style={styles.View_2_972}>
        <View style={styles.View_2_973} />
        <View style={styles.View_2_974} />
        <View style={styles.View_2_975} />
        <View style={styles.View_2_976} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a02/c5cc/f9d68c4082a96fd38ab455bec8488749"
          }}
          style={styles.ImageBackground_2_977}
        />
        <View style={styles.View_2_980}>
          <Text style={styles.Text_2_980}>
            Beginners Arms sculpting workout
          </Text>
        </View>
        <View style={styles.View_2_981}>
          <Text style={styles.Text_2_981}>78%</Text>
        </View>
        <View style={styles.View_2_982}>
          <Text style={styles.Text_2_982}>25 mins</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_983}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_1051"))
          }
        />
        <View style={styles.View_2_984} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a02/c5cc/f9d68c4082a96fd38ab455bec8488749"
          }}
          style={styles.ImageBackground_2_985}
        />
        <View style={styles.View_2_988}>
          <Text style={styles.Text_2_988}>Beginners basic arms workout</Text>
        </View>
        <View style={styles.View_2_989}>
          <Text style={styles.Text_2_989}>0%</Text>
        </View>
        <View style={styles.View_2_990}>
          <Text style={styles.Text_2_990}>20 mins</Text>
        </View>
        <View style={styles.View_2_991} />
        <View style={styles.View_2_992} />
        <View style={styles.View_2_993} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a02/c5cc/f9d68c4082a96fd38ab455bec8488749"
          }}
          style={styles.ImageBackground_2_994}
        />
        <View style={styles.View_2_997}>
          <Text style={styles.Text_2_997}>
            Beginners fundalmental arms workout
          </Text>
        </View>
        <View style={styles.View_2_998}>
          <Text style={styles.Text_2_998}>33%</Text>
        </View>
        <View style={styles.View_2_999}>
          <Text style={styles.Text_2_999}>15 mins</Text>
        </View>
        <View style={styles.View_2_1000} />
        <View style={styles.View_2_1001} />
        <View style={styles.View_2_1002} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ba7/457e/e52abfe3eb3bb1af56db2bede57950e0"
          }}
          style={styles.ImageBackground_2_1003}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a02/c5cc/f9d68c4082a96fd38ab455bec8488749"
          }}
          style={styles.ImageBackground_2_1004}
        />
        <View style={styles.View_2_1007}>
          <Text style={styles.Text_2_1007}>
            Beginners build stronger arms workout
          </Text>
        </View>
        <View style={styles.View_2_1008}>
          <Text style={styles.Text_2_1008}>52%</Text>
        </View>
        <View style={styles.View_2_1009}>
          <Text style={styles.Text_2_1009}>25 mins</Text>
        </View>
        <View style={styles.View_2_1010} />
        <View style={styles.View_2_1011} />
        <View style={styles.View_2_1012} />
        <View style={styles.View_2_1013} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8760/a7ec/b2a4a00a1e7b7d0058eabad1a4756e49"
          }}
          style={styles.ImageBackground_2_1014}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a02/c5cc/f9d68c4082a96fd38ab455bec8488749"
          }}
          style={styles.ImageBackground_2_1015}
        />
        <View style={styles.View_2_1018}>
          <Text style={styles.Text_2_1018}>
            Beginners arms post-surgery workout
          </Text>
        </View>
        <View style={styles.View_2_1019}>
          <Text style={styles.Text_2_1019}>0%</Text>
        </View>
        <View style={styles.View_2_1020}>
          <Text style={styles.Text_2_1020}>25 mins</Text>
        </View>
      </View>
      <View style={styles.View_2_1021}>
        <View style={styles.View_2_1022}>
          <View style={styles.View_2_1023}>
            <View style={styles.View_2_1024}>
              <View style={styles.View_2_1025} />
              <View style={styles.View_2_1026} />
              <View style={styles.View_2_1027} />
              <View style={styles.View_2_1028} />
              <View style={styles.View_2_1029} />
              <View style={styles.View_2_1030} />
              <View style={styles.View_2_1031} />
              <View style={styles.View_2_1032} />
              <View style={styles.View_2_1033} />
            </View>
            <View style={styles.View_2_1034}>
              <Text style={styles.Text_2_1034}>Arms</Text>
            </View>
            <View style={styles.View_2_1035}>
              <Text style={styles.Text_2_1035}>Glutes</Text>
            </View>
            <View style={styles.View_2_1036}>
              <Text style={styles.Text_2_1036}>Shoulders</Text>
            </View>
            <View style={styles.View_2_1037}>
              <Text style={styles.Text_2_1037}>Hips</Text>
            </View>
            <View style={styles.View_2_1038}>
              <Text style={styles.Text_2_1038}>Legs</Text>
            </View>
            <View style={styles.View_2_1039}>
              <Text style={styles.Text_2_1039}>Back</Text>
            </View>
            <View style={styles.View_2_1040}>
              <Text style={styles.Text_2_1040}>Thighs</Text>
            </View>
            <View style={styles.View_2_1041}>
              <Text style={styles.Text_2_1041}>Stomach</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_1042}>
        <View style={styles.View_2_1043} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd18/8c11/9668a349ac062464e077945dda506d5f"
          }}
          style={styles.TouchableOpacity_2_1044}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_1182"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28d0/d551/f52050824996ff853a5a533e7aef51f0"
          }}
          style={styles.ImageBackground_2_1047}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9e8/8704/81791899cb6ff013fc17ff2882a5cfb7"
          }}
          style={styles.TouchableOpacity_2_1050}
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
  View_2: { height: hp("160%") },
  ImageBackground_2_963: {
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
  ImageBackground_2_964: {
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
  ImageBackground_2_965: {
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
  ImageBackground_2_966: {
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
  View_2_967: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_2_967: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_968: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("28%")
  },
  TouchableOpacity_2_969: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-13%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_969: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_970: {
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
  View_2_972: {
    width: wp("104%"),
    minWidth: wp("104%"),
    height: hp("155%"),
    minHeight: hp("155%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("44%")
  },
  View_2_973: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_974: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 1
  },
  View_2_975: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("10%"),
    backgroundColor: "rgba(165, 238, 210, 1)"
  },
  View_2_976: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("128%"),
    minHeight: hp("128%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_977: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_2_980: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_980: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_981: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_2_981: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_982: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_2_982: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_983: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%")
  },
  View_2_984: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 1
  },
  ImageBackground_2_985: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_2_988: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_2_988: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_989: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_2_989: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_990: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_2_990: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_991: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%")
  },
  View_2_992: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("51%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 1
  },
  View_2_993: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("51%"),
    backgroundColor: "rgba(165, 238, 210, 1)"
  },
  ImageBackground_2_994: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_2_997: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("43%"),
    justifyContent: "flex-start"
  },
  Text_2_997: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_998: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_2_998: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_999: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_2_999: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1000: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62%")
  },
  View_2_1001: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("72%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 1
  },
  View_2_1002: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("72%"),
    backgroundColor: "rgba(165, 238, 210, 1)"
  },
  ImageBackground_2_1003: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("125%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_2_1004: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_2_1007: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_2_1007: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1008: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("69%"),
    justifyContent: "flex-start"
  },
  Text_2_1008: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1009: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_2_1009: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1010: {
    width: wp("82%"),
    minWidth: wp("82%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83%")
  },
  View_2_1011: {
    width: wp("71%"),
    minWidth: wp("71%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("92%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 1
  },
  View_2_1012: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("93%"),
    backgroundColor: "rgba(165, 238, 210, 1)"
  },
  View_2_1013: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("31%"),
    backgroundColor: "rgba(165, 238, 210, 1)"
  },
  ImageBackground_2_1014: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  ImageBackground_2_1015: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_2_1018: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_2_1018: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1019: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_2_1019: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1020: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_2_1020: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1021: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_1022: {
    width: wp("170%"),
    minWidth: wp("170%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_1023: {
    width: wp("170%"),
    minWidth: wp("170%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1024: {
    width: wp("167%"),
    minWidth: wp("167%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1025: {
    width: wp("167%"),
    minWidth: wp("167%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1026: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(122, 122, 122, 1)",
    borderColor: "rgba(255, 215, 75, 1)",
    borderWidth: 1
  },
  View_2_1027: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 236, 243, 1)",
    borderColor: "rgba(255, 215, 75, 1)",
    borderWidth: 1
  },
  View_2_1028: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 236, 243, 1)",
    borderColor: "rgba(255, 215, 75, 1)",
    borderWidth: 1
  },
  View_2_1029: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 236, 243, 1)",
    borderColor: "rgba(255, 215, 75, 1)",
    borderWidth: 1
  },
  View_2_1030: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 236, 243, 1)",
    borderColor: "rgba(255, 215, 75, 1)",
    borderWidth: 1
  },
  View_2_1031: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("104%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 236, 243, 1)",
    borderColor: "rgba(255, 215, 75, 1)",
    borderWidth: 1
  },
  View_2_1032: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("125%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 236, 243, 1)",
    borderColor: "rgba(255, 215, 75, 1)",
    borderWidth: 1
  },
  View_2_1033: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("146%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 236, 243, 1)",
    borderColor: "rgba(255, 215, 75, 1)",
    borderWidth: 1
  },
  View_2_1034: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1034: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2_1035: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1035: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1036: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1036: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1037: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1037: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1038: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1038: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1039: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("109%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1039: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1040: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("128%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1040: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1041: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("148%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1041: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1042: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("152%")
  },
  View_2_1043: {
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
  TouchableOpacity_2_1044: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_2_1047: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  TouchableOpacity_2_1050: {
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
