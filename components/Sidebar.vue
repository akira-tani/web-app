<template>
  <div class="sidebar__wrapper">
    <div class="sidebar__home">
      <NuxtLink to="/home">
        <img src="@/assets/img/home.png" />
        <p>ホーム</p>
      </NuxtLink>
    </div>
    <div class="sidebar__logout">
      <NuxtLink to="/login" @click.native="logout">
        <img src="@/assets/img/logout.png" />
        <p>ログアウト</p>
      </NuxtLink>
    </div>
    <div class="sidebar__share">
      <p class="post__title">シェア</p>
      <div class="post__content">
        <textarea  v-model="content" name="text" class="post__input" rows="10" />
        <button @click="share" class="post__btn">シェアする</button>
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
      uid: null,
      content: null,
      user_id: null,
      uesrLists: [],
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace('/login')
        })
    },
    async share() {
      const currentUser = firebase.auth().currentUser;
      this.uid = currentUser.uid;
      console.log(this.uid);
      const resData = this.$axios.get(
        "http://127.0.0.1:8000/api/user/" + this.uid
      );
      this.uesrLists = resData.data;
      const sendData = {
        content: this.content,
        user_id: this.userLists.id
      };
      await this.$axios.post("http://127.0.0.1:8000/api/post/", sendData);
    }
  },
}
</script>

<style>
.sidebar__wrapper {
  width: 100%;
}
.sidebar__home {
  display: flex;
}

.sidebar__home img {
  height: 28px;
  margin-right: 20px;
}

.sidebar__home a {
  display: flex;
  padding-left: 20px;
  margin-bottom: 15px;
  align-items: center;
  text-decoration: none;
  color: white;
}

.sidebar__logout img {
  height: 28px;
  margin-right: 20px;
}

.sidebar__logout a {
  display: flex;
  padding-left: 20px;
  margin-bottom: 30px;
  align-items: center;
  text-decoration: none;
  color: white;
}

.share__menu--logout img {
  height: 20px;
  margin-right: 20px;
}

.post__title {
  padding-left: 15px;
  margin-bottom: 10px;
}

.post__content {
  width: 90%;
}
.post__input {
  margin-left: 15px;
  margin-bottom: 10px;
  background-color: rgb(0, 0, 20);
  border-radius: 10px;
  resize: none;
  color: white;
  width: 90%;
}

.post__btn {
  background-color:navy;
  display: block;
  margin-left: auto;
  border-radius: 30px;
  padding: 10px 30px;
  color: white;
}

</style>