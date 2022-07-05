<template>
<sheet-container bordered rounded rounded-sm dense class="d-flex flex-column postsview justify-start align-start" :style="{
      padding: dense ? '0 !important' : '10px 15px',
    }">
    <span v-if="title" class="text-h7 headingColorText" :style="{
        padding: dense ? '10px 15px 0px 15px !important' : '0',
      }">{{ title }}</span>

    <div class="w-100">
        <slot></slot>
    </div>
</sheet-container>
</template>

<script>
import SheetContainer from "./SheetContainer.vue";

export default {
    components: {
        SheetContainer
    },
    name: "ProfileWidgetPanel",
    props: {
        title: String,
        dense: Boolean,
    },
};
</script>

<style lang="scss">
.postsview {}
</style>
