import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { MD3Colors } from "react-native-paper";

import { tabs } from "./src/navigation/tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: MD3Colors.primary50,
          tabBarStyle: {
            paddingBottom: 10,
            height: 60,
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              tabBarLabel: tab.label,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  color={color}
                  name={
                    tab.icon as typeof MaterialCommunityIcons.defaultProps.name
                  }
                  size={size}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
