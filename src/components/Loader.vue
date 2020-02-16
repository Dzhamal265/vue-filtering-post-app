<template functional>
  <div class="loader-wrapper">
    <div class="loader"></div>
    <div class="loader-text">Hey, man! I can't be faster!</div>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style>
.loader-wrapper {
  text-align: center;
  margin-top: 10px;
}

.loader {
  position: relative;
  display: inline-block;
  width: 7rem;
  height: 7rem;
  text-indent: -9999rem;
  border-radius: 50%;
  border-top: 10px solid rgba(255, 255, 255, 0.2);
  border-right: 10px solid rgba(255, 255, 255, 0.2);
  border-bottom: 10px solid rgba(255, 255, 255, 0.2);
  border-left: 10px solid #2c3e50;
  animation: rotation 1s infinite linear;
}

.loader-text {
  margin-top: 10px;
  font-weight: 300;
  font-size: 1.25em;
  text-transform: uppercase;
  color: #2c3e50;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
