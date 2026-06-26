<template>
  <section id="testimonials" class="py-32 px-6 lg:px-16 bg-[#f2f4f6]">
    <div class="max-w-[1200px] mx-auto">
      <div class="text-center mb-16 reveal active">
        <p class="text-[#2563eb] font-bold tracking-widest uppercase text-sm mb-4">TESTIMONI</p>
        <h2 class="text-3xl font-bold text-[#191c1e]">Apa Kata Mereka?</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(testimonial, index) in store.testimonials"
          :key="testimonial.id"
          class="reveal active bg-white p-8 rounded-3xl shadow-sm border border-[#c3c6d7]"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="flex text-[#2563eb] mb-4">
            <span
              v-for="star in testimonial.rating"
              :key="star"
              class="material-symbols-outlined"
              style="font-variation-settings: 'FILL' 1"
              >star</span
            >
          </div>
          <p class="text-base text-[#434655] italic mb-8">"{{ testimonial.text }}"</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-[#e6e8ea]"></div>
            <div>
              <p class="font-bold text-[#191c1e]">{{ testimonial.name }}</p>
              <p class="text-sm text-[#434655]">{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const store = useAppStore()
</script>
