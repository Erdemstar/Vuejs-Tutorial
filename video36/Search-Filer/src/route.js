import Add from './components/addBlogs.vue'
import Show from './components/showBlogs.vue'

export default{
    routes: [
        {
            path: "/add",component: Add , name: "add"
        },
        {
            path: "/show",component: Show , name: "show"
        }
    ]
}