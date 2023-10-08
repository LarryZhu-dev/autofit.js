<script setup lang="ts">
import { AutoFit } from "autofit.js-vue";
</script>

<template>
    <AutoFit id="container" className="container" designWidth="1920" designHeight="1080">
        <div class="block-1">尺寸为固定值的盒子</div>
        <div class="block-2">尺寸为百分比的盒子</div>
    </AutoFit>
</template>

<style scoped>
.container {
    background-color: aliceblue;
    position: relative;
}

.block-1 {
    padding: 10px;
    background-color: aquamarine;
    position: absolute;
    left: 10px;
    top: 20px;
    width: 500px;
    height: 200px;
    border: 1px solid #000;
}

.block-2 {
    padding: 10px;
    background-color: beige;
    position: absolute;
    left: 600px;
    top: 20px;
    width: calc(100% - 1200px);
    height: calc(100% - 100px);
    border: 1px solid #000;
}
</style>
