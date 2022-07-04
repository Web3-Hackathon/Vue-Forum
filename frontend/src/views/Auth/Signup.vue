<template>
<v-container fluid class="justify-center">
    <v-row>
        <v-col cols="12" lg="3"></v-col>
        <v-col cols="12" lg="6">
            <div class="form-section">
                <div class="mt-2 mb-7" align="center">
                    <span class="text-h6">Registeration</span>
                </div>
                <div class="px-3">
                    <span class="text-dark" style="font-size: 15px;">ACCOUNT DETAILS</span>
                </div>
                <div class="form-group">
                    <div class="col-row px-3">
                        <input type="text" v-model="username" placeholder="Username" />
                    </div>
                    <div class="col-row px-3">
                        <input type="password" v-model="password" placeholder="Password" />
                    </div>
                    <div class="col-row px-3">
                        <input type="email" v-model="facode" placeholder="Email" />
                    </div>
                </div>
            </div>
        </v-col>
        <v-col cols="12" lg="3"></v-col>
    </v-row>
    <v-row>
        <v-col cols="12" lg="12" align="center">
            <v-btn class="primary-btn px-10">Submit Registeration</v-btn>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    name: "Signup",
    props: {

    },

    data: function () {
        return {
            username: '',
            password: '',
            facode: ''
        };
    }
};
</script>

<style lang="scss">
.form-section {
    display: flex;
    flex-direction: column;
    background: var(--v-sheetbglighter-base) !important;

    .form-group {

        .col-row {
            background: #242424;
            border-top: 2px solid #202020;

            input[type=text],
            input[type=password],
            input[type=email] {
                width: 100%;
                padding: 5px 10px;
                margin: 10px 0;
                display: inline-block;
                border: 1px solid gray;
                box-sizing: border-box;
                color: white;
                font-size: 17px;

                &:active,
                &:focus {
                    border: 1px solid blue !important;

                }
            }
        }

    }

}
</style>
