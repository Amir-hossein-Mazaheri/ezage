import { StyleSheet } from "react-native";

export default StyleSheet.create({
  searchBar: {
    marginHorizontal: 15,
    marginTop: 12,
    marginBottom: 5,
  },
  safeView: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderRadius: 999,
    elevation: 15,
    shadowColor: "#ccc",
  },
  searchInput: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#808080",
    flex: 1,
  },
  searchIcon: {
    alignSelf: "center",
  },
  total: {
    textAlign: "center",
    marginTop: 7,
    fontSize: 13,
    fontWeight: "bold",
    color: "dimgray",
  },
  clearInput: {
    position: "absolute",
    alignSelf: "center",
    right: "5%",
    opacity: 0.8,
  },
});
