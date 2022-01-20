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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70e5/7c3e/fc145e3c050eecc03bba27876f96bb73"
        }}
        style={styles.ImageBackground_2_490}
      />
      <View style={styles.View_2_491}>
        <Text style={styles.Text_2_491}>Add Notes</Text>
      </View>
      <View style={styles.View_2_492}>
        <Text style={styles.Text_2_492}>Exercises Completed</Text>
      </View>
      <View style={styles.View_2_493} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/286f/5b7e/f17570faf9b905e93709bb8abc274742"
        }}
        style={styles.ImageBackground_2_494}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27a6/47a8/562918f43c5e4cb53ace3201e419c525"
        }}
        style={styles.ImageBackground_2_495}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f7f/015d/05b31d1cec683d4f3a559b537b74b345"
        }}
        style={styles.ImageBackground_2_496}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f7f/015d/05b31d1cec683d4f3a559b537b74b345"
        }}
        style={styles.ImageBackground_2_497}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1ee/c03f/ff04026e101fed146222ebbc32d9092e"
        }}
        style={styles.ImageBackground_2_501}
      />
      <View style={styles.View_2_510}>
        <Text style={styles.Text_2_510}>How did today go? </Text>
      </View>
      <View style={styles.View_2_511}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d968/520b/0f817146a298142d9b6c1a5b10cd5529"
          }}
          style={styles.ImageBackground_2_512}
        />
        <View style={styles.View_2_513} />
        <View style={styles.View_2_514}>
          <Text style={styles.Text_2_514}>Sun</Text>
        </View>
        <View style={styles.View_2_515} />
        <View style={styles.View_2_516}>
          <Text style={styles.Text_2_516}>Mon</Text>
        </View>
        <View style={styles.View_2_517} />
        <View style={styles.View_2_518}>
          <Text style={styles.Text_2_518}>Tue</Text>
        </View>
        <View style={styles.View_2_519} />
        <View style={styles.View_2_520}>
          <Text style={styles.Text_2_520}>Wed</Text>
        </View>
        <View style={styles.View_2_521} />
        <View style={styles.View_2_522}>
          <Text style={styles.Text_2_522}>thu</Text>
        </View>
        <View style={styles.View_2_523} />
        <View style={styles.View_2_524}>
          <Text style={styles.Text_2_524}>fri</Text>
        </View>
        <View style={styles.View_2_525} />
        <View style={styles.View_2_526}>
          <Text style={styles.Text_2_526}>sat</Text>
        </View>
        <View style={styles.View_2_527} />
        <View style={styles.View_2_528}>
          <Text style={styles.Text_2_528}>1</Text>
        </View>
        <View style={styles.View_2_529} />
        <View style={styles.View_2_530}>
          <Text style={styles.Text_2_530}>2</Text>
        </View>
        <View style={styles.View_2_531} />
        <View style={styles.View_2_532}>
          <Text style={styles.Text_2_532}>3</Text>
        </View>
        <View style={styles.View_2_533} />
        <View style={styles.View_2_534}>
          <Text style={styles.Text_2_534}>4</Text>
        </View>
        <View style={styles.View_2_535} />
        <View style={styles.View_2_536}>
          <Text style={styles.Text_2_536}>5</Text>
        </View>
        <View style={styles.View_2_537} />
        <View style={styles.View_2_538}>
          <Text style={styles.Text_2_538}>6</Text>
        </View>
        <View style={styles.View_2_539} />
        <View style={styles.View_2_540}>
          <Text style={styles.Text_2_540}>7</Text>
        </View>
        <View style={styles.View_2_541} />
        <View style={styles.View_2_542}>
          <Text style={styles.Text_2_542}>8</Text>
        </View>
        <View style={styles.View_2_543} />
        <View style={styles.View_2_544}>
          <Text style={styles.Text_2_544}>9</Text>
        </View>
        <View style={styles.View_2_545} />
        <View style={styles.View_2_546}>
          <Text style={styles.Text_2_546}>10</Text>
        </View>
        <View style={styles.View_2_547} />
        <View style={styles.View_2_548}>
          <Text style={styles.Text_2_548}>11</Text>
        </View>
        <View style={styles.View_2_549}>
          <Text style={styles.Text_2_549}>12</Text>
        </View>
        <View style={styles.View_2_550} />
        <View style={styles.View_2_551}>
          <Text style={styles.Text_2_551}>13</Text>
        </View>
        <View style={styles.View_2_552} />
        <View style={styles.View_2_553}>
          <Text style={styles.Text_2_553}>14</Text>
        </View>
        <View style={styles.View_2_554} />
        <View style={styles.View_2_555}>
          <Text style={styles.Text_2_555}>15</Text>
        </View>
        <View style={styles.View_2_556} />
        <View style={styles.View_2_557}>
          <Text style={styles.Text_2_557}>16</Text>
        </View>
        <View style={styles.View_2_558} />
        <View style={styles.View_2_559}>
          <Text style={styles.Text_2_559}>17</Text>
        </View>
        <View style={styles.View_2_560} />
        <View style={styles.View_2_561}>
          <Text style={styles.Text_2_561}>18</Text>
        </View>
        <View style={styles.View_2_562} />
        <View style={styles.View_2_563}>
          <Text style={styles.Text_2_563}>19</Text>
        </View>
        <View style={styles.View_2_564} />
        <View style={styles.View_2_565}>
          <Text style={styles.Text_2_565}>20</Text>
        </View>
        <View style={styles.View_2_566} />
        <View style={styles.View_2_567}>
          <Text style={styles.Text_2_567}>21</Text>
        </View>
        <View style={styles.View_2_568} />
        <View style={styles.View_2_569}>
          <Text style={styles.Text_2_569}>22</Text>
        </View>
        <View style={styles.View_2_570} />
        <View style={styles.View_2_571}>
          <Text style={styles.Text_2_571}>23</Text>
        </View>
        <View style={styles.View_2_572} />
        <View style={styles.View_2_573}>
          <Text style={styles.Text_2_573}>24</Text>
        </View>
        <View style={styles.View_2_574} />
        <View style={styles.View_2_575}>
          <Text style={styles.Text_2_575}>25</Text>
        </View>
        <View style={styles.View_2_576} />
        <View style={styles.View_2_577}>
          <Text style={styles.Text_2_577}>26</Text>
        </View>
        <View style={styles.View_2_578} />
        <View style={styles.View_2_579}>
          <Text style={styles.Text_2_579}>27</Text>
        </View>
        <View style={styles.View_2_580} />
        <View style={styles.View_2_581}>
          <Text style={styles.Text_2_581}>28</Text>
        </View>
        <View style={styles.View_2_582} />
        <View style={styles.View_2_583}>
          <Text style={styles.Text_2_583}>29</Text>
        </View>
        <View style={styles.View_2_584} />
        <View style={styles.View_2_585}>
          <Text style={styles.Text_2_585}>30</Text>
        </View>
        <View style={styles.View_2_586} />
        <View style={styles.View_2_587}>
          <Text style={styles.Text_2_587}>31</Text>
        </View>
        <View style={styles.View_2_588} />
        <View style={styles.View_2_589} />
        <View style={styles.View_2_590} />
        <View style={styles.View_2_591} />
        <View style={styles.View_2_592}>
          <Text style={styles.Text_2_592}>November, 2021</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/399c/5760/1fe15939be869c007c1dd0e27b3e6c8a"
          }}
          style={styles.ImageBackground_2_593}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a69c/1ec1/56917e08d41f19c78c20de416efd1b62"
          }}
          style={styles.ImageBackground_2_594}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40e7/a39b/485b4572cc4b142299b757b75cfa0cf3"
          }}
          style={styles.ImageBackground_2_595}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3fb/8ced/0c88a93d4169248ba0a809e9a403c4b2"
          }}
          style={styles.ImageBackground_2_596}
        />
      </View>
      <View style={styles.View_2_597}>
        <Text style={styles.Text_2_597}>Nov</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a29/c7f8/50daddf4f2b13ce089a1007f8d968ad9"
        }}
        style={styles.ImageBackground_2_599}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc14/50fc/29ba1f461ac8d1a95d5518b5f30150ca"
        }}
        style={styles.TouchableOpacity_2_600}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_457"))
        }
      />
      <View style={styles.View_2_601}>
        <View style={styles.View_2_602}>
          <View style={styles.View_2_603}>
            <View style={styles.View_2_604}>
              <View style={styles.View_2_605}>
                <View style={styles.View_2_606}>
                  <View style={styles.View_I2_606_835_475}>
                    <Text style={styles.Text_I2_606_835_475}>2</Text>
                  </View>
                  <View style={styles.View_I2_606_835_476}>
                    <Text style={styles.Text_I2_606_835_476}>mon</Text>
                  </View>
                </View>
                <View style={styles.View_2_607}>
                  <View style={styles.View_I2_607_835_478}>
                    <Text style={styles.Text_I2_607_835_478}>3</Text>
                  </View>
                  <View style={styles.View_I2_607_835_479}>
                    <Text style={styles.Text_I2_607_835_479}>Tue</Text>
                  </View>
                </View>
                <View style={styles.View_2_608}>
                  <View style={styles.View_I2_608_835_475}>
                    <Text style={styles.Text_I2_608_835_475}>4</Text>
                  </View>
                  <View style={styles.View_I2_608_835_476}>
                    <Text style={styles.Text_I2_608_835_476}>wed</Text>
                  </View>
                </View>
                <View style={styles.View_2_609}>
                  <View style={styles.View_I2_609_835_475}>
                    <Text style={styles.Text_I2_609_835_475}>5</Text>
                  </View>
                  <View style={styles.View_I2_609_835_476}>
                    <Text style={styles.Text_I2_609_835_476}>thu</Text>
                  </View>
                </View>
                <View style={styles.View_2_610}>
                  <View style={styles.View_I2_610_835_475}>
                    <Text style={styles.Text_I2_610_835_475}>6</Text>
                  </View>
                  <View style={styles.View_I2_610_835_476}>
                    <Text style={styles.Text_I2_610_835_476}>fri</Text>
                  </View>
                </View>
                <View style={styles.View_2_611}>
                  <View style={styles.View_I2_611_835_475}>
                    <Text style={styles.Text_I2_611_835_475}>7</Text>
                  </View>
                  <View style={styles.View_I2_611_835_476}>
                    <Text style={styles.Text_I2_611_835_476}>sat</Text>
                  </View>
                </View>
                <View style={styles.View_2_612}>
                  <View style={styles.View_I2_612_835_475}>
                    <Text style={styles.Text_I2_612_835_475}>8</Text>
                  </View>
                  <View style={styles.View_I2_612_835_476}>
                    <Text style={styles.Text_I2_612_835_476}>sun</Text>
                  </View>
                </View>
                <View style={styles.View_2_613}>
                  <View style={styles.View_I2_613_835_475}>
                    <Text style={styles.Text_I2_613_835_475}>9</Text>
                  </View>
                  <View style={styles.View_I2_613_835_476}>
                    <Text style={styles.Text_I2_613_835_476}>Sun</Text>
                  </View>
                </View>
                <View style={styles.View_2_614}>
                  <View style={styles.View_I2_614_835_475}>
                    <Text style={styles.Text_I2_614_835_475}>10</Text>
                  </View>
                  <View style={styles.View_I2_614_835_476}>
                    <Text style={styles.Text_I2_614_835_476}>Mon</Text>
                  </View>
                </View>
                <View style={styles.View_2_615}>
                  <View style={styles.View_I2_615_835_475}>
                    <Text style={styles.Text_I2_615_835_475}>11</Text>
                  </View>
                  <View style={styles.View_I2_615_835_476}>
                    <Text style={styles.Text_I2_615_835_476}>Tue</Text>
                  </View>
                </View>
                <View style={styles.View_2_616}>
                  <View style={styles.View_I2_616_835_475}>
                    <Text style={styles.Text_I2_616_835_475}>12</Text>
                  </View>
                  <View style={styles.View_I2_616_835_476}>
                    <Text style={styles.Text_I2_616_835_476}>Fri</Text>
                  </View>
                </View>
                <View style={styles.View_2_617}>
                  <View style={styles.View_I2_617_835_475}>
                    <Text style={styles.Text_I2_617_835_475}>13</Text>
                  </View>
                  <View style={styles.View_I2_617_835_476}>
                    <Text style={styles.Text_I2_617_835_476}>Sat</Text>
                  </View>
                </View>
                <View style={styles.View_2_618}>
                  <View style={styles.View_I2_618_835_475}>
                    <Text style={styles.Text_I2_618_835_475}>14</Text>
                  </View>
                  <View style={styles.View_I2_618_835_476}>
                    <Text style={styles.Text_I2_618_835_476}>Sun</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_619}>
        <View style={styles.View_2_620}>
          <View style={styles.View_2_621}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4cb/977f/8f89578dc8ba5612e8e5ac0b77bcee89"
              }}
              style={styles.ImageBackground_2_622}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a88e/0475/bb8a97a3b2463b626001681b29e573b3"
              }}
              style={styles.ImageBackground_2_623}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f88/8d1b/2d7fc1f7832112e3fb2d752d2e84928b"
              }}
              style={styles.ImageBackground_2_624}
            />
            <View style={styles.View_2_625}>
              <View style={styles.View_I2_625_564_10}>
                <View style={styles.View_I2_625_564_11}>
                  <Text style={styles.Text_I2_625_564_11}>
                    Modified Push-Up
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_2_626}>
              <View style={styles.View_I2_626_564_10}>
                <View style={styles.View_I2_626_564_11}>
                  <Text style={styles.Text_I2_626_564_11}>
                    Bodyweight Squat Jump
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_627}>
        <View style={styles.View_2_628} />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd18/8c11/9668a349ac062464e077945dda506d5f"
          }}
          style={styles.TouchableOpacity_2_629}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_1182"))
          }
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28d0/d551/f52050824996ff853a5a533e7aef51f0"
          }}
          style={styles.ImageBackground_2_632}
        />
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9e8/8704/81791899cb6ff013fc17ff2882a5cfb7"
          }}
          style={styles.TouchableOpacity_2_635}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_732"))
          }
        />
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc14/50fc/29ba1f461ac8d1a95d5518b5f30150ca"
        }}
        style={styles.TouchableOpacity_2_78}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_457"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(250, 250, 250, 1)" },
  View_2: { height: hp("170%") },
  ImageBackground_2_490: {
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
  View_2_491: {
    width: wp("99%"),
    minWidth: wp("99%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("79%"),
    justifyContent: "center"
  },
  Text_2_491: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_492: {
    width: wp("99%"),
    minWidth: wp("99%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("42%"),
    justifyContent: "center"
  },
  Text_2_492: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_493: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_494: {
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
  ImageBackground_2_495: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("-18%")
  },
  ImageBackground_2_496: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  ImageBackground_2_497: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%")
  },
  ImageBackground_2_501: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("87%")
  },
  View_2_510: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_2_510: {
    color: "rgba(8, 41, 39, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_511: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("117%")
  },
  ImageBackground_2_512: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_513: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_514: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_514: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "uppercase"
  },
  View_2_515: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_516: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_516: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "uppercase"
  },
  View_2_517: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_518: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_518: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "uppercase"
  },
  View_2_519: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_520: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_520: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "uppercase"
  },
  View_2_521: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_522: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_522: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "uppercase"
  },
  View_2_523: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_524: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_524: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "uppercase"
  },
  View_2_525: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_526: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_526: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3,
    textTransform: "uppercase"
  },
  View_2_527: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_528: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_528: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_529: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("14%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_530: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_530: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_531: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("14%"),
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  View_2_532: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_532: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_533: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("14%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_534: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_534: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_535: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("14%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_536: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_536: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_537: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("14%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_538: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_538: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_539: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("14%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_540: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_540: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_541: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_542: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_2_542: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_543: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_544: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_2_544: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_545: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_546: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_2_546: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_547: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_548: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_2_548: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_549: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_2_549: {
    color: "rgba(21, 1, 1, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_550: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_551: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_2_551: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_552: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("19%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_553: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_2_553: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_554: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_555: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_2_555: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_556: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_557: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_2_557: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_558: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_559: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_2_559: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_560: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_561: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_2_561: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_562: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_563: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_2_563: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_564: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_565: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_2_565: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_566: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_567: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_2_567: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_568: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("29%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_569: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_2_569: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_570: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("29%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_571: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_2_571: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_572: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("29%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_573: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_2_573: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_574: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("29%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_575: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_2_575: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_576: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("29%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_577: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_2_577: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_578: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("29%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_579: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_2_579: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_580: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("29%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_581: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_2_581: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_582: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("33%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_583: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_2_583: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_584: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("33%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_585: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_2_585: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_586: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("33%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_587: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_2_587: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_588: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("33%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_589: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("33%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_590: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("33%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_591: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("33%"),
    backgroundColor: "rgba(255, 220, 220, 1)"
  },
  View_2_592: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_2_592: {
    color: "rgba(34, 34, 34, 1)",
    fontSize: 14,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_593: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("6%")
  },
  ImageBackground_2_594: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("6%")
  },
  ImageBackground_2_595: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("18%")
  },
  ImageBackground_2_596: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("18%")
  },
  View_2_597: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_2_597: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_599: {
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
  TouchableOpacity_2_600: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  View_2_601: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_602: {
    width: wp("174%"),
    minWidth: wp("174%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_603: {
    flexGrow: 1,
    width: wp("169%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_604: {
    width: wp("169%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_605: {
    width: wp("165%"),
    minWidth: wp("165%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_606: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_606_835_475: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_606_835_475: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_606_835_476: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2_606_835_476: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_607: {
    width: wp("10%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    backgroundColor: "rgba(255, 215, 75, 1)"
  },
  View_I2_607_835_478: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_607_835_478: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_607_835_479: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2_607_835_479: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_608: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_608_835_475: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_608_835_475: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_608_835_476: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2_608_835_476: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_609: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_609_835_475: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_609_835_475: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_609_835_476: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2_609_835_476: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_610: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_610_835_475: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_610_835_475: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_610_835_476: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2_610_835_476: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_611: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_611_835_475: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_611_835_475: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_611_835_476: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2_611_835_476: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_612: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_612_835_475: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_612_835_475: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_612_835_476: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2_612_835_476: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_613: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_613_835_475: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_613_835_475: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_613_835_476: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2_613_835_476: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_614: {
    width: wp("9%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_614_835_475: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_614_835_475: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_614_835_476: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2_614_835_476: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_615: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("118%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_615_835_475: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_615_835_475: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_615_835_476: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2_615_835_476: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_616: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("131%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_616_835_475: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_616_835_475: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_616_835_476: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2_616_835_476: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_617: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("144%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_617_835_475: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_617_835_475: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_617_835_476: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2_617_835_476: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_618: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("157%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_618_835_475: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_618_835_475: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_618_835_476: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I2_618_835_476: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_619: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_620: {
    width: wp("186%"),
    minWidth: wp("186%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_621: {
    width: wp("181%"),
    minWidth: wp("181%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_622: {
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
  ImageBackground_2_623: {
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
  ImageBackground_2_624: {
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
  View_2_625: {
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
  View_I2_625_564_10: {
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
  View_I2_625_564_11: {
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
  Text_I2_625_564_11: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_626: {
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
  View_I2_626_564_10: {
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
  View_I2_626_564_11: {
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
  Text_I2_626_564_11: {
    color: "rgba(25, 29, 33, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_627: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("162%")
  },
  View_2_628: {
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
  TouchableOpacity_2_629: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_2_632: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  TouchableOpacity_2_635: {
    width: wp("13%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  TouchableOpacity_2_78: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
