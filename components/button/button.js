import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
export default class Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                locationValue: null,
                errorMessage: null,
            },
            allBtns: ['Location', 'Camera']
        };
    }
    async componentDidMount() {


    }

    onPressLearnMore = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        console.log(status);
        
        let location = this.state.location
        if (status === 'denied') {

            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        } else {

            let locationValue = await Location.getCurrentPositionAsync({});
            location.locationValue =locationValue
            this.setState({ location: location  });
        }
    }
    render() {
        let text = 'Waiting..';
        let textR = null;
        if (this.state.location.errorMessage) {
            textR = this.state.location.errorMessage;
        } else if (this.state.location.locationValue) {
            textR = this.state.location.locationValue;
        }

        return (
            <View>
                {
                    Array.from(this.state.allBtns).forEach(btn => {
                        console.log(btn);
                        
                       return (
                        <Button
                            onPress={this.onPressLearnMore}
                            title="skakj"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                       )
                    })
                }
                {/* {
                    textR ? <Text style={styles.paragraph}>You are {textR.coords.latitude} latitude
                    and {textR.coords.longitude} longitude</Text> : <Text>{text}</Text>
                } */}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    paragraph: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',
    }
});