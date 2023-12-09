import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function DateCalendar() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40, color:'black', fontWeight:'bold', margin:30,}}>Calendar</Text>
      <Calendar
          markingType={'custom'}
          markedDates={{
            '2023-12-02': {customStyles: { container: { backgroundColor: 'black', elevation: 2}, text: {color: 'white'}}},
            '2023-12-16': {customStyles: { container: { backgroundColor: 'black', elevation: 2}, text: {color: 'white'}}},
            '2023-12-09': {customStyles: { container: { backgroundColor: 'black', elevation: 2}, text: {color: 'yellow'}}},
            '2023-12-23': {customStyles: { container: { backgroundColor: 'black', elevation: 2}, text: {color: 'white'}}},
            '2023-12-30': {customStyles: { container: { backgroundColor: 'black', elevation: 2}, text: {color: 'white'}}},
            }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});