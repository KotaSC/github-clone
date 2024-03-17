import React, { useState } from "react";
import { Searchbar } from "react-native-paper";

import { Works } from "./components";
import { Layout } from "../../components/Layout";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Layout>
      <Searchbar
        placeholder="Search GitHub"
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <Works />
    </Layout>
  );
};
