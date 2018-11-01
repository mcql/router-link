<template>
    <div>
        <!-- 单页面传值+接收 -->
        <header>
            <ul class="nav">
                <li v-for="item in navList" :key="item.id">
                    <router-link :to="'/pagea1/' + item.id">{{item.title}}</router-link>
                </li>
            </ul>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          id: 1,
          title: "a1"
        },
        {
          id: 2,
          title: "a2"
        },
        {
          id: 3,
          title: "a3"
        },
        {
          id: 4,
          title: "a4"
        }
      ]
    };
  }
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  line-height: 32px;
}
.nav li {
  width: 25%;
  text-align: center;
}
</style>
