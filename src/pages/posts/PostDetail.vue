<template>
    <button @click="handleClickBack" class="btn btn-primary">Go Back</button>
    <div class="card mt-2">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ body }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import axios from 'axios';
    import { onMounted, Ref, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    
    const route  = useRoute();
    const router = useRouter();

    const title: Ref<null> = ref(null)
    const body: Ref<null>  = ref(null)

    onMounted(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
        .then((RESPONSE) => {
            title.value = RESPONSE.data.title;
            body.value  = RESPONSE.data.body;
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