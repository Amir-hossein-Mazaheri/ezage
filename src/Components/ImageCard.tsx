import React, { useCallback, useContext, useRef } from "react";
import { View, Image, Pressable } from "react-native";

import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Text from "../Common/Text";
import SearchContext, { incrementLike } from "../Context/SearchContext";
import styles from "./ImageCardStyle";
import { Link } from "@react-navigation/native";

interface ImageCardProps {
  id: string;
  title: string;
  url: string;
  description: string;
  likes: number;
}

// max delay between taps to register as a double tap
const DOUBLE_PRESS_DELAY = 300;

const ImageCard: React.FC<ImageCardProps> = ({
  id,
  title,
  url,
  description,
  likes,
}) => {
  const pressed = useRef(false);
  const lastTap = useRef<number>(null);
  const { dispatch } = useContext(SearchContext);

  const triggerDoubleTap = useCallback(() => {
    if (pressed.current) return;
    const now = Date.now();
    if (lastTap && now - lastTap.current < DOUBLE_PRESS_DELAY) {
      // Increment likes locally
      dispatch(incrementLike({ id }));
      pressed.current = true;
      return;
    }

    lastTap.current = now;
  }, [dispatch, id, lastTap, pressed]);

  return (
    <Pressable onPress={triggerDoubleTap}>
      <View style={styles.imageCard}>
        <Image style={styles.image} source={{ uri: url }} />
        <View style={styles.details}>
          <Text bold style={styles.imageTitle}>
            {title ? title : "NO TITLE"}
          </Text>
          {description && (
            <Text style={styles.imageDescription}>{description}</Text>
          )}

          <View style={styles.bottomBody}>
            <View style={styles.likes}>
              <EvilIcons name="heart" size={24} color="black" />
              <Text style={{ marginLeft: 5 }}>{likes} Likes</Text>
            </View>

            <Link
              to={{ screen: "SingleImage", params: { id, title } }}
              style={styles.detailsButton}
            >
              <Entypo name="list" size={18} color="white" />
              <Text bold style={styles.detailsButtonText}>
                Go to Details
              </Text>
            </Link>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default React.memo(ImageCard);
