import React from 'react'
import { ScrollView, Text, TouchableOpacity } from 'react-native'
import axios from 'axios'
import { token } from '../auth.json'

export default class Matches extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            info: [],
            matches: []
        }
    }

    componentDidMount() {
        axios.get(`https://api.football-data.org/v2/competitions/PL/matches?matchday=${this.props.round}`, {
            headers: {
                "X-Auth-Token": token
            }
        }).then(res => {
            const results = res.data.matches

            this.setState({
                info: results
            })

            this.TreatInfoData()
        })
    }

    TreatInfoData = () => {
        let tempInfo = []

        this.state.info.forEach(items => {
            const matchesInfo = {
                homeTeamName: items.homeTeam.name,
                awayTeamName: items.awayTeam.name,
                halftimeScore: items.score.halfTime,
                fulltimeScore: items.score.fullTime,
                matchday: items.matchday,
                matchStatus: items.status,
                matchDate: items.utcDate
            }

            tempInfo.push(matchesInfo)
        })

        this.setState({
            matches: tempInfo
        })
    }

    MatchDetails = (details) => {
        this.props.navigation.navigate("MatchesDetail", {
            match: details
        })
    }

    render() {
        return this.state.matches.map((items, i) => {
            return(
                <ScrollView style={styles.container} key={i}>
                    <TouchableOpacity
                        style={styles.align}
                        onPress={() => {this.MatchDetails(items)}}
                    >
                        <Text style={styles.teamsText}>{items.homeTeamName}</Text>
                        <Text style={styles.matchResultsText}>{items.fulltimeScore.homeTeam} x {items.fulltimeScore.awayTeam}</Text>
                        <Text style={styles.teamsText}>{items.awayTeamName}</Text>
                    </TouchableOpacity>
                </ScrollView>
            )
        })
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
        flexDirection: "row",
        flexWrap: "wrap"
    },
    teamsText: {
        fontSize: 16,
        marginRight: 10
    },
    matchResultsText: {
        letterSpacing: 5.5,
        fontSize: 16
    }
}