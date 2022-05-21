import { StyleSheet } from "react-native";

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
    fontSize: 16,
    marginBottom: 6,
    textTransform: "capitalize",
    color: "#232323",
  },
  imageDescription: {
    marginBottom: 8,
    color: "#353535",
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
    marginLeft: 5,
  },
  likes: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginBottom: 8,
  },
});

export default styles;
