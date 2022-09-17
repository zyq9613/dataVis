<script setup>
	import electricityUseChat from '../components/chats/electricityUseChat.vue'
	import eleBarChat from '../components/chats/eleBarChat.vue'
</script>
<template>
	<div class="data-box border_box">
		<header>
			<div class="left"><img src="../assets/images/logo.png"></div>
			<div class="right">
				<div class="weather-box">
					<img src="../assets/images/6.png">
					<span>晴</span>
				</div>
				<span>2022.09.09</span>
				<span>20:00:00</span>
				<a href="javascript:;"><img src="../assets/images/7.png"></a>
			</div>
		</header>
		<div class="main-box">
			<aside>
				<div class="card">
					<div class="card-top">
						<img src="../assets/images/8_13.png">
						<span>设备信息</span>
					</div>
					<div class="card-main">
						<ul>
							<li><span>设备名称</span><span>馈线柜</span></li>
							<li><span>资产编号</span><span>20302931929314014412</span></li>
							<li><span>设备类型</span><span>馈线柜</span></li>
							<li><span>设备型号</span><span>NDAM-AN00/10</span></li>
						</ul>
					</div>
				</div>
				<div class="card">
					<div class="card-top">
						<img src="../assets/images/8_13.png">
						<span>设备信息</span>
					</div>
					<div class="card-main" ref="cardMain">
						<electricityUseChat  />
					</div>
				</div>
				<div class="card">
					<div class="card-top">
						<img src="../assets/images/8_13.png">
						<span>本年度用电排行TOP5(kW.h)</span>
					</div>
					<div class="card-main" ref="cardBar">
						<eleBarChat  />
					</div>
				</div>
			</aside>
			<main></main>
		</div>
	</div>
</template>

<style scoped>
	.data-box{
		width: 100%;
		margin: 0 auto;
		height: calc(100% - 82px);	
		position: absolute;
	}
	header{
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		display: grid;
		justify-content: space-between;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 70px;
		align-items: center;
		background: url(../assets/images/1.png) no-repeat center center;
		padding: 0 40px;
		height: 82px;
	}
	header .right{
		justify-self: end;
		display: grid;
		grid-template-columns:repeat(4,auto);
		grid-gap: 0 40px;
		align-items: center;
	}
	header .right span{
		color: #fff;
		font-size: 2rem;
	}
	header .right .weather-box img{
		margin-right: 10px;
	}

	.main-box{
		display: grid;
		grid-template-columns: 420px 1fr;
		grid-template-rows: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 25px 20px;
	}
	.main-box aside{
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 28% auto 27%;
		grid-row-gap: 20px;
		height: 100%;
	}
	.main-box aside .card{
		background: url(../assets/images/4.png) no-repeat center center;
		background-size: 100% 100%;
		
	}
	.main-box aside .card .card-top{
		height: 35px;
		line-height: 35px;
		background: url(../assets/images/5.png) no-repeat center center;
		background-size: cover;
		padding-left: 20px;
	}
	.main-box aside .card .card-top span{
		margin-left: 15px;
		color: #fff;
		font-size: 1rem;
	}
	.main-box aside .card .card-main{
		/*width: 100%;
		height: 100%;*/
		padding: 10px 20px 15px;
		height: calc(100% - 35px);
		box-sizing: border-box;
		background: url(../assets/images/3.png) no-repeat center center;
	}
	.main-box aside .card .card-main .ele-box{
		
	}
	.main-box aside .card .card-main ul{
		height: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, 1fr);
	}
	.main-box aside .card .card-main ul li{
		color: #fff;
		font-size: 1.5rem;
		display: grid;
		grid-template-columns: 1fr 2fr;
		justify-content: space-between;
		align-items: center;
		background: url(../assets/images/9.png) no-repeat center bottom;
		background-size: 100% auto;
	}
	.main-box aside .card .card-main ul li span:nth-child(1){
		color: #4c74b8;
	}
	.main-box aside .card .card-main ul li span:nth-child(2){
		justify-self: end;
	}
</style>