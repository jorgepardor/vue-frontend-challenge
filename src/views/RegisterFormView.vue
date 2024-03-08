/* Reto 1: Validación de formularios En este formulario de registro, vamos a
pedir a los usuarios que nos proporcionen un nombre, un email y una contraseña
(dos veces). Las validaciones serán las siguientes: Nombre Requerido | Máximo 64
letras Email Requerido | Formato Email Contraseña Requerido | 8 caracteres
alfanuméricos, un número y un caracter especial Repetir Contraseña Requerido |
Misma contraseña que la anterior Siéntete libre de modificar tanto código como
sea necesario, recuerda que el código proporcionado es sólo un ejemplo. */

<script setup>
import { ref, computed } from "vue";
import InputField from "@/components/registerFormView/InputField.vue";
import MainLayout from "@/layouts/MainLayout.vue";

let username = ref("");

let email = ref("");

let password = ref("");

let confirmPassword = ref("");

let submitClicked = ref(false);

const usernameIsValid = computed(() => username.value.length <= 64);

const emailIsValid = computed(() =>
  /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)
);

const passwordIsValid = computed(() =>
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    password.value
  )
);

const confirmPasswordIsValid = computed(
  () => password.value === confirmPassword.value && password.value.length > 0
);

const formIsValid = computed(
  () =>
    usernameIsValid.value &&
    emailIsValid.value &&
    passwordIsValid.value &&
    confirmPasswordIsValid.value
);

const submit = () => {
  if (formIsValid.value) {
    const payload = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    console.log(payload);
  }
};
</script>

<template>
  <MainLayout>
    <div class="flex items-center justify-center min-h-full">
      <form
        class="bg-white p-10 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/4"
        @submit.prevent="submit"
      >
        <InputField
          v-model="username"
          label="Username"
          type="text"
          :validator="usernameIsValid"
          errorMessage="El nombre de usuario debe tener un máximo de 64 caracteres."
        />
        <InputField
          v-model="email"
          label="Email"
          type="email"
          :validator="emailIsValid"
          errorMessage="Por favor, introduce un email válido."
        />
        <InputField
          v-model="password"
          label="Password"
          type="password"
          :validator="passwordIsValid"
          errorMessage="La contraseña debe tener al menos 8 caracteres, incluyendo al menos un número y un caracter especial."
        />
        <InputField
          v-model="confirmPassword"
          label="Confirm Password"
          type="password"
          :validator="confirmPasswordIsValid"
          errorMessage="Las contraseñas no coinciden."
        />
        <button
          type="submit"
          class="bg-secondary w-full mt-6 rounded-lg px-4 py-2 text-lg text-tertiary font-semibold font-sans"
          @click="submitClicked = true"
        >
          Register
        </button>
        <p v-if="submitClicked && !formIsValid" class="text-red-500 text-sm mt-2">
          Hemos encontrado un error, por favor revisa los datos.
        </p>
        <p v-else-if="submitClicked && formIsValid" class="text-green-500 text-sm mt-2">
          Tus datos han sido confirmados.
        </p>
      </form>
    </div>
  </MainLayout>
</template>
