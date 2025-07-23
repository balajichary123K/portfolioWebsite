<template>
    <!-- <nav class="display flex justify-between">
        <li  class="p-[5px] mr-4">Balaji Chary Kasthuri</li>
        <ul class="display flex ">
            <li class="p-[5px]">Resue   </li>
            <li class="p-[5px]">About   </li>
            <li class="p-[5px]">Projects</li>
            <li class="p-[5px]">Skills  </li>
            <li class="p-[5px]" >Contact</li>
            <li class="p-[5px]" >Hire Me</li>
        </ul>
    </nav> -->
    <nav class="bg-black shadow-md fixed top-0 left-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo / Name -->
        <div class="text-2xl font-bold text-red-600">
            <router-link to="/home" >
                <div class="bg-black p-4">
                    <h1 class="text-2xl font-semibold"> 
                        <span class="text-pink-500 font-[cursive]"> Balaji Chary </span>
                        <span class="text-white font-[cursive]">Kasthuri</span>
                    </h1>
                </div>
            </router-link>
             
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-6 text-white font-medium">
            <router-link to="/about"     class="hover:text-white-500">About     </router-link>
            <router-link to="/projects"  class="hover:text-white-500">Projects  </router-link>
            <router-link to="/resume"    class="hover:text-white-500">Resume    </router-link>
            <router-link to="/contact"   class="hover:text-white-500">Contact   </router-link>
            <router-link to="/skills"    class="hover:text-white-500">Skills    </router-link>
        </div>

        <!-- Hire Me Button -->
        <div class="hidden md:block">
          <a
            href="mailto:balajichary2020@gmail.com"
            class="bg-pink-600 text-white px-4 py-2 square-full rounded-lg hover:bg-red-700 transition duration-300"
          >
            Hire Me
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <div class="md:hidden">
          <button @click="menuOpen = !menuOpen" class="text-gray-700 focus:outline-none">
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                v-if="!menuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="menuOpen" class="md:hidden px-4 pb-4">
      <a href="#resue" class="block py-2 hover:text-white-500">Resue</a>
      <a href="#about" class="block py-2 hover:text-white-500">About</a>
      <a href="#projects" class="block py-2 hover:text-white-500">Projects</a>
      <a href="#skills" class="block py-2 hover:text-white-500">Skills</a>
      <a href="#contact" class="block py-2 hover:text-white-500">Contact</a>
      <a
        href="mailto:balajichary2020@example.com"
        class="block w-full text-center mt-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700"
      >
        Hire Me
      </a>
    </div>
  </nav>
  <!-- <div>
    <h1>Hi This is Home</h1>
  </div> -->
</template>
<script setup>
</script>