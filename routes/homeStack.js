import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../components/Home.js';
import Matches from '../components/Matches.js';
import MatchesDetail from '../components/MatchesDetail.js';
import Footer from '../components/Footer.js';
import SetTeam from '../components/SetTeam.js';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Home",
            headerTintColor: "#FFFFFF",
            headerStyle: {
                backgroundColor: "#3D195B"
            }
        }
    },
    Matches: {
        screen: Matches,
        navigationOptions: {
            title: "Matches"
        }
    },
    MatchesDetail: {
        screen: MatchesDetail,
        navigationOptions: {
            title: "Match Detail",
            headerTintColor: "#FFFFFF",
            headerStyle: {
                backgroundColor: "#3D195B"
            }
        }
    },
    Footer: {
        screen: Footer,
        navigationOptions: {
            title: "Footer"
        }
    },
    SetTeam: {
        screen: SetTeam,
        navigationOptions: {
            title: "Favorite Team",
            headerTintColor: "#FFFFFF",
            headerStyle: {
                backgroundColor: "#3D195B"
            }
        }
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);