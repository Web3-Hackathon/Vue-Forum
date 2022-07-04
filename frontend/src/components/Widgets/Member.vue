<template>
<profile-widget-panel dense>
    <div class="d-flex flex-column">
        <div class="entry">
            <div class="d-flex flex-row align-center link">
                <v-avatar class="avatar avatar-activator">
                    <v-img max-width="30px" max-height="30px" :src="avatar" />
                </v-avatar>

                <div class="d-flex flex-column justify-center align-start mx-4">
                    <span class="username">{{ username }}</span>
                </div>
            </div>

            <div style="text-align: right;">
                <span class="text-dark">Posts: {{ posts }}</span><br>
                <span class="text-dark">Reputation: {{ reputation }}</span>
            </div>
        </div>
    </div>
</profile-widget-panel>
</template>

<script>
import ProfileWidgetPanel from "@/components/Panels/ProfileWidgetPanel.vue";
export default {
    name: "Member",
    components: {
        ProfileWidgetPanel
    },
    props: {
        username: String,
        avatar: String,
        posts: Number,
        reputation: Number,
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

    &:hover {
        background: #1C1C1C;
    }
}
</style>
