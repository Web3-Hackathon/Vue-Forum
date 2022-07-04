<template>
  <div class="widget" style="border-radius:8px !important;">

    <v-sheet
      color="sheetbg"
      class="widget-container"
      :style="{
        padding: nopadding? '0 0' : prominent ? '30px 40px' : dense ? '10px 20px' : '20px 30px',
      }"
    >
      <slot></slot>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "WidgetContainer",
  props: {
    dense: Boolean,
    prominent: Boolean,
    nopadding: Boolean,
    title: String,
  },
};
</script>

<style lang="scss" scoped>

.widget-container {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

}
.forum-tag {
  clip-path: polygon(0 0, 30% 0, 40% 100%, 0% 100%);
  font-size: 14px;
  padding: 5px 10px;
  font-family: "Source Sans Pro";
  font-weight: 600;
  width:fit-content !important;
  min-width:100% !important;

  span {
    padding: 3px;
    color: #a5a5a5;
  }
}

.widget {
    min-width:200px;
    width: 100%;
}
</style>
