<template>
<v-row>
    <v-container fluid>
        
    </v-container>
    <v-col cols="12" lg="9">
        <div>
            <ForumSelect :activeTab="forum_tab" @tab="forum_tab = $event" />

            <!-- <ForumBreadCrumb class="mb-5 detail" /> -->
            
            <ForumBreadCrumb v-if="forum_tab == 0" title ="Featured" class="mb-5 detail" />
            <ForumBreadCrumb  v-if="forum_tab == 1" title ="General" class="mb-5 detail" />
            <ForumBreadCrumb  v-if="forum_tab == 2" title ="Marketplace" class="mb-5 detail" />

            <h3 v-if="forum_tab == 0"> Featured Collections </h3>
            <h3 v-if="forum_tab == 1"> General Collections </h3>
            <h3 v-if="forum_tab == 2"> Marketplace Collections </h3>

            <ForumContainer forum_name="General" v-if="forum_tab == 0">
                <ForumSection  icon="fa-solid fa-flag" section_name="" :first_post="{name: 'Price',when: '0.123',}" :middle_post="{name: 'Supply',when: '10000',}" :last_post="{
                name: 'Date',
                when: 'Jun 19, 2022',
            }" />
            </ForumContainer>
            <ForumContainer forum_name="General" v-if="forum_tab == 0">
                <ForumSection  icon="fa-solid fa-flag" section_name="" :first_post="{name: 'Price',when: '0.123',}" :middle_post="{name: 'Supply',when: '10000',}" :last_post="{
                name: 'Date',
                when: 'Jun 19, 2022',
            }" />
            </ForumContainer>
            <ForumContainer forum_name="General" v-if="forum_tab == 0">
                <ForumSection  icon="fa-solid fa-flag" section_name="" :first_post="{name: 'Price',when: '0.123',}" :middle_post="{name: 'Supply',when: '10000',}" :last_post="{
                name: 'Date',
                when: 'Jun 19, 2022',
            }" />
            </ForumContainer>

            <ForumContainer forum_name="General" v-if="forum_tab == 1">
                <ForumSection  icon="fa-solid fa-flag" section_name="" :first_post="{name: 'Price',when: '0.123',}" :middle_post="{name: 'Supply',when: '10000',}" :last_post="{
                name: 'Date',
                when: 'Jun 19, 2022',
            }" />
            </ForumContainer>

            <ForumContainer forum_name="General" v-if="forum_tab == 2">
                <v-img src="../../public/rf.png"  width="250" aspect-ratio="1"></v-img>
            </ForumContainer>
  
            <v-row dense>
                <v-col cols="12" lg="3">
                    <ForumState number="686702" title="Topic" icon="fa-comments" />
                </v-col>
                <v-col cols="12" lg="3">
                    <ForumState title="Posts" number="686702" icon="fa-comment" />
                </v-col>
                <v-col cols="12" lg="3">
                    <ForumState title="Members" number="686702" icon="fa-users" />
                </v-col>
                <v-col cols="12" lg="3">
                    <ForumState number="Curcy" title="Newest Member" icon="fa-user-plus" />
                </v-col>
            </v-row>
        </div>
    </v-col>
    <v-col cols="12" lg="3">
        <v-row>
            <v-col cols="12" lg="12">

                <profile-overview>
                    <MiniProfile />
                </profile-overview>
            </v-col>
            <v-col cols="12" lg="12">

                <latest-activity>
                    <MiniPost avatar="https://64.media.tumblr.com/0f1d9be0930e0fd6e1421e0af63b4baa/4b38c49aa49bf456-a5/s1280x1920/54be3df4f578d67626ed9b3849f53d129667b940.jpg" post_title="Official Shit Post" username="John" when="2 months" reply_count="0" />

                    <MiniPost avatar="https://64.media.tumblr.com/0f1d9be0930e0fd6e1421e0af63b4baa/4b38c49aa49bf456-a5/s1280x1920/54be3df4f578d67626ed9b3849f53d129667b940.jpg" post_title="Official Shit Post" username="John" when="2 months" reply_count="0" />

                    <MiniPost avatar="https://64.media.tumblr.com/0f1d9be0930e0fd6e1421e0af63b4baa/4b38c49aa49bf456-a5/s1280x1920/54be3df4f578d67626ed9b3849f53d129667b940.jpg" post_title="Official Shit Post" username="John" when="2 months" reply_count="0" />

                    <MiniPost avatar="https://64.media.tumblr.com/0f1d9be0930e0fd6e1421e0af63b4baa/4b38c49aa49bf456-a5/s1280x1920/54be3df4f578d67626ed9b3849f53d129667b940.jpg" post_title="Official Shit Post" username="John" when="2 months" reply_count="0" />
                </latest-activity>
            </v-col>
            <v-col cols="12" lg="12">
                <ForumState number="$19993" icon="fa-btc" />
            </v-col>
            <v-col cols="12" lg="12">
                <ForumState number="$19993" icon="fa-ethereum" />
            </v-col>
            <v-col cols="12" lg="12">
                <ForumState number="$19993" icon="fa-btc" />
            </v-col>
        </v-row>
    </v-col>
</v-row>
</template>

<script>
import ForumSelect from "../components/Navigation/ForumSelect.vue";
import ForumContainer from "../components/Forums/ForumContainer.vue";
import ForumSection from "../components/Forums/ForumSection.vue";
import ForumState from "../components/Forums/ForumState.vue";
import ForumBreadCrumb from "../components/Forums/ForumBreadCrumb.vue";
import LatestActivity from "@/components/Widgets/LatestActivity.vue";
import MiniPost from "@/components/Widgets/Data Models/MiniPost.vue";

import ProfileOverview from '@/components/Widgets/ProfileOverview.vue'
import MiniProfile from '@/components/Widgets/Data Models/MiniProfile.vue'



export default {
    name: "Forum",
    components: {
        ForumSelect,
        ForumContainer,
        ForumSection,
        ForumState,
        LatestActivity,
        MiniPost,
        ProfileOverview,
        MiniProfile,
        ForumBreadCrumb,
    },

    data() {
        return {
            forum_tab: 0
        }
    }
};
</script>
