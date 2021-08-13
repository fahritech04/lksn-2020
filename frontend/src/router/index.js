import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import ( /* webpackChunkName: "about" */ '../views/About.vue')
        }
    },
    // {
    //     path: '/division',
    //     name: 'Division',
    //     component: function() {
    //         return import ('../views/Division.vue')
    //     }
    // },
    {
        path: '/division',
        component: () =>
            import ('../views/Division.vue'),
        children: [{
                path: '',
                name: 'Data_Division',
                component: () =>
                    import ('../components/Division/Data')
            },
            {
                path: 'add',
                name: 'Add',
                component: () =>
                    import ('../components/Division/Add')
            },
            {
                path: 'edit/:id',
                name: 'Edit',
                component: () =>
                    import ('../components/Division/Edit')
            }
        ]
    },
    {
        path: '/user',
        component: () =>
            import ('../views/User.vue'),
        children: [{
                path: '',
                name: 'Data_User',
                component: () =>
                    import ('../components/User/Datauser')
            },
            {
                path: 'add',
                name: 'Add_user',
                component: () =>
                    import ('../components/User/Adduser')
            },
            {
                path: 'edit/:id',
                name: 'Edituser',
                component: () =>
                    import ('../components/User/Edituser')
            }
        ]
    },
    {
        path: '/poll',
        component: () =>
            import ('../views/Poll.vue'),
        children: [{
                path: '',
                name: 'Data_Poll',
                component: () =>
                    import ('../components/Poll/Datapoll')
            },
            {
                path: 'add',
                name: 'Add_Poll',
                component: () =>
                    import ('../components/Poll/Addpoll')
            },
            {
                path: 'edit:/id',
                name: 'Edit_Poll',
                component: () =>
                    import ('../components/Poll/Editpoll')
            }
        ]
    },
    {
        path: '/choice',
        component: () =>
            import ('../views/Choice.vue'),
        children: [{
                path: '',
                name: 'Data_Choice',
                component: () =>
                    import ('../components/Choice/Datachoice')
            },
            {
                path: 'add',
                name: 'Add_Choice',
                component: () =>
                    import ('../components/Choice/Addchoice')
            },
            {
                path: 'edit:/id',
                name: 'Edit_Choice',
                component: () =>
                    import ('../components/Choice/Editchoice')
            }
        ]
    },
    {
        path: '/vote',
        component: () =>
            import ('../views/Vote.vue'),
        children: [{
                path: '',
                name: 'Data_Vote',
                component: () =>
                    import ('../components/Vote/Datavote')
            },
            {
                path: 'add',
                name: 'Add_Vote',
                component: () =>
                    import ('../components/Vote/Addvote')
            },
            {
                path: 'edit:/id',
                name: 'Edit_Vote',
                component: () =>
                    import ('../components/Vote/Editvote')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router