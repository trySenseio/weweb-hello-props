<template>
  <canvas ref="chartCanvas"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  props: {
    content: { type: Object, required: true },
  },
  mounted() {
    this.renderChart();
  },
  watch: {
    content: {
      deep: true,
      handler() {
        this.renderChart();
      },
    },
  },
  methods: {
    renderChart() {
      if (!this.$refs.chartCanvas) return;

      try {
        const ctx = this.$refs.chartCanvas.getContext('2d');
        if (this._chart) this._chart.destroy();

        const type = this.content.chartType || 'bar';
        const label = this.content.datasetLabel || 'My Data';
        const labels = JSON.parse(this.content.labels || '[]');
        const data = JSON.parse(this.content.data || '[]');
        const color = this.content.chartColor || '#4E6574';

        this._chart = new Chart(ctx, {
          type,
          data: {
            labels,
            datasets: [
              {
                label: label,
                data: data,
                backgroundColor: color,
                borderColor: color,
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      } catch (err) {
        console.error('Chart rendering error:', err);
      }
    },
  },
  beforeDestroy() {
    if (this._chart) this._chart.destroy();
  },
};
</script>

<style scoped>
canvas {
  width: 100% !important;
  height: 300px !important;
}
</style>
