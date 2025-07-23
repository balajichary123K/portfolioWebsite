<template>
    <div>
        <Header></Header>
    </div>
    <div class="flex min-h-screen min-w-screen bg-black ">
        <!-- leftside-part-of-the-Home -->
        <div class="w-1/2 flex justify-center items-center pl-10">
            <div >
                <h1>HELLO,I'M</h1>
                <div class="pt-2 pb-2" >
                    <h1 class="text-2xl font-semibold bt-2 pb-2">
                        <span class="text-pink-700">B</span>
                        <span>alaji</span>
                        <span class="text-pink-700"> C</span>
                        <span>hary</span>
                        <span class="text-pink-700"> k</span>
                        <span>asthuri</span>
                    </h1>
                </div>
                <h1 class="text-pink-700 text-2xl font-semibold pt-2 pb-2">Aspiring Tech Professional</h1>
                <p class="pt-2 pb-2"> I build web apps using Vue.js, Supabase, and Tailwind CSS, and</p>
                <p class="pb-2">I love exploring Python automation and algorithmic trading. Always</p>
                <p class="pb-2">learning, always building — check out my projects below!</p>
                <div class="flex  gap-10 mt-6 pt-10 pb-2">
                    <button class="bg-pink-600 hover:bg-pink-700 font-semibold px-4 py-2 rounded-lg transition duration-300" >Download Resume</button>
                    <button class="bg-black hover:bg-gray-900 hover:text-green-500 hover:border-green-500 text-pink-600 border border-pink-600 font-semibold px-4 py-2 rounded-lg ml-4"> Contact Me </button>
                </div>
        
            </div>
        </div>
        <div class="w-1/2 flex justify-center " >
            <div>
                <div class="flex justify-center items-center min-h-screen bg-black">
                    <div class="relative w-64 h-64 rounded-full border-4 border-pink-600 overflow-hidden bg-black ">
                        <div src="" alt="Profile" class="w-full h-full object-cover grayscale ">
                            <div class="absolute bottom-0 w-full h-4 bg-pink-600"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            

    </div>
  
</template>
<script setup>
import Header from './Header.vue';
</script>