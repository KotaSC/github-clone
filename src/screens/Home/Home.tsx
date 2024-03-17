import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Card, List, Text, Searchbar, MD3Colors } from "react-native-paper";

import { Layout } from "../../components/Layout";

const items = [
  { title: "Issue", icon: "alpha-i-circle", color: MD3Colors.primary50 },
  { title: "Pull Request", icon: "source-pull", color: MD3Colors.primary50 },
  {
    title: "Discussion",
    icon: "chat",
    color: MD3Colors.primary50,
  },
];

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Layout>
      <Searchbar
        placeholder="Search GitHub"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Text style={styles.titleContainer}>自分の作業</Text>
      <Card>
        <Card.Content>
          <List.Section>
            {items.map((item) => (
              <List.Item
                key={item.title}
                title={item.title}
                left={() => <List.Icon color={item.color} icon={item.icon} />}
              />
            ))}
          </List.Section>
        </Card.Content>
      </Card>
    </Layout>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
