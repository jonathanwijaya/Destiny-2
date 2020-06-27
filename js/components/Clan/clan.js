import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Button,
    TouchableOpacity,
    TextInput,
    ScrollView,
    ImageBackground,
    Dimensions
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

        };

    }

    componentDidMount() {
        this.props.getDestinyClanProfileAction()
    }

    render() {
        console.log(this.state);
        console.log(this.props);
        var clan = this.props.clan && this.props.clan.clanProfile && this.props.clan.clanProfile.Response
        var guildicon = `https://www.bungie.net${clan.detail.avatarPath}`
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/img/background.jpg')} style={styles.background} />
                <ScrollView>
                    <View style={styles.headerWrapper}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: `${guildicon}`,
                            }}
                        />
                        <View>
                            <Text style={{ color: '#fafafa' }}>
                                {clan.detail.name}
                            </Text>
                            <Text style={{ color: '#fafafa' }}>
                                {clan.detail.about}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B0B0B0',
        flex: 1,
        // justifyContent:'center'
    },
    background: {
        resizeMode: "cover",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    headerWrapper: {
        flexDirection: 'row',
        margin:5
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
