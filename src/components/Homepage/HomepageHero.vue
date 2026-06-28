<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import nadamas from '../../assets/logoorizzontale.png'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.from('.payoff-word', {
    opacity: 0,
    x: -80,
    duration: 0.6,
    ease: 'power3.out',
    stagger: 0.12,
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: '+=500',
      scrub: 1,
    }
  })
})
</script>

<template>
  <section class="flex flex-col items-center justify-center px-8 mt-10">
    <img :src="nadamas" alt="Nadamás" class="w-full max-w-[1100px] h-auto" />

    <p class="font-grande text-[150px] leading-none text-center -mt-56 overflow-hidden">
      <span class="payoff-word inline-block">too</span>
      <span class="payoff-word inline-block">&nbsp;old</span>
      <span class="payoff-word inline-block">&nbsp;to</span>
      <span class="payoff-word inline-block">&nbsp;die</span>
      <br />
      <span class="payoff-word inline-block">too</span>
      <span class="payoff-word inline-block">&nbsp;high</span>
      <span class="payoff-word inline-block">&nbsp;to</span>
      <span class="payoff-word inline-block">&nbsp;care</span>
    </p>
  </section>
</template>