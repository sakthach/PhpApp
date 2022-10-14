import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/pages/Home.vue";
import Post from "../components/pages/Post.vue";
import Login from "../components/pages/Login.vue";
import Posts from "../components/pages/Admin/Posts.vue";
import Articles from "../components/pages/Articles.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/posts/:slug", name: "post", component: Post, props: true },
  { path: "/login", name: "login", component: Login },
  { path: "/admin/posts", name: "posts", component: Posts },
  { path: "/articles", name: "articles", component: Articles },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
