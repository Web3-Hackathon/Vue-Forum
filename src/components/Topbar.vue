<template>
<v-app-bar dense color="transparent" flat>
    <div class="d-flex flex-row align-center w-100 main-constructor">
        
        <!-- <v-avatar class="avatar avatar-activator logo-div" v-bind="attrs" v-on="on">
            <img src="../../public/logo_img.jpg" width="35" height ="35" />
        </v-avatar> -->
        <div class="avatar avatar-activator logo-div"  v-bind="attrs" v-on="on">
            <img src="../../public/rf.png" width="90" height ="70" />
        </div>
       
        <div id="menu-list" class="d-flex flex-row align-center flex-grow-1 navi-div">
          
            <span class="link text-h7 px-3 text-upper font-weight-bold" @click="$router.push('/')">
                Home
            </span>
            <span class="link text-h7 px-3 text-upper font-weight-bold" @click="$router.push('/members')">
                Members
            </span>
            <span class="link text-h7 px-3 text-upper font-weight-bold" @click="$router.push('/upgrade')">
                Upgrades
            </span>
            <span class="link text-h7 px-3 text-upper font-weight-bold" @click="$router.push('/new/posts')">
                New Posts
            </span>
            <span class="link text-h7 px-3 text-upper font-weight-bold" @click="$router.push('/extra')">
                Extra
            </span>

        </div>

        <div id ="connect-div" class="flex-grow-1 d-flex justify-end pa-3 align-center custom-div">
            <!-- <div class="navi-item hidden-xs-only">
                <v-btn class="primary-btn" :ripple="false" @click="$router.push('/login')">Login</v-btn>
            </div>
            <div class="navi-item hidden-xs-only">
                <v-btn class="primary-btn" :ripple="false" @click="$router.push('/signup')">Sign Up</v-btn>
            </div> -->

            <div class="navi-item mx-2 phone-menu-btn">
                <v-menu offset-y left nudge-left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon size="19">fa-solid fa-ellipsis-vertical</v-icon>
                        </v-btn>
                    </template>
                    <v-list class="vmenu-list">
                        <div class="vmenu-content">
                            <span class="vmenu-item link text-h7 px-3 text-upper font-weight-bold" @click="$router.push('/')">
                                Home
                            </span>
                            <span class="vmenu-item link text-h7 px-3 text-upper font-weight-bold" @click="$router.push('/members')">
                                Members
                            </span>
                            <span class="vmenu-item link text-h7 px-3 text-upper font-weight-bold" @click="$router.push('/upgrade')">
                                Upgrades
                            </span>
                            <span class="vmenu-item link text-h7 px-3 text-upper font-weight-bold" @click="$router.push('/new/posts')">
                                New Posts
                            </span>
                            <span class="vmenu-item link text-h7 px-3 text-upper font-weight-bold" @click="$router.push('/extra')">
                                Extra
                            </span>
                        </div>
                    </v-list>
                </v-menu>
            </div>

            <Login/>
            
            <div class="navi-item">
                <v-btn icon>
                    <v-icon size="19">fa-regular fa-message</v-icon>
                </v-btn>
            </div>

            <div class="navi-item">
                <v-btn icon>
                    <v-icon size="19">fa-regular fa-bell</v-icon>
                </v-btn>
            </div>

            <div class="navi-item mx-2">
                <v-menu offset-y left nudge-left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-avatar class="avatar avatar-activator" v-bind="attrs" v-on="on">
                            <img src="../../public/avatar.jpg" />
                        </v-avatar>
                    </template>
                    <v-list class="vmenu-list">
                        <div class="vmenu-content">
                            <div class="vmenu-item" @click="$router.push('/profile/' + $store.getters.user.username)">
                                <v-icon size="13" color="#909090" class="mr-3">fa-user</v-icon>
                                <span>Profile </span>
                            </div>
                            <div class="vmenu-item">
                                <v-icon size="13" color="#909090" class="mr-3">fa-star</v-icon>
                                <span>Upgrade </span>
                            </div>

                            <div class="vmenu-item">
                                <v-icon size="13" color="#909090" class="mr-3">fa-book</v-icon>
                                <span>My Threads </span>
                            </div>

                            <div class="vmenu-item">
                                <v-icon size="13" color="#909090" class="mr-3">fa-circle-question</v-icon>
                                <span>Support </span>
                            </div>

                            <!-- <div class="vmenu-item vmenu-item-button">
                                <v-btn :ripple="false" width="100%" height="100%">
                                    Logout
                                </v-btn>
                            </div> -->
                        </div>
                    </v-list>
                </v-menu>
            </div>

        </div>
    </div>
</v-app-bar>

</template>

<script>
import Login from "./Login/Login.vue";
export default {
    components: { Login }
};

</script>

<style lang="scss">


.navi-item {
    margin: 0 2px;
}
.navi-div{
    float: left;
    margin-left: 40px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: normal;  
}

.logo-div{
    float: left;
    margin-left: 80px;
    padding-right: 30px;

    border-right:1px solid rgba(83, 84, 87, 0.267) !important;
}
.custom-div{
    float:right;
    margin-right: 30px;
}

.phone-menu-btn {
    display: none;
}

@media (max-width: 820px) {
    .logo-div {
        display: none;
    }

    #menu-list {
        display: none !important;
    }

    .phone-menu-btn {
        display: table;
    }
}


</style><style lang="scss" scoped>
header {
    font-family: "Source Sans Pro";
}
</style>
