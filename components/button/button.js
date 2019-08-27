import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
export default class Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                locationValue: null,
                errorMessage: null,
            },
            allBtns: ['Location', 'Camera'],
        };
    }
    async componentDidMount() {


    }

    onPressLearnMore = async (e, btn) => {
        if(btn === 'location')
        {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
      
        let location = this.state.location
        if (status === 'denied') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        } else {

            let locationValue = await Location.getCurrentPositionAsync({});
            location.locationValue =locationValue
            this.setState({ location: location  }, () => {
                console.log(this.state.location.locationValue);
                
            });
        }
        }else if(btn === 'camera'){
            // const { status } = await Permissions.askAsync(Permissions.CAMERA);
      
        console.log(status);
        
        // if (status === 'denied') {
        //     this.setState({
        //         errorMessage: 'Permission to access location was denied',
        //     });
        // } else {

        //     let locationValue = await Location.getCurrentPositionAsync({});
        //     location.locationValue =locationValue
        //     this.setState({ location: location  }, () => {
        //         console.log(this.state.location.locationValue);
                
        //     });
        }
        
        
    }
    render() {
        

        return (
            <View>
                <View>
                {
                    Array.from(this.state.allBtns).map(btn => {
                       return (
                        <Button
                            onPress={(e) => this.onPressLearnMore(e, btn)}
                            title={btn}
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                            key={btn}
                        />
                       )
                    })
                }
                </View>
                <View>
                {
                   
                    this.state.location.locationValue ? <Text style={styles.paragraph}>You are {this.state.location.locationValue.coords.latitude} latitude
                    and {this.state.location.locationValue.coords.longitude} longitude</Text> : <Text> {this.state.location.errorMessage}</Text>
                   
                }
                 </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    paragraph: {
        // margin: 24,
        fontSize: 18,
        textAlign: 'center',
    }
}); 