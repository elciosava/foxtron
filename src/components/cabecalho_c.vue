<script setup>

</script>

<template>
    <div id="container">
        <div class="logo">

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
    height: 70px;
}
.logo{
    background-color: blue;
    background-image: url('../assets/logo/logo.png');
}
.menu{
    background-color: green;
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
}

ul li {
    margin-right: 20px;
}

ul li a {
    text-decoration: none;
    color: black;
}
</style>