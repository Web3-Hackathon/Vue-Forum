<template>
<WidgetContainer nopadding title="Latest Activity">
    <div class="activity-select">
      <h2>Latest Activity</h2>
    </div>
    <div class="mini-post-container d-flex flex-column align-center">
        <slot></slot>
    </div>
</WidgetContainer>
</template>

<script>
import WidgetContainer from "../Panels/WidgetContainer.vue";
export default {
    name: "LatestActivity",
    components: {
        WidgetContainer
    },
    props: {
        activeTab: Number,
    },
};
</script>

<style lang="scss" scoped>
.mini-post-container {
    margin-top: 30px;
    padding: 5px 10px;
}

.activity-select {
    width: 100%;
    flex-direction: row;
  
    height: 30px;
    background: var(--v-sheetbg-base);
    margin-top: 1px;
    border-radius: 8px;
    
    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 20px;
        padding-bottom: 10px;
    }
}

.mini-post {
    display: flex;
    flex-direction: row;
}
</style>
