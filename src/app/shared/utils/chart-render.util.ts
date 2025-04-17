import { Chart, ChartType } from 'chart.js/auto';

export class ChartRenderUtil {
    /**
     * Renders a chart dynamically based on the provided type, data, and options.
     * @param chartRef - The HTMLCanvasElement where the chart will be rendered.
     * @param chartType - The type of chart to render (e.g., 'bar', 'line', 'pie').
     * @param chartData - The data for the chart.
     * @param chartOptions - The configuration options for the chart.
     * @returns The rendered Chart instance.
     */
    static renderChart(
        chartRef: HTMLCanvasElement,
        chartType: ChartType,
        chartData: any,
        chartOptions: any
    ): Chart {
        return new Chart(chartRef, {
            type: chartType,
            data: chartData,
            options: chartOptions
        });
    }

    /**
     * Renders a bar chart.
     * @param chartRef - The HTMLCanvasElement where the chart will be rendered.
     * @param chartData - The data for the bar chart.
     * @param chartOptions - The configuration options for the bar chart.
     * @returns The rendered Chart instance.
     */
    static renderBarChart(chartRef: HTMLCanvasElement, chartData: any, chartOptions: any): Chart {
        return this.renderChart(chartRef, 'bar', chartData, chartOptions);
    }

    /**
     * Renders a line chart.
     * @param chartRef - The HTMLCanvasElement where the chart will be rendered.
     * @param chartData - The data for the line chart.
     * @param chartOptions - The configuration options for the line chart.
     * @returns The rendered Chart instance.
     */
    static renderLineChart(chartRef: HTMLCanvasElement, chartData: any, chartOptions: any): Chart {
        return this.renderChart(chartRef, 'line', chartData, chartOptions);
    }

    /**
     * Renders a pie chart.
     * @param chartRef - The HTMLCanvasElement where the chart will be rendered.
     * @param chartData - The data for the pie chart.
     * @param chartOptions - The configuration options for the pie chart.
     * @returns The rendered Chart instance.
     */
    static renderPieChart(chartRef: HTMLCanvasElement, chartData: any, chartOptions: any): Chart {
        return this.renderChart(chartRef, 'pie', chartData, chartOptions);
    }
}
