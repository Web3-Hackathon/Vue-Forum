<template>
<div>
    <v-container fluid>
        <BreadCrumb class="mb-5" />
    </v-container>

    <v-container fluid>
        <sheet-container dense class="profile-cover flex-wrap">
            <div class="d-flex align-center" :class="$vuetify.breakpoint.mobile ? 'flex-column' : 'flex-row'">
                <v-avatar height="156px" width="156px" :class="['mx-4', self ? 'image-overlay-edit' : '']">
                    <v-img :src="$store.getters.user.avatar" />
                </v-avatar>

                <div class="profile-names mx-4">
                    <span>hoe1912</span>
                    <span>Regular Member</span>
                </div>
            </div>

            <div class="profile-action mt-5" :class="$vuetify.breakpoint.mobile ? 'flex-column' : 'flex-row'">

                <v-btn v-if="!self" text class="icon-btn-text btn-outlined notransform mx-2 mt-3 balance-context" rounded>
                    <v-icon class="mx-2" size="16">fa-dollar</v-icon>192245
                </v-btn>

                <v-btn v-if="!self" text class="icon-btn-text btn-outlined notransform mx-2 mt-3" rounded>
                    <v-icon class="mx-2" size="16">fa-message</v-icon>Send Message
                </v-btn>

                <v-btn v-if="self" text class="icon-btn-text btn-outlined notransform mx-2 mt-3" rounded>
                    <v-icon class="mx-2" size="16">fa-message</v-icon>Messages
                </v-btn>

                <v-btn v-if="self" text class="icon-btn-text btn-outlined notransform mx-2 mt-3" rounded>
                    <v-icon class="mx-2" size="16">fa-star</v-icon>Upgrade
                </v-btn>
                <v-btn v-if="self" @click="$router.push({name: 'edit_profile'})" text class="icon-btn-text btn-outlined notransform mx-2 mt-3" rounded>
                    <v-icon class="mx-2" size="16">fa-user-pen</v-icon>Edit
                    Profile
                </v-btn>
            </div>
        </sheet-container>

        <v-row class="mt-3" dense>
            <v-col cols="12" lg="3">
                <div class="d-flex flex-column">
                    <div id="reputation" class="d-flex">
                        <SheetContainer bordered rounded rounded-sm dense class="w-100 mx-2">
                            <div class="reputation">
                                <span style="color: green">6983</span>
                                <span>Reputation</span>
                            </div>

                            <div class="rep-action">
                                <v-btn icon>
                                    <v-icon size="18">fa-circle-info</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon size="18">fa-plus</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon size="18">fa-share</v-icon>
                                </v-btn>
                            </div>
                        </SheetContainer>

                        <SheetContainer bordered rounded rounded-sm dense class="w-100 mx-2">
                            <div class="reputation">
                                <span style="color: green">2825</span>
                                <span>Vouches</span>
                            </div>

                            <div class="rep-action">
                                <v-btn icon>
                                    <v-icon size="18">fa-circle-info</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon size="18">fa-plus</v-icon>
                                </v-btn>
                                <v-btn icon>
                                    <v-icon size="18">fa-share</v-icon>
                                </v-btn>
                            </div>
                        </SheetContainer>
                    </div>

                    <div id="profile-info" class="d-flex mt-3">
                        <SheetContainer bordered rounded rounded-sm dense class="
                                d-flex
                                flex-column
                                justify-center
                                align-center
                                w-100
                                profile-info-panel
                                mt-2
                                mx-2
                                ">
                            <span v-if="self" class="mt-1 text-dark my-2 py-1 v-middle">
                                Currently online

                                <v-icon size="13" color="green" class="mx-2">
                                    fa-circle-dot
                                </v-icon>
                            </span>

                            <span v-else class="mt-1 text-dark my-2 py-1 v-middle">
                                Last seen 9 minutes ago
                            </span>

                            <div class="d-flex flex-column my-2 w-100 px-3">
                                <div class="d-flex flex-row justify-space-between profile-info">
                                    <span class="text-dark text-icon-group">
                                        <v-icon class="icon-dark mr-1" size="12px">
                                            fa-user
                                        </v-icon>

                                        UID
                                    </span>

                                    <span class="text-dark">743</span>
                                </div>

                                <div class="d-flex flex-row justify-space-between profile-info">
                                    <span class="text-dark text-icon-group">
                                        <v-icon class="icon-dark mr-1" size="12px">
                                            fa-check-to-slot
                                        </v-icon>

                                        Registered
                                    </span>

                                    <span class="text-dark">Yesterday</span>
                                </div>

                                <div class="d-flex flex-row justify-space-between profile-info">
                                    <span class="text-dark text-icon-group">
                                        <v-icon class="icon-dark mr-1" size="12px">
                                            fa-trophy
                                        </v-icon>

                                        Awards
                                    </span>

                                    <span class="text-dark">31</span>
                                </div>

                                <div class="d-flex flex-row justify-space-between profile-info">
                                    <span class="text-dark text-icon-group">
                                        <v-icon class="icon-dark mr-1" size="12px">
                                            fab fa-discord
                                        </v-icon>

                                        Discord
                                    </span>

                                    <span class="text-dark">Amp#3708</span>
                                </div>

                                <div class="d-flex flex-row justify-space-between profile-info">
                                    <span class="text-dark text-icon-group">
                                        <v-icon class="icon-dark mr-1" size="12px">
                                            fab fa-discord
                                        </v-icon>

                                        Discord ID
                                    </span>

                                    <span class="text-dark">806951239732423</span>
                                </div>
                                <div class="d-flex flex-row justify-space-between profile-info">
                                    <span class="text-dark text-icon-group">
                                        <v-icon class="icon-dark mr-1" size="12px">
                                            fas fa-wallet
                                        </v-icon>

                                        Wallet
                                    </span>

                                    <span class="text-dark">Ox3423t5at806951239732423</span>
                                </div>

                            </div>

                            <div class="d-flex align-center justify-center profile-info-streak">
                                <span class="text-dark">
                                    I've spent 0 hours, 0 minutes on CF
                                </span>
                            </div>
                        </SheetContainer>
                    </div>
                </div>
            </v-col>

            <v-col cols="12" lg="6" align="center">
                <div class="d-flex flex-column">
                    <div class="d-flex mx-2 mb-3">
                        <SheetContainer bordered rounded rounded-sm dense class="
                            d-flex
                            flex-row
                            justify-space-between
                            align-center
                            w-100
                            profile-stats-panel
                        ">
                            <div class="d-flex flex-column align-center justify-center">
                                <span>11</span>
                                <span class="text-dark">Threads</span>
                            </div>
                            <div class="d-flex flex-column align-center justify-center">
                                <span>11</span>
                                <span class="text-dark">Posts</span>
                            </div>

                            <div class="d-flex flex-column align-center justify-center">
                                <span>11</span>
                                <span class="text-dark">Likes</span>
                            </div>
                        </SheetContainer>
                    </div>

                    <user-content title="Groups" class="mx-2 mt-3 mb-3">
                        <SheetContainer rounded-sm dense class="
                            d-flex
                            flex-row
                            justify-space-between
                            align-center
                            w-100
                            profile-stats-panel
                        ">
                            <div class="d-flex flex-column align-center justify-center">
                                <span style="font-size: 15px;">upgrades</span>
                            </div>
                            <div class="d-flex flex-column align-center justify-center">
                                <span style="font-size: 15px;">Admin</span>
                            </div>

                            <div class="d-flex flex-column align-center justify-center">
                                <span style="font-size: 15px;">Staff</span>
                            </div>
                            <div class="d-flex flex-column align-center justify-center">
                                <span style="font-size: 15px;">Middleman</span>
                            </div>
                        </SheetContainer>
                    </user-content>

                    <posts-view title="Shop" class="mx-2 mt-3 mb-3"> </posts-view>

                    <marketplace title="Marketplace" class="mx-2 mt-3">

                    </marketplace>
                </div>
            </v-col>

            <v-col cols="12" lg="3" align="end">
                <div class="d-flex flex-column">
                    <div class="d-flex mx-2">
                        <SheetContainer bordered dense class="
                            d-flex
                            flex-row
                            justify-center
                            align-center
                            w-100
                            mb-3">
                            <span>TRUSTED MEMBER</span>
                        </SheetContainer>
                    </div>

                    <div class="d-flex mx-2">
                        <SheetContainer bordered dense class="
                            d-flex
                            flex-row
                            justify-center
                            align-center
                            w-100
                            mb-3">
                            <span>TOP MEMBER</span>
                        </SheetContainer>
                    </div>
                    <div class="d-flex mx-2">
                        <SheetContainer bordered dense class="
                            d-flex
                            flex-row
                            justify-center
                            align-center
                            w-100
                            mb-3">
                            <span style="color: #33ff00">TOP MEMBER</span>
                        </SheetContainer>
                    </div>

                    <div class="d-flex mx-2">
                        <SheetContainer bordered dense class="
                            d-flex
                            flex-row
                            align-center
                            w-100
                            profile-stats-panel
                            mb-2">
                            <v-img max-width="20px" src="http://localhost:8080/favicon.ico" class="mr-1" />
                            <v-img max-width="20px" src="http://localhost:8080/favicon.ico" class="mx-1" />
                            <v-img max-width="20px" src="http://localhost:8080/favicon.ico" class="mx-1" />
                            <v-img max-width="20px" src="http://localhost:8080/favicon.ico" class="mx-1" />

                        </SheetContainer>
                    </div>

                    <div class="d-flex mx-2">
                        <latest-activity>
                            <MiniPost avatar="https://64.media.tumblr.com/0f1d9be0930e0fd6e1421e0af63b4baa/4b38c49aa49bf456-a5/s1280x1920/54be3df4f578d67626ed9b3849f53d129667b940.jpg" post_title="Official Shit Post" username="John" when="2 months" reply_count="0" />

                            <MiniPost avatar="https://64.media.tumblr.com/0f1d9be0930e0fd6e1421e0af63b4baa/4b38c49aa49bf456-a5/s1280x1920/54be3df4f578d67626ed9b3849f53d129667b940.jpg" post_title="Official Shit Post" username="John" when="2 months" reply_count="0" />

                            <MiniPost avatar="https://64.media.tumblr.com/0f1d9be0930e0fd6e1421e0af63b4baa/4b38c49aa49bf456-a5/s1280x1920/54be3df4f578d67626ed9b3849f53d129667b940.jpg" post_title="Official Shit Post" username="John" when="2 months" reply_count="0" />

                            <MiniPost avatar="https://64.media.tumblr.com/0f1d9be0930e0fd6e1421e0af63b4baa/4b38c49aa49bf456-a5/s1280x1920/54be3df4f578d67626ed9b3849f53d129667b940.jpg" post_title="Official Shit Post" username="John" when="2 months" reply_count="0" />
                        </latest-activity>
                    </div>

                </div>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import BreadCrumb from "../../components/Navigation/BreadCrumb.vue";
import SheetContainer from "@/components/Panels/SheetContainer.vue";
import PostsView from "@/components/Widgets/Profile Widgets/PostsView.vue";
import UserContent from "@/components/Widgets/Profile Widgets/UserContent.vue";
import Marketplace from "@/components/Widgets/Profile Widgets/Marketplace.vue";
import LatestActivity from "@/components/Widgets/LatestActivity.vue";
import MiniPost from "@/components/Widgets/Data Models/MiniPost.vue";

export default {
    name: "Profile",
    components: {
        SheetContainer,
        BreadCrumb,
        PostsView,
        UserContent,
        Marketplace,
        LatestActivity,
        MiniPost
    },

    created() {

    },

    computed: {
        self() {
            if (this.$store.getters.user.id == this.target_user.id) return true;

            return false;
        },
    },

    data() {
        return {
            target_user: {
                id: 2,
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.profile-stats-panel {
    padding: 15px 30px !important;

    div {
        span:first-of-type {
            font-size: 20px;
            font-family: Source Sans Pro;
            font-weight: 600;
        }

        span:last-of-type {
            font-weight: 400;
        }
    }
}

.profile-info-panel {
    max-width: 100%;
    min-width: 220px;
    width: 100%;
}

.profile-info-streak {
    padding: 7px 10px;
    background: rgb(28, 28, 28);
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.profile-info {
    width: 100%;
    padding: 5px 0;

    span i {
        width: 20px;
    }
}

.rep-action {
    display: flex;
    justify-self: end;
    align-items: center;
    justify-content: center;
    background: rgb(28, 28, 28);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 100%;
    margin-top: 10px;
    padding: 5px 0;

    button {
        margin: 0 4px;

        i {
            color: #ababab !important;
        }
    }
}

.reputation {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top span {
        font-family: "Source Sans Pro";
    }

    span:first-of-type {
        font-size: 24px;
        font-weight: 600;
        color: rgb(131, 131, 131);
    }

    span:last-of-type {
        font-size: 15px;
        color: #ababab;
        font-weight: 300;
    }
}

.rep {
    .sheetContainer {
        width: 100%;
        min-width: 150px;
        max-width: 100%;
        display: flex;
        justify-content: center;
        padding: 0 !important;
    }
}

.profile-action {
    display: flex;
    align-self: flex-end;
    margin: 0 10px;
}

.profile-cover {
    padding: 20px 10px !important;
    border-radius: 10px !important;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .profile-names {
        display: flex;
        flex-direction: column;
        font-family: Source Sans Pro;

        span:first-of-type {
            color: #ababab;
            font-size: 2.2rem;
            font-weight: 800;
        }

        span:last-of-type {
            color: gray;
            font-weight: 400;
            font-size: 0.9rem;
        }
    }
}

.balance-context {
    width: 300px;
}

</style>
