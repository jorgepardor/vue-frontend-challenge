/* Reto 3: Calendario de Eventos. En este ejercicio vamos a lidiar con errores
tanto de javascript como de maquetación. Tu papel es arreglar estos errores y
que la página, que actualmente no renderiza, cargue bien el contenido. Además,
vamos a añadir una funcionalidad al calendario: Queremos ver qué eventos hay
cada día. Como siempre, el diseño y la creatividad quedan del lado de tu lado,
¡Suerte! Siéntete libre de modificar tanto código como sea necesario, recuerda
que el código proporcionado es sólo un ejemplo. */

<script setup>
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import { computed, ref } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { eventsData } from "@/data/eventsData.js";

dayjs.extend(isToday);
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const viewDate = ref(dayjs());
let isCurrentMonth = ref(true);

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
  isCurrentMonth.value = dayjs().isSame(viewDate.value, "month");
};
const reset = function () {
  viewDate.value = dayjs();
  isCurrentMonth.value = true;
};

const eventsByDay = computed(() => {
  const events = {};
  for (const event of eventsData.value) {
    const day = dayjs(event.eventTime).format("YYYY-MM-DD");
    if (!events[day]) {
      events[day] = [];
    }
    events[day].push(event);
  }
  for (const day in events) {
    events[day].sort((a, b) => {
      return dayjs(a.eventTime).isAfter(dayjs(b.eventTime)) ? 1 : -1;
    });
  }

  return events;
});

let selectedDate = ref(dayjs().format("YYYY-MM-DD"));
console.log(selectedDate.value);
let matchingEvents = ref([]);

let selectDate = (date) => {
  selectedDate.value = date;
  console.log(date);
  matchingEvents.value = eventsData.value.filter(
    (event) =>
      dayjs(event.eventTime).format("YYYY-MM-DD") === selectedDate.value
  );
};

const formatDate = (dateString) => {
  const options = { day: "numeric", month: "long" };
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", options);
};
selectDate(dayjs().format("YYYY-MM-DD"));
</script>

<template>
  <MainLayout>
    <div class="flex flex-col items-center">
      <div class="w-full flex space-x-2 items-center justify-center lg:mt-16 px-10">
        <button
          class="calendar-buttton"
          @click="
            shiftMonth('-1');
            selectDate(
              dayjs().month() === dayjs(viewDate).month() && dayjs().year() === dayjs(viewDate).year()
                ? dayjs().format('YYYY-MM-DD')
                : dayjs(viewDate).startOf('month').format('YYYY-MM-DD')
            );
          "
        >
          <span class="material-symbols-outlined"> arrow_left_alt </span>
        </button>
        <span
          class="flex-grow lg:flex-grow-0 lg:w-96 text-lg lg:text-3xl text-secondary font-extrabold uppercase px-2 lg:px-8 text-center"
          >{{ viewDate.format("MMMM YYYY") }}</span
        >
        <button
          class="calendar-buttton"
          @click="
            shiftMonth('1');
            selectDate(
              dayjs().month() === dayjs(viewDate).month() && dayjs().year() === dayjs(viewDate).year()
                ? dayjs().format('YYYY-MM-DD')
                : dayjs(viewDate).startOf('month').format('YYYY-MM-DD')
            );
          "
        >
          <span class="material-symbols-outlined"> arrow_right_alt </span>
        </button>
      </div>
      <div class="h-10">
        <button
          v-show="!isCurrentMonth"
          class="w-fit bg-secondary text-tertiary border-b rounded-full px-4 py-1 flex items-center text-sm md:text-md mt-2"
          @click="reset()"
        >
          <span class="material-symbols-outlined pr-2 text-base"> event </span>
          Back to today
        </button>
      </div>
    </div>
    <div class="grid grid-cols-7 gap-1 max-w-full lg:max-w-7xl mx-auto mt-4 lg:mt-16">
      <div v-for="weekDay in weekDays" class="text-center">
        <div
          class="text-xs lg:text-md lg:font-bold lg:uppercase lg:pb-2 text-gray-500"
        >
          <span class="lg:hidden">{{ weekDay[0] }}</span>
          <span class="hidden lg:inline">{{ weekDay }}</span>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-7 max-w-full lg:max-w-7xl mx-auto mt-2">
      <div v-for="prepend in daystoPrepend" />
      <div
        v-for="day in days"
        class="border border-slate-200 flex flex-col h-14 lg:h-32 text-sm text-gray-500 text-bold"
      >
        <div
          :class="[day.isToday() ? 'bg-secondary text-tertiary mb-2' : '']"
          class="text-center mb-2"
        >
          <div class="opacity-60 lg:opacity-100">{{ day.format("D") }}</div>
        </div>

        <div
          v-for="(event, index) in eventsByDay[day.format('YYYY-MM-DD')]"
          :key="index"
        >
          <div
            class="bg-tertiary justify-self-start align-middle px-2 hidden lg:flex"
          >
            <span class="text-gray-500 text-xs text-left uppercase">
              {{ dayjs(event.eventTime).format("HH:mm") }}
            </span>
            <span
              class="text-secondary text-xs pl-2 flex-grow text-left uppercase"
            >
              {{ event.type }}
            </span>
          </div>
          <div
            v-show="
              eventsByDay[day.format('YYYY-MM-DD')].length > 0 && index === 0
            "
            class="flex justify-center"
          >
            <button
              @click="selectDate(day.format('YYYY-MM-DD'))"
              class="flex lg:hidden items-center justify-center w-full h-4 bg-amber-500 rounded-full mx-1"
            >
              <span class="text-sm text-secondary font-normal">{{
                eventsByDay[day.format("YYYY-MM-DD")].length
              }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <h6 class="text-center lg:hidden">{{ formatDate(selectedDate) }}</h6>
    <div
      class="bottom-10 z-20 mx-auto left-0 right-0 px-4 py-2 lg:hidden"
      v-if="matchingEvents && matchingEvents.length"
    >
      <div v-for="(event, index) in matchingEvents" :key="index">
        <span class="text-gray-500 text-xs text-left uppercase">
          {{ dayjs(event.eventTime).format("HH:mm") }}
        </span>
        <span class="text-secondary text-xs pl-2 flex-grow text-left uppercase">
          {{ event.type }}
        </span>
      </div>
    </div>
    <div class="bottom-10 z-20 mx-auto left-0 right-0 px-4 py-2 lg:hidden" v-else>
      <p class="text-gray-400 text-center text-sm">
        No hay eventos para este día.
      </p>
    </div>
  </MainLayout>
</template>

<style>
.calendar-buttton {
  @apply bg-tertiary text-secondary hover:bg-secondary hover:text-tertiary text-sm rounded-full h-8 w-8 flex items-center justify-center ease-in-out duration-300;
}
</style>
