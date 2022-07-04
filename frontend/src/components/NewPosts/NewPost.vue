<template>
<profile-widget-panel dense style="border-style: none;">
    <div class="d-flex flex-column">
        <div class="entry">
            <v-row>
                <v-col cols="12" lg="6" align="left">
                    <div class="d-flex flex-column justify-center align-start mx-3">
                        <span class="username">
                            <v-chip v-if="type" small class="mr-2" :color="color">{{ type }}</v-chip>
                            <span style="font-size: 15px;">{{ title }}</span>
                        </span>
                        <span class="text-dark px-1" style="font-size: 10px;">by
                            <span style="color: #b107d9; font-size: 12px;">{{ name }}</span>
                        </span>
                    </div>
                </v-col>
                <v-col cols="12" lg="2" align="left">
                    <div>
                        <span>{{ category }}</span>
                    </div>
                </v-col>
                <v-col cols="12" lg="1" align="center">
                    <span>{{ replies }}</span>
                </v-col>
                <v-col cols="12" lg="1" align="center">
                    <span>{{ views }}</span>
                </v-col>
                <v-col cols="12" lg="2" align="left">
                    <div class="d-flex flex-column justify-center align-start">
                        <span>
                            {{ lastPost }}
                        </span>
                        <span class="text-dark" style="font-size: 12px;">{{ time }}</span>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</profile-widget-panel>
</template>

<script>
import ProfileWidgetPanel from "@/components/Panels/ProfileWidgetPanel.vue";

export default {
    name: "NewPost",
    components: {
        ProfileWidgetPanel
    },
    props: {
        type: String,
        color: String,
        title: String,
        name: String,
        category: String,
        replies: Number,
        views: Number,
        lastPost: String,
        time: String,
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

    &:hover {
        background: #1C1C1C;
    }

    span {
        font-size: 13px;
    }
}
</style>
