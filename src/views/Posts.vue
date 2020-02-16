<template>
  <div class="container">
    <MagicInput
      id="magicInput"
      autocomplete="off"
      placeholder="Let's filter!"
      v-model="filterString"
      >Magic filter</MagicInput
    >
    <PostList :isLoad="isLoad" :postsList="postsList(filterString)"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";

import MagicInput from "@/components/MagicInput";
import PostList from "@/components/PostList";

export default {
  name: "Posts",

  created() {
    this.getPostsList();
  },

  data() {
    return {
      filterString: "",
      isLoad: true
    };
  },

  components: {
    MagicInput,
    PostList
  },

  methods: {
    ...mapActions("post", ["getPostsListAction"]),

    async getPostsList() {
      try {
        await this.getPostsListAction();
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoad = false;
      }
    },
  },

  computed: {
    ...mapGetters("post", ["postsList"])
    

  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
