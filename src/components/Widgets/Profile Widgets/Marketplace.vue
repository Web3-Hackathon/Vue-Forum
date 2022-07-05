<template>
<profile-widget-panel :title="title" dense>
    <div class="d-flex flex-column">
        <div class="entry">
            <div>
                <v-chip small class="mr-2" color="green">BUYING</v-chip>
                <span class="text-h9">LOOKING FOR SHIT</span>
            </div>

            <div>
                <span class="text-dark">0.03 SOL</span>
            </div>
        </div>
        <v-divider />
        <div class="entry">
            <div>
                <v-chip small class="mr-2" color="green">BUYING</v-chip>
                <span class="text-h9">LOOKING FOR SHIT</span>
            </div>

            <div>
                <span class="text-dark">0.03 SOL</span>
            </div>
        </div>
        <v-divider />
        <div class="entry">
            <div>
                <v-chip small class="mr-2" color="green">BUYING</v-chip>
                <span class="text-h9">LOOKING FOR SHIT</span>
            </div>

            <div>
                <span class="text-dark">0.03 SOL</span>
            </div>
        </div>
    </div>
</profile-widget-panel>
</template>

<script>
import ProfileWidgetPanel from "@/components/Panels/ProfileWidgetPanel.vue";
export default {
    name: "Marketplace",
    components: {
        ProfileWidgetPanel
    },
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
    padding: 13px;

    &:hover {
        background: #1C1C1C;
    }
}
</style>
