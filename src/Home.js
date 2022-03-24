import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';


const Home = ({navigation}) => {
    return (
        <View>
            
            <Button 
            title='Dividend Outlook'
            color={'orange'}
            onPress={() => navigation.navigate('Dividend OutLook')}
            
            />
            <Button 
            title='Earnings Forecast'
            onPress={() => navigation.navigate('Earnings Forecast')}
            />
        </View>
    );

};

const styles = StyleSheet.create({});

export default Home;