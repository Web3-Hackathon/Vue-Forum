<template>
<div>
    <v-container fluid>
        <BreadCrumb class="mb-5" />
    </v-container>
    <v-container fluid>
        <SheetContainer dense class="
                  d-flex
                  flex-column
                  justify-center
                  align-center
                  w-100
                  profile-info-panel
                  mt-2
                  mx-1
                  py-1
                " style="background: #282828 !important; border-radius: 5px !important;">
            <span style="font-size: 12px; ">
                AFTER PURCHASING AN UPGRADE WITH ANY GRYPTO YOUR ACCOUNT GETS UPGRADED AUTOMATICALLY. THIS USUALLY TAKES 5-10 MINUTES
            </span>
        </SheetContainer>
        <v-row dense>
            <v-col cols="12" lg="4"  align="center">
                <Perk title="Premium" :price="9.9" color="#42a7a7" />
            </v-col>
            <v-col cols="12" lg="4" align="center">
                <Perk title="Infinity" :price="34.9" color="#c67a8c" />
            </v-col>
            <v-col cols="12" lg="4" align="center">
                <Perk title="Supreme" :price="59.99" color="#40ae70" />
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import BreadCrumb from "../components/Navigation/BreadCrumb.vue";
import SheetContainer from "@/components/Panels/SheetContainer.vue";
import Perk from "../components/Upgrade/Perk.vue";

export default {
    name: "Upgrade",
    components: {
        BreadCrumb,
        SheetContainer,
        Perk,
    },
}
</script>

<style lang="scss" scoped>
</style>
