<template>
  <footer class="bg-[#f2f4f6] w-full py-32 border-t border-[#c3c6d7]">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 px-6 lg:px-16 max-w-[1200px] mx-auto">
      <!-- Brand Info -->
      <div class="col-span-1 md:col-span-1">
        <div class="flex items-center gap-3 mb-6">
          <img :src="logoSrc" alt="Seresik Wash Logo" class="h-10 w-10 object-contain" />
          <span class="text-2xl font-bold text-[#2563eb]">Seresik Wash</span>
        </div>
        <p class="text-base text-[#434655] mb-6">
          Jasa cuci dan restorasi sepatu, topi, dan tas terpercaya. Profesional, cepat, dan
          terjangkau.
        </p>
        <div class="flex gap-3">
          <!-- Instagram Icon -->
          <a
            href="https://instagram.com/seresikwash"
            target="_blank"
            class="w-10 h-10 rounded-full bg-[#e6e8ea] flex items-center justify-center hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] transition-all no-underline"
          >
            <!-- SVG Instagram -->
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              />
            </svg>
          </a>

          <!-- WhatsApp Icon -->
          <a
            :href="`https://wa.me/${store.businessInfo.whatsapp}?text=Halo%20Seresik%20Wash`"
            target="_blank"
            class="w-10 h-10 rounded-full bg-[#e6e8ea] flex items-center justify-center hover:bg-[#25D366] transition-all no-underline group"
          >
            <!-- SVG WhatsApp -->
            <svg
              class="w-5 h-5 fill-current text-[#434655] group-hover:text-white"
              viewBox="0 0 24 24"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
          </a>
        </div>
      </div>

      <!-- Perusahaan -->
      <div class="flex flex-col gap-4">
        <h4 class="font-bold text-[#191c1e] text-lg mb-2">Perusahaan</h4>
        <a href="#" class="text-[#434655] hover:text-[#2563eb] transition-colors no-underline"
          >Tentang Kami</a
        >
        <a
          href="#services"
          class="text-[#434655] hover:text-[#2563eb] transition-colors no-underline"
          >Layanan</a
        >
        <a
          href="#gallery"
          class="text-[#434655] hover:text-[#2563eb] transition-colors no-underline"
          >Galeri</a
        >
        <a
          href="#testimonials"
          class="text-[#434655] hover:text-[#2563eb] transition-colors no-underline"
          >Testimoni</a
        >
        <a
          href="#contact"
          class="text-[#434655] hover:text-[#2563eb] transition-colors no-underline"
          >Lokasi</a
        >
      </div>

      <!-- Layanan -->
      <div class="flex flex-col gap-4">
        <h4 class="font-bold text-[#191c1e] text-lg mb-2">Layanan</h4>
        <a
          href="#services"
          class="text-[#434655] hover:text-[#2563eb] transition-colors no-underline"
          >Shoes Treatment</a
        >
        <a
          href="#services"
          class="text-[#434655] hover:text-[#2563eb] transition-colors no-underline"
          >Hat Treatment</a
        >
        <a
          href="#services"
          class="text-[#434655] hover:text-[#2563eb] transition-colors no-underline"
          >Bag Treatment</a
        >
        <a
          href="#pricing"
          class="text-[#434655] hover:text-[#2563eb] transition-colors no-underline"
          >Harga</a
        >
        <a
          :href="`https://wa.me/${store.businessInfo.whatsapp}?text=Halo%2C%20mau%20booking%20nih`"
          target="_blank"
          class="text-[#434655] hover:text-[#25D366] transition-colors no-underline"
          >Booking</a
        >
      </div>

      <!-- Hubungi Kami -->
      <div class="flex flex-col gap-4">
        <h4 class="font-bold text-[#191c1e] text-lg mb-2">Hubungi Kami</h4>
        <div class="text-base space-y-3">
          <!-- WhatsApp -->
          <a
            :href="`https://wa.me/${store.businessInfo.whatsapp}?text=Halo%20Seresik%20Wash`"
            target="_blank"
            class="flex items-center gap-3 hover:text-[#2563eb] transition-colors no-underline text-[#434655] group"
          >
            <span class="material-symbols-outlined text-[#25D366] text-xl">chat</span>
            <span class="group-hover:text-[#25D366]">WhatsApp Kami</span>
          </a>

          <!-- Lokasi -->
          <a
            :href="store.businessInfo.mapsLink"
            target="_blank"
            class="flex items-center gap-3 hover:text-[#2563eb] transition-colors no-underline text-[#434655] group"
          >
            <span class="material-symbols-outlined text-red-500 text-xl">location_on</span>
            <span class="group-hover:text-red-500">Lihat di Google Maps</span>
          </a>
        </div>

        <!-- Jam Operasional -->
        <div class="mt-4 p-4 bg-white rounded-xl">
          <p class="text-sm font-bold text-[#191c1e] mb-2 flex items-center gap-2">
            <span class="material-symbols-outlined text-[#2563eb] text-base">schedule</span>
            Jam Operasional
          </p>
          <div class="text-sm text-[#434655] space-y-1">
            <p>Senin - Jumat: 09:00 - 19:00</p>
            <p>Sabtu: 10:00 - 17:00</p>
            <p class="text-red-500">Minggu: Tutup</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div
      class="mt-20 pt-8 border-t border-[#c3c6d7] text-center text-sm text-[#434655]/60 px-6 lg:px-16 max-w-[1200px] mx-auto"
    >
      <p class="mb-2">© {{ currentYear }} Seresik Wash. All rights reserved.</p>
      <p>Made with ❤️ di Lamongan | Jasa Cuci Sepatu Terpercaya</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const store = useAppStore()
const currentYear = new Date().getFullYear()

// Logo - ganti dengan path logo Anda
const logoSrc = '/logo.png'
</script>
