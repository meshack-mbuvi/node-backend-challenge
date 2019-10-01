import { Router } from "express";
import personnelRoutes from "./personnel";
import taskRoutes from "./task";

const router = Router();
router.use("/personnel", personnelRoutes);
router.use("/tasks", taskRoutes);

export default router;
