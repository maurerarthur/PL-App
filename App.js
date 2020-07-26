import React from 'react';
import { AsyncStorage } from 'react-native';
import Navigator from './routes/homeStack';
import MatchNotification from './src/matchNotification.js';

export default class App extends React.Component {

	constructor(props) {
		super(props);
	}

	async componentDidMount() {
		const userTeam = await AsyncStorage.getItem("favoriteTeamId");
		MatchNotification(JSON.parse(userTeam));
	}

	render() {
		return(
			<Navigator />
		);
	}

}