<template>
<SheetContainer style="border-radius:8px" dense >
    <v-breadcrumbs divider=">>" :items="breadCrumbs">
        <template v-slot:item="{ item }">
            <v-breadcrumbs-item :to="item.to" class="text-subtitle-2 crumb-item" :disabled="item.disabled" exact>
                {{ item.text }}
            </v-breadcrumbs-item>
        </template>
    </v-breadcrumbs>
</SheetContainer>
</template>

<script>
import SheetContainer from "@/components/Panels/SheetContainer.vue";
export default {
    name: "BreadCrumb",
    components: {
        SheetContainer
    },
    computed: {
        breadCrumbs() {
            if (typeof this.$route.meta.breadcrumb === "function") {
                return this.$route.meta.breadcrumb.call(this, this.$route);
            }
            return this.$route.meta.breadcrumb;
        },
    },
};
</script>

<style>
.v-breadcrumbs {
    padding: 10px 15px !important;
    margin-top: 20px !important;
    background-color:rgb(35, 35, 35);
    border-radius: 8px;
}

</style>
