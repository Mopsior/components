import { Button } from "@/components/ui/button"
import { MonitorCog, Moon, Sun } from "lucide-react"
import { motion } from "motion/react"

export const MotionMoon = motion.create(Moon)
export const MotionSun = motion.create(Sun)
export const MotionMonitorCog = motion.create(MonitorCog)
export const MotionButton = motion.create(Button)