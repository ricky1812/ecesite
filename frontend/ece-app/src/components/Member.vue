<template>
	<div class="member-list">
		<h1>Member List</h1>
		<div v-if="member_list && member_list.length">
			<div v-for="ma in member_list" v-bind:key="ma">
				{{ma.name}}--Name
				<img v-bind:src="ma.image" width="100px" height="100px">
			</div>
		</div>
	</div>
	

</template>


<script>
import axios from 'axios';
export default{
	data(){
		return{
			member_list: []
		}
	},
	methods: {
	all: function () {
		
		axios.get('http://rounak1812.pythonanywhere.com/member/')
		.then( response =>{
			this.member_list = response.data
		});
	}
},
created() {
    this.all();
	},

};
	


</script>


<style>


</style>
