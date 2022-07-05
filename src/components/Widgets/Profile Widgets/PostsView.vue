<template>
  <profile-widget-panel :title="title" dense>
    <div class="d-flex flex-column">
      <div class="entry">
        <div>
          <span class=""><span class="trusted">TRUSTED </span>Cool Domains</span>
        </div>

        <div>
            <span>General Seller Market</span>
        </div>
      </div>

      <div class="entry">
        <div>
          <span class=""><span class="trusted">TRUSTED </span>Bustabit Simple Strategy | Script</span>
        </div>

        <div>
            <span>General Seller Market</span>
        </div>
      </div>
      <div class="entry">
        <div>
          <span class=""><span class="trusted">TRUSTED </span>Cool Domains</span>
        </div>

        <div>
            <span>General Seller Market</span>
        </div>
      </div>
      <div class="entry">
        <div>
          <span class=""><span class="trusted">TRUSTED </span>Cool Domains</span>
        </div>

        <div>
            <span>General Seller Market</span>
        </div>
      </div>
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
  },
};
</script>

<style lang="scss" scoped>
.entry {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s all;
  padding: 5px;
  padding-left: 13px;

  &:hover {
    background: #1C1C1C;
  }

  span {
    font-size: 13px;
    .trusted {
      color: #33ff00;
    }
  }
}
</style>