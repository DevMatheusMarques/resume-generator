import type { ResumeData } from "@/types/resume"

export const defaultResumeData: ResumeData = {
  personalInfo: {
    name: "",
    title: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: [],
  languages: [],
}
