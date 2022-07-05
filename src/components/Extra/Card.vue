<template>
<SheetContainer rounded rounded-sm dense class="w-100 mx-1">
    <div class="reputation">
        <div class="mt-5">
            <v-img width="100px" height="100px" src="http://localhost:8080/favicon.ico" />
        </div>
        <span class="text-h5">{{ title }}</span>
    </div>

    <div class="rep-action" align="center">
        <span>{{ subTitle }}</span>
    </div>
</SheetContainer>
</template>

<script>
import SheetContainer from "@/components/Panels/SheetContainer.vue";

export default {
    name: "Card",
    components: {
        SheetContainer
    },
    props: {
        title: String,
        subTitle: String,
    },
};
</script>

<style lang="scss" scoped>

.reputation {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top span {
        font-family: "Source Sans Pro";
    }

    div:first-of-type {
        
    }

    span {
        font-weight: 600;
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

    span {
        font-size: 15px;
    }
}
</style>

