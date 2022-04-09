<template>
  <div class="login">
    <div class="login__header">
      <div class="header__title">
        <img src="@/assets/img/logo.png" />
      </div>
      <ul class="header__list">
        <li><NuxtLink to="/register">新規登録</NuxtLink></li>
        <li><NuxtLink to="/login">ログイン</NuxtLink></li>
      </ul>
    </div>
    <div class="login__wrapper">
      <div class="login__inner">
        <h2 class="login__title">ログイン</h2>
        <input v-model="email" type="email" placeholder="メールアドレス" required />
        <input v-model="password" type="password" placeholder="パスワード" min=6 required />
        <button @click="login()">ログイン</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      if (!this.password || !this.email) {
        alert('メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert('ログインが完了しました')
          this.$router.replace('/home')
          })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/user-disabled':
              alert('ユーザーが無効になっています。')
              break
            case 'auth/user-not-found':
              alert('ユーザーが存在しません。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        });
    }
  }
}

</script>

<style>
body {
  background-color: rgb(0, 0, 20);
}
.header__title img {
  height: 36px;
}
.login__header {
  padding: 15px 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
}

.header__list{
  display: flex;
  list-style: none;
}

a {
  margin-right: 20px;
  text-decoration: none;
  color: white;
  font-size: 14px;
}

.login__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login__inner {
  background-color: white;
  height: 30%;
  width: 30%;
  border-radius: 5px;
  padding: 50px;
}
.login__title {
  text-align: center;
  margin-bottom: 20px;
}

input {
  width: 80%;
  margin: auto;
  margin-bottom: 15px;
  border-radius: 5px;
  height: 40px;
  display: block;
}

button {
  background-color:navy;
  display: block;
  margin: auto;
  border-radius: 30px;
  padding: 10px 30px;
  color: white;
}

</style>