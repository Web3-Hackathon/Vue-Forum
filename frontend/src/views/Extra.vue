<template>
<div>
    <v-container fluid>
        <BreadCrumb class="mb-5" />
    </v-container>
    <v-container fluid>
        <v-row>
            <v-col cols="6" lg="3">
                <Card title="Paid Stickeies" subTitle="View our selection, that you can show off." />
            </v-col>
            <v-col cols="6" lg="3">
                <Card title="Awards" subTitle="View our selection, that you can show off." />
            </v-col>
            <v-col cols="6" lg="3">
                <Card title="Backgrounds" subTitle="Purchase a custom post/pm background." />
            </v-col>
            <v-col cols="6" lg="3">
                <Card title="Profile Video" subTitle="Display your favorite track on your profile." />
            </v-col>
            <v-col cols="6" lg="3">
                <Card title="Paid Stickeies" subTitle="View our selection, that you can show off." />
            </v-col>
            <v-col cols="6" lg="3">
                <Card title="Awards" subTitle="View our selection, that you can show off." />
            </v-col>
            <v-col cols="6" lg="3">
                <Card title="Backgrounds" subTitle="Purchase a custom post/pm background." />
            </v-col>
            <v-col cols="6" lg="3">
                <Card title="Profile Video" subTitle="Display your favorite track on your profile." />
            </v-col>
            <v-col cols="6" lg="3">
                <Card title="Paid Stickeies" subTitle="View our selection, that you can show off." />
            </v-col>
            <v-col cols="6" lg="3">
                <Card title="Awards" subTitle="View our selection, that you can show off." />
            </v-col>
            <v-col cols="6" lg="3">
                <Card title="Backgrounds" subTitle="Purchase a custom post/pm background." />
            </v-col>
            <v-col cols="6" lg="3">
                <Card title="Profile Video" subTitle="Display your favorite track on your profile." />
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import BreadCrumb from "../components/Navigation/BreadCrumb.vue";
import Card from "../components/Extra/Card.vue";

export default {
    name: "Extra",
    components: {
        BreadCrumb,
        Card,
    },
}
</script>

<style lang="scss" scoped>
</style>
