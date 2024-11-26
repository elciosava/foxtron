<script setup>
import { ref, onMounted } from 'vue';

// Controle do menu
const isMenuOpen = ref(false);

// Define o estado inicial baseado no tamanho da tela
const initializeMenuState = () => {
    isMenuOpen.value = window.innerWidth >= 768; // Aberto no desktop, fechado no celular
};

// Alterna o menu ao clicar no botão hambúrguer
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// Define o estado inicial ao carregar
onMounted(() => {
    initializeMenuState();
});
</script>

<template>
    <div id="container">
        <div id="app">
            <div :class="['sidebar', { open: isMenuOpen }]">
                <button class="hamburger" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav v-if="isMenuOpen">
                    <ul>
                        <li><RouterLink to="index.html">Home</RouterLink></li>
                        <li><RouterLink to="drive">Drive</RouterLink></li>
                        <li><RouterLink to="instantaneagran">Instantaneagran</RouterLink></li>
                        <li><RouterLink to="contact">Contact</RouterLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>


<style scoped>
/* Estilo do cabeçalho */
#container {
    margin-left: 250px;
    padding: 0;
    display: flex;
    height: calc(100vh - 70px);
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

.menuzinho {
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
    margin-top: 70px;
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

@media (max-width: 768px) {
    #container {
        margin: 0;
        padding: 0;
        display: flex;
        height: calc(100vh - 70px);
        align-items: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #fff;
        flex-direction: row;
        justify-content: space-around;
    }
}
</style>
