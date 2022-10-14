<template>
  <div class="bg-yellow-500">
    <p class="text-red-800">{{ post.title }}</p>
  </div>
</template>

<script>
import { onMounted } from "vue";
import usePosts from "../../api/usePosts";
export default {
  props: {
    slug: {
      required: true,
      type: String,
    },
  },

  setup(props) {
    const { post, fetchPost } = usePosts();
    onMounted(fetchPost(props.slug));
    return {
      post,
    };
  },
};
</script>
