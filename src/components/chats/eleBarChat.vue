<script setup>
	import * as echarts from 'echarts'
	import { ref, onMounted, getCurrentInstance } from 'vue'
	const vm = getCurrentInstance()
	const columnWidth = ref(0);
	const columnHeight = ref(0);
	function initChats(){
		let chats = echarts.init(document.getElementById('ele-bar'));
		chats.setOption({
	          tooltip: {
			    trigger: 'axis',
			    axisPointer: {
			      // Use axis to trigger tooltip
			      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
			    }
			  },
			  legend: {
			  	show:false
			  },
			  grid: {
			    left: '0',
			    top:0,
			    right: '4%',
			    bottom: '3%',
			    containLabel: true
			  },
			  xAxis: {
			    type: 'value',
			    splitLine: {
			      show:false
			    },
			    axisLabel:{
			    	color:'#4a82e0'
			    }
			  },
			  yAxis: {
			    type: 'category',
			    data: ['NDM5-1', 'NDM5-2', 'NDM5-3', 'NDM5-4', 'NDM5-5'],
			    axisLabel:{
			    	color:'#4a82e0'
			    }
			  },
			  series: [
			    {
			      // name: 'Direct',
			      barWidth:'30%',
			      type: 'bar',
			      stack: 'total',
			      label: {
			        show: true,
			        position: 'right',
			        fontSizt:15,
			        color:'#ade3ff'
			      },
			      emphasis: {
			        focus: 'series'
			      },
			      itemStyle:{
			      	shadowColor: '#ade3ff',
    				shadowBlur: 10,
			      	decal:{
			      		symbol:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHCAYAAADNufepAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ2MCwgMjAyMC8wNS8xMi0xNjowNDoxNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmYjgxMDc5ZS1iZjc3LTQxYjAtYWI2Zi03ZWFmMTI5ZTBhYzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjFEQTJGRjcyREM3MTFFREI3QzFBM0EwMTUxNzg3MkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjFEQTJGRjYyREM3MTFFREI3QzFBM0EwMTUxNzg3MkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjEgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ZTQ0YWM1Ny0wNjRjLTQ5ZDUtYjZkOS02NTJlYzgxYWVkNTMiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5NWE3MmRhYi04NDEwLTQ4NDAtOTZlNi0xYmE3ZmM5Njg4MzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz42AooEAAAALklEQVR42mJc+/j/fwYg+PKL4QUTAxT8AwrBOQz/GRixyzAyonL+wzkgBkCAAQBD8wxxyWemdAAAAABJRU5ErkJggg==',
			      		symbolSize:1,
			      		color:'#ade3ff',
			      		dashArrayX: [3, 1],
					    dashArrayY: [1, 0],
					    rotation: 0
			      	}
			      },
			      data: [44, 29, 20, 30, 10]

			    },
			    // 
			  ]
        });
        window.onresize = function () { // 自适应大小
          chats.resize();
        };
	}
	onMounted(() => {	
		console.log(vm.parent.refs.cardBar)
		let eleParentHeight = vm.parent.refs.cardBar.clientHeight;
		columnWidth.value = vm.parent.refs.cardBar.clientWidth - 40;
		columnHeight.value = eleParentHeight -35;
		setTimeout(() => {
			initChats()
		},0)
	})
</script>
<template>
	<div class="ele-bar" id="ele-bar" :style="{width:columnWidth + 'px',height:columnHeight + 'px'}"></div>
</template>