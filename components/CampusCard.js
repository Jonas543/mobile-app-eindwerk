import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const CampusCard = ({ name, description, color = "#82C51B", onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <Text style={[styles.title, { color }]}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.link}>ontdek de campus →</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 44,
    marginBottom: 44,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 28,
  },
  description: {
    fontSize: 26,
    color: "#777",
    lineHeight: 40,
    textAlign: "center",
  },
  link: {
    marginTop: 42,
    textAlign: "center",
    fontSize: 24,
    color: "#777",
    textDecorationLine: "underline",
  },
});

export default CampusCard;