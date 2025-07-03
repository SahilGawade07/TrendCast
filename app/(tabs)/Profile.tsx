import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const { width } = Dimensions.get("window");

const profile = {
  name: "Kunal Mohite",
  username: "kunal_mohite",
  bio: "Building cool stuff 🚀 | React Native Dev",
  
};


export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
    
      <View style={styles.header}>
        <Image source={require('@/assets/images/icon.png')} style={styles.avatar} />
        <View style={styles.stats}>
          <View style={styles.stat}>
             <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.username}>{profile.username}</Text>
        <Text style={styles.bio}>{profile.bio}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editBtnText}>Edit Profile</Text>
      </TouchableOpacity>
      
<View style={styles.buttonGroup}>
  <TouchableOpacity style={styles.secondaryBtn}>
    <Text style={styles.secondaryBtnText}>News</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.secondaryBtn}>
    <Text style={styles.secondaryBtnText}>Recent</Text>
  </TouchableOpacity>
</View>
<ScrollView style={styles.section}>
  <Text style={styles.sectionTitle}>News</Text>
 <TouchableOpacity
  style={styles.seccontainer}
  onPress={() => console.log("News clicked: Apple AI")}
>
  <Image
    source={{ uri: "https://images.indianexpress.com/2024/06/Apple-WWDC-2024-AI.jpg" }}
    style={styles.image}
  />
  <View style={styles.textContainer}>
    <Text style={styles.category}>Tech</Text>
    <Text style={styles.headline} numberOfLines={1}>
      Apple unveils AI-powered iOS 18 with custom GPT integration
    </Text>
    <View style={styles.footer}>
      <Text style={styles.source}>Indian Express</Text>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.time}>2h ago</Text>
    </View>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.seccontainer}
  onPress={() => console.log("News clicked: Meta hiring")}
>
  <Image
    source={{ uri: "https://img.etimg.com/thumb/msid-110456893,width-1200,height-900,imgsize-81742,resizemode-75/meta-hiring-employees.jpg" }}
    style={styles.image}
  />
  <View style={styles.textContainer}>
    <Text style={styles.category}>Business</Text>
    <Text style={styles.headline} numberOfLines={1}>
      Meta adds 3,000+ employees to boost AI and Metaverse efforts
    </Text>
    <View style={styles.footer}>
      <Text style={styles.source}>ET Tech</Text>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.time}>4h ago</Text>
    </View>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.seccontainer}
  onPress={() => console.log("News clicked: OpenAI GPT-5")}
>
  <Image
    source={{ uri: "https://cdn.wionews.com/sites/default/files/2023/07/11/368700-ai.jpeg" }}
    style={styles.image}
  />
  <View style={styles.textContainer}>
    <Text style={styles.category}>AI</Text>
    <Text style={styles.headline} numberOfLines={1}>
      OpenAI releases GPT-5 sneak peek, aims for greater reasoning
    </Text>
    <View style={styles.footer}>
      <Text style={styles.source}>WION</Text>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.time}>5h ago</Text>
    </View>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.seccontainer}
  onPress={() => console.log("News clicked: Tesla new EV")}
>
  <Image
    source={{ uri: "https://tesla-cdn.thron.com/delivery/public/image/tesla/e6a7015a-4e56-4cfa-9fa4-993aad87ec32/bvlatuR/std/2880x1800/MS-Interior-Hero-Desktop" }}
    style={styles.image}
  />
  <View style={styles.textContainer}>
    <Text style={styles.category}>Automotive</Text>
    <Text style={styles.headline} numberOfLines={1}>
      Tesla announces new electric vehicle with extended range
    </Text>
    <View style={styles.footer}>
      <Text style={styles.source}>Tesla News</Text>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.time}>1h ago</Text>
    </View>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.seccontainer}
  onPress={() => console.log("News clicked: Climate Summit 2025")}
>
  <Image
    source={{ uri: "https://www.un.org/sites/un2.un.org/files/climate_change_summit_2025.jpg" }}
    style={styles.image}
  />
  <View style={styles.textContainer}>
    <Text style={styles.category}>Environment</Text>
    <Text style={styles.headline} numberOfLines={1}>
      Global leaders commit to new climate targets at 2025 Summit
    </Text>
    <View style={styles.footer}>
      <Text style={styles.source}>UN News</Text>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.time}>3h ago</Text>
    </View>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.seccontainer}
  onPress={() => console.log("News clicked: SpaceX Starship")}
>
  <Image
    source={{ uri: "https://www.spacex.com/static/images/starship/Starship-Launch-Hero-Desktop.jpg" }}
    style={styles.image}
  />
  <View style={styles.textContainer}>
    <Text style={styles.category}>Space</Text>
    <Text style={styles.headline} numberOfLines={1}>
      SpaceX Starship completes successful orbital test flight
    </Text>
    <View style={styles.footer}>
      <Text style={styles.source}>SpaceX</Text>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.time}>45m ago</Text>
    </View>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.seccontainer}
  onPress={() => console.log("News clicked: Google AI Tools")}
>
  <Image
    source={{ uri: "https://storage.googleapis.com/gweb-cloudblog-publish/images/Google_AI.max-1300x1300.jpg" }}
    style={styles.image}
  />
  <View style={styles.textContainer}>
    <Text style={styles.category}>Tech</Text>
    <Text style={styles.headline} numberOfLines={1}>
      Google announces new AI tools for developers at I/O conference
    </Text>
    <View style={styles.footer}>
      <Text style={styles.source}>Google Blog</Text>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.time}>2h ago</Text>
    </View>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.seccontainer}
  onPress={() => console.log("News clicked: Bitcoin Price Surge")}
>
  <Image
    source={{ uri: "https://cryptoslate.com/wp-content/uploads/2023/06/bitcoin-price-chart.png" }}
    style={styles.image}
  />
  <View style={styles.textContainer}>
    <Text style={styles.category}>Finance</Text>
    <Text style={styles.headline} numberOfLines={1}>
      Bitcoin price surges to new all-time highs amid crypto rally
    </Text>
    <View style={styles.footer}>
      <Text style={styles.source}>CryptoNews</Text>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.time}>30m ago</Text>
    </View>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.seccontainer}
  onPress={() => console.log("News clicked: Olympics 2024")}
>
  <Image
    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Olympics_flag.svg" }}
    style={styles.image}
  />
  <View style={styles.textContainer}>
    <Text style={styles.category}>Sports</Text>
    <Text style={styles.headline} numberOfLines={1}>
      Paris Olympics 2024 opening ceremony date announced
    </Text>
    <View style={styles.footer}>
      <Text style={styles.source}>Olympics</Text>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.time}>5h ago</Text>
    </View>
  </View>
</TouchableOpacity>

<TouchableOpacity
  style={styles.seccontainer}
  onPress={() => console.log("News clicked: Netflix Originals")}
>
  <Image
    source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" }}
    style={styles.image}
  />
  <View style={styles.textContainer}>
    <Text style={styles.category}>Entertainment</Text>
    <Text style={styles.headline} numberOfLines={1}>
      Netflix announces 20 new originals for 2025 lineup
    </Text>
    <View style={styles.footer}>
      <Text style={styles.source}>Netflix</Text>
      <Text style={styles.dot}>•</Text>
      <Text style={styles.time}>1d ago</Text>
    </View>
  </View>
</TouchableOpacity>

</ScrollView>
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 24,
  },
  stats: {
    flexDirection: "row",
    flex: 1,
  },
  stat: {
    alignItems: "flex-start",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  username: {
    color: "#888",
    fontSize: 14,
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
  },
  editBtn: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 6,
    alignItems: "center",
    marginBottom: 16,
  },
  editBtnText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  buttonGroup: {
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: 10,
  marginBottom: 16,
},

secondaryBtn: {
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 8,
  paddingVertical: 6,
  paddingHorizontal: 24,
  alignItems: "center",
},

secondaryBtnText: {
  fontWeight: "bold",
  fontSize: 15,
},
    section: {
        marginTop: 16,
        padding: 12,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
    },
    sectionTitle: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 8,
    },
    sectionText: {
        fontSize: 14,
        color: "#333",
        marginBottom: 4,
    },

   seccontainer: {
    flexDirection: "row",
    padding: 10,
    alignItems: "flex-start",
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  category: {
    color: "#6B7280",
    fontSize: 12,
    marginBottom: 2,
  },
  headline: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#111827",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
  },
  source: {
    fontSize: 12,
    color: "#4B5563",
    marginLeft: 4,
  },
  dot: {
    fontSize: 12,
    marginHorizontal: 6,
    color: "#9CA3AF",
  },
  time: {
    fontSize: 12,
    color: "#9CA3AF",
  },
});