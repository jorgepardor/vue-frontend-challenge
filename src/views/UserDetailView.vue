/*
Reto 2: Vista de Datos del Usuario.

En este ejercicio queremos poner en práctica la creatividad y la capacidad de proponer mejoras
en los diseños por parte del desarrollador. En nuestro día a día trabajaremos con diseños definidos,
pero también vamos a valorar la capacidad de las personas a la hora de proponer estructuración para los datos.

Siéntete libre de modificar tanto código como sea necesario, recuerda que el código proporcionado es sólo un ejemplo.
*/

<script setup>

import InfoBlock from '@/components/userDetailView/InfoBlock.vue'
import { userData } from '@/data/userData.js'
import MainLayout from '@/layouts/MainLayout.vue'
import { AccountInfo } from '@/models/AccountInfo'
import { AddressInfo } from '@/models/AddressInfo'
import { BankInfo } from '@/models/BankInfo'
import { HealthInfo } from '@/models/HealthInfo'
import { PersonalInfo } from '@/models/PersonalInfo'
import { SessionInfo } from '@/models/SessionInfo'
import { WorkInfo } from '@/models/WorkInfo'

const personalInfo = new PersonalInfo(userData)
const accountInfo = new AccountInfo(userData)
const addressInfo = new AddressInfo(userData)
const healthInfo = new HealthInfo(userData)
const workInfo = new WorkInfo(userData)
const bankInfo = new BankInfo(userData)
const sesionInfo = new SessionInfo(userData)

</script>

<template>
  <MainLayout>
    <InfoBlock
      title="Account"
      :fields="accountInfo"
    />
    <InfoBlock
      title="Personal"
      :fields="personalInfo"
    />
    <InfoBlock
      title="Health"
      :fields="healthInfo"
    />
    <InfoBlock
      title="Address"
      :fields="addressInfo"
    />
    <InfoBlock
      title="Work"
      :fields="workInfo"
    />
    <InfoBlock
      title="Bank"
      :fields="bankInfo"
    />
    <InfoBlock
      title="Session"
      :fields="sesionInfo"
    />
  </MainLayout>
</template>
