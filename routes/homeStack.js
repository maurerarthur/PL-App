import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home.js';
import Matches from '../components/Matches.js';
import MatchesDetail from '../components/MatchesDetail.js';
import Footer from '../components/Footer.js';
import SetTeam from '../components/SetTeam.js';

const screens = {
    Home: {
        screen: Home
    },
    Matches: {
        screen: Matches
    },
    MatchesDetail: {
        screen: MatchesDetail
    },
    Footer: {
        screen: Footer
    },
    SetTeam: {
        screen: SetTeam,
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);