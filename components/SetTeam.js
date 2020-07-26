import React from 'react';
import { AsyncStorage, View, Text, StatusBar } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import LocalNotification from '../src/notificationHandler.js';
import axios from 'axios';
import { token } from '../auth.json';

export default class SetTeam extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            defaultPlaceholderValue: "Pick a team",
            teams: [],
        };

    }

    getFavoriteTeam = async () => {

        if(await AsyncStorage.getItem("favoriteTeam")) {
            this.setState({
                defaultPlaceholderValue: await AsyncStorage.getItem("favoriteTeam")
            });
        }

    }

    componentDidMount() {

        this.getFavoriteTeam();

        axios.get(`https://api.football-data.org/v2/competitions/PL/teams`, {

            headers: {
                "X-Auth-Token": token,
            }

        }).then(res => {

            let all_teams = [];

            res.data.teams.forEach(team => {
                all_teams.push({
                    label: team.shortName,
                    value: team.shortName
                });
            });

            this.setState({
                teams: all_teams
            });

        });

    }

    render() {
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.title}>Select your favorite Premier League team to get notified in a matchday</Text>
                <DropDownPicker
                    placeholder={this.state.defaultPlaceholderValue}
                    containerStyle={{height: 50}}
                    items={this.state.teams}
                    onChangeItem={async (item) => {
                        await AsyncStorage.setItem("favoriteTeam", item.value);
                        this.setState({
                            defaultPlaceholderValue: item.value
                        }, () => {
                            LocalNotification("Premier League APP", `${item.label} was set as your favorite team`);
                        });
                    }}
                />
            </View>
        );
    }

}

const styles = {

    viewStyle: {
        marginTop: StatusBar.currentHeight,
        paddingLeft: 10,
        paddingRight: 10
    },

    title: {
        fontSize: 18,
        marginBottom: 20,
        alignSelf: "center"
    }

};