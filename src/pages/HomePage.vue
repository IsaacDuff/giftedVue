<template>
  <div class="container-fluid">
    <section class="row justify-content-center">
      <!-- <input type="text" v-model="editable.query" class="col-8" id="search"> -->
    </section>
    <section class="row">
      <div class="col-3" v-for="giftFromVFor in gifts" :key="giftFromVFor.id">
        <!-- <img class="img-fluid elevation-5 rounded gift-card"
          src="https://wkml.com/wp-content/uploads/sites/53/2019/12/baby-yoda-featured.png" alt="babyYodaMC">
        <p>The best part of the Dentist Appointment</p> -->
        <GiftCard :giftProp="giftFromVFor" />
      </div>
    </section>

  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { giftsService } from '../services/GiftsService.js'
import { logger } from '../utils/Logger.js'
import { AppState } from '../AppState.js'
import GiftCard from '../components/GiftCard.vue'

export default {
  setup() {

    async function getGifts() {
      try {
        // logger.log('getting gifts to screen')
        await giftsService.getGifts()
      } catch (error) {
        logger.log(error.message)
      }
    }

    onMounted(() => {
      getGifts();
    })

    return {
      gifts: computed(() => AppState.gifts)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .gift-card {
    cursor: pointer;
  }

  .gift-card:hover {
    transform: scale(1.05);
  }
}
</style>
