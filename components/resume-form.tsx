"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash } from "lucide-react"
import type { ResumeData, Template } from "@/types/resume"

interface ResumeFormProps {
  resumeData: ResumeData
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>
  activeTemplate: Template
  setActiveTemplate: React.Dispatch<React.SetStateAction<Template>>
}

export default function ResumeForm({ resumeData, setResumeData, activeTemplate, setActiveTemplate }: ResumeFormProps) {
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [name]: value,
      },
    })
  }

  const handleAddExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    })
  }

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const updatedExperience = [...resumeData.experience]
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value,
    }

    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    })
  }

  const handleRemoveExperience = (index: number) => {
    const updatedExperience = [...resumeData.experience]
    updatedExperience.splice(index, 1)

    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    })
  }

  const handleAddEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          institution: "",
          degree: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    })
  }

  const handleEducationChange = (index: number, field: string, value: string) => {
    const updatedEducation = [...resumeData.education]
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    }

    setResumeData({
      ...resumeData,
      education: updatedEducation,
    })
  }

  const handleRemoveEducation = (index: number) => {
    const updatedEducation = [...resumeData.education]
    updatedEducation.splice(index, 1)

    setResumeData({
      ...resumeData,
      education: updatedEducation,
    })
  }

  const handleAddSkill = () => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, ""],
    })
  }

  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...resumeData.skills]
    updatedSkills[index] = value

    setResumeData({
      ...resumeData,
      skills: updatedSkills,
    })
  }

  const handleRemoveSkill = (index: number) => {
    const updatedSkills = [...resumeData.skills]
    updatedSkills.splice(index, 1)

    setResumeData({
      ...resumeData,
      skills: updatedSkills,
    })
  }

  const handleAddLanguage = () => {
    setResumeData({
      ...resumeData,
      languages: [...resumeData.languages, { name: "", level: "Básico" }],
    })
  }

  const handleLanguageChange = (index: number, field: string, value: string) => {
    const updatedLanguages = [...resumeData.languages]
    updatedLanguages[index] = {
      ...updatedLanguages[index],
      [field]: value,
    }

    setResumeData({
      ...resumeData,
      languages: updatedLanguages,
    })
  }

  const handleRemoveLanguage = (index: number) => {
    const updatedLanguages = [...resumeData.languages]
    updatedLanguages.splice(index, 1)

    setResumeData({
      ...resumeData,
      languages: updatedLanguages,
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Template</CardTitle>
          <CardDescription>Escolha o estilo do seu currículo</CardDescription>
        </CardHeader>
        <CardContent>
          <Select value={activeTemplate} onValueChange={(value) => setActiveTemplate(value as Template)}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern">Moderno</SelectItem>
              <SelectItem value="classic">Clássico</SelectItem>
              <SelectItem value="creative">Criativo</SelectItem>
              <SelectItem value="ats">ATS (Otimizado para Recrutadores)</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible defaultValue="personal">
        <AccordionItem value="personal">
          <AccordionTrigger>Informações Pessoais</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={resumeData.personalInfo.name}
                      onChange={handlePersonalInfoChange}
                      placeholder="Ex: Maria Silva"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Título Profissional</Label>
                    <Input
                      id="title"
                      name="title"
                      value={resumeData.personalInfo.title}
                      onChange={handlePersonalInfoChange}
                      placeholder="Ex: Desenvolvedora Front-end"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={resumeData.personalInfo.email}
                      onChange={handlePersonalInfoChange}
                      placeholder="Ex: maria.silva@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={resumeData.personalInfo.phone}
                      onChange={handlePersonalInfoChange}
                      placeholder="Ex: (11) 98765-4321"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Endereço</Label>
                  <Input
                    id="address"
                    name="address"
                    value={resumeData.personalInfo.address}
                    onChange={handlePersonalInfoChange}
                    placeholder="Ex: São Paulo, SP"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="summary">Resumo Profissional</Label>
                  <Textarea
                    id="summary"
                    name="summary"
                    value={resumeData.personalInfo.summary}
                    onChange={handlePersonalInfoChange}
                    placeholder="Descreva brevemente sua experiência, habilidades e objetivos profissionais"
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience">
          <AccordionTrigger>Experiência Profissional</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6 space-y-6">
                {resumeData.experience.length === 0 && (
                  <p className="text-muted-foreground text-center py-4">
                    Nenhuma experiência adicionada. Clique no botão abaixo para adicionar.
                  </p>
                )}

                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="p-4 border rounded-md relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => handleRemoveExperience(index)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor={`company-${index}`}>Empresa</Label>
                        <Input
                          id={`company-${index}`}
                          value={exp.company}
                          onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
                          placeholder="Ex: Empresa ABC Ltda."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`position-${index}`}>Cargo</Label>
                        <Input
                          id={`position-${index}`}
                          value={exp.position}
                          onChange={(e) => handleExperienceChange(index, "position", e.target.value)}
                          placeholder="Ex: Desenvolvedora Front-end"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor={`startDate-${index}`}>Data de Início</Label>
                        <Input
                          id={`startDate-${index}`}
                          value={exp.startDate}
                          onChange={(e) => handleExperienceChange(index, "startDate", e.target.value)}
                          placeholder="Ex: Jan 2020"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`endDate-${index}`}>Data de Término</Label>
                        <Input
                          id={`endDate-${index}`}
                          value={exp.endDate}
                          onChange={(e) => handleExperienceChange(index, "endDate", e.target.value)}
                          placeholder="Ex: Atual ou Dez 2022"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`description-${index}`}>Descrição</Label>
                      <Textarea
                        id={`description-${index}`}
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(index, "description", e.target.value)}
                        placeholder="Descreva suas responsabilidades, realizações e projetos relevantes"
                        rows={3}
                      />
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full" onClick={handleAddExperience}>
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Experiência
                </Button>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="education">
          <AccordionTrigger>Formação Acadêmica</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6 space-y-6">
                {resumeData.education.length === 0 && (
                  <p className="text-muted-foreground text-center py-4">
                    Nenhuma formação adicionada. Clique no botão abaixo para adicionar.
                  </p>
                )}

                {resumeData.education.map((edu, index) => (
                  <div key={index} className="p-4 border rounded-md relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => handleRemoveEducation(index)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor={`institution-${index}`}>Instituição</Label>
                        <Input
                          id={`institution-${index}`}
                          value={edu.institution}
                          onChange={(e) => handleEducationChange(index, "institution", e.target.value)}
                          placeholder="Ex: Universidade de São Paulo"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`degree-${index}`}>Curso/Grau</Label>
                        <Input
                          id={`degree-${index}`}
                          value={edu.degree}
                          onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
                          placeholder="Ex: Bacharelado em Ciência da Computação"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor={`eduStartDate-${index}`}>Data de Início</Label>
                        <Input
                          id={`eduStartDate-${index}`}
                          value={edu.startDate}
                          onChange={(e) => handleEducationChange(index, "startDate", e.target.value)}
                          placeholder="Ex: Jan 2016"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`eduEndDate-${index}`}>Data de Conclusão</Label>
                        <Input
                          id={`eduEndDate-${index}`}
                          value={edu.endDate}
                          onChange={(e) => handleEducationChange(index, "endDate", e.target.value)}
                          placeholder="Ex: Dez 2020"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor={`eduDescription-${index}`}>Descrição</Label>
                      <Textarea
                        id={`eduDescription-${index}`}
                        value={edu.description}
                        onChange={(e) => handleEducationChange(index, "description", e.target.value)}
                        placeholder="Informações adicionais sobre o curso, projetos ou atividades relevantes"
                        rows={3}
                      />
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full" onClick={handleAddEducation}>
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Formação
                </Button>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skills">
          <AccordionTrigger>Habilidades</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6 space-y-6">
                {resumeData.skills.length === 0 && (
                  <p className="text-muted-foreground text-center py-4">
                    Nenhuma habilidade adicionada. Clique no botão abaixo para adicionar.
                  </p>
                )}

                {resumeData.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                      placeholder="Ex: JavaScript, React, UI/UX Design, Gestão de Projetos"
                    />
                    <Button variant="ghost" size="icon" onClick={() => handleRemoveSkill(index)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}

                <Button variant="outline" className="w-full" onClick={handleAddSkill}>
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Habilidade
                </Button>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="languages">
          <AccordionTrigger>Idiomas</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="pt-6 space-y-6">
                {resumeData.languages.length === 0 && (
                  <p className="text-muted-foreground text-center py-4">
                    Nenhum idioma adicionado. Clique no botão abaixo para adicionar.
                  </p>
                )}

                {resumeData.languages.map((language, index) => (
                  <div key={index} className="grid grid-cols-3 gap-2 items-center">
                    <div className="col-span-2">
                      <Input
                        value={language.name}
                        onChange={(e) => handleLanguageChange(index, "name", e.target.value)}
                        placeholder="Ex: Inglês, Espanhol, Francês"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Select
                        value={language.level}
                        onValueChange={(value) => handleLanguageChange(index, "level", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Nível" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Básico">Básico</SelectItem>
                          <SelectItem value="Intermediário">Intermediário</SelectItem>
                          <SelectItem value="Avançado">Avançado</SelectItem>
                          <SelectItem value="Fluente">Fluente</SelectItem>
                          <SelectItem value="Nativo">Nativo</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="ghost" size="icon" onClick={() => handleRemoveLanguage(index)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}

                <Button variant="outline" className="w-full" onClick={handleAddLanguage}>
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Idioma
                </Button>
              </CardContent>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
