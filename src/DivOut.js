
import { React, ScrollView, SafeAreaView, View, StyleSheet, Pressable, Modal, Text } from 'react-native';
import { useState } from "react";
import { CalendarList } from 'react-native-calendars';
import exAPI from '../.expo/api/exAPI';


const DivOut = ({navigation}) => {    
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pressDate, setPressDate] = useState('');
    const [results, setResults] = useState([]);


    const pullAPI = async () => {
        const response = await exAPI.get();
        setResults(response.data.date);

    };


    componentDidMount () {
        return fetch('https://financialmodelingprep.com/api/v3/stock_dividend_calendar?from=2020-01-01&to=2020-09-01&apikey=a22c3e220145028989f47a2fed76df36');
    }


    return (            
        <View
            style={{
                flex: 1,
                alignSelf: 'center',
            }}
        >
            
        <CalendarList
            horizontal
            pagingEnabled
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={50}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={50}
            // Enable or disable scrolling of calendar list
            scrollEnabled
            // Enable or disable vertical scroll indicator. Default = false
            showScrollIndicator={false}
            
            onDayPress={day => {
                console.log(day.dateString);
                pullAPI;
                console.log(results.data);
                setIsModalVisible(true);
                setPressDate(day.dateString);
                
            }}
            />
            <Modal
                visible={isModalVisible}
                animationType='slide'
                transparent={true}
                onRequestClose={() => {setIsModalVisible(false)}}
                style={{
                    margin: 0,
                    width: 10,
                    height: 10
                    
                }}
            >
                <SafeAreaView style={styles.modalWindow}>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setIsModalVisible(false)}
                    />
                    <ScrollView
                        contentContainerStyle={{
                            alignItems: 'center'
                        }}
                        style={{
                            width: 400
                        }}
                    >
                    <Text>
                        Ex Dividend Date: {pressDate}
                        {'\n'}{'\n'}
                        Ticker: 
                        {'\n'}{'\n'}
                        Payout Date: 
                        {'\n'}{'\n'}
                        Record Date: 
                        {'\n'}{'\n'}
                        {'\n'}{'\n'}
                        Ticker: 
                        {'\n'}{'\n'}
                        Payout Date: 
                        {'\n'}{'\n'}
                        Record Date: 
                        {'\n'}{'\n'}
                        {'\n'}{'\n'}
                        Ticker: 
                        {'\n'}{'\n'}
                        Payout Date: 
                        {'\n'}{'\n'}
                        Record Date: 
                        {'\n'}{'\n'}
                        
                    </Text>
                    </ScrollView>
                </SafeAreaView>

            </Modal>
        </View>
        
    )};

const styles = StyleSheet.create({
    modalWindow: {
        
        backgroundColor: 'darkkhaki',
        position: 'absolute',
        alignItems: 'center',
        alignContent: 'center',
        width: 400,
        height: 350,
        top: '50%',
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 20,
        padding: 20

    }


});

export default DivOut;