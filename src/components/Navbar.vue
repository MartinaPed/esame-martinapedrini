<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import logo from '../assets/logo.png'
import logogiallo from '../assets/alba/logogiallo.png'
import whatsapp from '../assets/wh.png'

const route = useRoute()
const scrolled = ref(false)
const menuAperto = ref(false)

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
    class="sticky top-0 z-50 flex items-center justify-between md:justify-center md:gap-20 px-6 py-2 font-grande transition-colors duration-300"
    :class="sfondoNav"
  >
    <!-- Logo -->
    <router-link to="/" @click="menuAperto = false">
      <img :src="logoCorrente" alt="Nada Mas" class="h-[60px] w-[60px] md:h-[100px] md:w-[100px]" />
    </router-link>

    <!-- Link desktop -->
    <ul class="hidden md:flex items-center gap-16 text-[65px]">
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

    <!-- Hamburger mobile -->
    <button
      class="md:hidden flex flex-col gap-[6px] p-2 cursor-pointer"
      @click="menuAperto = !menuAperto"
      aria-label="Menu"
    >
      <span class="block w-8 h-[3px] bg-black transition-all duration-300" :class="menuAperto ? 'rotate-45 translate-y-[9px]' : ''" />
      <span class="block w-8 h-[3px] bg-black transition-all duration-300" :class="menuAperto ? 'opacity-0' : ''" />
      <span class="block w-8 h-[3px] bg-black transition-all duration-300" :class="menuAperto ? '-rotate-45 -translate-y-[9px]' : ''" />
    </button>
  </nav>

  <!-- Menu mobile overlay -->
  <div
    v-if="menuAperto"
    class="md:hidden fixed inset-0 z-40 bg-[#FFFCE0] flex flex-col items-center justify-center gap-10"
  >
    <ul class="flex flex-col items-center gap-8 text-[50px] font-grande">
      <li>
        <router-link to="/esperienze" @click="menuAperto = false" class="hover:text-[#ff0000] transition-colors">esperienze</router-link>
      </li>
      <li>
        <router-link to="/chi-siamo" @click="menuAperto = false" class="hover:text-[#ff0000] transition-colors">chi siamo</router-link>
      </li>
      <li>
        <a href="https://wa.me/" target="_blank" @click="menuAperto = false" class="flex items-center gap-3 hover:text-[#ff0000] transition-colors">
          contattaci
          <img :src="whatsapp" alt="WhatsApp" class="h-[45px] w-auto" />
        </a>
      </li>
      <li>
        <router-link to="/shop" @click="menuAperto = false" class="hover:text-[#ff0000] transition-colors">shop</router-link>
      </li>
    </ul>
  </div>
</template>
