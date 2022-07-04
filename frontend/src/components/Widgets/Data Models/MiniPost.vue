<template>
  <div class="mini-post flex-wrap">
    <v-img
      :src="avatar"
      max-width="52px"
      max-height="52px"
    />

    <div class="mini-post-caption d-flex flex-column flex-grow-2">
      <span><span style="color: red">DEAL DISPUTE</span> {{post_title}}</span>
      <span><span style="">{{username}}</span>, {{when}} ago</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniPost",
  props: {
    avatar: String,
    post_title: String,
    username: String,
    when: String,
    reply_count: String,
  },
};
</script>

<style lang="scss">
.mini-post-caption {
  span:first-of-type {
    font-family: "Source Sans Pro";
    font-size: 16px;
    color: #d6d6d6;

    span {
      font-size: 16px;
      font-weight: bolder;
    }
  }

  span:last-of-type {
    font-family: "Source Sans Pro";
    font-size: 14px;
    color: #9b9b9b;

    span {
      text-shadow: 0px 2px 5px #746c6c;
      color: #8a5fff;
      background: url('http://localhost:8080/assets/sparkle.gif');
      -webkit-animation: colorchange 20s infinite alternate;
    }
  }
}

.mini-post {
  padding: 10px 5px;
  flex-direction: row;

  .v-image {
    display: flex;
    margin-right: 10px;
    justify-content: start;
    border-radius: 5px;
    flex-grow: 1;
  }
}
</style>
