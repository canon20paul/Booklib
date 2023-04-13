import { reactive, computed } from 'vue';
import { generateId } from './helpers'

const bookState = reactive({
    books: [
        {
            id: generateId(),
            title: 'Things Fall Apart',
            Author: 'Chinua Achabwe',
            desc: 'African Tales',
            status: 'available'
        },
        {
            id: generateId(),
            title: 'Banana Republic',
            Author: 'Chakwenza R.',
            desc: 'Politics',
            status: 'available'
        },
        {
            id: generateId(),
            title: 'Oliver Twist',
            Author: 'Paul Malongo',
            desc: 'Comic',
            status: 'available'
        },
        {
            id: generateId(),
            title: 'Kenyan Bled',
            Author: 'Ngugu Wasiongo',
            desc: 'Politics',
            status: 'available'
        },
        {
            id: generateId(),
            title: 'Adam and Eve',
            Author: 'Cohen Jules',
            desc: 'African Tales',
            status: 'available'
        }
    ]
})

const newBook = (desc) => {
    if (!desc) throw '`task` was not defined'
    todoState.todos.unshift({
        id: generateId(),
        title,
        Author,
        desc,
        status: 'available'
    })

}

const bookSearch=(search,list)=> {
    if(search){
    // return bookState.books.filter(book => {
    //     return book.title.toLowerCase().includes(search.value.toLowerCase())
    // })

        return list.filter((book) =>
            book.title.toLowerCase().includes(search.value.toLowerCase())
        );
    
}
    return bookState.books
}



const bookList = computed(() => {
    return bookState.books
})

const getBook = bookId => {
    if (!bookId) throw '`Book_ID` was not defined'
    return bookState.books.find(todo => todo.id == bookId)
}

const deleteBook = bookId => {
    if (!bookId) throw '`Book_ID` was not defined'
    const index = bookState.todos.findIndex(todo => todo.id == bookId)
    bookState.books.splice(index, 1)
}

const togglebook = bookId => {
    if (!bookId) throw '`Book_ID` was not defined'
    const book = bookState.books.find(books => book.id == bookId)
    book.status = !book.status
}

// const clearCompletedTodos = () => {
//     const toDelete = todoState.todos.filter(todo => todo.done)
//     toDelete.map(todo => deleteTodo(todo.id))
// }

// const totalcompleted = computed(() => {
//     return todoState.todos.filter(todo => todo.done).length
// })



export default {
    bookState,
    bookList,
    bookSearch,
    newBook,
    getBook,
    deleteBook,
    togglebook,
//     clearCompletedTodos,
//     totalcompleted
}