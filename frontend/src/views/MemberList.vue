<template>
<div>
    <v-container fluid>
        <BreadCrumb class="mb-5" />
    </v-container>

    <v-container fluid>
        <v-row dense>
            <v-col cols="12" lg="4" align="center">
                <div class="d-flex flex-column">
                    <Member username="Ake" avatar="http://localhost:8080/favicon.ico" :posts="40410" :reputation="40410" />
                </div>
            </v-col>
            <v-col cols="12" lg="4" align="center">
                <div class="d-flex flex-column">
                    <Member username="S" avatar="http://localhost:8080/favicon.ico" :posts="40409" :reputation="40410" />
                </div>
            </v-col>
            <v-col cols="12" lg="4" align="center">
                <div class="d-flex flex-column">
                    <Member username="Doug" avatar="http://localhost:8080/favicon.ico" :posts="40408" :reputation="40410" />
                </div>
            </v-col>
            <v-col cols="12" lg="4" align="center">
                <div class="d-flex flex-column">
                    <Member username="cry" avatar="http://localhost:8080/favicon.ico" :posts="40407" :reputation="40410" />
                </div>
            </v-col>
            <v-col cols="12" lg="4" align="center">
                <div class="d-flex flex-column">
                    <Member username="antidote" avatar="http://localhost:8080/favicon.ico" :posts="40406" :reputation="40410" />
                </div>
            </v-col>
            <v-col cols="12" lg="4" align="center">
                <div class="d-flex flex-column">
                    <Member username="Gaming" avatar="http://localhost:8080/favicon.ico" :posts="40405" :reputation="40410" />
                </div>
            </v-col>
            <v-col cols="12" lg="4" align="center">
                <div class="d-flex flex-column">
                    <Member username="ja" avatar="http://localhost:8080/favicon.ico" :posts="40404" :reputation="40410" />
                </div>
            </v-col>
            <v-col cols="12" lg="4" align="center">
                <div class="d-flex flex-column">
                    <Member username="Darktaken2" avatar="http://localhost:8080/favicon.ico" :posts="40403" :reputation="40410" />
                </div>
            </v-col>
            <v-col cols="12" lg="4" align="center">
                <div class="d-flex flex-column">
                    <Member username="Kris" avatar="http://localhost:8080/favicon.ico" :posts="40402" :reputation="40410" />
                </div>
            </v-col>
        </v-row>

    </v-container>

</div>
</template>

<script>
import BreadCrumb from "../components/Navigation/BreadCrumb.vue";
import Member from "../components/Widgets/Member.vue";

export default {
    name: "MemberList",
    components: {
        BreadCrumb,
        Member
    },
}
</script>

<style lang="scss" scoped>
</style>
