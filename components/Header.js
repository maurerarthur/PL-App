import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            this.props.withArrows ?
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => this.props.prevArrow(false)}>
                    <Text style={styles.buttonText}>{"<"}</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{this.props.title} {this.props.round}</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.nextArrow(false)}>
                    <Text style={styles.buttonText}>{">"}</Text>
                </TouchableOpacity>
            </View>
            :
            <View style={styles.container}>
                <Text style={styles.headerTitle}>{this.props.title} {this.props.round}</Text>
            </View>
        )
    }
}

const styles = {
    container: {
        height: 60,
        width: "100%",
        backgroundColor: "#00FF85",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
    headerTitle: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20
    },
    button: {
        flex: 1,
        alignItems: "center"
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 22
    }
}