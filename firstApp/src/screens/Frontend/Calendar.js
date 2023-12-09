import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars'

const Calendar = () => {
  return (
    <View style={{flex:1, alignItems:'center'}}>
      <Text style={{fontSize:30, marginTop:20}}>Calendar</Text>
      <Calendar />
    </View>

  )
}

export default Calendar

const styles = StyleSheet.create({})