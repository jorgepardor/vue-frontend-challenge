<script setup>
import { ref } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import InfoBlock from "@/components/App/InfoBlock.vue";
import InfoBlockImage from "@/components/App/InfoBlockImage.vue";

/*
Reto 2: Vista de Datos del Usuario.

En este ejercicio queremos poner en práctica la creatividad y la capacidad de proponer mejoras
en los diseños por parte del desarrollador. En nuestro día a día trabajaremos con diseños definidos,
pero también vamos a valorar la capacidad de las personas a la hora de proponer estructuración para los datos.

Siéntete libre de modificar tanto código como sea necesario, recuerda que el código proporcionado es sólo un ejemplo.
*/

const userData = {
  id: 1,
  firstName: "Terry",
  lastName: "Medhurst",
  maidenName: "Smitham",
  age: 50,
  gender: "male",
  email: "atuny0@sohu.com",
  phone: "+63 791 675 8914",
  username: "atuny0",
  password: "9uQFF1Lh",
  birthDate: "2000-12-25",
  image:
    "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Brown&facialHairType=BeardMajestic&facialHairColor=Brown&clotheType=Hoodie&clotheColor=Black&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Smile&skinColor=Light'",
  bloodGroup: "A+",
  height: 189,
  weight: 75.4,
  eyeColor: "Green",
  hair: {
    color: "Black",
    type: "Strands",
  },
  domain: "slashdot.org",
  ip: "117.29.86.254",
  address: {
    address: "1745 T Street Southeast",
    city: "Washington",
    coordinates: {
      lat: 38.867033,
      lng: -76.979235,
    },
    postalCode: "20020",
    state: "DC",
  },
  macAddress: "13:69:BA:56:A3:74",
  university: "Capitol University",
  bank: {
    cardExpire: "06/22",
    cardNumber: "50380955204220685",
    cardType: "maestro",
    currency: "Peso",
    iban: "NO17 0695 2754 967",
  },
  company: {
    address: {
      address: "629 Debbie Drive",
      city: "Nashville",
      coordinates: {
        lat: 36.208114,
        lng: -86.58621199999999,
      },
      postalCode: "37076",
      state: "TN",
    },
    department: "Marketing",
    name: "Blanda-O'Keefe",
    title: "Help Desk Operator",
  },
  ein: "20-9487066",
  ssn: "661-64-2976",
};
</script>

<template>
  <MainLayout>
    <InfoBlockImage
      :info="userData"
      title="Basic Information"
      :imageData="{ type: 'image', url: userData.image }"
      :fields="[
        { keyPath: userData.username, label: 'Username', type: 'text' },
        { keyPath: userData.email, label: 'Email', type: 'text' },
        {
          keyPath: userData.password,
          label: 'Password',
          type: 'text',
          isSensitive: true,
        },
      ]"
    />

    <InfoBlock
      :info="userData"
      title="Personal Information"
      :fields="[
        { keyPath: userData.firstName, label: 'First Name', type: 'text' },
        { keyPath: userData.maidenName, label: 'Maiden Name', type: 'text' },
        { keyPath: userData.lastName, label: 'Last Name', type: 'text' },
        { keyPath: userData.phone, label: 'Phone', type: 'text' },
        {
          keyPath: userData.age,
          label: 'Age',
          type: 'number',
          isEditable: false,
        },
        { keyPath: userData.birthDate, label: 'Birth Date', type: 'date' },
        { keyPath: userData.university, label: 'University', type: 'text' },
        {
          keyPath: userData.ssn,
          label: 'SSN',
          type: 'text',
          isSensitive: true,
        },
      ]"
    />

    <InfoBlock
      :info="userData"
      title="Health Information"
      :fields="[
        { keyPath: userData.height, label: 'Height', type: 'number' },
        { keyPath: userData.weight, label: 'Weight', type: 'number' },
        { keyPath: userData.bloodGroup, label: 'Blood group', type: 'text' },
        { keyPath: userData.eyeColor, label: 'Eye Color', type: 'text' },
        { keyPath: userData.hair.color, label: 'Hair Color', type: 'text' },
        { keyPath: userData.hair.type, label: 'Hair Type', type: 'text' },
        { keyPath: userData.university, label: 'University', type: 'text' },
      ]"
    />

    <InfoBlockImage
      :info="userData"
      title="Address"
      :imageData="{ type: 'image', url: userData.image }"
      :fields="[
        { keyPath: userData.address.address, label: 'Address', type: 'text' },
        { keyPath: userData.address.city, label: 'City', type: 'text' },
        {
          keyPath: userData.address.postalCode,
          label: 'Postal Code',
          type: 'text',
        },
        { keyPath: userData.address.state, label: 'State', type: 'text' },
      ]"
    />

    <InfoBlock
      :info="userData"
      title="Work"
      :fields="[
        { keyPath: userData.company.title, label: 'Title', type: 'text' },
        {
          keyPath: userData.company.department,
          label: 'Department',
          type: 'text',
        },
        { keyPath: userData.company.name, label: 'Company Name', type: 'text' },
        {
          keyPath: userData.company.address.address,
          label: 'Address',
          type: 'text',
        },
        { keyPath: userData.company.address.city, label: 'City', type: 'text' },
        {
          keyPath: userData.company.address.state,
          label: 'State',
          type: 'text',
        },
        {
          keyPath: userData.ein,
          label: 'EIN',
          type: 'text',
          isSensitive: true,
        },
      ]"
    />

    <InfoBlock
      :info="userData"
      title="Bank Information"
      :fields="[
        { keyPath: userData.bank.currency, label: 'Currency', type: 'text' },
        { keyPath: userData.bank.cardType, label: 'Card Type', type: 'text' },
        {
          keyPath: userData.bank.cardNumber,
          label: 'Card Number',
          type: 'text',
          isSensitive: true,
        },
        {
          keyPath: userData.bank.cardExpire,
          label: 'Card Expire Date',
          type: 'text',
        },
        {
          keyPath: userData.bank.iban,
          label: 'IBAN',
          type: 'text',
          isSensitive: true,
        },
      ]"
    />
  </MainLayout>
</template>
