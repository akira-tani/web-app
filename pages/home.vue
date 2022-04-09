<template>
  <div>
    <div class="header">
      <Header></Header>
    </div>
    <div class="home__content">      
      <div class="sidebar">
        <Sidebar></Sidebar>
      </div>
      <p>{{ message }} </p>
      <div class="share">
        <!-- <div class="share__inner" v-for="item in userLists" :key="item.id"> -->
        <div class="share__inner">
          <p class="share__name">aaaaa</p>
          <div class="share__heart">
            <img src="@/assets/img/heart.png"/>
          </div>
          <p class="share__count">0</p>
          <div class="share__delete">
            <img src="@/assets/img/cross.png"/>
          </div>
          <div class="share__tocomment">
            <img src="@/assets/img/detail.png"/>
          </div>
          <p class="share__content">aaaaaaaa</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.sidebar {
  width: 25%;
}
.home__content {
  display: flex;
}
</style>