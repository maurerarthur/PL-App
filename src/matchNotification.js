import axios from 'axios';
import LocalNotification from '../src/notificationHandler.js';
import { token } from '../auth.json';

export default MatchNotification = async (id) => {

    let matchData = {
        homeTeam: null,
        awayTeam: null,
        homeTeamScore: null,
        awayTeamScore: null
    };

    axios.get(`https://api.football-data.org/v2/teams/${id}/matches?status=FINISHED&limit=1`, { //IN_PLAY

        headers: {
            "X-Auth-Token": token
        }

    }).then(res => {

        if(res.data.count > 0) {

            res.data.matches.forEach(match => {
                matchData = {
                    homeTeam: match.homeTeam.name,
                    awayTeam: match.awayTeam.name,
                    homeTeamScore: match.score.fullTime.homeTeam,
                    awayTeamScore: match.score.fullTime.awayTeam
                }
            });

            const matchResult = `${matchData.homeTeam} ${matchData.homeTeamScore} x ${matchData.awayTeamScore} ${matchData.awayTeam}`;

            LocalNotification("Ongoing match", matchResult);

        }

    });

}