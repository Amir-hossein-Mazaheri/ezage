import React, { useMemo } from "react";
import { Text as NativeText, TextProps, StyleSheet } from "react-native";

interface CustomTextProps extends TextProps {
  bold?: boolean;
}

const Text: React.FC<CustomTextProps> = ({
  style,
  children,
  bold,
  ...other
}) => {
  const styles = useMemo(
    () =>
      StyleSheet.compose(style, {
        fontFamily: bold ? "Poppins_700Bold" : "Poppins_400Regular",
      }),
    []
  );

  return (
    <NativeText style={styles} {...other}>
      {children}
    </NativeText>
  );
};

export default Text;
