import { useRouter } from "expo-router";
import React, { useState } from "react";

import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Checkbox, Provider as PaperProvider } from "react-native-paper";

export default function Login() {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();
  return (
    <PaperProvider>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.logo}>IMDb</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Sign in</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#888"
            secureTextEntry
          />
          <View style={styles.rememberRow}>
            <View style={styles.rememberMeContainer}>
              <Checkbox
                status={rememberMe ? "checked" : "unchecked"}
                onPress={() => setRememberMe(!rememberMe)}
                color="#F5C418"
              />
              <Text style={styles.rememberMeText}>Remember Me</Text>
            </View>
            <TouchableOpacity >
              <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => router.push("/(tabs)/home")}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.dividerRow}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>New to IMDb?</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity
            style={styles.createBtn}
           
          >
            <Text style={styles.createText}>Create Account</Text>
          </TouchableOpacity>

          <View style={styles.footerLinks}>
            <Text style={styles.footerText}>Conditions of Use</Text>
            <Text style={styles.footerText}>Privacy Notice</Text>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: "#1877F2",
    paddingTop: Platform.OS === "ios" ? 60 : 40,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  card: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    alignSelf: "center",
    marginBottom: 30,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 15,
    fontSize: 14,
    color: "#000",
  },
  rememberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 18,
    height: 18,
  },
  rememberMeText: {
    marginLeft: 6,
    fontSize: 13,
    color: "#000",
  },
  forgotPassword: {
    fontSize: 13,
    color: "#333",
  },
  loginBtn: {
    backgroundColor: "#1877F2",
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 20,
  },
  loginText: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 15,
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#1877F2",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 13,
    color: "#000",
  },
  createBtn: {
    backgroundColor: "#000",
    borderRadius: 6,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 20,
  },
  createText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,
  },
  footerLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 6,
  },
  footerText: {
    fontSize: 12,
    color: "#777",
  },
});
