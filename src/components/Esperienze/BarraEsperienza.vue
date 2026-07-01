<script setup>
import frecciarossadx from '../../assets/frecciarossadx.png'

defineProps({
  titolo: String,
  minuti: String,
  colore: String,
  to: String,
})
</script>

<template>
  <router-link
    :to="to"
    class="flex items-center justify-between rounded-[30px] md:rounded-[40px] px-4 md:px-10 h-[55px] md:h-[80px] w-full"
    :style="{ backgroundColor: colore }"
  >
    <span class="font-grande text-[24px] md:text-[40px] lg:text-[48px]">{{ titolo }}</span>
    <span class="font-grande text-[24px] md:text-[40px] lg:text-[48px]">{{ minuti }}</span>
    <img :src="frecciarossadx" alt="" class="w-[30px] md:w-[50px] h-auto" />
  </router-link>
</template>

<style scoped>
</style>
