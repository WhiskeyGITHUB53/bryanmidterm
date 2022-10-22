<template>
    <h1></h1>

    <div class="col">
	
    <div class="container">
  <div class="content">
    <h1>Old Testament</h1>
    <div class="card" style="border-radius:65px;">
		  <div class="card-header" style="border-radius:65px; background-color: red;" >
			  <p id="mmk" style="text-align: center; padding: 18px;">{{covidData.The_Old_Testament}}</p>
			  
		  </div>
		
		</div>

  </div>
  <div class="content">
    <h1 >New Testament</h1>
    <div class="card" style="border-radius:65px;">
		  <div class="card-header" style="border-radius:65px; background-color: blue;" >
			  <p id="mmk" style="text-align: center; padding: 18px;">{{covidData.The_New_Testament}}</p>
			  
		  </div>
		
		</div>
  </div>
</div>
	</div>


    <v-img fill-height
		  src={{covidData.thumbnail}}
		  class="mb-5">
  
		</v-img>
    
      
    
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios'

 
  const  covidData=ref([])

   
  async function getCovidData () {
       axios({
                method:'get',
                url:'https://ajith-holy-bible.p.rapidapi.com/GetBooks', 
                headers: {
            'X-RapidAPI-Key': '6337a3b3b6mshdf42295427ad5d6p15a551jsn6a13088ebfa4',
            'X-RapidAPI-Host': 'ajith-holy-bible.p.rapidapi.com'
                        }  
            }).then( response => {
       covidData.value=(response.data)
       console.log(covidData.value)
      })
  
  }


  
   onMounted( async () => {
       await getCovidData()
   })

  
</script>


<style lang="scss">
.col {
  padding-left: 50px;
  padding-right: 50px;
  border: 1px solid rgba(76, 175, 79, 0);
}
.row {

  padding-left: 50px;
  padding-right: 50px;
  border: 1px solid rgba(76, 175, 79, 0);
}
#mmk{
  color: rgb(255, 255, 255);
}



</style>