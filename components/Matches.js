import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { token } from '../auth.json';

export default class Matches extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            info: [],
            matches: [],
        };

    }

    static navigationOptions = {
        title: 'Home'
    }

    componentDidMount() {

        axios.get(`https://api.football-data.org/v2/competitions/PL/matches?matchday=${this.props.round}`, {

            headers: {
                "X-Auth-Token": token
            },

        }).then(res => {

            const results = res.data.matches;

            this.setState({
                info: results
            });

            this.TreatInfoDate();

        });

    }

    TreatInfoDate = () => {

        let tempInfo = [];

        this.state.info.forEach(items => {

            const matchesInfo = {

                homeTeamName: items.homeTeam.name,
                awayTeamName: items.awayTeam.name,
                halftimeScore: items.score.halfTime,
                fulltimeScore: items.score.fullTime,
                matchday: items.matchday,
                matchStatus: items.status,
                matchDate: items.utcDate,

            };

            tempInfo.push(matchesInfo);

        });

        this.setState({
            matches: tempInfo
        });

    }

    MatchDetails = () => {
        this.props.navigation.navigate("MatchesDetail");
    }

    render() {

        return this.state.matches.map((items, i) => {
            return (
                <ScrollView style={styles.container} key={i}>
                    <TouchableOpacity style={styles.align} onPress={this.MatchDetails}>
                        <Text>{items.homeTeamName}</Text>
                        <Text style={styles.matchResultsText}>
                            {items.fulltimeScore.homeTeam}
                            x
                            {items.fulltimeScore.awayTeam}
                        </Text>
                        <Text>{items.awayTeamName}</Text>
                    </TouchableOpacity>
                </ScrollView>
            );
        });

    }

}

const styles = {

    container: {
        marginTop: 25,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10
    },

    align: {
        display: "flex",
        flexDirection: "row"
    },

    matchResultsText: {
        letterSpacing: 5.5
    },

};