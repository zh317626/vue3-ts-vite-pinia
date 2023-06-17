<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/store/user'; //路径别名，引入store
const userStore = useUserStore();

//storeToRefs 会跳过所有的 action 属性
const { userInfo, token, newName } = storeToRefs(userStore);
console.log(newName);


//action 属性直接解构
// const { updateUserInfo, updateAge, updateToken } = userStore;

defineProps<{ msg: string }>();

console.log(import.meta.env.VITE_BASE_URL); // 使用变量


const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped lang="scss">
.read-the-docs {
  color: #888;
}
p {
  // color: $test-color;
}
</style>
