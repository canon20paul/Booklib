<script setup>
import { ref } from 'vue'

// defineProps({
//   msg: String,
// })

const count = ref(0)
</script>

<template>
  <div class="BookDetail">
      <div>
                        <h3>
                            <span>Title</span><br/>
                            <span>Author</span><br/>
                            <span>Description</span>
                        </h3>
           <div>
                        <img  src="../assets/paul.jpg" />
                    </div>
                </div>
                

                <div class="Detail">
                            <h3>
                                <span>ID</span><br/>
                                <span>Author</span><br/>
                                <span>Description </span>
                            </h3>
           
                    </div>

              
            </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.BookDetail {
  
    min-width: 300px;
    max-width: calc(50% + 10vw);
    border-radius: 4px;
    padding:1em;
    background-color: #f7f7f7;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 20%);
    word-wrap: break-word;
    clear: left;
    display: flex;
    

}

.Detail {
    width: 20em;
}

</style>
