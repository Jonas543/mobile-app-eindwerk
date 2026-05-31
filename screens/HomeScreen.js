import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Switch,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";

import NewsCard from "../components/NewsCard";
import CampusCard from "../components/CampusCard";
import ProductCard from "../components/ProductCard";

const campusFilters = [
  "All",
  "Gezondheid & Wetenschap",
  "Integraal & Creatief",
  "Buiten-gewoon leren",
  "Werken & Leren",
  "Kennis & Onderzoek",
  "Mens & Welzijn",
  "IT & Ondernemen",
  "Verpleegkunde",
];

const newsFilters = [
    "All", 
    "Campusnieuws", 
    "Evenementen", 
    "Studieaanbod"
];

const productFilters = [
  "All",
  "Cadeaus",
  "Sport",
  "Schoolmateriaal",
  "Accessoires",
  "Kleding",
];

const dummyCampuses = [
  {
    id: "1",
    name: "BA Basisverpleegkunde",
    focus: "Verpleegkunde",
    color: "#E84D9B",
    description:
      "Campus BA BASISVERPLEEGKUNDE bereidt leerlingen voor op een carrière binnen de gezondheidszorg.",
  },
  {
    id: "2",
    name: "BA Zandpoort",
    focus: "IT & Ondernemen",
    color: "#E93223",
    description:
      "Campus BA ZANDPOORT combineert technologie, economie en ondernemerschap in moderne opleidingen.",
  },
  {
    id: "3",
    name: "BA Stassart",
    focus: "Mens & Welzijn",
    color: "#F5A400",
    description:
      "Campus BA STASSART richt zich op opleidingen rond welzijn, zorg en begeleiding.",
  },
];

const dummyNews = [
  {
    id: "n1",
    title: "Nieuwe STEM-labo’s geopend",
    category: "Campusnieuws",
    image: "https://images.unsplash.com/photo-1581093458791-9d42ccfda3f4",
    intro:
      "Campus Botaniek heeft haar gloednieuwe STEM-labo’s officieel geopend.",
  },
  {
    id: "n2",
    title: "Infodag op onze campussen",
    category: "Evenementen",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    intro:
      "Tijdens onze infodag zetten alle campussen hun deuren open voor toekomstige leerlingen.",
  },
  {
    id: "n3",
    title: "Ontdek onze studiezoeker",
    category: "Studieaanbod",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    intro:
      "Met de nieuwe digitale studiezoeker vind je sneller de richting die bij jou past.",
  },
];

const dummyProducts = [
  {
    id: "p1",
    title: "BA Lippenbalsem",
    category: "Cadeaus",
    price: "4.00",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    description: "Verzorgende lippenbalsem met subtiele BA branding.",
  },
  {
    id: "p2",
    title: "BA Thermofles",
    category: "Accessoires",
    price: "29.00",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    description: "Duurzame thermofles die dranken warm of koud houdt.",
  },
  {
    id: "p3",
    title: "BA Sweater met kap",
    category: "Kleding",
    price: "49.00",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    description: "Moderne hoodie met zachte binnenvoering en BA branding.",
  },
];

const HomeScreen = ({ navigation }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [campuses, setCampuses] = useState(dummyCampuses);
  const [news, setNews] = useState(dummyNews);
  const [products, setProducts] = useState(dummyProducts);

  const [selectedCampusFocus, setSelectedCampusFocus] = useState("All");
  const [mainTab, setMainTab] = useState("All");
  const [selectedNewsCategory, setSelectedNewsCategory] = useState("All");
  const [selectedProductCategory, setSelectedProductCategory] =
    useState("All");

useEffect(() => {
  fetch(
    "https://api.webflow.com/v2/collections/6a188ee360a7e47ef5184883/items",
    {
      headers: {
        Authorization:
          "Bearer 4acab2b39795a67741b5d7979a67c65dd78904819d19151558cc7877f882c0a6",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const fetchedCampuses = (data.items || []).map((item) => {
        const fieldData = item.fieldData || {};

        return {
          id: item.id,
          name: fieldData.name || "Campus",
          focus: fieldData.focus || "All",
          image: fieldData.afbeelding?.url || "",
          address: fieldData.adres || "",
          intro: fieldData.intro || "",
          description: fieldData.beschrijving || "",
          color: fieldData.kleurcode || "#82C51B",
          email: fieldData.mailaddress || "",
          phone: fieldData.telefoonnummer || "",
          mapImage: fieldData.map?.url || "",
        };
      });

      setCampuses(fetchedCampuses);
    })
    .catch((error) =>
      console.error("Error fetching campuses:", error)
    );
}, []);

  const filteredCampuses = useMemo(() => {
    if (selectedCampusFocus === "All") return campuses;
    return campuses.filter((campus) => campus.focus === selectedCampusFocus);
  }, [campuses, selectedCampusFocus]);

  const filteredNews = useMemo(() => {
    if (selectedNewsCategory === "All") return news;
    return news.filter((item) => item.category === selectedNewsCategory);
  }, [news, selectedNewsCategory]);

  const filteredProducts = useMemo(() => {
    if (selectedProductCategory === "All") return products;
    return products.filter((item) => item.category === selectedProductCategory);
  }, [products, selectedProductCategory]);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.navbar}>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaText}>Inschrijven</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Text style={styles.hamburger}>{menuOpen ? "×" : "☰"}</Text>
        </TouchableOpacity>
      </View>

      {menuOpen && (
        <View style={styles.menu}>
          <Text style={styles.menuItem}>Home</Text>
          <Text style={styles.menuItem}>Studiezoeker</Text>
          <Text style={styles.menuItem}>Campussen</Text>
          <Text style={styles.menuItem}>Nieuws</Text>
          <Text style={styles.menuItem}>Webshop</Text>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.hero}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
            }}
            style={styles.heroImage}
          />
          <View style={styles.overlay} />

          <View style={styles.heroContent}>
            <Text style={styles.kicker}>DE DENKERS VAN MORGEN INSPIREREN</Text>
            <Text style={styles.heroTitle}>Jouw toekomst begint hier</Text>

            <TouchableOpacity style={styles.fullGreenButton}>
              <Text style={styles.fullGreenText}>Ontdek je richting</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.outlineButton}>
              <Text style={styles.outlineText}>Bekijk campussen</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.smallTitle}>ONTDEK ONZE CAMPUSSEN</Text>
          <Text style={styles.bigTitle}>Vind de campus die bij jou past</Text>

          <FilterPicker
            label="Filter op focus"
            options={campusFilters}
            selected={selectedCampusFocus}
            onSelect={setSelectedCampusFocus}
          />

          {filteredCampuses.map((campus) => (
            <CampusCard
              key={campus.id}
              name={campus.name}
              description={campus.description}
              color={campus.color}
              onPress={() => navigation.navigate("CampusDetail", campus)}
            />
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.bigTitleLeft}>Busleyden in cijfers</Text>
          <Text style={styles.subtitle}>Ontdek ons bereik</Text>

          <Stat number="8" label="Campussen" />
          <Stat number="100+" label="Studieopties" />
          <Stat number="3400+" label="Leerlingen" />
          <Stat number="7" label="Gespecialiseerde BA-campussen" />
          <Stat number="1" label="Grote BA-community" />
          <Stat number="100%" label="Talentgerichte begeleiding" />
        </View>

        <View style={styles.greySection}>
          <Text style={styles.bigTitle}>Laatste updates & BA merch</Text>
          <Text style={styles.centerText}>
            Blijf op de hoogte van het laatste nieuws, evenementen en exclusieve
            Busleyden producten.
          </Text>

          <MainTabs
            tabs={["All", "Nieuws", "Producten"]}
            selected={mainTab}
            onSelect={setMainTab}
          />

          {(mainTab === "All" || mainTab === "Nieuws") && (
            <>
              {mainTab === "Nieuws" && (
                <FilterPicker
                  label="Filter nieuws"
                  options={newsFilters}
                  selected={selectedNewsCategory}
                  onSelect={setSelectedNewsCategory}
                />
              )}

              {filteredNews.map((item) => (
                <NewsCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  intro={item.intro}
                  category={item.category}
                  onPress={() => navigation.navigate("BlogDetail", item)}
                />
              ))}
            </>
          )}

          {(mainTab === "All" || mainTab === "Producten") && (
            <>
              {mainTab === "Producten" && (
                <FilterPicker
                  label="Filter producten"
                  options={productFilters}
                  selected={selectedProductCategory}
                  onSelect={setSelectedProductCategory}
                />
              )}

              {filteredProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  price={item.price}
                  onPress={() => navigation.navigate("ProductDetail", item)}
                />
              ))}
            </>
          )}
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerHeading}>Explore</Text>
          <Text style={styles.footerLink}>Home</Text>
          <Text style={styles.footerLink}>Studies</Text>
          <Text style={styles.footerLink}>News</Text>
          <Text style={styles.footerLink}>Shop</Text>
          <Text style={styles.footerLink}>Contact</Text>

          <Text style={styles.footerHeading}>Join our newsletter</Text>
          <TextInput style={styles.footerInput} placeholder="Email" />

          <TouchableOpacity style={styles.subscribeButton}>
            <Text style={styles.subscribeText}>Subscribe</Text>
          </TouchableOpacity>

          <Text style={styles.copy}>© 2025 Busleyden Atheneum</Text>

          <View style={styles.switchRow}>
            <Text>Donkere modus</Text>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const FilterPicker = ({ label, selected, onSelect, options }) => (
  <View style={styles.pickerWrapper}>
    <Text style={styles.pickerLabel}>{label}</Text>

    <View style={styles.pickerBox}>
      <Picker
        selectedValue={selected}
        onValueChange={onSelect}
        style={styles.picker}
        dropdownIconColor="#111"
      >
        {options.map((option) => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
    </View>
  </View>
);

const MainTabs = ({ tabs, selected, onSelect }) => (
  <View style={styles.mainTabs}>
    {tabs.map((tab) => (
      <TouchableOpacity
        key={tab}
        style={[styles.mainTab, selected === tab && styles.mainTabActive]}
        onPress={() => onSelect(tab)}
      >
        <Text
          style={[
            styles.mainTabText,
            selected === tab && styles.mainTabTextActive,
          ]}
        >
          {tab}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

const Stat = ({ number, label }) => (
  <View style={styles.statBlock}>
    <Text style={styles.statNumber}>{number}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scroll: { paddingBottom: 40 },

  navbar: {
    height: 96,
    paddingHorizontal: 28,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  ctaButton: {
    backgroundColor: "#82C51B",
    paddingHorizontal: 38,
    paddingVertical: 18,
    borderRadius: 999,
  },
  ctaText: { color: "#fff", fontSize: 20, fontWeight: "700" },
  hamburger: { fontSize: 38, color: "#111" },

  menu: {
    backgroundColor: "#fff",
    paddingHorizontal: 36,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuItem: { fontSize: 28, paddingVertical: 18, color: "#111" },

  hero: { height: 720, position: "relative" },
  heroImage: { width: "100%", height: "100%" },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.52)",
  },
  heroContent: {
    position: "absolute",
    left: 36,
    right: 36,
    bottom: 44,
  },
  kicker: { color: "#fff", fontSize: 20, marginBottom: 42 },
  heroTitle: {
    color: "#fff",
    fontSize: 78,
    lineHeight: 94,
    fontWeight: "300",
    marginBottom: 60,
  },

  section: {
    paddingHorizontal: 36,
    paddingVertical: 70,
    backgroundColor: "#fff",
  },
  greySection: {
    paddingHorizontal: 36,
    paddingVertical: 70,
    backgroundColor: "#f4f4f4",
  },
  smallTitle: {
    textAlign: "center",
    fontSize: 18,
    color: "#777",
    letterSpacing: 1,
    marginBottom: 40,
  },
  bigTitle: {
    fontSize: 58,
    lineHeight: 68,
    fontWeight: "300",
    color: "#111",
    textAlign: "center",
    marginBottom: 60,
  },
  bigTitleLeft: {
    fontSize: 58,
    lineHeight: 68,
    fontWeight: "300",
    color: "#111",
    marginBottom: 26,
  },
  subtitle: { fontSize: 28, color: "#777", marginBottom: 60 },

  fullGreenButton: {
    backgroundColor: "#82C51B",
    borderRadius: 999,
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 22,
  },
  fullGreenText: { color: "#fff", fontSize: 26, fontWeight: "700" },
  outlineButton: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 999,
    paddingVertical: 18,
    alignItems: "center",
  },
  outlineText: { color: "#fff", fontSize: 24, fontWeight: "700" },

  pickerWrapper: { marginBottom: 34 },
  pickerLabel: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
    marginBottom: 10,
  },
  pickerBox: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
  },
  picker: { color: "#111", height: 56 },

  mainTabs: {
    backgroundColor: "#d9d9d9",
    marginBottom: 40,
  },
  mainTab: { paddingVertical: 22, paddingHorizontal: 34 },
  mainTabActive: { backgroundColor: "#82C51B" },
  mainTabText: { fontSize: 24, color: "#111" },
  mainTabTextActive: { color: "#fff", fontWeight: "700" },

  statBlock: { marginTop: 50 },
  statNumber: { fontSize: 42, color: "#111", marginBottom: 16 },
  statLabel: { fontSize: 28, color: "#777", letterSpacing: 2 },

  centerText: {
    fontSize: 28,
    color: "#777",
    lineHeight: 44,
    textAlign: "center",
    marginBottom: 54,
  },

  footer: { padding: 36, backgroundColor: "#fff" },
  footerHeading: {
    fontSize: 22,
    color: "#777",
    letterSpacing: 3,
    marginTop: 30,
    marginBottom: 28,
  },
  footerLink: { fontSize: 28, color: "#777", marginBottom: 34 },
  footerInput: {
    borderWidth: 1,
    borderColor: "#111",
    borderRadius: 12,
    padding: 22,
    fontSize: 28,
    marginBottom: 32,
  },
  subscribeButton: {
    backgroundColor: "#82C51B",
    padding: 28,
    borderRadius: 12,
    width: 180,
    alignItems: "center",
  },
  subscribeText: { color: "#fff", fontSize: 24 },
  copy: {
    textAlign: "center",
    fontSize: 24,
    color: "#777",
    marginTop: 50,
  },
  switchRow: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default HomeScreen;