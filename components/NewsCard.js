import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const NewsCard = ({ image, title, intro, category, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      {!!image && <Image source={{ uri: image }} style={styles.image} />}

      <Text style={styles.badge}>{category}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.intro}>{intro}</Text>
      <Text style={styles.link}>Lees meer →</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingBottom: 28,
    marginBottom: 44,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 280,
  },
  badge: {
    alignSelf: "flex-start",
    marginTop: 24,
    marginLeft: 24,
    backgroundColor: "#e5e5e5",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    fontSize: 18,
    textTransform: "uppercase",
    color: "#111",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 28,
    color: "#111",
  },
  intro: {
    fontSize: 24,
    lineHeight: 36,
    color: "#555",
    textAlign: "center",
    marginTop: 18,
    paddingHorizontal: 22,
  },
  link: {
    marginTop: 24,
    textAlign: "center",
    fontSize: 22,
    color: "#82C51B",
    fontWeight: "700",
  },
});

export default NewsCard;