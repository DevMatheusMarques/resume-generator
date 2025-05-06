"use client"

import type { ResumeData, Template } from "@/types/resume"
import ModernTemplate from "./templates/modern-template"
import ClassicTemplate from "./templates/classic-template"
import CreativeTemplate from "./templates/creative-template"
import AtsTemplate from "./templates/ats-template"

interface ResumePreviewProps {
  resumeData: ResumeData
  template: Template
}

export default function ResumePreview({ resumeData, template }: ResumePreviewProps) {
  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate resumeData={resumeData} />
      case "classic":
        return <ClassicTemplate resumeData={resumeData} />
      case "creative":
        return <CreativeTemplate resumeData={resumeData} />
      case "ats":
        return <AtsTemplate resumeData={resumeData} />
      default:
        return <ModernTemplate resumeData={resumeData} />
    }
  }

  return (
    <div id="resume-preview" className="max-w-4xl mx-auto">
      {renderTemplate()}
    </div>
  )
}
