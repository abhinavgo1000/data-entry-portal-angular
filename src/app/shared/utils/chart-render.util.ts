import { Chart, ChartType } from 'chart.js/auto';

export class ChartRenderUtil {
    static renderChart(chartRef: HTMLCanvasElement, chartType: ChartType, chartData: any, chartOptions: any) {
        return new Chart(chartRef, {
            type: chartType,
            data: chartData,
            options: chartOptions
        });
    }
}
