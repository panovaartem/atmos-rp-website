<template>
  <div class="forum-container">
    <iframe
      src="http://localhost/atmos-rp-forum/public/"
      width="100%"
      frameborder="0"
      allowfullscreen
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: "ForumComponent",
};
</script>

<style scoped>
.forum-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
iframe {
  width: 100%;
  height: calc(100vh - 100px - 85px);
}
</style>
