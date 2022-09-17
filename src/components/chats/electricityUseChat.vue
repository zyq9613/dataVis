<script setup>
	import { ref,onMounted,getCurrentInstance } from 'vue'
	import * as echarts from 'echarts'
	const vm = getCurrentInstance()
	const columnWidth = ref(0);
	const columnHeight = ref(0);
	onMounted(() => {
		let eleTopHeight = vm.refs.eleTop.clientHeight;
		let eleDataHeight = vm.refs.eleData.clientHeight;	
		let eleParentHeight = vm.parent.refs.cardMain.clientHeight;
		columnWidth.value = vm.parent.refs.cardMain.clientWidth - 40;
		columnHeight.value = eleParentHeight - eleDataHeight - eleTopHeight -35;
		setTimeout(() => {
			initChats()
		},0)
		
	})
	function initChats(){
		let chats = echarts.init(document.getElementById('chat-main'));
		chats.setOption({
	        tooltip: {
	          trigger: 'axis',
	          axisPointer: {
	            type: 'cross',
	            label: {
	              backgroundColor: '#6a7985'
	            }
	          }
	        },
	        legend: {
	          data: ['当日', '上日', ],
	          right:0,
	          top:20,
	          textStyle:{
	          	color:'#4a82e0'
	          }
	        },
	        // toolbox: {
	        //   feature: {
	        //     saveAsImage: {}
	        //   }
	        // },
	        grid: {
	        	right:0,
	          left: '3%',
	          right: '4%',
	          bottom: '3%',
	          containLabel: true
	        },
	        xAxis: [
	          {	
	          	// show:true,
	          	axisLabel:{
					    	color:'#4a82e0',
					    },
					    lineStyle:{
					    	color:'#4a82e0'
					    },
	            type: 'category',
	            boundaryGap: false,
	            data: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11', '12', '13', '14', '15', '16', '17','18','19','20','21', '22', '23', '24', '25', '26', '27','28','29','30']
	          }
	        ],
	        yAxis: [
	          {
	          	axisLine:{
	          		show:true
	          	},
	            type: 'value',
	            name:'kw.h',
	            splitLine: {
					      show:false
					    },
					    nameTextStyle:{
					    	color:'#4a82e0',
					    	padding:[0,0,0,-30]
					    },
					    axisLabel:{
					    	color:'#4a82e0'
					    }
	          }
	        ],
	        series: [
	          {
	            name: '当日',
	            symbol:'none',
	            type: 'line',
	            stack: 'Total',
	            lineStyle:{
	            	color:'#279686'
	            },
	            areaStyle: {
	            	color:{
	            		x: 0,
					    y: 0,
					    x2: 0,
					    y2: 1,
					    colorStops: [{
					      offset: 0, color: '#279686' // 0% 处的颜色
					    }, {
					      offset: 1, color: 'rgba(39,150,134,0)' // 100% 处的颜色
					   }],
	            	},
	            	shadowColor:'#000',
	            	shadowBlur: 1
	            },
	            emphasis: {
	              focus: 'series'
	            },
	            data: [0, 100, 200, 300, 400, 500, 600,0, 100, 200, 300, 400, 500, 600,0, 100, 200, 300, 400, 500, 600,0, 100, 200, 300, 400, 500, 600,200,300]
	          },
	          {
	            name: '上日',
	            symbol:'none',
	            type: 'line',
	            stack: 'Total',
	            lineStyle:{
	            	color:'#4a82e0'
	            },
	            areaStyle: {
	            	color:{
	            		x: 0,
					    y: 0,
					    x2: 0,
					    y2: 1,
					    colorStops: [{
					      offset: 0, color: 'rgba(39,150,134,0)' // 0% 处的颜色
					    }, {
					      offset: 1, color: '#4a82e0' // 100% 处的颜色
					   }],
	            	},
	            	shadowColor:'#000',
	            	shadowBlur: 1
	            },
	            emphasis: {
	              focus: 'series'
	            },
	            data: [0, 100, 200, 300, 400, 500, 600,0, 100, 200, 300, 400, 500, 600,0, 100, 200, 300, 400, 500, 600,0, 100, 200, 300, 400, 500, 600,200,300]
	          },
	          
	        ]
        });
        window.onresize = function () { // 自适应大小
          chats.resize();
        };
	}
</script>
<template>
	<div class="ele-box">
		<div class="ele-top" ref="eleTop">
			<div class="left">
				<span>总用电量</span>
				<span>10000kW.h</span>
			</div>
			<div class="right">
				<a href="javascript:;">年</a>
				<a href="javascript:;">月</a>
				<a href="javascript:;">日</a>
			</div>
		</div>
		<ul class="ele-data" ref="eleData">
			<li><span>100kW.h</span><span>当月能耗</span></li>
			<li><span>100kW.h</span><span>上月能耗</span></li>
			<li><span>+3.5%</span><span>同比</span></li>
		</ul>
		<div id="chat-main" :style="{width:columnWidth + 'px',height:columnHeight + 'px'}">
			
		</div>
	</div>
</template>
<style scoped>
	.ele-top{
		display: grid;
		grid-template-columns: 1fr auto;
		align-items: center;
	}
	.ele-top .left span{
		font-size: 14px;
		color: #4c74b8;
	}
	.ele-top .left span:nth-child(2){
		font-size: 17px;
		color: #fff;
		margin-left: 10px;
	}
	.ele-top .right a{
		display: inline-block;
		width: 25px;
		height: 25px;
		line-height: 25px;
		text-align: center;
		margin: 0 5px;
	}
	.ele-data{
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 50px;
		margin-top: 10px;
	}
	.ele-data li{
		background: url(../../assets/images/10.png) no-repeat center center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.ele-data li span{
		font-size: 14px;
		color: #fff;
	}
	.ele-data li:nth-child(3) span:nth-child(1){
		color: #ff0000;
	}
	.ele-data li span:nth-child(2){
		color: #4a82e0;
	}
</style>