import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface ImageCardProps {
  id: string | number;
  title: string;
  url: string;
  description: string;
  likes: number;
}

const ImageCard: React.FC<ImageCardProps> = ({
  id,
  title,
  url,
  description,
  likes,
}) => {
  return (
    <View style={styles.imageCard}>
      <Image style={styles.image} source={{ uri: url }} />
      <View style={styles.details}>
        <Text style={styles.imageTitle}>{title}</Text>
        <Text style={styles.imageDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageCard: {
    elevation: 10,
    shadowColor: "#ccc",
    marginBottom: 20,
    borderRadius: 12,
    flex: 1,
    backgroundColor: "white",
    overflow: "hidden",
  },
  details: {
    paddingTop: 5,
    paddingBottom: 7,
    paddingHorizontal: 12,
  },
  imageTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 6,
  },
  imageDescription: {
    marginBottom: 8,
  },
  image: {
    maxWidth: "100%",
    height: 165,
    marginBottom: 8,
  },
});

export default ImageCard;
