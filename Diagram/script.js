// Data Penjualan dan Biaya per Bulan
const data = {
    bulan: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    penjualan: [1200, 1500, 1700, 1600, 1800, 2000, 2100, 1900, 2300, 2400, 2200, 2500],
    biaya: [800, 1000, 1100, 1050, 1200, 1300, 1400, 1350, 1500, 1450, 1400, 1550]
  };
  
  // Grafik Batang untuk Penjualan dan Biaya per Bulan
  const chart1 = {
    x: data.bulan,
    y: data.penjualan,
    type: 'bar',
    name: 'Penjualan',
    marker: { color: 'blue' }
  };
  
  const chart2 = {
    x: data.bulan,
    y: data.biaya,
    type: 'bar',
    name: 'Biaya',
    marker: { color: 'red' }
  };
  
  // Layout untuk Grafik Batang
  const layout1 = {
    title: 'Penjualan dan Biaya per Bulan',
    barmode: 'group',
    xaxis: { title: 'Bulan' },
    yaxis: { title: 'Jumlah' }
  };
  
  // Grafik Pie untuk Proporsi Penjualan dan Biaya
  const pieChart = {
    labels: ['Penjualan', 'Biaya'],
    values: [data.penjualan.reduce((a, b) => a + b, 0), data.biaya.reduce((a, b) => a + b, 0)],
    type: 'pie',
    marker: { colors: ['#66b3ff', '#ff6666'] }
  };
  
  // Layout untuk Grafik Pie
  const layout2 = {
    title: 'Proporsi Penjualan dan Biaya Tahun Ini'
  };
  
  // Membuat Grafik Batang (Penjualan dan Biaya)
  Plotly.newPlot('chart1', [chart1, chart2], layout1);
  
  // Membuat Grafik Pie
  Plotly.newPlot('chart2', [pieChart], layout2);
  