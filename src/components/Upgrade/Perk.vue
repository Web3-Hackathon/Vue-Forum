<template>
<SheetContainer style="border-radius:8px;" bordered dense class="
                  d-flex
                  flex-column
                  justify-center
                  align-center
                  w-100
                  profile-info-panel
                  mt-2
                  mx-1
                  bd-1
                ">

    <SheetContainer style="border-top-left-radius:8px; border-top-right-radius: 8px; " bordered dense class="
                  d-flex
                  flex-column
                  w-100
                  profile-info-panel
                " :style="headerStyles">
        <div class="d-flex flex-column w-100 py-1 px-2">
            <div class="d-flex flex-row justify-space-between profile-info">
                <span class="text-icon-group">
                    {{ title }}
                </span>
                <span>{{ price }}€ </span>
            </div>
        </div>
    </SheetContainer>

    <SheetContainer bordered dense class="
                  d-flex
                  flex-column
                  w-100
                  profile-info-panel
                ">
        <div class="d-flex flex-column w-100 py-2 px-2">
            <div class="d-flex flex-row justify-space-between profile-info">
                <span class="text-dark text-icon-group text-size">
                    Period
                </span>
                <span class="text-dark text-size">1 month</span>
            </div>
        </div>
    </SheetContainer>
    <SheetContainer bordered dense class="
                  d-flex
                  flex-column
                  w-100
                  justify-center
                  align-center
                  profile-info-panel
                " style="background: #2d2d2d !important;">

        <span class="text-dark text-icon-group text-size">
            Group userbar
        </span>

    </SheetContainer>

    <SheetContainer bordered dense class="
                  d-flex
                  flex-column
                  w-100
                  justify-center
                  align-center
                  profile-info-panel
                  py-2
                ">

        <v-img src="http://localhost:8080/favicon.ico" />

    </SheetContainer>

    <SheetContainer bordered dense class="
                  d-flex
                  flex-column
                  w-100
                  justify-center
                  align-center
                  profile-info-panel
                " style="background: #2d2d2d !important;">

        <span class="text-dark text-icon-group text-size">
            Upgrade Perks
        </span>

    </SheetContainer>

    <SheetContainer bordered dense class="
                  d-flex
                  flex-column
                  w-100
                  justify-center
                  align-center
                  profile-info-panel
                  py-2
                ">

        <span class="text-icon-group text-size" :style="reprentStyles">
            Represent
        </span>

    </SheetContainer>

    <div class="d-flex flex-column w-100 ">
        <div class="d-flex flex-row justify-space-between py-2 px-2">
            <span class="text-dark text-icon-group text-size">
                PM Space
            </span>

            <span class="text-dark text-size">
                2500
            </span>
        </div>
        <v-divider dark />

        <div class="d-flex flex-row justify-space-between py-2 px-2">
            <span class="text-dark text-icon-group text-size">
                Reputation Ability
            </span>

            <span class="text-dark text-size">
                <span style="color: green;">+3</span><span>/</span><span style="color: red;">-3</span>
            </span>
        </div>
        <v-divider dark />
        <div class="d-flex flex-row justify-space-between py-2 px-2">
            <span class="text-dark text-icon-group text-size">
                Award
            </span>

            <span class="text-dark text-size">
                <span style="color: green;">+3</span><span>/</span><span style="color: red;">-3</span>
            </span>
        </div>
        <v-divider dark />
        <div class="d-flex flex-row justify-space-between py-2 px-2">
            <span class="text-dark text-icon-group text-size">
                Get instant Auth key
            </span>

            <span class="text-dark text-size">
                <v-icon size="10" style="color: green">fa-check</v-icon>
            </span>
        </div>
        <v-divider dark />
        <div class="d-flex flex-row justify-space-between py-2 px-2">
            <span class="text-dark text-icon-group text-size">
                Always See hidden content
            </span>

            <span class="text-dark text-size">
                <v-icon size="10" style="color: green">fa-check</v-icon>

            </span>
        </div>
        <v-divider dark />
        <div class="d-flex flex-row justify-space-between py-2 px-2">
            <span class="text-dark text-icon-group text-size">
                Access to premium-only section
            </span>

            <span class="text-dark text-size">
                <v-icon size="10" style="color: green">fa-check</v-icon>

            </span>
        </div>
        <v-divider dark />
        <div class="d-flex flex-row justify-space-between py-2 px-2">
            <span class="text-dark text-icon-group text-size">
                Close & edit own threads
            </span>

            <span class="text-dark text-size">
                <v-icon size="10" style="color: green">fa-check</v-icon>

            </span>
        </div>
        <v-divider dark />

        <div class="d-flex flex-row justify-space-between py-2 px-2">
            <span class="text-dark text-icon-group text-size">
                Ability to link on music profile
            </span>

            <span class="text-dark text-size">
                <v-icon size="10" style="color: green">fa-check</v-icon>

            </span>
        </div>
        <v-divider dark />

        <div class="d-flex flex-row justify-space-between py-2 px-2">
            <span class="text-dark text-icon-group text-size">
                Ability to change username
            </span>

            <span class="text-dark text-size">
                <v-icon size="10" style="color: green">fa-check</v-icon>

            </span>
        </div>
        <v-divider dark />

        <div class="d-flex flex-row justify-space-between py-2 px-2">
            <span class="text-dark text-icon-group text-size">
                No Daily posts Limits
            </span>

            <span class="text-dark text-size">
                <v-icon size="10" style="color: green">fa-check</v-icon>

            </span>
        </div>
        <v-divider dark />
        <div class="d-flex flex-row justify-space-between py-2 px-2">
            <span class="text-dark text-icon-group text-size">
                Colorful Usertitle
            </span>

            <span class="text-dark text-size">
                <v-icon size="10" style="color: green">fa-check</v-icon>

            </span>
        </div>
        <v-divider dark />
        <div class="d-flex flex-row justify-space-between py-2 px-2">
            <span class="text-dark text-icon-group text-size">
                Access to pstbit Background Changer
            </span>

            <span class="text-dark text-size">
                <v-icon size="10" style="color: green">fa-check</v-icon>

            </span>
        </div>
        <v-divider dark />
        <div class="d-flex flex-row justify-space-between py-2 px-2">
            <span class="text-dark text-icon-group text-size">
                Own global prefix style
            </span>

            <span class="text-dark text-size">
                <v-icon size="10" style="color: green">fa-check</v-icon>

            </span>
        </div>
        <v-divider dark />
        <div class="d-flex flex-row justify-space-between py-2 px-2">
            <span class="text-dark text-icon-group text-size">
                @checked.io E-Mail Forward
            </span>

            <span class="text-dark text-size">
                <v-icon size="10" style="color: green">fa-check</v-icon>

            </span>
        </div>
        <v-divider dark />

    </div>

    <div class="d-flex align-center justify-center profile-info-streak py-1">
        <v-btn class="primary-normal-btn px-2 py-2 mr-2">Buy Now</v-btn>
        <v-btn class="primary-normal-btn px-2 py-2">Gift</v-btn>
    </div>
</SheetContainer>
</template>

<script>
import SheetContainer from "@/components/Panels/SheetContainer.vue";
export default {
    name: "Perk",
    components: {
        SheetContainer
    },
    props: {
        title: String,
        price: Number,
        color: String,
        period: String,
        img: String,
        awardImg: String,
        values: Array,
    },
    computed: {
        headerStyles() {
            return {
                "background": `${this.color} !important`,
            };
        },

        reprentStyles() {
            return {
                "color": this.color,
                "text-shadow": "0px 4px 5px #666"
            };
        }
    }
};
</script>

<style lang="scss" scoped>

.text-size {
    font-size: 12px;
}
</style>
        