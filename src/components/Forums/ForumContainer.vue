<template>
<div class="forum-sections">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: "ForumContainer",
    props: {
        forum_name: String,
    },
};
</script>

<style lang="scss">
.forum-sections {
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    &> :nth-child(2)>div {
        border-radius: 8px !important;
    }
}

.forum-tag {
    clip-path: polygon(0 0, 9% 0, 12% 100%, 0% 100%);
    font-size: 14px;
    padding: 5px 10px;
    font-family: "Source Sans Pro";
    font-weight: 600;
    width: 100% !important;
    min-width: 100% !important;
    border-radius: 5px !important;

    span {
        padding: 3px;
        color: white;
    }
}
</style>
