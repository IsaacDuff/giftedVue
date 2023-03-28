<template>
    <img class="img-fluid elevation-5 rounded gift-card"
        src="https://wkml.com/wp-content/uploads/sites/53/2019/12/baby-yoda-featured.png" alt="babyYodaMC">
    <p>The best part of the Dentist Appointment</p>
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