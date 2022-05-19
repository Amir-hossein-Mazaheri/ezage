import React from "react";
import { View, Text } from "react-native";

import QuickAccess from "../Common/QuickAccess";
import Container from "./Container";

const MainLayout = ({ children }) => {
  return (
    <Container>
      <View>{children}</View>
      <QuickAccess />
    </Container>
  );
};

export default MainLayout;
