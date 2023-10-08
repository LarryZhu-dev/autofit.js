<script setup>
import { useAutoFit } from "../hooks/useAutoFit";

const props = defineProps({
    id: {
        type: Number,
        required: true,
        default: "container",
    },
    designWidth: {
        type: Number,
        default: 1920,
    },
    designHeight: {
        type: Number,
        default: 1080,
    },
    className: String,
});

useAutoFit(props.id, {
    designWidth: props.designWidth,
    designHeight: props.designHeight,
});
</script>

<template>
    <div
        :id="id"
        :class="{ 'autoFit-js-vue-container': true, [className]: className }"
        :style="{ width: `${designWidth ?? 1920}px`, height: `${designHeight ?? 1980}px` }"
    >
        <slot></slot>
    </div>
</template>
