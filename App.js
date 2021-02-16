import React from "react";
import styled from "styled-components/native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import HomeScreen from "./components/screens/HomeScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import LiveScreen from "./components/screens/LiveScreen";
import GameScreen from "./components/screens/GameScreen";

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const tabBarOptions = {
  showLabel: false,
  style: {
    backgroundColor: "#343434",
    borderTopColor: "#343434",
  },
};

const screenOptions = (route) => {

};

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case "HomeScreen":
              iconName = "home";
              break;
            case "LiveScreen":
              iconName = "gamepad";
              break;
            case "ProfileScreen":
              iconName = "user-alt";
              break;
            default:
              iconName;
              break;
          }

          return (
            <TabBarIconContainer focused={focused}>
              <FontAwesome5 name={iconName} size={24} color="#fff" />
            </TabBarIconContainer>
          );
        },
      })}
    >
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
      <TabNav.Screen name="LiveScreen" component={LiveScreen} />
      <TabNav.Screen name="ProfileScreen" component={ProfileScreen} />
    </TabNav.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode="card" headerMode="none">
        <AppStack.Screen name="App" component={TabNavScreen} />
        <AppStack.Screen name="GameScreen" component={GameScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export const TabBarIconContainer = styled.View`
  background-color: ${(props) => (props.focused ? "#819ee5" : "#343434")};
  padding: 2px 16px;
  border-radius: 32px;
`;
