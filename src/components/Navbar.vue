<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import logo from '../assets/logo.png'
import logogiallo from '../assets/alba/logogiallo.png'
import whatsapp from '../assets/wh.png'

const route = useRoute()
const scrolled = ref(false)

// Pagine in cui la navbar è sempre trasparente e usa il logo giallo
const paginaAlba = computed(() => route.path === '/alba')

const logoCorrente = computed(() => paginaAlba.value ? logogiallo : logo)
const sfondoNav = computed(() => scrolled.value ? 'bg-[#FFFCE0]' : 'bg-transparent')

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav
    class="sticky top-0 z-50 flex items-center justify-center gap-20 px-8 py-2 font-grande transition-colors duration-300"
    :class="sfondoNav"
  >
    <!-- Logo: porta alla homepage -->
    <router-link to="/">
      <img :src="logoCorrente" alt="Nada Mas" class="h-[100px] w-[100px]" />
    </router-link>

    <!-- Link: font 65px -->
    <ul class="flex items-center gap-16 text-[65px]">
      <li>
        <router-link to="/esperienze" class="cursor-pointer transition-colors hover:text-[#ff0000]">esperienze</router-link>
      </li>
      <li>
        <router-link to="/chi-siamo" class="cursor-pointer transition-colors hover:text-[#ff0000]">chi siamo</router-link>
      </li>
      <li class="flex items-center gap-[13px]">
        <a href="https://wa.me/" target="_blank" class="flex items-center gap-[13px] cursor-pointer transition-colors hover:text-[#ff0000]">
          contattaci
          <img :src="whatsapp" alt="WhatsApp" class="h-[55px] w-auto" />
        </a>
      </li>
      <li>
        <router-link to="/shop" class="cursor-pointer transition-colors hover:text-[#ff0000]">shop</router-link>
      </li>
    </ul>
  </nav>
</template>