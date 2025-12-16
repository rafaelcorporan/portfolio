/**
 * Diploma and Certificate Data
 * Organized by groups: AI, IT Trainings, Others
 */

export type Diploma = {
    id: string
    title: string
    date?: string
    description?: string
    image: string
    pdfUrl?: string
    group: "ai" | "others" | "it-trainings"
}

// AI Group Diplomas
const aiDiplomas: Diploma[] = [
    {
        id: "ai-fluency-framework",
        title: "AI Fluency: Framework & Foundations",
        description: "Certificate in AI Fluency Framework and Foundations",
        image: "/diplomas/ai/ai-fluency-framework.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "ai"
    },
    {
        id: "claude-code-in-action",
        title: "Claude Code in Action",
        description: "Certificate for Claude Code in Action course",
        image: "/diplomas/ai/claude-code-in-action.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "ai"
    },
    {
        id: "claude-amazon-bedrock",
        title: "Claude with Amazon Bedrock",
        description: "Certificate for Claude with Amazon Bedrock integration",
        image: "/diplomas/ai/claude-amazon-bedrock.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "ai"
    },
    {
        id: "claude-vertex-ai",
        title: "Claude with Google Cloud's Vertex AI",
        description: "Certificate for Claude with Google Cloud's Vertex AI",
        image: "/diplomas/ai/claude-vertex-ai.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "ai"
    },
    {
        id: "claude-anthropic-api",
        title: "Claude with the Anthropic API",
        description: "Certificate for Claude with the Anthropic API",
        image: "/diplomas/ai/claude-anthropic-api.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "ai"
    },
    {
        id: "mcp-introduction",
        title: "Introduction to Model Context Protocol",
        description: "Certificate for Introduction to Model Context Protocol",
        image: "/diplomas/ai/mcp-introduction.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "ai"
    },
    {
        id: "mcp-advanced",
        title: "Model Context Protocol: Advanced Topics",
        description: "Certificate for Model Context Protocol Advanced Topics",
        image: "/diplomas/ai/mcp-advanced.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "ai"
    },
    {
        id: "teaching-ai-fluency",
        title: "Teaching AI Fluency",
        description: "Certificate for Teaching AI Fluency course",
        image: "/diplomas/ai/teaching-ai-fluency.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "ai"
    }
]

// IT Trainings Group Diplomas
const itTrainingsDiplomas: Diploma[] = [
    {
        id: "bmcc-diploma",
        title: "BMCC Diploma",
        description: "Borough of Manhattan Community College - Certificate of Completion from Center For Continuing Education And Workforce Development and Per Scholas Training",
        image: "/diplomas/it-trainings/bmcc-diploma.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "it-trainings"
    },
    {
        id: "bmcc-transcript",
        title: "BMCC Grade Transcript",
        description: "Borough of Manhattan Community College grade transcript",
        image: "/diplomas/it-trainings/bmcc-transcript.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "it-trainings"
    },
    {
        id: "comptia-a-plus",
        title: "CompTIA A+ Certification",
        description: "CompTIA A+ Certification - Certified Computer Technician",
        date: "April 3, 2013",
        image: "/diplomas/it-trainings/scan0006.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "it-trainings"
    },
    {
        id: "a-plus-ccna-course",
        title: "A+ and CCNA Course Completion",
        description: "Borough of Manhattan Community College - Center For Continuing Education And Workforce Development - A+ and CCNA Course Completion Certificate",
        date: "July 10, 2013",
        image: "/diplomas/it-trainings/scan0010.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "it-trainings"
    },
    {
        id: "a-plus-ccna-program",
        title: "A+ Computer Technician / Cisco Certified Network Associate Program",
        description: "Borough of Manhattan Community College and Per Scholas Training - Certificate of Completion for A+ Computer Technician / Cisco Certified Network Associate Program",
        image: "/diplomas/it-trainings/scan0011.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "it-trainings"
    },
    {
        id: "cisco-voice-data-cabling",
        title: "Fundamentals of Voice and Data Cabling",
        description: "Cisco Systems - Certificate of Course Completion for Fundamentals of Voice and Data Cabling, Instituto Tecnologico De Las Americas",
        date: "April 5, 2003",
        image: "/diplomas/it-trainings/scan0014.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "it-trainings"
    },
    {
        id: "cisco-it-essentials-ii",
        title: "IT Essentials II: Network Operating Systems",
        description: "Cisco Systems - Certificate of Course Completion for IT Essentials II: Network Operating Systems",
        date: "August 8, 2003",
        image: "/diplomas/it-trainings/scan0015.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "it-trainings"
    },
    {
        id: "ccna-network-fundamentals",
        title: "CCNA Exploration: Network Fundamentals",
        description: "Cisco Networking Academy - Certificate of Course Completion for CCNA Exploration: Network Fundamentals",
        image: "/diplomas/it-trainings/scan0016.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "it-trainings"
    },
    {
        id: "ccna-accessing-wan",
        title: "CCNA Exploration: Accessing the WAN",
        description: "Cisco Networking Academy - Certificate of Course Completion for CCNA Exploration: Accessing the WAN",
        image: "/diplomas/it-trainings/scan0017.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "it-trainings"
    },
    {
        id: "ccna-lan-switching-wireless",
        title: "CCNA Exploration: LAN Switching and Wireless",
        description: "Cisco Networking Academy - Certificate of Course Completion for CCNA Exploration: LAN Switching and Wireless",
        image: "/diplomas/it-trainings/scan0018.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "it-trainings"
    },
    {
        id: "ccna-routing-protocols",
        title: "CCNA Exploration: Routing Protocols and Concepts",
        description: "Cisco Networking Academy - Certificate of Course Completion for CCNA Exploration: Routing Protocols and Concepts",
        image: "/diplomas/it-trainings/scan0019.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "it-trainings"
    }
]


// Others Group Diplomas
const othersDiplomas: Diploma[] = [
    {
        id: "instituto-biblico-jorge-muller",
        title: "Theological Studies Diploma",
        description: "Instituto Bíblico Jorge Muller, New York - Diploma in Theological Studies",
        date: "July 6, 2015",
        image: "/diplomas/mix/scan0003.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "others"
    },
    {
        id: "basic-container-handling",
        title: "Basic Container Handling Equipment Operation Course",
        description: "SL Service, Inc. / World Terminals - Certificate for completing 80-hour Basic Container Handling Equipment Operation Course",
        date: "2003",
        image: "/diplomas/mix/scan0009.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "others"
    },
    {
        id: "operations-management-diploma",
        title: "Operations Management Diploma",
        description: "Universidad Dominico-Americana - Diplomado en Gerencia de Operaciones (Operations Management Diploma)",
        date: "November 15, 2004",
        image: "/diplomas/mix/scan0012.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "others"
    },
    {
        id: "basic-industrial-safety",
        title: "Basic Industrial Safety",
        description: "DP WORLD / ZONA FRANCA MULTIMODAL CAUCEDO - Certificate for completing Basic Industrial Safety course",
        date: "May 2006",
        image: "/diplomas/mix/scan0020.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "others"
    },
    {
        id: "general-high-school-diploma",
        title: "General High School Diploma (Bachiller)",
        description: "Secretaria de Estado de Educacion, Republica Dominicana - BACHILLER MODALIDAD GENERAL",
        date: "December 2, 2001",
        image: "/diplomas/mix/scan0034.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "others"
    },
    {
        id: "computer-technician",
        title: "Computer Technician",
        description: "ARTICIENCIA / CENTRO DE ESTUDIOS ESPECIALIZADOS - TECNICO EN INFORMATICA (Computer Technician Diploma)",
        date: "August 28, 1999",
        image: "/diplomas/mix/scan0035.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "others"
    },
    // Moved from Industrial Mechanic
    {
        id: "professional-aptitude-certificate",
        title: "Professional Aptitude Certificate",
        description: "INFOTEP - Certificado de Aptitud Profesional (Professional Aptitude Certificate) in General Mechanics",
        date: "October 1999",
        image: "/diplomas/industrial-mechanic/scan0026.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "others"
    },
    {
        id: "tool-sharpener",
        title: "Tool Sharpener Certificate",
        description: "INFOTEP - Certificado de Aptitud Profesional as AFILADOR DE HERRAMIENTAS (Tool Sharpener) in General Mechanics",
        image: "/diplomas/industrial-mechanic/scan0027.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "others"
    },
    {
        id: "turner-lathe-operator",
        title: "Turner / Lathe Operator Certificate",
        description: "INFOTEP - Certificado de Aptitud Profesional as TORNERO (Turner/Lathe Operator) in General Mechanics",
        date: "April 28, 1999",
        image: "/diplomas/industrial-mechanic/scan0028.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "others"
    },
    {
        id: "milling-machine-operator",
        title: "Milling Machine Operator Certificate",
        description: "INFOTEP - Certificado de Aptitud Profesional as FRESADOR (Milling Machine Operator) in General Mechanics",
        date: "August 2, 1999",
        image: "/diplomas/industrial-mechanic/scan0029.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "others"
    },
    {
        id: "industrial-mechanics-assistant",
        title: "Industrial Mechanics Assistant Certificate",
        description: "INFOTEP - Certificado de Aptitud Profesional as AUXILIAR DE MECANICA INDUSTRIAL (Industrial Mechanics Assistant) in General Mechanics",
        image: "/diplomas/industrial-mechanic/scan0030.jpg",
        pdfUrl: "https://drive.google.com/file/d/[FILE_ID]/view",
        group: "others"
    }
]

// Export all diplomas
export const allDiplomas: Diploma[] = [
    ...aiDiplomas,
    ...itTrainingsDiplomas,
    ...othersDiplomas
]

