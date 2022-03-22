import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import moment from 'moment'
import Header from './Header.js'

export default class MatchesDetail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const detail = this.props.navigation.state.params

        return(
            <React.Fragment>
                <Header
                    title={`${detail.match.homeTeamName} x ${detail.match.awayTeamName}`}
                    round={null}
                    withArrows={false}
                />
                <ScrollView style={styles.container}>
                    <View style={styles.alignColumn}>
                        <Text style={styles.matchday}>Matchday {detail.match.matchday}</Text>
                        <Text style={styles.matchdate}>{moment(detail.match.matchDate).format('DD/MM/YYYY')}</Text>
                        <View style={styles.align}>
                            <Text style={styles.matchFontSize}>{detail.match.homeTeamName}</Text>
                            <Text style={styles.matchResultsText}>{detail.match.fulltimeScore.homeTeam} x {detail.match.fulltimeScore.awayTeam}</Text>
                            <Text style={styles.matchFontSize}>{detail.match.awayTeamName}</Text>
                        </View>
                    </View>
                </ScrollView>
            </React.Fragment>
        )
    }
}

const styles = {
    container: {
        marginTop: 25,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10
    },
    alignColumn: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    align: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
        flexWrap: "wrap"
    },
    matchFontSize: {
        fontSize: 18,
    },
    matchResultsText: {
        letterSpacing: 5.5,
        fontSize: 18
    },
    matchday: {
        fontSize: 25,
        marginTop: 10
    },
    matchdate: {
        fontSize: 14,
        marginBottom: 15
    }
}