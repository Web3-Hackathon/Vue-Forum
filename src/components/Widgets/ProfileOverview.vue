<template>
  <WidgetContainer nopadding title="Your Profile">
    <div class="mini-post-container d-flex flex-column align-center">
      <slot></slot>
    </div>
  </WidgetContainer>
</template>

<script>
import WidgetContainer from "../Panels/WidgetContainer.vue";
export default {
  name: "ProfileOverview",
  components: { WidgetContainer },
  props: {
    activeTab: Number,
  },
};
</script>

<style lang="scss" scoped>
.mini-post-container {
  padding: 5px 10px;
}
.activity-select {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1 1;
  height: 30px;
  background: var(--v-sheetbg-base);
  margin-top: 1px;

  div {
    cursor: pointer;
    width: 50%;
    height: 100%;
    justify-content: center;
    display: flex;
    transition: 0.3s all;
    i {
      color: #a5a5a5;
    }
    &:hover {
      background: #202020;
    }

    &.active {
      background: var(--v-sheetbglighter-base) !important;
      i {
        color: white !important;
      }
    }
  }
}
.mini-post {
  display: flex;
  flex-direction: row;
}
</style>