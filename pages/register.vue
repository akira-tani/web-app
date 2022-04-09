<template>
  <div class="register">
    <div class="register__header">
      <div class="header__title">
        <img src="@/assets/img/logo.png" />
      </div>
      <ul class="header__list">
        <li><NuxtLink to="/register">新規登録</NuxtLink></li>
        <li><NuxtLink to="/login">ログイン</NuxtLink></li>
      </ul>
    </div>
    <div class="register__wrapper">
      <div class="register__inner">
        <h2 class="register__title">新規登録</h2>
        <input v-model="name" type="name" placeholder="ユーザーネーム" max=20 required />
        <input v-model="email" type="email" placeholder="メールアドレス" required />
        <input v-model="password" type="password" placeholder="パスワード" min=6 required />
        <button class="register__btn" @click="register()">新規登録</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      uid: null,
    }
  },
  methods: {
    register() {
      if (!this.name || !this.password || !this.email) {
        alert('ユーザーネーム、メールアドレスまたはパスワードが入力されていません。')
        return
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          const sendData = {
            name: this.name,
            email: this.email,
            password: this.password,
            uid: data.user.uid,
          }
          console.log(sendData);
          this.$axios.post("http://127.0.0.1:8000/api/user/", sendData);
          this.$router.replace('/home')
          })
        .catch((error) => {
          switch (error.code) {
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。')
              break
            case 'auth/email-already-in-use':
              alert('このメールアドレスはすでに使われています。')
              break
            case 'auth/weak-password':
              alert('パスワードは6文字以上で入力してください。')
              break
            default:
              alert('エラーが起きました。しばらくしてから再度お試しください。')
              break
          }
        });
    },
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
.register__header {
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

.register__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.register__inner {
  background-color: white;
  height: 30%;
  width: 30%;
  border-radius: 5px;
  padding: 50px;
}
.register__title {
  text-align: center;
  margin-bottom: 20px;
  color: black
}

input {
  width: 80%;
  margin: auto;
  margin-bottom: 15px;
  border-radius: 5px;
  height: 40px;
  display: block;
}

.register__btn {
  background-color:navy;
  display: block;
  margin: auto;
  border-radius: 30px;
  padding: 10px 30px;
  color: white;
}

</style>