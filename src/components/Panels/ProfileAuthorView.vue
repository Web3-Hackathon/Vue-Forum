<template>
<sheet-container dense class="profilesheet">
    <div class="d-flex flex-column justify-center align-center">
        <div class="profile-heading">
            <div class="profile-title">
                <span>{{ $store.getters.user.username }}</span>
            </div>

            <div class="profile-avatar">
                <v-avatar width="100%" height="100%">
                    <v-img max-width="170px" max-height="170px" :src="$store.getters.user.avatar" />
                </v-avatar>
            </div>
        </div>

        <div class="profile-rank">REGULAR USER</div>

        <div class="profile-rep">
            <div class="d-flex flex-column justify-center align-center">
                <span :style="{color: $options.filters.posnegcolor(5)}">5</span>
                <span>Rep</span>
            </div>

            <v-divider vertical />

            <div class="d-flex flex-column justify-center align-center">
                <span :style="{color: $options.filters.posnegcolor(-3)}">-3</span>
                <span>Vouch</span>
            </div>
        </div>

        <div class="profile-stats my-5">
            <div class="stat">
                <div>
                    <v-icon size="13">fa-comments</v-icon>
                    <span class="stat-key">Posts:</span>
                </div>

                <span class="stat-val">323</span>
            </div>
            <div class="stat">
                <div>
                    <v-icon size="13">fa-book</v-icon>
                    <span class="stat-key">Threads:</span>
                </div>

                <span class="stat-val">0</span>
            </div>

            <div class="stat">
                <div>
                    <v-icon size="13">fa-calendar</v-icon>
                    <span class="stat-key">Joined:</span>
                </div>

                <span class="stat-val">Apr 2017</span>
            </div>
        </div>
    </div>
</sheet-container>
</template>

<script>
import SheetContainer from "./SheetContainer.vue";
export default {
    components: {
        SheetContainer
    },

    filters: {
        posnegcolor(n) {
            if (n < 0) return '#F44336'
            if (n > 0) return '#76FF03'

            return '#d6d6d6'
        },
    },
};
</script>

<style lang="scss">
.profile-rep {
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    width: 100%;
    padding: 0 40px;

    span:first-of-type {
        font-size: 13px;
        color: #d6d6d6;
        font-family: Source Sans Pro;
        font-weight: 400;
        font-size: 20px;
        text-shadow: 0px 0px 2px #000000;
    }

    span:last-of-type {
        font-size: 13px;
        color: #8b8b8b;
        font-family: Source Sans Pro;
        font-weight: 400;
        font-size: 15px;
        text-shadow: 0px 0px 2px #000000;
    }
}

.profile-stats {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    width: 100%;

    .stat {
        margin: 3px 0;
        background: #1a1a1a;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        width: 100%;

        .stat-key {
            padding: 0 10px;
            color: #8b8b8b;
            font-family: Source Sans Pro;
            font-weight: 400;
            font-size: 15px;
            text-shadow: 0px 0px 2px #000000;
        }

        .stat-val {
            padding: 0 10px;
            color: #8b8b8b;
            font-family: Source Sans Pro;
            font-weight: 400;
            font-size: 15px;
            text-shadow: 0px 0px 2px #000000;
        }

        i {
            padding: 10px 15px;
            width: 20px;
            background: rgb(19, 19, 19);
            color: #ababab;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }
    }
}

.profile-rank {
    margin: 15px 0;
    padding: 10px 0px;
    width: 100%;
    background: var(--v-bgbg-base) !important;
    font-family: Source Sans Pro;
    font-weight: 600;
    font-size: 14px;
    color: #ababab;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
}

.profile-heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.profile-title {
    font-family: Source Sans Pro;
    font-size: 22px;
    font-weight: 600;
}

.profile-avatar {
    margin-top: 20px;
}

.profilesheet {
    padding: 0px !important;
}
</style>
