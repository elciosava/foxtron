<script setup>

</script>

<template>
    <div id="container_cabecalho">
        <div class="logo">
            <img class="img_logo" src="../assets/logo/logo.png" alt="">
        </div>
        <div class="menu">
            <nav>
                
            </nav>
        </div>
    </div>
</template>

<style scoped>
#container_cabecalho {
    margin: 0;
    padding: 0;
    display: flex;
    background-color: #1a2041;
    height: 70px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #fff;
}
.logo{    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

}
.img_logo{
    width: 200px;
    height: auto;
}
.menu{
    padding: 20px;
    margin: 20px;
    font-size: 1.2em;
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
}

ul li {
    margin: 20px;
    padding: 10px;
    cursor: pointer;
}

ul li a {
    text-decoration: none;
    color: black;
}
</style>