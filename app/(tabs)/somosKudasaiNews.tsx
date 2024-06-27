import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
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

export default function SomosKudasaiNews() {
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
        <View style={styles.postContainer}>
          <View style={styles.postContent}>
            <Image
              source={{
                uri: post.yoast_head_json.og_image[0].url,
              }}
              style={styles.postImage}
            />
            <View style={styles.postText}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
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
    marginBottom: 10,
  },
  postContainer: {
    marginBottom: 20,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    elevation: 2,
    alignItems: "center",
  },
  postContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  postImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 16,
  },
  postText: {
    flex: 1,
    color: "black",
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
