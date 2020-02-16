import Vue from "vue";
import VueRouter from "vue-router";
import Post from "../views/Posts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/posts",
    name: "Post",
    component: Post
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
