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
    class="flex items-center justify-between rounded-[40px] px-10 h-[80px] w-full"
    :style="{ backgroundColor: colore }"
  >
    <span class="font-grande text-[48px]">{{ titolo }}</span>
    <span class="font-grande text-[48px]">{{ minuti }}</span>
    <img :src="frecciarossadx" alt="" class="w-[50px] h-auto" />
  </router-link>
</template>

<style scoped>
</style>
