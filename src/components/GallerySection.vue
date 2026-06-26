<template>
  <section id="gallery" class="py-32 px-6 lg:px-16 bg-[#191c1e] text-white">
    <div class="max-w-[1200px] mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal active">
        <div>
          <span class="text-[#3b82f6] font-bold tracking-widest uppercase text-sm"
            >TRANSFORMASI</span
          >
          <h2 class="text-3xl font-bold text-white mt-2">Lihat Hasilnya, Buktikan Sendiri</h2>
        </div>
        <!-- <button
          class="text-[#3b82f6] hover:text-white transition-colors flex items-center gap-2 bg-transparent border-none cursor-pointer text-base"
        >
          Lihat Semua <span class="material-symbols-outlined">arrow_forward</span>
        </button> -->
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-if="galleryImages[0]"
          class="reveal active overflow-hidden rounded-3xl aspect-[1.37] group relative"
        >
          <img
            :src="galleryImages[0].src"
            :alt="galleryImages[0].alt"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8"
          >
            <div>
              <p class="font-bold text-2xl">{{ galleryImages[0].title }}</p>
              <p class="text-white/80">{{ galleryImages[0].description }}</p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div
            v-for="image in galleryImages.slice(1)"
            :key="image.id"
            class="reveal active overflow-hidden rounded-3xl aspect-square bg-[#e6e8ea] relative group"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const galleryImages = ref([
  {
    id: '1',
    src: '/gallery/ventela-70s.png',
    alt: 'Perbandingan Ventela 70s',
    title: 'Ventela 70s',
    description: 'Deep Clean',
    isLarge: true,
  },
  {
    id: '2',
    src: '/gallery/converse.png',
    alt: 'Perbandingan converse',
    title: 'Deep Clean',
  },
  {
    id: '3',
    src: '/gallery/compass-bawah.png',
    alt: 'Perbandingan compass',
    title: 'Deep Clean',
  },
  {
    id: '4',
    src: '/gallery/compass.png',
    alt: 'Perbandingan compass',
    title: 'Deep Clean',
  },
  {
    id: '5',
    src: '/gallery/topi-converse.png',
    alt: 'Perbandingan topi converse',
    title: 'Deep Clean',
  },
])
</script>
