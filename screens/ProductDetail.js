import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

const ProductDetail = ({ route }) => {
  const product = route.params;
  const [quantity, setQuantity] = useState(1);

  const price = parseFloat(product.price || 0);
  const total = price * quantity;

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.cartButton}>
        <Text style={styles.cartIcon}>🛒</Text>
        <Text style={styles.cartText}>Cart</Text>
        <View style={styles.cartCount}>
          <Text style={styles.cartCountText}>0</Text>
        </View>
      </View>

      {!!product.image && (
        <View style={styles.imageWrapper}>
          <Image source={{ uri: product.image }} style={styles.image} />
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>€ {product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.buyRow}>
          <View style={styles.quantityBox}>
            <TouchableOpacity onPress={decrease}>
              <Text style={styles.quantityButton}>−</Text>
            </TouchableOpacity>

            <TextInput
              style={styles.quantityInput}
              value={String(quantity)}
              editable={false}
            />

            <TouchableOpacity onPress={increase}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.total}>Totaal: € {total.toFixed(2)}</Text>
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
  cartButton: {
    marginTop: 30,
    backgroundColor: "#86bc25",
    width: 155,
    paddingVertical: 18,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  cartIcon: {
    fontSize: 26,
    color: "#fff",
  },
  cartText: {
    fontSize: 24,
    color: "#fff",
  },
  cartCount: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  cartCountText: {
    color: "#3498db",
    fontSize: 20,
    fontWeight: "800",
  },
  imageWrapper: {
    marginHorizontal: 28,
    marginTop: 120,
    borderRadius: 28,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
  },
  image: {
    width: "100%",
    height: 380,
  },
  content: {
    paddingHorizontal: 28,
    paddingTop: 70,
  },
  title: {
    fontSize: 52,
    fontWeight: "800",
    color: "#111",
    marginBottom: 20,
  },
  price: {
    fontSize: 44,
    fontWeight: "800",
    color: "#82C51B",
    marginBottom: 55,
  },
  description: {
    fontSize: 28,
    color: "#6f777d",
    lineHeight: 44,
    marginBottom: 70,
  },
  buyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 22,
    marginBottom: 26,
  },
  quantityBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    height: 58,
  },
  quantityButton: {
    fontSize: 28,
    paddingHorizontal: 14,
    color: "#111",
  },
  quantityInput: {
    width: 52,
    fontSize: 24,
    textAlign: "center",
    color: "#111",
  },
  addButton: {
    backgroundColor: "#86bc25",
    paddingHorizontal: 30,
    height: 58,
    justifyContent: "center",
     borderRadius: 12,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 22,
  },
  total: {
    fontSize: 22,
    color: "#82C51B",
    fontWeight: "800",
    marginTop: 10,
  },
  footer: {
    marginTop: 120,
    paddingHorizontal: 36,
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

export default ProductDetail;