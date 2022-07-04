<template>
<profile-widget-panel dense style="border-style: none; background: #181818 !important">
    <div class="d-flex flex-column">
        <div class="entry">
            <v-row>
                <v-col cols="12" lg="6" align="left">
                    <span>Thread /Author </span>
                </v-col>
                <v-col cols="12" lg="2" align="left">
                    <span>Category </span>
                </v-col>
                <v-col cols="12" lg="1" align="center">
                    <span>Replies </span>
                </v-col>
                <v-col cols="12" lg="1" align="center">
                    <span>Views </span>
                </v-col>
                <v-col cols="12" lg="2" align="left">
                    <span>Last Post [asc] </span>
                </v-col>
            </v-row>
        </div>

    </div>
    </div>
</profile-widget-panel>
</template>

<script>
import ProfileWidgetPanel from "@/components/Panels/ProfileWidgetPanel.vue";

export default {
    name: "NewPostHeader",
    components: {
        ProfileWidgetPanel
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
    padding: 13px;

    span {
        font-size: 13px;
    }    
}
</style>
