<script>
export default {
    props: {
        title: String
    }
};
</script>

<template>
  <div>
    <span class="text-h7">{{title}}</span>

    <slot></slot>
  </div>
</template>