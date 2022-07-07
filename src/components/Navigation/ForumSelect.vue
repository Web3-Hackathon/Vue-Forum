<template>
<!-- <SheetContainer> -->
    <div class="forum-tags">
        <div class="tab" @click="$emit('tab', 0)" :class="[activeTab == 0 ? 'active' : '']">
            <v-icon size="13" class="mr-3">fa-star</v-icon><span>Featured</span>
        </div>
        <div class="tab select-btn"  @click="$emit('tab', 1)" :class="[activeTab == 1 ? 'active' : '']">
           <v-icon size="13" class="mr-3">fa-star</v-icon><span> General</span>
        </div>
        <div class="tab select-btn" @click="$emit('tab', 2)" :class="[activeTab == 2 ? 'active' : '']">
            <v-icon size="13" class="mr-3">fa-award</v-icon><span>Marketplace</span>
        </div>
    </div>

<!-- </SheetContainer> -->
</template>

<script>
import SheetContainer from "../Panels/SheetContainer.vue";
export default {
    name: "ForumSelect",
    components: {
        SheetContainer
    },
    props: {
        activeTab: Number,
    },
};
</script>

<style lang="scss" scoped>
.forum-tags {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-family: "Source Sans Pro";
    font-weight: 300;
    font-size: 14px;
   

    .tab {

        cursor: pointer;
        width: 20%;
        height: 100%;
        justify-content: center;
        display: flex;
        transition: 0.3s all;
        padding: 7px;
        font-size: 20px;
        border-radius: 8px;
        float: left;
        padding-right: 30px;
        background: #1E1E1E !important;
        color: #f3e3e35b;

        i {
            color: #f3e3e35b !important;
        }

        &:hover {
            i {
                color: yellow !important;
            }
            span{
                color: #f7f2f2 !important;
            }

        }

        &.active {

            i {
                color: yellow !important;
            }

            span{
                 color: #f7f2f2 !important;
            }
        }
    }

    .select-btn{
        float:left;
        margin-left: 20px;
    }

    @media (max-width: 576px) {
        .tab {
            width: 30%;
            i {
                display: none;
            }
            span {
                font-size: 16px;
                margin-left: 30%;
            }
        }
    }
}
</style>
