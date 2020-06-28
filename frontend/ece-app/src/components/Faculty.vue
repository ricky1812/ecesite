<template>
	<div class="list">
		<div v-if="faculty_list && faculty_list.length">
			<div v-for="fa in faculty_list" v-bind:key="fa">
				{{fa.name}} - Name
				<img v-bind:src="fa.image" width="100px" height="100px">
			</div>
		</div>
	</div>


</template>


<script>
import axios from 'axios';
export default{

	data (){
		return {
			faculty_list :[]
		}
	},
	methods: {
	all: function () {
		
		axios.get('http://127.0.0.1:8000/faculty/')
		.then( response =>{
			this.faculty_list = response.data
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