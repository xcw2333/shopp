<template>
    <div>
        <el-button type='info' @click="user_tui">退出登陆</el-button>
        <span>这里是home</span>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
    methods: {
        user_tui(){
            window.sessionStorage.tokin=''
            this.$router.replace({path:'/login'})
        }
    },
}
</script>

<style lang="less" scoped>
        
</style>