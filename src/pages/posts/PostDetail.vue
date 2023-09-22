<template>
    <button @click="handleClickBack" class="btn btn-primary">Go Back</button>
    <div class="card mt-2">
        <div class="card-body" v-if="data">
            <h5 class="card-title">{{ data.title }}</h5>
            <p class="card-text">{{ data.body }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import axios from 'axios';
    import { onMounted, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    
    const route  = useRoute();
    const router = useRouter();

    const data = ref(null)

    onMounted(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then((RESPONSE) => {
            data.value = RESPONSE.data;
        })
        .catch((ERROR) => {
            
        })
    });

    const handleClickBack = () => {
        return router.go(-1);
    }
    
</script>

<style scoped>

</style>