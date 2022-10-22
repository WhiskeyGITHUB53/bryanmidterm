<template>
	<v-card
		 :loading="loading"
		 class="mx-auto my-12"
		 max-width="850"
		 elevation="18"
		 color="white"
	
	  >

  
  
		<div style="padding: 10px;">
		  <v-row style="margin: 5px;">
		  <v-col
			cols="12"
			sm="6">
			<p>First Number: <input type='number' v-model.number="firstNum" @change='answer'></p>
  
		  </v-col>
		  <v-col
			cols="12"
			sm="6">
			
        <p>Second Number: <input type='number' v-model.number="secondNum" @change='answer'></p>
		  </v-col>
		</v-row>
	
		
		<v-card-title><h1 style="margin-top: 10px;" align="center"><strong>Result</strong></h1></v-card-title>
  
		<v-divider class="mb-5"></v-divider>
  
		<v-row class="mt-5">
		  <v-col
			cols="12"
			sm="6"
			height="200"
		  >
			<v-card
			  style="background-color: yellow; color:black; text-align: center; margin: 10px;"
			  elevation="4"
			>
			  <v-card-title>Sum: </v-card-title>
			  <v-card-text><strong>{{sum}}</strong></v-card-text>
			</v-card>
		  </v-col>
		  <v-col
			cols="12"
			sm="6"
			height="200"
		  >
			<v-card
			  style="background-color: white; color:black; text-align: center; margin: 10px;"
			  elevation="4"
			>
			  <v-card-title>Difference: </v-card-title>
			  <v-card-text><strong>{{difference}}</strong></v-card-text>
			</v-card>
		  </v-col>
  
		  <v-col
			cols="12"
			sm="6"
			height="200"
		  >
			<v-card
			  style="background-color: yellow; color:black; text-align: center; margin: 10px;"
			  elevation="4"
			>
			  <v-card-title>Product: </v-card-title>
			  <v-card-text><strong>{{product}}</strong></v-card-text>
			</v-card>
		  </v-col>
  
		  <v-col
			cols="12"
			sm="6"
			height="200"
		  >
			<v-card
			  style="background-color: white; color:black; text-align: center; margin: 10px;"
			  elevation="4"
			>
			  <v-card-title>Quotient: </v-card-title>
			  <v-card-text><strong>{{quotient}}</strong></v-card-text>
			</v-card>
		  </v-col>

		  <v-col
			cols="12"
			sm="6"
			height="200"
		  >
			<v-card
			  style="background-color: yellow; color:black; text-align: center; margin: 10px;"
			  elevation="4"
			>
			  <v-card-title>Average: </v-card-title>
			  <v-card-text><strong>{{avg}}</strong></v-card-text>
			</v-card>
		  </v-col>
		</v-row>
		</div>
		
	  </v-card>
	
	 </template>
	
	<script>
export default {
    el: '#app',
    computed: {
        answer: function () {
            this.sum = this.firstNum + this.secondNum;
            this.difference = this.firstNum - this.secondNum;
            this.product = this.firstNum * this.secondNum;
            this.quotient = this.firstNum / this.secondNum;
            this.avg = this.sum / 2;
        }
    },
    data() {
        return {
            firstNum: null,
            secondNum: null,
            sum: null,
            difference: null,
            product: null,
            quotient: null,
            avg: null,
        }
    }
}
	</script>