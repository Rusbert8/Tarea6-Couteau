import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  Dimensions,
} from "react-native";

const API_URL = "https://somoskudasai.com/wp-json/wp/v2/posts?per_page=3";

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  yoast_head_json: {
    og_image: [
      {
        url: string;
      }
    ];
  };
}

export default function somosKudasaiNews() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Somos Kudasai</Text>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://somoskudasai.com/")}
      >
        <Image
          source={require("../../assets/images/somoskudasai.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      {posts.map((post) => (
        <View style={styles.postContainer} key={post.id}>
          <View style={styles.postContent}>
            <Image
              source={{
                uri: post.yoast_head_json.og_image[0].url,
              }}
              style={styles.postImage}
            />
            <View style={styles.postTextContainer}>
              <Text style={styles.postTitle}>{post.title.rendered}</Text>
              <Text style={styles.postSummary} numberOfLines={3}>
                {post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "")}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.readMoreButton}
            onPress={() => Linking.openURL(post.link)}
          >
            <Text style={styles.readMoreButtonText}>Ir a la noticia</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 46,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
    color: "#2f6682",
  },
  image: {
    width: 300,
    height: 100,
    borderRadius: 25,
    marginBottom: 20,
  },
  postContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    elevation: 2,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  postContent: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  postImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 16,
  },
  postTextContainer: {
    flex: 1,
    justifyContent: "center",
    width: "70%",
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  postSummary: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  readMoreButton: {
    backgroundColor: "#2f6682",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  readMoreButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
