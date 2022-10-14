<template>
  <section class="bg-blue-600 container mx-auto p-2">
    <p class="text-white">Home</p>
    <ul>
      <li v-for="post in posts" :key="post.uuid">
        <router-link :to="{ name: 'post', params: { slug: post.slug } }">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import usePosts from "../../api/usePosts";
import { onMounted } from "vue";
export default {
  setup() {
    const { posts, fetchPosts } = usePosts();
    onMounted(fetchPosts);

    return {
      posts,
    };
  },
};
</script>
