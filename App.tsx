import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { MD3Colors } from "react-native-paper";

import { screens } from "./src/screens/utils/screens";

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
        {screens.map((screen) => (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              tabBarLabel: screen.label,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  color={color}
                  name={
                    screen.icon as typeof MaterialCommunityIcons.defaultProps.name
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
