import { createRouter, createWebHistory} from 'vue-router';

import PostList from '@/pages/posts/PostList.vue';
import PostDetail from '@/pages/posts/PostDetail.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'posts', component: PostList },
        { path: '/detail/:id', name: 'posts.detail', component: PostDetail }
    ],
});