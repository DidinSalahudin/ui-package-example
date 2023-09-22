<template>
    <h3>List Posts</h3>
    <table class="table table-bordered mt-2">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Body</th>
                <th scope="col">Option</th>
            </tr>
        </thead>
        <tbody v-show="datas.length > 0">
            <tr v-for="(data, index) in datas" :key="data.id">
                <td>{{ index + 1 }}</td>
                <td>{{ data.title }}</td>
                <td>{{ data.body }}</td>
                <td> <router-link :to="{ name: 'posts.detail', params: { id: data.id } }"> View </router-link> </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import axios from 'axios';
    import { onMounted, Ref, ref } from 'vue';

    type ListDatas = {
        userId?: Number,
        id?: Number,
        title?: String
        body?: String
    }

    const datas: Ref<Array<ListDatas>> = ref([]);

    onMounted(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((RESPONSE) => {
            datas.value = RESPONSE.data;
            console.log(RESPONSE.data);
            
        })
        .catch((ERROR) => {        
        })
    })
</script>

<style scoped>

</style>