import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
// import auth from '@react-native-firebase/auth';
// import useFishStore from '../../../store';
// import { useAuthContext } from '../contexts/AuthContext';
import homepage from '../../assets/homepage.jpg'

const Home = ({ navigation }) => {

  // const { user, addUser } = useFishStore()

  // const {isAuth} = useAuthContext()

  // const [newuser, setNewUser] = useState({})
  // const [userData, setUserData] = useState({})


  // useEffect(() => {
  //   setUserData(user)
  // }, [])

  // useEffect(() => {
  //   auth().onAuthStateChanged((newuser) => {
  //     if(newuser){
  //       setUser(newuser)
  //       console.log("newuser", newuser)
  //     }
  //     else{
  //       console.log("User isn't signed in")
  //     }
  //   })
  // }, [])

  return (
    <>



      <View style={styles.container}>
        {/* <Text>Email : {userData?.email}</Text>
        <Text>Uid : {userData?.uid}</Text> */}
        <Image
          source={(homepage)}
          style={styles.homeStyle}
        />
      </View>



    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  homeStyle : {
    height:'100%',
    width:'100%',
  }
})