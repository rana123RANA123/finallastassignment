import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Home from './Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DateCalendar from './DateCalendar';
import Logout from './Logout';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

    return (
        <>
            <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="DateCalendar" component={DateCalendar} />
                <Tab.Screen name="Logout" component={Logout} />
                {/* <Tab.Screen name="Setting" component={Setting} /> */}
            </Tab.Navigator>
        </>
    )
}

export default TabNavigation