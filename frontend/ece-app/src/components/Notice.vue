<template>
	<div class="notice_list">
		<h1>Notice</h1>
		<div v-if="notices && notices.length">
			<div v-for="n in notices" v-bind:key="n">
				{{n.title}}
			</div>
		</div>
	</div>



</template>



<script>
import axios from 'axios';
export default {
	data() {
		return {
			notices: []
		}
	},


	methods: {
		all: function () {
		
		axios.get('http://127.0.0.1:8000/notice/')
		.then( response =>{
			this.notices = response.data
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