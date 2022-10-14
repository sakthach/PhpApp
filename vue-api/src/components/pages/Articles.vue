<template>
  <div>Articles</div>
</template>

<script>
import useAuth from "../../api/usePosts";
import { onMounted } from "vue";
export default {
  setup() {
    const { posts, fetchPosts } = useAuth();

    onMounted(fetchPosts());
    return {
      posts,
    };
  },
};
</script>
