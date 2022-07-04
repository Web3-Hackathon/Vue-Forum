<template>
<v-sheet class="sheetContainer" color="sheetbg" :style="{
      borderRadius: rounded ? roundedSm ? '5px' : '20px' : '0px',
      //padding: prominent ? '30px 40px' : dense ? '0px 0px' : '20px 30px',
      backgroundImage: backgroundImage ? 'linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url(' + backgroundImage + ')' : '',
      border: bordered ? '1px solid' : '',
      borderColor: bordered ? '#333 !important' : '',
      backgroundColor: dark ? 'rgb(25,25,25) !important' : '',

    }">
    <slot></slot>
</v-sheet>
</template>

<script>
export default {
    name: "SheetContainer",
    props: {
        dense: Boolean,
        prominent: Boolean,
        rounded: Boolean,
        roundedSm: Boolean,
        backgroundImage: String,
        bordered: Boolean,
        dark: Boolean
    },
};
</script>

<style lang="scss" scoped>
.sheetContainer {
    background-size: cover;
    background-position: bottom;
}

.sheetbg {
    border-color: inherit !important;
}
</style>
