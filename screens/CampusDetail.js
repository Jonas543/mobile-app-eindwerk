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

const fallbackImage =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f";

const fallbackMap =
  "https://images.unsplash.com/photo-1524661135-423995f22d0b";

const CampusDetail = ({ route }) => {
  const campus = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.hero}>
        <Image
          source={{ uri: campus.image || fallbackImage }}
          style={styles.heroImage}
        />
        <View style={styles.overlay} />

        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>{campus.name}</Text>
          <Text style={styles.heroFocus}>{campus.focus}</Text>
        </View>
      </View>

      <View style={styles.navTabs}>
        <Text style={styles.navTab}>Onze opleidingsvormen</Text>
        <Text style={styles.navTab}>Infodagen</Text>
        <Text style={styles.navTab}>Inschrijvingen</Text>
        <Text style={styles.navTab}>Contact</Text>
      </View>

      <View style={styles.introSection}>
        <Text style={styles.introText}>
          {campus.quote ||
            "Een praktijkgerichte opleiding waar zorg, begeleiding en ervaring centraal staan."}
        </Text>
      </View>

      <View style={styles.greySection}>
        <Text style={styles.title}>{campus.name}</Text>

        <Text style={styles.description}>
          {campus.description ||
            "Deze campus biedt een warme leeromgeving waar leerlingen hun talenten kunnen ontwikkelen."}
        </Text>

        <Text style={styles.contactTitle}>Contactgegevens</Text>

        <Text style={styles.contactText}>
          {campus.address || "Mechelsesteenweg 90, 2800 Mechelen"}
        </Text>
        <Text style={styles.contactText}>
          {campus.phone || "+32 15 20 69 47"}
        </Text>
        <Text style={styles.contactText}>
          {campus.email || "verpleegkunde@busleydenatheneum.be"}
        </Text>

        <Image
          source={{ uri: campus.mapImage || fallbackMap }}
          style={styles.mapImage}
        />
      </View>

      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Klaar om je in te schrijven?</Text>

        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Schrijf je nu in</Text>
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

        <Text style={styles.footerHeading}>Connect</Text>
        <Text style={styles.footerLink}>About</Text>
        <Text style={styles.footerLink}>Team</Text>
        <Text style={styles.footerLink}>Alumni</Text>
        <Text style={styles.footerLink}>Blog</Text>
        <Text style={styles.footerLink}>Press</Text>

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

  hero: {
    height: 690,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#111",
  },
  heroImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  heroContent: {
    position: "absolute",
    left: 24,
    right: 24,
    top: 260,
    alignItems: "center",
  },
  heroTitle: {
    color: "#fff",
    fontSize: 52,
    lineHeight: 62,
    fontWeight: "800",
    textAlign: "center",
  },
  heroFocus: {
    color: "#fff",
    fontSize: 30,
    letterSpacing: 1,
    marginTop: 32,
    textTransform: "uppercase",
    textAlign: "center",
  },

  navTabs: {
    paddingVertical: 48,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  navTab: {
    fontSize: 28,
    color: "#111",
    textAlign: "center",
    marginBottom: 44,
  },

  introSection: {
    paddingHorizontal: 36,
    paddingVertical: 120,
    backgroundColor: "#fff",
  },
  introText: {
    fontSize: 42,
    lineHeight: 66,
    color: "#111",
    textAlign: "center",
    fontWeight: "300",
  },

  greySection: {
    backgroundColor: "#f4f5f6",
    paddingHorizontal: 28,
    paddingVertical: 80,
  },
  title: {
    fontSize: 46,
    lineHeight: 56,
    fontWeight: "800",
    color: "#111",
    marginBottom: 60,
  },
  description: {
    fontSize: 30,
    lineHeight: 48,
    color: "#555",
    marginBottom: 70,
  },
  contactTitle: {
    fontSize: 38,
    fontWeight: "800",
    color: "#111",
    marginBottom: 34,
  },
  contactText: {
    fontSize: 27,
    lineHeight: 42,
    color: "#555",
    marginBottom: 20,
  },
  mapImage: {
    width: "100%",
    height: 520,
    borderRadius: 22,
    marginTop: 70,
  },

  ctaSection: {
    backgroundColor: "#82C51B",
    paddingHorizontal: 36,
    paddingVertical: 120,
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 58,
    lineHeight: 68,
    color: "#fff",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 60,
  },
  ctaButton: {
    backgroundColor: "#fff",
    borderRadius: 999,
    paddingVertical: 26,
    paddingHorizontal: 60,
  },
  ctaButtonText: {
    color: "#82C51B",
    fontSize: 28,
    fontWeight: "800",
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
  line: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 40,
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

export default CampusDetail;