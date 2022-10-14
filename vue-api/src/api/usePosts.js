import { ref } from "vue";
import axios from "axios";

export default function usePosts() {
  const posts = ref([]);
  const post = ref([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("/api/posts");
      posts.value = response.data.data;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPost = async (slug) => {
    try {
      const response = await axios.post(`/api/posts/${slug}`);
      post.value = response.data.data;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    posts,
    post,
    fetchPosts,
    fetchPost,
  };
}
