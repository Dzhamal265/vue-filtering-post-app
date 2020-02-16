<template>
  <Loader v-if="isLoad" />
  <section v-else class="post-list">
    <article class="post-item" v-for="post in postsList" :key="post.id">
      <header class="post-item-header">
        <p class="post-item-meta">
          <span class="post-item-date">01 Nov 2013</span> on
          <a class="post-item-category category-js" href="#">Vue.js</a>
        </p>
        <h2 class="post-item-title">{{ post.title }}</h2>
      </header>

      <main class="post-item-description">
        <p>
          {{ post.body}}
        </p>
      </main>

      <footer class="post-item-footer">
        <a class="post-item-more" href="#">Read Full Post</a>
      </footer>
    </article>
  </section>
</template>

<script>
import Loader from "@/components/Loader";

export default {
  name: "PostList",
  props: ["postsList", "isLoad"],

  components: {
    Loader
  },

  filters: {
    readMore(text, length, suffix) {
      return text.substring(0, length) + suffix;
    }
  }
};
</script>

<style>
.post-list {
  display: flex;
  justify-content: space-around;
  align-content: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
}

.post-item {
  max-width: 300px;
  padding: 1.25rem;
  margin: 20px 0;
  border: 1px solid #2c3e50;
  text-align: left;
  background-color: #fff;
}

.post-item-header {
  border-bottom: 2px solid #000;
}

.post-item-title {
  font-size: 2em;
  color: #222;
  margin-bottom: 0.2em;
  font-weight: bold;
}

.post-item-category {
  margin: 0 0.1em;
  padding: 0.3em 1em;
  color: #fff;
  background: #000;
  font-size: 80%;
  text-decoration: none;
}

.post-item-more {
  text-transform: uppercase;
  border: 1px solid #000;
  padding: 2px 8px;
  margin: 0;
  text-decoration: none;
  color: #2c3e50;
}
</style>
