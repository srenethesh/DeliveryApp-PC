import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [dotPosition, setDotPosition] = useState(new Animated.Value(0));

  const moveDot = (index) => {
    Animated.spring(dotPosition, {
      toValue: index,
      useNativeDriver: true,
    }).start();
  };

  const renderTabBar = ({ state, descriptors, navigation }) => (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
            moveDot(index);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tabItem}>
            {label === 'Home' ?(
              <Entypo name="home" 
              size={26} 
              color={isFocused ? '#1AC84B' : '#8E8E93'} />
            ):label === 'Search'?(
              <MaterialCommunityIcons 
              name="chart-box" 
              size={29} 
              color={isFocused ? '#1AC84B' : '#8E8E93'} />
            ):label === 'Profile'?(
              <Fontisto
                name="person"
                size={24}
                color={isFocused ? '#1AC84B' : '#8E8E93'}
              />
            ):null}
          </TouchableOpacity>
        );
      })}
      <Animated.View style={[styles.dot, { transform: [{ translateX: dotPosition.interpolate({ inputRange: [0, 1, 2], outputRange: [61, 190, 321] }) }] }]} />
    </View>
  );

  return (
   
      <Tab.Navigator tabBar={renderTabBar}>
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Search" component={SearchScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
      </Tab.Navigator>
    
  );
}
 

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dot: {
    position: 'absolute',
    bottom: 55,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1AC84B',
  },
});