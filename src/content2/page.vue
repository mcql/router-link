<template>
    <!-- 单页面传值+接收 -->
    <div>{{id}}</div>
</template>

<script>
export default {
    data(){
        return{
            id : this.$route.params.id
        }
    },
    watch:{
        '$route':function(){
            this.id = this.$route.params.id
        }
    }
}
</script>

<style>
</style>
