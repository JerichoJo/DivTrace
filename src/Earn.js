import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { CalendarList } from 'react-native-calendars';


const Earn = () => {
    return (
        <View
            style={{
                marginTop: '20%',
                marginBottom: '20%',
                alignSelf: 'center',
            }}
        >
            
            <CalendarList
            horizontal={true}
            pagingEnabled={true}
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={50}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={50}
            // Enable or disable scrolling of calendar list
            scrollEnabled={true}
            // Enable or disable vertical scroll indicator. Default = false
            showScrollIndicator={true}
            
            />
        </View>
    );

};

const styles = StyleSheet.create({});

export default Earn;