import studentManagement from "/public/assets/svgs/material-symbols_manage-accounts-outline.svg";
import performanceTracking from "/public/assets/svgs/ic_round-track-changes.svg";
import Assignments from "/public/assets/svgs/si_assignment-line.svg";
import customSubscription from "/public/assets/svgs/stash_plan.svg";

export const benefits = [
  {
    id: 1,
    src: studentManagement,
    alt: "material user icon",
    bgColor: "pink",
    title: "Student Onboarding & Management",
    description:
      "Add new students easily with automatic login credentials. Keep all student data in one place, making it simple for teachers and administrators to access.",
  },
  {
    id: 2,
    src: performanceTracking,
    alt: "tracking icon",
    bgColor: "dark-blue",
    title: "Performance Tracking",
    description:
      "Send weekly email reports to parents with detailed student progress. Keep everyone informed with real-time insights.",
  },
  {
    id: 3,
    src: Assignments,
    alt: "assignment icon",
    bgColor: "blue",
    title: "Assignments & Exams",
    description:
      " Give students easy access to assignments, practice questions, and mock exams. Teachers can manage grading and track progress—all on one platform. ",
  },
  {
    id: 4,
    src: customSubscription,
    alt: "subscription icon",
    bgColor: "green",
    title: "Custom Subscription Plans",
    description:
      "Flexible plans for schools of all sizes, starting from 50 students to 500 and more, with custom options for larger schools.",
  },
];
