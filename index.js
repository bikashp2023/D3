// const margin = { top: 20, bottom: 120, left: 30, right: 20};
// const width = 500;
// const height = 500;
// const graphWidth = width - margin.left - margin.right;
// const graphHeight = height - margin.top - margin.bottom;
// const svg = d3
//   .select(".canvas")
//   .append("svg")
//   .attr("width", 500)
//   .attr("height", 500);
// const graph = svg.append("g").attr('transform', `translate(${margin.left}, ${margin.top})`);

// const data = [
//   {
//     name: "Burj Khalifa",
//     height: "350",
//   },
//   {
//     name: "Shanghai Tower",
//     height: "263.34",
//   },
//   {
//     name: "Abraj Al-Bait Clock Tower",
//     height: "254.04",
//   },
//   {
//     name: "Ping An Finance Centre",
//     height: "253.20",
//   },
//   {
//     name: "Lotte World Tower",
//     height: "230.16",
//   },
// ];
// const x = d3
//   .scaleBand()
//   .domain(data.map((item) => item.name))
//   .range([0, 450])
//   .paddingInner(0.3)
//   .paddingOuter(0.3);

// const y = d3
//   .scaleLinear()
//   .domain([0, d3.max(data, (d) => d.height)])
//   .range([graphHeight, 0]);

//   const xLabel = svg.append('g').attr('transform',`translate(130, ${graphHeight + 120})`).append('text').text("bikash")
//   .attr('font-size', '20px').attr('fill', 'black').attr('dominant-baseline', 'hanging')

//   xLabel.attr('x', 50)
//       .attr('y', 0);

// graph.selectAll("rect")
//   .data(data)
//   .enter()
//   .append("rect")
//   .attr("width", function (d) {
//     return x.bandwidth();
//   })
//   .attr("height", function (d) {
//     return graphHeight - y(d.height);
//   })
//   .attr("x", (d, i) => x(d.name))
//   .attr("y", (d) => {
// 	console.log("y", y(d.height));
// 	return y(d.height) 
// 	})
//   .attr("fill", function (d) {
//     var color = d3.rgb(
//       Math.random() * 255,
//       Math.random() * 255,
//       Math.random() * 255
//     );
//     return color;
//   });

// //ticks
// const xAxisGroup = graph.append('g').attr('transform', `translate(0, ${graphHeight})`)
// const yAxisGroup = graph.append('g');

// const xAxis = d3.axisBottom(x);
// const yAxis = d3.axisLeft(y);
// xAxisGroup.call(xAxis);
// yAxisGroup.call(yAxis);

// xAxisGroup.selectAll("text").attr('transform', `rotate(-40)`).attr('text-anchor', 'end')
