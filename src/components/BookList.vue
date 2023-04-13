<script setup>
import { ref ,computed} from 'vue'
import bookStore from '../storage/store'
import DemoGrid from  './Grid.vue'


// defineProps({
//   msg: String,
// })

// const count = ref(0)



    const { bookList, bookSearch, deleteBook, togglebook } = bookStore    
    
   
const searchQuery = ref('')
const gridColumns = ['title', 'Author']
const gridData=bookList

// console.log(books)
// const books = ref(filteredBooks())
        


</script>

<template>
  <div class="Booklist">
  <form id="search">
      <input name="query" v-model="searchQuery" placeholder="Type to Search ....">
    </form>
    <DemoGrid
      :data="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery">
    </DemoGrid>
      </div>
</template>

<style lang="scss" scoped>

input {
  width: 60%;
   font-size: 1rem;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  box-shadow: 0 0px 10px hsla(0, 0%, 0%, 0.2), 0 1px 2px hsla(0, 0%, 0%, 0.2);
  background-color: white;
  line-height: 1.5;
  margin: auto;
}

// .read-the-docs {
//   color: #888;
// }

// ul, li {
//     margin: 0;
//     padding: 0;
//   }

//   li {
//     border-top: rgb(112, 106, 106) solid 1px;
//     display: flex;
//     justify-content: space-between;
  
//     &:first-child {
//         border-top: none;
//     }

//     &:hover {
//             background: rgb(219, 217, 218);
//         }

//     label {
//         padding: 4px 8px;
//         width: 100%;
//         display: cursor;
        
       
//     }
    
//   }

  

//   .empty {
//       font-size: 14px;
//       color: rgb(71, 70, 70);
//   }
//  button.responses{
//     background-color: rgb(71, 70, 70);
//     color: white;
//     border: none;
//     border-radius: 40%;
//     height: fit-content;
//     margin: auto;
//     &:hover{
//       background-color: rgb(71, 70, 110);
//     }

// }



.Booklist {
  
    min-width: 300px;
    max-width: calc(45% + 10vw);
    border-radius: 4px;
    padding:1em;
    background: white;
    box-shadow: 0px 4px 12px rgb(0 0 0 / 8%);
    word-wrap: break-word;
    

}



</style>
