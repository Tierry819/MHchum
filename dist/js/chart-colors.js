/**
 * Chart.js 統一色票配置
 * 用於整個系統的圖表顏色一致性
 */

const ChartColors = {
    // 背景色 (帶透明度)
    backgrounds: [
        'rgba(90, 141, 238, 0.6)',   // 1. Blue
        'rgba(247, 184, 75, 0.6)',   // 2. Orange
        'rgba(111, 211, 195, 0.6)',  // 3. Cyan
        'rgba(255, 111, 111, 0.6)',  // 4. Red
        'rgba(126, 89, 231, 0.6)',   // 5. Purple
        'rgba(63, 179, 127, 0.6)',   // 6. Green
        'rgba(162, 195, 245, 0.6)',  // 7. Light Blue
        'rgba(255, 154, 208, 0.6)',  // 8. Pink
        'rgba(176, 133, 90, 0.6)',   // 9. Brown
        'rgba(181, 181, 195, 0.6)'   // 10. Gray
    ],
    
    // 邊框色 (實色)
    borders: [
        '#5A8DEE',  // 1. Blue
        '#F7B84B',  // 2. Orange
        '#6FD3C3',  // 3. Cyan
        '#FF6F6F',  // 4. Red
        '#7E59E7',  // 5. Purple
        '#3FB37F',  // 6. Green
        '#A2C3F5',  // 7. Light Blue
        '#FF9AD0',  // 8. Pink
        '#B0855A',  // 9. Brown
        '#B5B5C3'   // 10. Gray
    ],

    // 輔助函數:取得指定數量的顏色
    getColors: function(count) {
        return {
            backgrounds: this.backgrounds.slice(0, count),
            borders: this.borders.slice(0, count)
        };
    },

    // 輔助函數:為多個 dataset 分配顏色
    assignColors: function(datasets) {
        datasets.forEach((dataset, index) => {
            const colorIndex = index % this.backgrounds.length;
            dataset.backgroundColor = this.backgrounds[colorIndex];
            dataset.borderColor = this.borders[colorIndex];
            dataset.borderWidth = dataset.borderWidth || 1;
        });
        return datasets;
    }
};
