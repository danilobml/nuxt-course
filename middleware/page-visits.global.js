export default defineNuxtRouteMiddleware(() => {
  const pageVisitCount = useVisitCount();
  pageVisitCount.value++;
});
