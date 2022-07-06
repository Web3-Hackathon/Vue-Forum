<template>
<div class="miniprofile w-100">
    <div class="d-flex flex-row justify-space-between align-center w-100">
        <div @click="$router.push('/profile/' + $store.getters.user.username)" class="d-flex flex-row align-center link">
            <v-avatar class="avatar avatar-activator">
                <!-- <v-img max-width="44px" max-height="44px" src="https://64.media.tumblr.com/0f1d9be0930e0fd6e1421e0af63b4baa/4b38c49aa49bf456-a5/s1280x1920/54be3df4f578d67626ed9b3849f53d129667b940.jpg" /> -->
                <v-icon>fa-user</v-icon>
            </v-avatar>

            <div class="d-flex flex-column justify-center align-start mx-4">
                <span class="username">{{$store.getters.user.username}}</span>
                <span class="rank">EPIC</span>
            </div>
        </div>

        <div class="coin-grey-panel">
        <span class="label">
            <v-icon size="15" class="mr-3" style="color: yellow">fa-coins</v-icon>
        </span>
           <span class="user-count">0.00</span>
        </div>
    </div>

    <div class="profile-stats">
        <div class="stat">
            <span style="color: green; font-weight: bolder;">6983</span>
            <span>Rep</span>
        </div>

        <div class="stat">
            <span style="color: green; font-weight: bolder;">2825</span>
            <span>Vouches</span>
        </div>

        <div class="stat">
            <span>10555</span>
            <span>Likes</span>
        </div>
    </div>

    <div class="grey-panel">
        <span class="label">
            <v-icon size="15" class="mr-3">fa-globe</v-icon> Users online
        </span>
        <span class="user-count">5500</span>
    </div>

</div>
</template>

<script>
export default {
    name: "MiniProfile",
    props: {},
};
</script>

<style lang="scss" scoped>
.profile-stats {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 25px 0;
    border-radius: 8px !important;

    .stat {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // margin: 0 20px;

        span:first-of-type {
            color: #a5a5a5;
            font-family: Open Sans;
            font-weight: 500;
            font-size: 18px;
        }

        span:last-of-type {
            color: #686868;
            font-family: Source Sans Pro;
            font-weight: 500;
            font-size: 14px;
        }
    }
}

.rank {
    font-family: Source Sans Pro;
    font-size: 13px;
    font-weight: 600;
    color: #a5a5a5;
}

.username {
    font-family: Source Sans Pro;
    font-size: 18px;
    font-weight: 600;

}

.miniprofile {
    display: flex;
    flex-direction: column;
    padding: 10px 5px;
}

.grey-panel {
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    .label {
        width: 80%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: left;
        background: #1c1c1c;
        border-radius: 5px;
        font-family: Source Sans Pro;
        font-size: 15px;
        color: #a5a5a5;
        padding: 10px
    }

    .user-count {
        width: 80%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: right;
        background: #1c1c1c;
        border-radius: 5px;
        font-family: Source Sans Pro;
        font-size: 15px;
        color: green;
        padding: 10px
    }
}

.coin-grey-panel {
    display: flex;
    align-items: center;
    justify-content: center;

    .label {
        width: 80%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: left;
        background: #1c1c1c;
        border-radius: 5px;
        font-family: Source Sans Pro;
        font-size: 15px;
        color: #a5a5a5;
        padding: 10px
    }

    .user-count {
        width: 80%;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: right;
        background: #1c1c1c;
        border-radius: 5px;
        font-family: Source Sans Pro;
        font-size: 15px;
        color: yellow;
        padding: 10px
    }
}

.stat{
    float: left;
    padding-right: 20px;
    padding-left: 20px;
    border-right:1px solid rgba(83, 84, 87, 0.267) !important;
}
</style>
