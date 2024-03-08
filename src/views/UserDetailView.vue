<script setup>
import { ref } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import InfoBlock from "@/components/App/InfoBlock.vue";
import { PersonalInfo } from "@/models/PersonalInfo";
import { AccountInfo } from "@/models/AccountInfo";
import { AddressInfo } from "@/models/AddressInfo";
import { HealthInfo } from "@/models/HealthInfo";
import { WorkInfo } from "@/models/WorkInfo";
import { BankInfo } from "@/models/BankInfo";
import { SessionInfo } from "@/models/SessionInfo";

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

const personalInfo = new PersonalInfo(userData);
const accountInfo = new AccountInfo(userData);
const addressInfo = new AddressInfo(userData);
const healthInfo = new HealthInfo(userData);
const workInfo = new WorkInfo(userData);
const bankInfo = new BankInfo(userData);
const sesionInfo = new SessionInfo(userData);

</script>

<template>
  <MainLayout>
    <InfoBlock title="Account" :fields="accountInfo" />
    <InfoBlock title="Personal" :fields="personalInfo" />
    <InfoBlock title="Health" :fields="healthInfo" />
    <InfoBlock title="Address" :fields="addressInfo" />
    <InfoBlock title="Work" :fields="workInfo" />
    <InfoBlock title="Bank" :fields="bankInfo" />
    <InfoBlock title="Session" :fields="sesionInfo" />
  </MainLayout>
</template>
