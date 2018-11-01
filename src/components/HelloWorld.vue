<template>
  <div>
    <header>
      <p>页面跳转</p>
      <ul class="nav">
        <li v-for="item in navList" :key="item.id">
          <router-link :to="item.id">{{item.title}}</router-link>
        </li>
      </ul>
      <p>局部跳转</p>
      <ul class="nav">
        <li v-for="itemx in navList1" :key="itemx.id">
          <router-link :to="{name : itemx.id}">{{itemx.title}}</router-link>
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
        { id: "page1", title: "首页" },
        { id: "page2", title: "分类1" },
        { id: "page3", title: "分类2" },
        { id: "page4", title: "分类3" }
      ],
      navList1: [
        { id: "Pagex1", title: "首页" },
        { id: "Pagex2", title: "分类1" },
        { id: "Pagex3", title: "分类2" },
        { id: "Pagex4", title: "分类3" }
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
p {
  font-size: 18px;
  line-height: 40px;
}
</style>
