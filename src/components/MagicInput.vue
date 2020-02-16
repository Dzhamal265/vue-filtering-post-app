<template>
  <div class="magic-input">
    <label :for="labelFor">
      <slot></slot>
    </label>
    <input
      type="text"
      v-bind="$attrs"
      :value="value"
      @input="handleInput($event.target.value)"
      @blur="handleBlur($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "MagicInput",
  inheritAttrs: false,
  props: ["value"],

  computed: {
    labelFor() {
      return this.$attrs.id !== undefined ? this.$attrs.id : this.$attrs.name;
    }
  },

  methods: {
    handleBlur(value) {
      this.$emit("blur", value);
    },

    handleInput(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style scoped>
.magic-input {
  font-family: "Lato", sans-serif;
  font-size: 14px;
  font-weight: 900;
}

.magic-input input {
  border: none;
  border-radius: 4px;
  padding: 7px 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 5px 20px;
  letter-spacing: 0;
  width: 165px;
  caret-color: #555;
}

.magic-input input:focus {
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0 5px 20px;
}

.magic-input label {
  display: block;
  text-align: left;
  padding-left: 2px;
}
</style>
