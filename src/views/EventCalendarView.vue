<script setup>
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import { computed, ref } from "vue";

import MainLayout from "@/layouts/MainLayout.vue";
/*
Reto 3: Calendario de Eventos.

En este ejercicio vamos a lidiar con errores tanto de javascript como de maquetación. Tu papel es
arreglar estos errores y que la página, que actualmente no renderiza, cargue bien el contenido.
Además, vamos a añadir una funcionalidad al calendario: Queremos ver qué eventos hay cada día.
Como siempre, el diseño y la creatividad quedan del lado de tu lado, ¡Suerte!

Siéntete libre de modificar tanto código como sea necesario, recuerda que el código proporcionado es sólo un ejemplo.
*/

const eventsData = ref([
  { eventTime: "2023-11-09T00:00:00", type: "concert" },
  { eventTime: "2023-11-11T00:00:00", type: "meetup" },
  { eventTime: "2023-11-12T00:00:00", type: "meetup" },
  { eventTime: "2023-11-15T00:00:00", type: "concert" },
  { eventTime: "2023-11-19T00:00:00", type: "cinema" },
  { eventTime: "2023-11-21T00:00:00", type: "concert" },
  { eventTime: "2023-11-24T00:00:00", type: "meetup" },
  { eventTime: "2023-11-25T00:00:00", type: "meetup" },
  { eventTime: "2023-11-29T00:00:00", type: "cinema" },
  { eventTime: "2024-03-30T17:00:00", type: "meetup" },
  { eventTime: "2024-03-24T22:00:00", type: "concert" },
  { eventTime: "2024-03-27T11:00:00", type: "concert" },
  { eventTime: "2024-03-30T08:00:00", type: "concert" },
  { eventTime: "2024-03-14T23:00:00", type: "cinema" },
  { eventTime: "2024-03-05T17:00:00", type: "cinema" },
  { eventTime: "2024-03-19T07:00:00", type: "meetup" },
  { eventTime: "2024-03-18T19:00:00", type: "theatre" },
  { eventTime: "2024-03-09T03:00:00", type: "concert" },
  { eventTime: "2024-03-06T12:00:00", type: "theatre" },
  { eventTime: "2024-03-25T21:00:00", type: "theatre" },
  { eventTime: "2024-03-31T17:00:00", type: "theatre" },
  { eventTime: "2024-03-09T17:00:00", type: "theatre" },
  { eventTime: "2024-03-18T06:00:00", type: "meetup" },
  { eventTime: "2024-03-19T15:00:00", type: "cinema" },
  { eventTime: "2024-03-21T03:00:00", type: "concert" },
  { eventTime: "2024-03-23T13:00:00", type: "concert" },
  { eventTime: "2024-03-03T06:00:00", type: "meetup" },
  { eventTime: "2024-03-08T20:00:00", type: "theatre" },
  { eventTime: "2024-03-30T05:00:00", type: "meetup" },
  { eventTime: "2024-03-31T03:00:00", type: "meetup" },
  { eventTime: "2024-03-10T12:00:00", type: "theatre" },
  { eventTime: "2024-03-06T08:00:00", type: "meetup" },
  { eventTime: "2024-03-29T20:00:00", type: "theatre" },
  { eventTime: "2024-03-23T03:00:00", type: "concert" },
]);

dayjs.extend(isToday);

const viewDate = ref(dayjs());

const daystoPrepend = computed(() => {
  const startOfMonth = dayjs(viewDate.value).startOf("month");
  const startOfFirstWeek = startOfMonth.startOf("week");
  const daysToFirstDay = startOfMonth.diff(startOfFirstWeek, "day");

  return Array.from(new Array(daysToFirstDay).keys());
});

const days = computed(() => {
  const ranges = [];
  const startOfRange = dayjs(viewDate.value).startOf("month").add(-1, "day");
  const endOfRange = dayjs(viewDate.value).endOf("month").add(-1, "day");
  let currentDate = startOfRange;

  while (currentDate.isBefore(endOfRange) || currentDate.isSame(endOfRange)) {
    currentDate = currentDate.add(1, "day");
    ranges.push(currentDate);
  }
  return ranges;
});

const shiftMonth = function (amount) {
  viewDate.value = dayjs(viewDate.value).add(amount, "month");
};
const reset = function () {
  viewDate.value = dayjs();
};

const eventsByDay = computed(() => {
  const events = {}
  for (const event of eventsData.value) {
    const day = dayjs(event.eventTime).format('YYYY-MM-DD')
    if (!events[day]) {
      events[day] = []
    }
    events[day].push(event)
  }
  for (const day in events) {
    events[day].sort((a, b) => {
      return dayjs(a.eventTime).isAfter(dayjs(b.eventTime)) ? 1 : -1
    })
  }

  return events
})

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
</script>

<template>
  <MainLayout>
    <div class="flex flex-col items-center">
      <div class="w-full flex space-x-2 items-center justify-center">
        <button
          class="bg-primary text-white rounded-xl px-4 py-2"
          @click="shiftMonth('-1')"
        >
          Previous
        </button>
        <span class="text-3xl">{{ viewDate.format("MMMM YYYY") }}</span>
        <button
          class="bg-primary text-white rounded-xl px-4 py-2"
          @click="shiftMonth('1')"
        >
          Next
        </button>
      </div>
      <button
        class="w-fit text-primary border-b rounded-xl px-4 py-2"
        @click="reset()"
      >
        Today
      </button>
    </div>
    <div class="grid grid-cols-7 gap-1">
      <div v-for="weekDay in weekDays" class="text-center">
        <div>{{ weekDay }}</div>
      </div>
    </div>
    <div class="grid grid-cols-7">
      <div v-for="prepend in daystoPrepend" />
      <div
        v-for="day in days"
        class="border border-slate-200 flex flex-col h-32"
      >
        <div :class="[day.isToday() ? 'bg-red-300' : '']" class="text-center">
          <div>{{ day.format("D") }}</div>
        </div>

        <div
          v-for="(event, index) in eventsByDay[day.format('YYYY-MM-DD')]"
          :key="index"
        >
          <div
            style="
              background-color: aquamarine;
              text-transform: capitalize;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            "
          >
            <span style="color: gray; font-size: 0.75rem; text-align: left">
              {{ dayjs(event.eventTime).format("HH:mm") }}
            </span>
            <span
              style="
                color: black;
                font-size: 1rem;
                font-weight: bold;
                text-align: left;
                padding-left: 0.5rem;
                flex-grow: 1; 
              "
            >
              {{ event.type }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>
