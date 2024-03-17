import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, List, Text, MD3Colors } from "react-native-paper";

export const Works = () => {
  return (
    <View>
      <Text style={styles.titleContainer}>自分の作業</Text>
      <Card>
        <Card.Content>
          <List.Section>
            {items.map((item) => (
              <List.Item
                key={item.title}
                title={item.title}
                left={() => <List.Icon color={item.color} icon={item.icon} />}
                right={() => <List.Icon icon="chevron-right" />}
                onPress={() => {}}
              />
            ))}
          </List.Section>
        </Card.Content>
      </Card>
    </View>
  );
};

const items = [
  { title: "Issue", icon: "alpha-i-circle", color: MD3Colors.primary50 },
  { title: "Pull Request", icon: "source-pull", color: MD3Colors.primary50 },
  {
    title: "ディスカッション",
    icon: "chat",
    color: MD3Colors.primary50,
  },
  {
    title: "プロジェクト",
    icon: "application",
    color: MD3Colors.primary50,
  },
  {
    title: "リポジトリ",
    icon: "source-repository",
    color: MD3Colors.primary50,
  },
  {
    title: "Organization",
    icon: "account-group",
    color: MD3Colors.primary50,
  },
  {
    title: "Star済み",
    icon: "star",
    color: MD3Colors.primary50,
  },
];

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
