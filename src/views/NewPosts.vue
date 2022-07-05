<template>
<div>
    <v-container fluid>
        <BreadCrumb class="mb-5" />
    </v-container>
    <v-container fluid>
        <v-row>
            <v-col cols="12" lg="12" align="center">
                <NewPostHeader />
            </v-col>
            <v-col cols="12" lg="12" align="center">
                <NewPost type="Selling" color="blue" title="@sync" name="eeee" category="OG TikTok Accounts" :replies="1" :views="1" lastPost="Last Post: warmth" time="7 seconds ago" />
            </v-col>
            <v-col cols="12" lg="12" align="center">
                <NewPost type="Selling" color="blue" title="[$3-$7]SOLO.TO.SHOP" name="eeee" category="Other OG Accounts" :replies="1646" :views="3871" lastPost="Last Post: holo" time="13 seconds ago" />
            </v-col>
            <v-col cols="12" lg="12" align="center">
                <NewPost type="Exchange" color="#975c19" title="CRYPTO->CASH APP | LWO FEES & FAST REPLIES" name="Exchanges" category="Member Services" :replies="5825" :views="9930" lastPost="Last Post: Makis" time="31 seconds ago" />
            </v-col>
            <v-col cols="12" lg="12" align="center">
                <NewPost color="blue" title="Hey everyone" name="Thatsthetruth" category="Introductions" :replies="2" :views="35" lastPost="Last Post: thundersm" time="27 seconds ago" />
            </v-col>
            

        </v-row>
    </v-container>
</div>
</template>

<script>
import BreadCrumb from "../components/Navigation/BreadCrumb.vue";
import NewPost from "../components/NewPosts/NewPost.vue";
import NewPostHeader from "../components/NewPosts/NewPostHeader.vue";

export default {
    name: "NewPosts",
    components: {
        BreadCrumb,
        NewPostHeader,
        NewPost,
    },
}
</script>

<style lang="scss" scoped>

</style>
