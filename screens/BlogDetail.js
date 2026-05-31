import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

const BlogDetail = ({ route, navigation }) => {
  const news = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      {!!news.image && (
        <Image source={{ uri: news.image }} style={styles.image} />
      )}

      <View style={styles.content}>
        <View style={styles.metaRow}>
          <Text style={styles.badge}>{news.category}</Text>
          <Text style={styles.date}>{news.date || "August 27, 2026"}</Text>
        </View>

        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.intro}>{news.intro}</Text>

        <Text style={styles.body}>
          {news.content ||
            `Busleyden Atheneum stelde deze week officieel dit nieuwsbericht voor. Via dit artikel blijven leerlingen, ouders en bezoekers op de hoogte van de nieuwste ontwikkelingen binnen de school.

De komende maanden zullen er extra functies, activiteiten en updates toegevoegd worden zodat iedereen goed geïnformeerd blijft.`}
        </Text>

        <View style={styles.line} />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>← Terug naar nieuws</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.logoRow}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>BA</Text>
          </View>
          <Text style={styles.footerBrand}>Busleyden Atheneum</Text>
        </View>

        <Text style={styles.footerHeading}>Explore</Text>
        <Text style={styles.footerLink}>Home</Text>
        <Text style={styles.footerLink}>Studies</Text>
        <Text style={styles.footerLink}>News</Text>
        <Text style={styles.footerLink}>Shop</Text>
        <Text style={styles.footerLink}>Contact</Text>

        <Text style={styles.footerHeading}>Join our newsletter</Text>
        <TextInput style={styles.footerInput} placeholder="Email" />

        <View style={styles.subscribeRow}>
          <TouchableOpacity style={styles.subscribeButton}>
            <Text style={styles.subscribeText}>Subscribe</Text>
          </TouchableOpacity>

          <Text style={styles.privacyText}>
            By subscribing, you agree to our{" "}
            <Text style={styles.privacyLink}>privacy policy</Text>.
          </Text>
        </View>

        <View style={styles.line} />

        <Text style={styles.copy}>© 2025 Busleyden Atheneum</Text>
        <Text style={styles.privacyBottom}>Privacy</Text>

        <View style={styles.socialRow}>
          <Text style={styles.social}>f</Text>
          <Text style={styles.social}>◎</Text>
          <Text style={styles.social}>𝕏</Text>
          <Text style={styles.social}>in</Text>
          <Text style={styles.social}>▶</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    paddingBottom: 40,
  },
  image: {
    width: "92%",
    height: 420,
    borderRadius: 26,
    alignSelf: "center",
    marginTop: 90,
  },
  content: {
    paddingHorizontal: 36,
    paddingTop: 90,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 34,
    marginBottom: 50,
  },
  badge: {
    backgroundColor: "#F1F9E8",
    color: "#82C51B",
    fontSize: 22,
    fontWeight: "800",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 999,
    textTransform: "uppercase",
  },
  date: {
    fontSize: 24,
    color: "#777",
  },
  title: {
    fontSize: 48,
    lineHeight: 56,
    fontWeight: "900",
    color: "#111",
    marginBottom: 50,
  },
  intro: {
    fontSize: 30,
    lineHeight: 46,
    color: "#555",
    marginBottom: 80,
  },
  body: {
    fontSize: 26,
    lineHeight: 42,
    color: "#111",
  },
  line: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 70,
  },
  backButton: {
    borderWidth: 2,
    borderColor: "#111",
    borderRadius: 999,
    paddingVertical: 18,
    paddingHorizontal: 30,
    alignSelf: "flex-start",
  },
  backText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111",
  },

  footer: {
    paddingHorizontal: 36,
    paddingTop: 90,
    paddingBottom: 40,
    backgroundColor: "#fff",
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 70,
  },
  logoCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#82C51B",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  logoText: {
    fontSize: 11,
    fontWeight: "900",
  },
  footerBrand: {
    fontSize: 16,
    fontWeight: "700",
  },
  footerHeading: {
    fontSize: 22,
    color: "#777",
    letterSpacing: 3,
    marginTop: 30,
    marginBottom: 28,
  },
  footerLink: {
    fontSize: 28,
    color: "#777",
    marginBottom: 34,
  },
  footerInput: {
    borderWidth: 1,
    borderColor: "#111",
    borderRadius: 12,
    padding: 22,
    fontSize: 28,
    marginBottom: 32,
  },
  subscribeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  subscribeButton: {
    backgroundColor: "#82C51B",
    paddingVertical: 28,
    paddingHorizontal: 34,
    borderRadius: 12,
  },
  subscribeText: {
    color: "#fff",
    fontSize: 24,
  },
  privacyText: {
    flex: 1,
    fontSize: 22,
    lineHeight: 32,
    color: "#111",
  },
  privacyLink: {
    color: "#82C51B",
    textDecorationLine: "underline",
  },
  copy: {
    textAlign: "center",
    fontSize: 24,
    color: "#777",
    marginBottom: 50,
  },
  privacyBottom: {
    textAlign: "center",
    fontSize: 26,
    color: "#777",
    marginBottom: 50,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  social: {
    fontSize: 30,
    color: "#555",
    fontWeight: "800",
  },
});

export default BlogDetail;