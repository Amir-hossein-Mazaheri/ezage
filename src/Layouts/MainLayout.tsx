import React from "react";
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
        <>{children}</>
      </SafeAreaView>
      <QuickAccess />
    </Container>
  );
};

export default MainLayout;
