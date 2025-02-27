import {createRouter, createWebHistory} from "vue-router";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/home',
            component:()=>import('@/pages/home/index.vue')
        },
        {
            path:'/hospital',
            component:()=>import('@/pages/hospital/index.vue'),
            children: [
                {
                    path: 'register',
                    component:()=>import('@/pages/hospital/register/index.vue'),
                },
                {
                    path: 'detail',
                    component:()=>import('@/pages/hospital/detail/index.vue'),
                },
                {
                    path: 'notice',
                    component:()=>import('@/pages/hospital/notice/index.vue'),
                },
                {
                    path: 'close',
                    component:()=>import('@/pages/hospital/close/index.vue'),
                },
                {
                    path: 'search',
                    component:()=>import('@/pages/hospital/search/index.vue'),
                },
                {
                    path: 'register_step1',
                    component:()=>import('@/pages/hospital/register/register_step1.vue'),
                    meta:{
                        title:'预约第一步'
                    }
                },
                {
                    path: 'register_step2',
                    component:()=>import('@/pages/hospital/register/register_step2.vue'),
                    meta:{
                        title:'预约第二步'
                    }
                }
            ]
        },
        {
            path: '/wxlogin',
            component: () => import('@/pages/wxlogin/index.vue')
        },
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/user',
            component: () => import('@/pages/user/index.vue'),
            children: [
                {
                    path: 'certification',
                    component: () => import('@/pages/user/certification/index.vue'),
                    meta:{
                        title:'实名认证'
                    }
                },
                {
                    path: 'order',
                    component: () => import('@/pages/user/order/index.vue'),
                    meta:{
                        title:'挂号订单'
                    }
                },
                {
                    path: 'patient',
                    component: () => import('@/pages/user/patient/index.vue'),
                    meta:{
                        title:'就诊人管理'
                    }
                },
                {
                    path: 'profile',
                    component: () => import('@/pages/user/profile/index.vue'),
                    meta:{
                        title:'账号信息'
                    }
                },
                {
                    path: 'feedback',
                    component: () => import('@/pages/user/feedback/index.vue'),
                    meta:{
                        title:'信息反馈'
                    }
                }
            ]
        }
    ],
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})