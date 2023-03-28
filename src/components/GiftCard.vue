<template>
    <img class="img-fluid elevation-5 rounded gift-card" :src="giftProp?.url" :alt="giftProp?.tag">
    <p>{{ giftProp?.tag }}</p>
</template>


<script>
import { Gift } from '../models/Gift.js';

export default {
    props: {
        giftProp: { type: Gift, require: true }
    },

    setup() {
        return {};
    },
};
</script>



<style></style>