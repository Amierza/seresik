<template>
  <section class="py-32 px-6 lg:px-16 max-w-[1200px] mx-auto">
    <div class="text-center mb-16 reveal active">
      <p class="text-[#2563eb] font-bold tracking-widest uppercase text-sm mb-4">
        KENAPA PILIH KAMI
      </p>
      <h2 class="text-3xl font-bold text-[#191c1e]">Yang Bikin Kami Beda</h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div
        v-for="(feature, index) in features"
        :key="feature.id"
        class="reveal active text-center"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <div
          class="w-16 h-16 bg-[rgba(37,99,235,0.05)] rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <span class="material-symbols-outlined text-[#2563eb] text-3xl">{{ feature.icon }}</span>
        </div>
        <h4 class="text-xl font-semibold text-[#191c1e] mb-2">{{ feature.title }}</h4>
        <p class="text-base text-[#434655]">{{ feature.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const features = ref([
  {
    id: '1',
    icon: 'handyman',
    title: 'Peralatan Profesional',
    description: 'Menggunakan alat cleaning grade premium dan sonic cleaner khusus.',
  },
  {
    id: '2',
    icon: 'groups',
    title: 'Tim Berpengalaman',
    description: 'Sudah menangani 10.000+ pasang sepatu dengan hasil memuaskan.',
  },
  {
    id: '3',
    icon: 'schedule',
    title: 'Pengerjaan Cepat',
    description: 'Pembersihan standar selesai dalam 24-48 jam.',
  },
  {
    id: '4',
    icon: 'payments',
    title: 'Harga Terjangkau',
    description: 'Hasil premium dengan harga yang ramah di kantong.',
  },
])
</script>
