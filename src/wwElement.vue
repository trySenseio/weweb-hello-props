<template>
  <div class="counter-wrapper" :style="{ backgroundColor: content.backgroundColor }">
    <button @click="decrement" :style="{ backgroundColor: content.buttonColor, color: content.textColor }">➖</button>
    <span class="value" :style="{ color: content.textColor }">{{ count }}</span>
    <button @click="increment" :style="{ backgroundColor: content.buttonColor, color: content.textColor }">➕</button>
    <button @click="reset" class="reset" :style="{ color: content.textColor, borderColor: content.textColor }">Reset</button>
  </div>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
  },
  data() {
    return {
      count: this.content.start ?? 0,
    };
  },
  methods: {
    increment() {
      this.count += this.content.step ?? 1;
    },
    decrement() {
      this.count -= this.content.step ?? 1;
    },
    reset() {
      this.count = this.content.start ?? 0;
    },
  },
};
</script>

<style scoped>
.counter-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 8px;
}

button {
  padding: 6px 12px;
  border: none;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
}

.value {
  font-size: 20px;
  font-weight: bold;
}

.reset {
  background: none;
  border: 1px dashed;
}
</style>
