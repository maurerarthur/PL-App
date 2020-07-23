import React from 'react';
import { AsyncStorage, View, Button } from 'react-native';
import axios from 'axios';
import { token } from '../auth.json';

//https://www.npmjs.com/package/react-native-dropdown-picker
//^^ Check package above in order to implement the teams selection

export default class SetTeam extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            is_teams_set: false,
            teams: [],
            favorite_team: null
        };

    }

    componentDidMount() {

        axios.get(`https://api.football-data.org/v2/competitions/PL/teams`, {

            headers: {
                "X-Auth-Token": token,
            }

        }).then(res => {

            let all_teams = [];

            res.data.teams.forEach(team => {
                all_teams.push(team.shortName);
            });

            this.setState({
                is_teams_set: true,
                teams: all_teams
            });

        });

    }

    storeTeam = async () => {

        try {
            await AsyncStorage.setItem("favorite_team", "Liverpool");
        } catch (error) {
            console.log(error);
        }

    }

    getTeam = async () => {

        try {
            this.setState({
                favorite_team: await AsyncStorage.getItem("favorite_team")
            });
        } catch (error) {
            console.log(error);
        }

    }

    render() {
        return(
            <View>
                <Button title="Save Team" onPress={this.storeTeam}></Button>
                <Button title="Get Team" onPress={this.getTeam}></Button>
            </View>
        );
    }

}