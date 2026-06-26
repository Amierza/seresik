<template>
  <section id="contact" class="py-32 px-6 lg:px-16 max-w-[1200px] mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <!-- Location -->
      <div class="reveal active">
        <p class="text-[#2563eb] font-bold tracking-widest uppercase text-sm mb-4">LOKASI KAMI</p>
        <h2 class="text-3xl font-bold mb-8 text-[#191c1e]">Datang Langsung Aja!</h2>

        <div class="rounded-3xl overflow-hidden h-96 relative mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.44154178382044!2d112.41193594708642!3d-7.118504676379027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e77f0b3fb3fb1a9%3A0x1b9c939bc6cf68b8!2sWarung%20Bumbu%20Desa!5e0!3m2!1sid!2sid!4v1782439413724!5m2!1sid!2sid"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>

          <div
            class="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20"
          >
            <p class="font-bold text-[#191c1e]">{{ store.businessInfo.name }}</p>
            <p class="text-base text-[#434655]">{{ store.businessInfo.address }}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 class="font-bold mb-4 text-[#191c1e]">Jam Operasional</h4>
            <ul class="text-base text-[#434655] space-y-2">
              <li v-for="(hours, day) in store.businessInfo.hours" :key="day">
                <span class="font-medium">{{ day }}:</span> {{ hours }}
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-3">
            <a
              :href="store.businessInfo.mapsLink"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-3 border-2 border-[#2563eb] text-[#2563eb] py-3 rounded-xl font-bold hover:bg-[#2563eb] hover:text-white transition-colors no-underline"
            >
              <span class="material-symbols-outlined">directions</span> Lihat Rute
            </a>
          </div>
        </div>
      </div>

      <!-- Info Tambahan (ganti dari Contact Form) -->
      <div class="reveal active">
        <div
          class="bg-white p-10 rounded-[2.5rem] border border-[#c3c6d7] shadow-sm h-full flex flex-col justify-center"
        >
          <p class="text-[#2563eb] font-bold tracking-widest uppercase text-sm mb-4">
            KENAPA HARUS KAMI?
          </p>
          <h3 class="text-3xl font-bold text-[#191c1e] mb-6">Kepuasan Kamu Prioritas Kami</h3>

          <ul class="space-y-6">
            <li class="flex gap-4">
              <span class="material-symbols-outlined text-[#2563eb] text-2xl flex-shrink-0"
                >check_circle</span
              >
              <div>
                <p class="font-bold text-[#191c1e] mb-1">Hasil Dijamin</p>
                <p class="text-[#434655]">
                  Garansi 100% uang kembali kalau tidak puas dengan hasilnya.
                </p>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="material-symbols-outlined text-[#2563eb] text-2xl flex-shrink-0"
                >local_shipping</span
              >
              <div>
                <p class="font-bold text-[#191c1e] mb-1">Pickup & Delivery</p>
                <p class="text-[#434655]">Gratis antar jemput sepatu untuk area Jakarta Pusat.</p>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="material-symbols-outlined text-[#2563eb] text-2xl flex-shrink-0"
                >support_agent</span
              >
              <div>
                <p class="font-bold text-[#191c1e] mb-1">Konsultasi Gratis</p>
                <p class="text-[#434655]">
                  Tanya-tanya dulu soal treatment yang cocok buat sepatu kamu.
                </p>
              </div>
            </li>
          </ul>

          <div class="mt-10 p-6 bg-[#f2f4f6] rounded-2xl text-center">
            <p class="font-bold text-[#191c1e] mb-2">Langsung aja WhatsApp kami!</p>
            <p class="text-[#434655] mb-4">Fast response, langsung dilayani</p>
            <a
              :href="`https://api.whatsapp.com/send?phone=6285733125721&text=halo%20kak%20aku%20mau%20mau%20cuci%20sepatu%20`"
              target="_blank"
              class="bg-[#25D366] text-white px-8 py-3 rounded-xl font-bold inline-flex items-center gap-2 hover:bg-[#20bd5a] transition-colors no-underline"
            >
              <span class="material-symbols-outlined">chat</span> Chat Sekarang
            </a>
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
