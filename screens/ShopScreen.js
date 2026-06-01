import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import ProductCard from "../components/ProductCard";

const productCategoryNames = {
  "6a18c8e3a7f7cb2ed75e7bbd": "Cadeaus",
  "6a18c8b66c0dc2b32f0d42c8": "Kleding",
  "6a18c8cd88301fbc4270314c": "Schoolmateriaal",
  "6a18c8c2c59626423713aacd": "Accessoires",
  "6a18c8d97ec60f5606ca2f8c": "Sport",
};

const ShopScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/6a163437d2a2662346873eb4/products", {
      headers: {
        Authorization:
          "Bearer 4acab2b39795a67741b5d7979a67c65dd78904819d19151558cc7877f882c0a6",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const fetchedProducts = (data.items || []).map((item) => {
          const product = item.product || {};
          const fieldData = product.fieldData || {};
          const skuData = item.skus?.[0]?.fieldData || {};

          const firstCategoryId = Array.isArray(fieldData.category)
            ? fieldData.category[0]
            : fieldData.category;

          return {
            id: product.id || item.id,
            title: fieldData.name || "Product",
            description: fieldData.description || "",
            image: fieldData["main-image"]?.url || skuData["main-image"]?.url || "",
            price: ((skuData.price?.value || 0) / 100).toFixed(2),
            category:
              productCategoryNames[firstCategoryId?.toLowerCase()] ||
              firstCategoryId ||
              "All",
          };
        });

        setProducts(fetchedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "All" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return parseFloat(a.price) - parseFloat(b.price);
    if (sortOption === "price-desc") return parseFloat(b.price) - parseFloat(a.price);
    if (sortOption === "name-asc") return a.title.localeCompare(b.title);
    if (sortOption === "name-desc") return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Webshop</Text>

      <TextInput
        placeholder="Zoek een product..."
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor="#777"
      />

      <Picker
        selectedValue={selectedCategory}
        onValueChange={setSelectedCategory}
        style={styles.picker}
      >
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Cadeaus" value="Cadeaus" />
        <Picker.Item label="Sport" value="Sport" />
        <Picker.Item label="Schoolmateriaal" value="Schoolmateriaal" />
        <Picker.Item label="Accessoires" value="Accessoires" />
        <Picker.Item label="Kleding" value="Kleding" />
      </Picker>

      <Picker
        selectedValue={sortOption}
        onValueChange={setSortOption}
        style={styles.picker}
      >
        <Picker.Item label="Prijs: laag naar hoog" value="price-asc" />
        <Picker.Item label="Prijs: hoog naar laag" value="price-desc" />
        <Picker.Item label="Naam: A/Z" value="name-asc" />
        <Picker.Item label="Naam: Z/A" value="name-desc" />
      </Picker>

      <ScrollView contentContainerStyle={styles.list}>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            category={product.category}
            price={product.price}
            onPress={() => navigation.navigate("ProductDetail", product)}
          />
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f4f4" },
  heading: {
    fontSize: 42,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 64,
    marginBottom: 24,
    color: "#111",
  },
  input: {
    marginHorizontal: 24,
    marginBottom: 14,
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 18,
    color: "#111",
  },
  picker: {
    marginHorizontal: 24,
    marginBottom: 10,
    backgroundColor: "#fff",
    color: "#111",
  },
  list: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
});

export default ShopScreen;