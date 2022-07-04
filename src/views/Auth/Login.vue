<template>
<div class="form-section">
    <v-container fluid>
        <v-row class="mt-10">
            <v-col cols="12" lg="6">
                <v-row class="px-5">
                    <div class="py-10">
                        <div class="px-5 py-5">
                            <span class="text-h4" style="font-weight: 1000">OGU</span>
                        </div>
                    </div>
                </v-row>
                <v-row class="px-5 mt-5">
                    <div class="px-5">
                        <span class="text-h8" style="font-weight: 800">Welcom back to platform</span>
                    </div>
                </v-row>
                <v-row class="px-5 mt-6">
                    <div class="px-5">
                        <span class="" style="">
                            This platform is a community driven digital marketplace that connects buyers and sellers from all around. We have grown to become a leading platform for trading virtual products. You can also participate in general discussions on our site, make new friends, and have some fun!
                        </span>
                    </div>
                </v-row>
            </v-col>

            <v-col cols="12" lg="6">
                <div class="form py-10">
                    <div class="label py-5">
                        <v-row>
                            <span class="text-h8">Welcome to login</span>
                        </v-row>
                    </div>
                    <div class="form-group">
                        <div class="form-inputs py-5">
                            <v-row>
                                <input type="text" v-model="username" placeholder="Username" />
                                <input type="text" v-model="password" placeholder="Password" />
                                <input type="text" v-model="facode" placeholder="2FA Code (If Enabled)" />
                            </v-row>
                        </div>
                        <div class="submit-btn py-5">
                            <v-row>
                                <v-btn class="primary-btn px-10">Login</v-btn>
                            </v-row>
                            <v-row>
                                <v-col cols="12" lg="5">
                                    <a style="font-size: 13px;">Forgot your password</a>
                                </v-col>

                                <v-col cols="12" lg="6">
                                    <a style="font-size: 13px;" @click="$router.push('/signup')"><span class="text-dark">Need an account? </span>Sign Up</a>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
export default {
    name: "Login",
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
}

.form-group {

    .form-inputs {
        input[type=text] {
            width: 70%;
            padding: 10px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            color: white;

            .submit-btn {}
        }
    }

}
</style>
