<template>
  <profile-widget-panel :title="title">
    <div class="content">
      <div v-if="empty" class="d-flex justify-center align-center w-100 text-center">
        <span class="text-dark">User hasn't written anything about them.</span>
      </div>
      <slot></slot>
    </div>
  </profile-widget-panel>
</template>

<script>
import ProfileWidgetPanel from "@/components/Panels/ProfileWidgetPanel.vue";
export default {
  name: "PostsView",
  components: { ProfileWidgetPanel },
  props: {
    title: String,
    empty: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 10 0px;
}
</style>