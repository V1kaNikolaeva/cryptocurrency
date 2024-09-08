<template>
    <nav class="nav-container">
        <ul class="nav-list">
            <NavItem v-for="(item, index) in items" :item="item" :key="index"/>
            <div class="theme-checkout"> 
                <button @click="toggleTheme" class="checkbox">
                    <div class="circle"></div>
                </button>
            </div>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { computed, shallowRef } from 'vue';
import type { Ref } from 'vue'
import NavItem from './NavItem.vue'
import { useThemeStore } from '@/stores/theme';
import type { Items } from '@/ts/interfaces';

const items: Items[] = [{ name: 'Currency', pathName: 'currency' }, { name: 'Saved currency', pathName: 'saved' }]

const position: Ref<boolean> = shallowRef(true)
const themeStore = useThemeStore() 
const toggleTheme = () => {
    position.value = !position.value
    themeStore.toggle()
} 
const toggleCircle = computed(() => {
    return position.value ? 'start' : 'end'
})
</script>

<style scoped>
.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    background-color: var(--bg);
    padding-left: 30px;
    padding-right: 30px;
}
.nav-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.theme-checkout {
    max-width: 100px;
    margin: 0 auto;
}
.checkbox {
    display: flex;
    justify-content: v-bind(toggleCircle);
    background-color: var(--toggle);
    border: none;
    border-radius: 14px;
    width: 74px;
    height: 32px;
    padding: 4px;
    cursor: pointer;
    transition: .5s;
}
.circle {
    height: 100%;
    width: 24px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255);
}
.checkbox:hover {
    .circle {
        -webkit-box-shadow: 0 0 20px var(--box-shadow);
        box-shadow: 0 0 20px var(--box-shadow);
        transition: .5s;
        background-color: var(--toggle-circle-hover);
    }
}




</style>