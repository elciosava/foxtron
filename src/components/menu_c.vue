<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <div id="app">
        <!-- Cabeçalho -->
        <div id="container">
            <div class="logo">
                <img class="img_logo" src="../assets/logo/logo.png" alt="Logo">
            </div>
            <div class="menuzinho">
                <nav>

                </nav>
            </div>
        </div>

        <!-- Menu lateral -->
        <div :class="['sidebar', { open: isMenuOpen }]">
            <!-- Botão estilo hambúrguer -->
            <button class="hamburger" @click="toggleMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav v-if="isMenuOpen">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>

        <!-- Conteúdo principal -->
        <main>
            <p>Este é o conteúdo principal da sua página.</p>
        </main>
    </div>
</template>

<style scoped>
/* Estilo do cabeçalho */
#container {
    margin: 0;
    padding: 0;
    display: flex;
    background-color: #1a2041;
    height: 70px;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
    flex-direction: row;
    justify-content: space-around;
}

.logo {
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.img_logo {
    width: 200px;
    height: auto;
}
.menuzinho{
    width: 400px;
    height: 40px;
}

/* Menu lateral */
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 60px;
    height: 100%;
    background-color: #1a2041;
    color: white;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    transition: width 0.3s ease-in-out;
    overflow: hidden;
}

.sidebar.open {
    width: 250px;
}

.sidebar nav {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
}

.sidebar nav ul {
    list-style: none;
    padding: 0;
}

.sidebar nav ul li {
    margin: 20px 0;
}

.sidebar nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
}

.sidebar nav ul li a:hover {
    text-decoration: underline;
}

/* Botão estilo hambúrguer */
.hamburger {
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 10;
}

.hamburger span {
    display: block;
    width: 30px;
    height: 3px;
    background-color: white;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.sidebar.open .hamburger span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.sidebar.open .hamburger span:nth-child(2) {
    opacity: 0;
}

.sidebar.open .hamburger span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
}

/* Conteúdo principal */
main {
    padding: 20px;
}
</style>
