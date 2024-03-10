import React from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import type { StyleProp } from "react-native";

type LayoutProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const Layout = ({ children, style }: LayoutProps) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    jastifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
