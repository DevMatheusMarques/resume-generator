"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Save, Printer, Moon, Sun } from "lucide-react"
import ResumeForm from "@/components/resume-form"
import ResumePreview from "@/components/resume-preview"
import { useTheme } from "next-themes"
import type { ResumeData, Template } from "@/types/resume"
import { defaultResumeData } from "@/lib/default-data"

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData)
  const [activeTemplate, setActiveTemplate] = useState<Template>("modern")
  const { theme, setTheme } = useTheme()

  // Load data from localStorage on initial render
  useEffect(() => {
    const savedData = localStorage.getItem("resumeData")
    if (savedData) {
      setResumeData(JSON.parse(savedData))
    }

    const savedTemplate = localStorage.getItem("activeTemplate")
    if (savedTemplate) {
      setActiveTemplate(savedTemplate as Template)
    }
  }, [])

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData))
  }, [resumeData])

  // Save template preference to localStorage
  useEffect(() => {
    localStorage.setItem("activeTemplate", activeTemplate)
  }, [activeTemplate])

  const handleSave = () => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData))
    alert("Currículo salvo com sucesso!")
  }

  const handlePrint = () => {
    window.print()
  }

  const handleExportPDF = async () => {
    // Importação dinâmica do html2pdf.js
    const html2pdf = (await import("html2pdf.js")).default

    const element = document.getElementById("resume-preview")
    const opt = {
      margin: 0.5,
      filename: `curriculo-${resumeData.personalInfo.name.toLowerCase().replace(/\s+/g, "-")}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    }

    html2pdf().set(opt).from(element).save()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Gerador de Currículos</h1>
        <p className="text-muted-foreground">Crie seu currículo profissional e exporte como PDF</p>
        <div className="flex justify-center mt-4 gap-2">
          <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
        </div>
      </header>

      <Tabs defaultValue="form" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="form">Formulário</TabsTrigger>
          <TabsTrigger value="preview">Visualização</TabsTrigger>
        </TabsList>

        <TabsContent value="form" className="space-y-4">
          <ResumeForm
            resumeData={resumeData}
            setResumeData={setResumeData}
            activeTemplate={activeTemplate}
            setActiveTemplate={setActiveTemplate}
          />
        </TabsContent>

        <TabsContent value="preview">
          <div className="flex justify-center gap-4 mb-6">
            <Button onClick={handleSave} variant="outline">
              <Save className="mr-2 h-4 w-4" />
              Salvar
            </Button>
            <Button onClick={handlePrint} variant="outline">
              <Printer className="mr-2 h-4 w-4" />
              Imprimir
            </Button>
            <Button onClick={handleExportPDF}>
              <Download className="mr-2 h-4 w-4" />
              Exportar PDF
            </Button>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg print:shadow-none">
            <ResumePreview resumeData={resumeData} template={activeTemplate} />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
