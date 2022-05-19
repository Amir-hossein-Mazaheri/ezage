import React, { Fragment } from "react";
import { SafeAreaView } from "react-native";

import QuickAccess from "../Common/QuickAccess";
import Container from "./Container";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <SafeAreaView>
        <Fragment>{children}</Fragment>
      </SafeAreaView>
      <QuickAccess />
    </Container>
  );
};

export default MainLayout;
