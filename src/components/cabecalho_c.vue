<script setup>

</script>

<template>
    <div id="container">
        <div class="logo">
            <img src="../assets/logo/logo.png" alt="">
        </div>
        <div class="menu">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Drive</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>
#container {
    margin: 0;
    padding: 0;
    display: flex;
    background-color: red;
}

ul.menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
}

ul.menu li {
    margin-right: 20px;
}

ul.menu li a {
    text-decoration: none;
    color: black;
}
</style>