import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    setTeam = () => {
        this.props.navigation.navigate("SetTeam");
    }

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={this.setTeam}>
                    <Text style={styles.buttonText}>Set Favorite Team</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = {

    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row"
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: 20,
        padding: 25,
        backgroundColor: "#303030",
    },

    buttonText: {
        color: "#FFFFFF",
        textTransform: "uppercase"
    }

};