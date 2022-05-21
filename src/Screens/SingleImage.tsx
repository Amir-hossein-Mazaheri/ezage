import React, { useContext, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import SearchContext from "../Context/SearchContext";

type SingleImageRouteProps = NativeStackScreenProps<
  RootStackParamList,
  "SingleImage"
>;

const SingleImage: React.FC<SingleImageRouteProps> = ({ route }) => {
  const {
    searchSlice: { results },
  } = useContext(SearchContext);
  const { id } = route.params;

  const imageDetails = useMemo(
    () => results.find((result) => result.id === id),
    [id, results]
  );

  console.log(imageDetails);

  return (
    <View style={styles.container}>
      <Text>SingleImage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
});

export default React.memo(SingleImage);
