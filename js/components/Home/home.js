import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memberShiptype: 3,
      displayName: '',
    };

    this.search = this.search.bind(this);
  }

  search() {
    let form = {
      displayName: this.state.displayName,
      memberShiptype: this.state.memberShiptype,
    };
    console.log(form, 'search');

    this.props.getDestinyUserProfileAction(form);
  }

  render() {
    console.log(this.state);
    console.log(this.props);
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.margin}>
          <TextInput
            placeholder="Search D E S T I N Y 2 Player"
            style={{flex: 1}}
            value={this.state.displayName}
            onChangeText={(e) =>
              this.setState({
                displayName: e,
              })
            }
          />
          <DropDownPicker
            items={[
              {
                label: <FontAwesome color="#fafafa" size={25} name="steam" />,
                value: '3',
              },
              {
                label: <FontAwesome color="#fafafa" size={25} name="steam" />,
                value: '5',
              },
              {
                label: (
                  <FontAwesome color="#fafafa" size={25} name="playstation" />
                ),
                value: '2',
              },
              {
                label: <FontAwesome color="#fafafa" size={25} name="xbox" />,
                value: '-1',
              },
              {
                label: <Text style={{color: '#fafafa'}}>ALL</Text>,
                value: '-1',
              },
            ]}
            defaultIndex={0}
            containerStyle={{height: 40}}
            itemStyle={{
              backgroundColor: '#303030',
              alignItems: 'center',
              flex: 1,
            }}
            arrowStyle={{marginLeft: 10}}
            onChangeItem={(item) =>
              this.setState({
                memberShiptype: item.value,
              })
            }
            style={{
              backgroundColor: '#303030',
            }}
          />
        </View>
        <View style={styles.searchButtonWrapper}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => this.search()}>
            <Text style={{color: '#fafafa', margin: 10}}>S E A R C H</Text>
          </TouchableOpacity>
        </View>
        {this.props.home.userProfile &&
          this.props.home.userProfile.Response.map((userprofile, i) => {
            var icon = userprofile
              ? `https://www.bungie.net${userprofile.iconPath}`
              : '../../../assets/img/stadia.svg';
              console.log("" + icon)
            return (
              <View
                style={{
                  marginHorizontal: 20,
                  marginVertical: 10,
                  flexDirection: 'row',
                  backgroundColor: '#f9cc33',
                  borderRadius: 20,
                }}
                key={i}>
                <Image
                style={{
                  width:50,
                  height:50
                }}
                  source={{
                    uri: `${icon}`
                  }}
                />
                <Text>
                  {userprofile.displayName}
                {" "}
                </Text>
                <Text>
                  {userprofile.membershipId}
                </Text>
              </View>
            );
          })}
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0B0B0',
  },
  margin: {
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
  searchButtonWrapper: {
    backgroundColor: '#303030',
    margin: 5,
  },
  touchableOpacity: {
    alignItems: 'center',
  },
});
