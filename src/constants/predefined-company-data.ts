const task1 = { name: 'Setup virtual office' };
const task2 = { name: 'Set mission & vision' };
const task3 = { name: 'Select business name' };
const task4 = { name: 'Buy domains' };
const task5 = { name: 'Create roadmap' };
const task6 = { name: 'Competitor analysis' };
const task7 = { name: 'Release marketing website' };
const task8 = { name: 'Release MVP' };

const phase1 = { name: 'Foundation', tasks: [task1, task2, task3, task4] };
const phase2 = { name: 'Discovery', tasks: [task5, task6] };
const phase3 = { name: 'Delivery', tasks: [task7, task8] };

export default {
  phases: [phase1, phase2, phase3],
};
