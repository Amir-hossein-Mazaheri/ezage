import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

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
        {description && (
          <Text style={styles.imageDescription}>{description}</Text>
        )}

        <View style={styles.bottomBody}>
          <View style={styles.likes}>
            <EvilIcons name="heart" size={24} color="black" />
            <Text style={{ marginLeft: 5 }}>{likes} Likes</Text>
          </View>

          <TouchableOpacity style={styles.detailsButton}>
            <Entypo name="list" size={18} color="white" />
            <Text style={styles.detailsButtonText}>Go to Details</Text>
          </TouchableOpacity>
        </View>
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
    textTransform: "capitalize",
  },
  imageDescription: {
    marginBottom: 8,
  },
  image: {
    maxWidth: "100%",
    height: 165,
    marginBottom: 8,
  },
  bottomBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  detailsButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: "#3498db",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  detailsButtonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 5,
  },
  likes: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginBottom: 8,
  },
});

export default ImageCard;
