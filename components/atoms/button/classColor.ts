import { primary, secondary, tertiary } from './index.vue';

export const classColor = computed(() => ([
'bg-sunsetorange-300', primary.value,
'bg-sunsetorange-200', secondary.value,
'bg-sunsetorange-100', tertiary.value,
]));
