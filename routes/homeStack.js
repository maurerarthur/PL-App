import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home';
import Matches from '../components/Matches';
import MatchesDetail from '../components/MatchesDetail';

const screens = {
    Home: {
        screen: Home
    },
    Matches: {
        screen: Matches
    },
    MatchesDetail: {
        screen: MatchesDetail
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);