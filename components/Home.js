import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { token } from '../auth.json';
import Header from './Header.js';
import Matches from './Matches.js';
import Footer from './Footer.js';

export default class App extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			currentMatchday: null,
			isLoaded: false,
		}

	}

	componentDidMount() {

		axios.get(`https://api.football-data.org/v2/competitions/PL`, {

            headers: {
                "X-Auth-Token": token
            },

        }).then(res => {

			const matchday = res.data.currentSeason.currentMatchday;

			this.setState({
				currentMatchday: matchday,
				isLoaded: true
			});

		});

	}

	prevRound = (stateStatus) => {

		this.state.currentMatchday == 1 ?

		this.setState({
			currentMatchday: this.state.currentMatchday
		})

		:

		this.setState({
			isLoaded: stateStatus
		}, () => {
			this.setState({
				isLoaded: true,
				currentMatchday: this.state.currentMatchday - 1
			});
		});

	}

	nextRound = (stateStatus) => {

		this.state.currentMatchday == 38 ?

		this.setState({
			currentMatchday: this.state.currentMatchday
		})

		:

		this.setState({
			isLoaded: stateStatus
		}, () => {
			this.setState({
				isLoaded: true,
				currentMatchday: this.state.currentMatchday + 1
			});
		});

	}

	render() {

		return(

			this.state.isLoaded ?

			<ScrollView>
				<Header
					title="Round"
					round={this.state.currentMatchday}
					withArrows={true}
					prevArrow={this.prevRound}
					nextArrow={this.nextRound}
				/>
				<Matches round={this.state.currentMatchday} navigation={this.props.navigation} />
				<Footer navigation={this.props.navigation} />
			</ScrollView>

			:

			<ScrollView>
				<Header
					title="Loading..."
					withArrows={false}
				/>
			</ScrollView>

		);

	}

}