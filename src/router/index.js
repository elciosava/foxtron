import DriveV from "@/views/driveV.vue";
import IndexV from "@/views/indexV.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Index",
      component: IndexV,
    },
    {
      path: "/Drive",
      name: "Drive",
      component: DriveV,
    },
  ],
});

export default router;
