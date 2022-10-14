<template>
  <div>
    <form v-on:submit.prevent="login">
      <input type="email" placeholder="email" v-model="form.email" />
      <input type="password" class="border" v-model="form.password" />
      <button type="submit">Login</button>
    </form>
    <p class="text-red-600" v-if="form.valid">Invalid</p>
    {{ errors.email[0] }}
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const errors = ref({});
    const form = reactive({
      email: "",
      password: "",
      valid: false,
    });

    const login = () => {
      if (form.email != "" && form.password != "") {
        store.dispatch("login", form).catch((e) => {
          if (e.response.status == 422) {
            errors.value = e.response.data.errors;
          }
        });
      }
      form.valid = true;
    };

    return { login, form, errors };
  },
};
</script>
