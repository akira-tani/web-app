<template>
  <div class="header__wrapper">
    <div class="header__title">
      <img src="@/assets/img/logo.png" />
    </div>
    <div class="header__outer">
      <h1 class="header__subtitle">ホーム</h1>
    </div>
  </div>
</template>

<style>
body {
  color: white;
}

.header__wrapper {
  display: flex;
  height: 70px;
}

.header__title {
  width: 25%;
  height: 100%;
}

.header__title img {
  height: 60%;
  padding: 15px
}

.header__outer {
  border-left: 1px solid;
  border-bottom: 1px solid;
  width: 75%;
}
.header__subtitle {
  font-size: 24px;
  margin: 20px;
}

</style>