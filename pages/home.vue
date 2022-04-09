<template>
  <div>
    <div class="header">
      <Header></Header>
    </div>
    <div class="home__content">      
      <div class="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div class="share">
        <div class="share__inner" v-for="item in postLists" :key="item.id">
        <!-- <div class="share__inner"> -->
          <div class="share__inner--upper">
            <h2 class="share__name">{{ item.name }}</h2>
            <div class="share__heart">
              <img src="@/assets/img/heart.png"/>
            </div>
            <h2 class="share__count">0</h2>
            <div class="share__delete">
              <img src="@/assets/img/cross.png"/>
            </div>
            <div class="share__tocomment">
              <img src="@/assets/img/detail.png"/>
            </div>
          </div>
          <p class="share__content">{{ item.content }}</p>
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
.share {
  width: 75%;
}
.share__inner {
  border-left : 1px solid white;
  border-bottom : 1px solid white;
  padding: 20px;
}
.share__inner--upper {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.share__heart img {
  height: 28px;
}
.share__delete img {
  height: 28px;
}
.share__tocomment img {
  height: 28px;
}
.share__name, .share__heart, .share__count {
  margin-right: 10px;
}
.share__delete {
  margin-right: 50px;
}

</style>