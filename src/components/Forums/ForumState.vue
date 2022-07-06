<template>
<div class="forum-state">
    <v-sheet color="sheetbg" class="forum-state-container">
        <div class="icon-bg mx-3">
            <v-icon size="20" color="#a5a5a5">{{icon}}</v-icon>
        </div>
        <div class="cat-subcats">
            <div class="recent-post justify-sm-start justify-lg-end">
                <div class="d-flex flex-column">
                    <span class="text-number">{{ number }}</span>
                    <span>{{ title }}</span>
                </div>
            </div>
        </div>
    </v-sheet>
</div>
</template>

<script>
export default {
    name: "ForumState",
    props: {
        number: String,
        title: String,
        icon: String,
    },
};
</script>

<style lang="scss">
.forum-state {

    .forum-state-container {
        border-radius: 8px;

        .icon-bg {
            // background: #1c1c1c;
            padding: 10px;
            border-radius: 50%;
        }
    }
    
    &>.v-sheet {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        padding: 5px;
        height:70px !important;

        &>.v-icon {
            padding: 0 10px;
            margin-right: 20px;
        }

        .cat-subcats {
            display: flex;
            flex-direction: column;
            flex-grow: 3;

            .text-number {
                font-size: 25px;
                font-weight: bolder;
                font-family: Source Sans Pro;
                color: #d5d5d5;
            }

            span {
                color: grey;
            }
        }
    }

}
</style>
