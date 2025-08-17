"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

interface Command {
  input: string
  output: string[]
  timestamp: string
}

const COMMANDS = {
  help: {
    description: "Show available commands",
    output: [
      "╔══════════════════════════════════════════════════════════════╗",
      "║                      AVAILABLE COMMANDS                     ║",
      "╠══════════════════════════════════════════════════════════════╣",
      "║  help        - Show this help message                       ║",
      "║  about       - Learn about me                               ║",
      "║  skills      - View my technical arsenal                    ║",
      "║  projects    - See my digital creations                     ║",
      "║  experience  - View my work history                         ║",
      "║  education   - See my educational background                ║",
      "║  contact     - Get my contact information                   ║",
      "║  socials     - View my social media profiles                ║",
      "║  cv          - Download my resume/CV                        ║",
      "║  theme       - Toggle dark/light mode                       ║",
      "║  clear       - Clear the terminal                           ║",
      "║  whoami      - Display current user info                    ║",
      "║  matrix      - Enter the matrix...                          ║",
      "║  hack        - Initialize hacking sequence                  ║",
      "╚══════════════════════════════════════════════════════════════╝",
      "",
      "[INFO] Type any command to execute...",
    ],
  },
  theme: {
    description: "Toggle dark/light mode",
    output: [
      "┌─[ THEME.cfg ]────────────────────────────────────────────────┐",
      "│                    THEME SWITCHER                           │",
      "├──────────────────────────────────────────────────────────────┤",
      "│                                                              │",
      "│ ▓▓▓ SWITCHING VISUAL MODE ▓▓▓                                │",
      "│                                                              │",
      "│ [████████████████████████████████████████] 100%             │",
      "│                                                              │",
      "│ ✅ THEME SWITCHED SUCCESSFULLY                               │",
      "│                                                              │",
      "│ [INFO] Theme preference saved to localStorage                │",
      "│ [TIP] Use 'theme' command again to switch back               │",
      "└──────────────────────────────────────────────────────────────┘",
    ],
  },
  about: {
    description: "Learn about me",
    output: [
  "┌─[ ABOUT.exe ]─────────────────────────────────────────────────┐",
  "│                                                               │",
  "│  ██╗███╗   ███╗ █████╗ ███████╗██╗  ██╗ █████╗                │",
  "│  ██║████╗ ████║██╔══██╗██╔════╝██║  ██║██╔══██╗               │",
  "│  ██║██╔████╔██║███████║███████╗███████║███████║               │",
  "│  ██║██║╚██╔╝██║██╔══██║╚════██║██╔══██║██╔══██║               │",
  "│  ██║██║ ╚═╝ ██║██║  ██║███████║██║  ██║██║  ██║               │",
  "│  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝               │",
  "│                                                               │",
  "│                    ▓▓▓ IMASHA NILUPUL ▓▓▓                       │",
  "│                                                               │",
  "├───────────────────────────────────────────────────────────────┤",
  "│ STATUS: AI Undergraduate Student                              │",
  "│ CLEARANCE: Top Secret                                         │",
  "│ SPECIALIZATION: AI • Cybersecurity • Robotics                │",
  "│                                                               │",
  "│ I explore the frontiers of artificial intelligence while      │",
  "│ securing digital systems and building autonomous machines.    │",
  "│ My passion drives me through neural networks, ethical         │",
  "│ hacking, and robotic innovation.                              │",
  "│                                                               │",
  "│ When not studying, I'm experimenting with ML algorithms,      │",
  "│ penetration testing, and designing intelligent systems.       │",
  "│                                                               │",
  "│ [MISSION] Shaping tomorrow's tech landscape through AI        │",
  "└───────────────────────────────────────────────────────────────┘"
],
  },
  skills: {
    description: "View technical arsenal",
    output:[
  "┌─[ SKILLS.db ]────────────────────────────────────────────────┐",
  "│                    TECHNICAL ARSENAL                         │",
  "├──────────────────────────────────────────────────────────────┤",
  "│                                                              │",
  "│ ▓▓▓ LANGUAGES ▓▓▓                                            │",
  "│   ◆ Python, Java, JavaScript, C, C++, PHP                    │",
  "│                                                              │",
  "│ ▓▓▓ FRONTEND WEAPONS ▓▓▓                                     │",
  "│   ◆ React, Vite, Material UI, Tailwind CSS                   │",
  "│                                                              │",
  "│ ▓▓▓ BACKEND ARSENAL ▓▓▓                                      │",
  "│   ◆ FastAPI, Node.js, Firebase                               │",
  "│                                                              │",
  "│ ▓▓▓ MOBILE DEVELOPMENT ▓▓▓                                   │",
  "│   ◆ Flutter                                                  │",
  "│                                                              │",
  "│ ▓▓▓ DATABASES ▓▓▓                                            │",
  "│   ◆ MySQL, MSSQL, PostgreSQL, MongoDB, ChromaDB              │",
  "│                                                              │",
  "│ ▓▓▓ AI & ML ▓▓▓                                              │",
  "│   ◆ Scikit-learn, LangChain, LlamaIndex, MCP                 │",
  "│                                                              │",
  "│ ▓▓▓ CYBERSECURITY TOOLS ▓▓▓                                  │",
  "│   ◆ Nmap, Burp Suite, Metasploit                             │",
  "│                                                              │",
  "│ ▓▓▓ EMBEDDED SYSTEMS ▓▓▓                                     │",
  "│   ◆ Arduino, ESP32, PID Control, EasyEDA                     │",
  "│                                                              │",
  "│ ▓▓▓ PROJECT MANAGEMENT ▓▓▓                                   │",
  "│   ◆ Jira, Trello                                             │",
  "│                                                              │",
  "│ ▓▓▓ SOFTWARE TESTING ▓▓▓                                     │",
  "│   ◆ pytest, TestNG                                           │",
  "│                                                              │",
  "│ ▓▓▓ TOOLS ▓▓▓                                                │",
  "│   ◆ GitHub, Git, Figma, Webots, Cisco Packet Tracer,         │",
  "│      Google Colab, Jupyter, Postman                          │",
  "└──────────────────────────────────────────────────────────────┘",
],
  },
  projects: {
    description: "See digital creations",
    output: [
  "┌─[ PROJECTS.log ]─────────────────────────────────────────────┐",
  "│                    DIGITAL CREATIONS                        │",
  "├──────────────────────────────────────────────────────────────┤",
  "│                                                              │",
  "│ [PROJECT_001] VizGen – AI Graphs & Chart Generator           │",
  "│ ├─ STATUS: ACTIVE                                            │",
  "│ ├─ TECH: Python, LangChain, LangSmith, Gemini API, FastAPI,  │",
  "│ │        React, MongoDB, ChromaDB, Plotly.js, Material UI    │",
  "│ ├─ FEATURES: Text-to-SQL, RAG table selection, chart         │",
  "│ │        recommendations, feedback-driven learning           │",
  "│ └─ ARCHITECTURE: Multi-agent workflow                        │",
  "│                                                              │",
  "│ [PROJECT_002] Fast Line Following Robot V2.0 (Hardware)      │",
  "│ ├─ STATUS: BUILT & TESTED                                    │",
  "│ ├─ TECH: ESP32, PID Control, Custom IR Sensor Array,         │",
  "│ │        TB6612FNG Driver, Bluetooth, LiPo Battery           │",
  "│ ├─ FEATURES: High-speed maze solving, adaptive detection,    │",
  "│ │        Bluetooth-based PID tuning                         │",
  "│ └─ CONTROL: Real-time pathfinding logic                      │",
  "│                                                              │",
  "│ [PROJECT_003] Juice App – Mobile Ordering Platform           │",
  "│ ├─ STATUS: DEPLOYED                                          │",
  "│ ├─ TECH: Flutter, Dart, Firebase Auth, Firebase Realtime DB  │",
  "│ ├─ FEATURES: Secure login, real-time orders, juice catalog   │",
  "│ └─ FUNCTIONALITY: End-to-end e-commerce workflow             │",
  "│                                                              │",
  "│ [PROJECT_004] Color Following Robot Simulation               │",
  "│ ├─ STATUS: COMPLETED                                         │",
  "│ ├─ TECH: Webots, Python, e-puck Robot                        │",
  "│ ├─ FEATURES: Color-based wall following, collision           │",
  "│ │        avoidance, adaptive decision-making                 │",
  "│ └─ VALIDATION: Tested across multiple maze layouts           │",
  "│                                                              │",
  "│ [PROJECT_005] Chronix – Time Tracking Chrome Extension       │",
  "│ ├─ STATUS: V1.0 RELEASED, V1.1 IN DEVELOPMENT                │",
  "│ ├─ TECH: React, Tailwind CSS, Chrome Extension APIs, MV3     │",
  "│ ├─ FEATURES: Real-time tab usage insights, productivity UI   │",
  "│ └─ ROADMAP: Dark/Light mode, premium analytics features      │",
  "│                                                              │",
  "│ [ACCESS] Visit GitHub for source code and documentation      │",
  "└──────────────────────────────────────────────────────────────┘",
],
  },
  experience: {
    description: "View work history",
    output: [
  "┌─[ Imasha Jayarathne_Experience.dat ]─────────────────────────────────────────┐",
  "│                       WORK HISTORY                                           │",
  "├──────────────────────────────────────────────────────────────────────────────┤",
  "│                                                                              │",
  "│  ▓▓▓ Media Lead & Electronics Member | IES Labs UoM ▓▓▓                      │",
  "│  ├─ TIMEFRAME: 2024-PRESENT                                                  │",
  "│  ├─ MISSION: Led the media team in planning, producing, and publishing       │",
  "│  │            content across multiple platforms.                             │",
  "│  ├─ ROLE: Maintained and troubleshooted electronic components and prototyping│",
  "│  │         tools  and designed and developed custom electronic     │",
  "│  │         circuits and embedded systems for lab projects.                   │",
  "│  └─ COORDINATION: Coordinated team tasks, timelines, and project goals to    │",
  "│                  ensure high-quality media output.                           │",
  "│                                                                              │",
  "│  ▓▓▓ A/L ICT Teacher | Self employed ▓▓▓                                     │",
  "│  ├─ MISSION: Delivered comprehensive A/L ICT lessons of the national syllabus. ] │",
  "│  └─ ROLE: Provided personalized academic guidance and ICT career counseling  │",
  "│             for students.                                        │",
  "└──────────────────────────────────────────────────────────────────────────────┘"
],
  },
  education: {
    description: "See educational background",
    output: [
  "┌─[ Imasha Jayarathne_EDUCATION.sys ]──────────────────────────────────────────┐",
  "│                       EDUCATIONAL MATRIX                                   │",
  "├──────────────────────────────────────────────────────────────────────────────┤",
  "│                                                                              │",
  "│  ▓▓▓ BACHELOR OF SCIENCE HONORS (UG) IN ARTIFICIAL INTELLIGENCE ▓▓▓          │",
  "│  ├─ INSTITUTION: University of Moratuwa                              │",
  "│  ├─ TIMEFRAME: 2023-PRESENT                                       │",
  "│  ├─ STATUS: UNDERGRADUATE                                          │",
  "│                                                                              │",
  "│  ▓▓▓ BANDARANAYAKE COLLEGE GAMPAHA | PHYSICAL SCIENCE ▓▓▓                      │",
  "│  ├─ TIMEFRAME: 2013-2022                                          │",
  "│  ├─ G.C.E. ADVANCE LEVEL: 1 A pass (ICT), 2 B passes (Physics & Com. Maths)  │",
  "│  │                      Z Score: 1.83                                       │",
  "│  └─ G.C.E. ORDINARY LEVEL: 9 A passes                                          │",
  "│                                                                              │",
  "│  ▓▓▓ EXTRA READINGS ▓▓▓                                                        │",
  "│  ├─ [READING_001] AI Agents Fundamentals - Hugging Face                       │",
  "│  ├─ [READING_002] Introduction to MongoDB - MongoDB                           │",
  "│  ├─ [READING_003] Introduction to Android Mobile Application Development - Meta│",
  "│  └─ [READING_004] AI For Everyone - DeepLearning.AI                           │",
  "└──────────────────────────────────────────────────────────────────────────────┘"
],
  },
  contact: {
    description: "Get contact information",
    output: [
  "┌─[ Imasha Jayarathne_CONTACT.enc ]────────────────────────────────────────────┐",
  "│                       SECURE COMMUNICATION                                 │",
  "├──────────────────────────────────────────────────────────────────────────────┤",
  "│                                                                              │",
  "│  ▓▓▓ DIRECT CONTACT CHANNELS ▓▓▓                                             │",
  "│                                                                              │",
  "│  📧 EMAIL:     imashanilupul@gmail.com                                       │",
  "│  📱 PHONE:     +94 76 485 5297                                               │",
  "│  📍 LOCATION:  Gampaha, Sri Lanka.                                           │",
  "│                                                                              │",
  "│  [STATUS] Available for opportunities in Artificial Intelligence,            │",
  "│            Robotics, and Cybersecurity.                                      │",
  "└──────────────────────────────────────────────────────────────────────────────┘"
],
  },
  socials: {
    description: "View social media profiles",
    output: [
  "┌─[ Imasha Jayarathne_SOCIALS.net ]────────────────────────────────────────────┐",
  "│                       SOCIAL NETWORKS                                      │",
  "├──────────────────────────────────────────────────────────────────────────────┤",
  "│                                                                              │",
  "│  ▓▓▓ PROFESSIONAL NETWORKS ▓▓▓                                               │",
  "│                                                                              │",
  "│  💼 LINKEDIN:  <a href='https://www.linkedin.com/in/imasha-jayarathne/' target='_blank' class='text-blue-400 hover:text-blue-300 underline'>linkedin.com/in/imashanilupul</a>       │",
  "│  🔗 GITHUB:    <a href='https://github.com/Imashanilupul' target='_blank' class='text-blue-400 hover:text-blue-300 underline'>Github.com/in/imashanilupul</a>                           │",
  "│  📝 MEDIUM:    <a href='https://medium.com/@imashanilupul' target='_blank' class='text-blue-400 hover:text-blue-300 underline'>Medium.com/in/imashanilupul</a>                             │",
  "│                                                                              │",
  "│  [ACTIVITY] Most active on all platforms                                     │",
  "│  [RESPONSE] Usually reply within 24 hours                                    │",
  "└──────────────────────────────────────────────────────────────────────────────┘"
],
  },
  cv: {
    description: "Download resume/CV",
    output: [
      "┌─[ CV_DOWNLOAD.exe ]──────────────────────────────────────────┐",
      "│                     RESUME DOWNLOAD                         │",
      "├──────────────────────────────────────────────────────────────┤",
      "│                                                              │",
      "│ ▓▓▓ INITIATING SECURE DOWNLOAD ▓▓▓                           │",
      "│                                                              │",
      "│ [████████████████████████████████████████] 100%             │",
      "│                                                              │",
      "│ ✅ LOADING COMPLETE                                         │",
      "│                                                              │",
      "│ 📄 FILE: Imasha_Nilupul_Jayarathne_Resume_2024.pdf          |                 │",
      "│ 📊 SIZE: 2.3 MB                                             │",
      "│ 🔐 HASH: SHA256:a1b2c3d4e5f6...                             │",
      "│ 📅 UPDATED: December 2024                                    │",
      "│                                                              │",
      "│ ▓▓▓ DOCUMENT CONTENTS ▓▓▓                                    │",
      "│ • Professional Summary                                       │",
      "│ • Technical Skills & Expertise                              │",
      "│ • Education & Certifications                                │",
      "│ • Notable Projects & Achievements                           │",
      "│ • References Available Upon Request                         │",
      "│                                                              │",
      "│ [INFO] CV has been saved to your Downloads folder           │",
      "└──────────────────────────────────────────────────────────────┘",
    ],
  },
  whoami: {
    description: "Display current user info",
    output: [
      "┌─[ USER_INFO.dat ]────────────────────────────────────────────┐",
      "│                                                              │",
      "│  USER: guest                                                 │",
      "│  HOST: portfolio-terminal                                    │",
      "│  SESSION: anonymous_browsing                                 │",
      "│  LOCATION: Imasha Nilupul's Digital Portfolio                      │",
      "│  ACCESS_LEVEL: Public                                        │",
      "│  LAST_LOGIN: " + new Date().toLocaleString() + "                     │",
      "│                                                              │",
      "│  [INFO] You are currently in read-only mode                 │",
      "│  [TIP] Type 'help' to see available commands                │",
      "└──────────────────────────────────────────────────────────────┘",
    ],
  },
  matrix: {
    description: "Enter the matrix",
    output: [
      "Initializing Matrix Protocol...",
      "",
      "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
      "█ 01001000 01100101 01101100 01101100 01101111 00100000 █",
      "█ 01010111 01101111 01110010 01101100 01100100 00100001 █",
      "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓",
      "",
      "Wake up, Neo...",
      "The Matrix has you...",
      "Follow the white rabbit...",
      "",
      "🐰 Welcome to the real world.",
      "",
      "[SYSTEM] Matrix protocol loaded successfully",
      "[WARNING] Reality.exe has stopped working",
    ],
  },
  hack: {
    description: "Initialize hacking sequence",
    output: [
      "Initializing hacking sequence...",
      "",
      "[████████████████████████████████████████] 100%",
      "",
      "BREACH DETECTED: Firewall bypassed",
      "ACCESS GRANTED: Mainframe infiltrated",
      "DOWNLOADING: classified_files.zip",
      "",
      "▓▓▓ HACKING COMPLETE ▓▓▓",
      "",
      "Just kidding! 😄",
      "This is a portfolio website, not a real hacking tool.",
      "But I do write secure code that's hack-resistant!",
      "",
      "[ETHICAL_HACKER_MODE] Always use your powers for good!",
    ],
  },
}

export default function CliPortfolio() {
  const [commands, setCommands] = useState<Command[]>([])
  const [currentInput, setCurrentInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isBooting, setIsBooting] = useState(true)
  const [bootProgress, setBootProgress] = useState(0)
  const [bootMessages, setBootMessages] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bootSequence = [
      "BIOS v2.1.337 - Hacker Terminal Systems",
      "Initializing quantum processors... OK",
      "Loading neural network drivers... OK",
      "Establishing secure connection... OK",
      "Mounting encrypted file systems... OK",
      "Starting portfolio services... OK",
      "Loading user interface... OK",
      "System ready. Welcome, hacker.",
    ]

    let messageIndex = 0
    const bootInterval = setInterval(() => {
      if (messageIndex < bootSequence.length) {
        setBootMessages((prev) => [...prev, bootSequence[messageIndex]])
        setBootProgress(((messageIndex + 1) / bootSequence.length) * 100)
        messageIndex++
      } else {
        clearInterval(bootInterval)
        setTimeout(() => {
          setIsBooting(false)
          initializeTerminal()
        }, 1000)
      }
    }, 400)

    return () => clearInterval(bootInterval)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem("terminal-theme")
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark")
    }
  }, [])

  const initializeTerminal = () => {
    const welcomeCommand: Command = {
      input: "",
      output: [
  "╔══════════════════════════════════════════════════════════════╗",
  "║                                                              ║",
  "║  ██╗  ███╗   ███╗  ███╗  ███╗  ██╗  ██╗  ███╗  ████╗  ████╗  ║",
  "║  ██║  ████╗ ████║  ████╗ ████║  ██║  ██║  ████╗  ████╗  ████╗  ║",
  "║  ██║  ██╔████╔██║  ██╔████╔██║  ██║  ██║  ██╔████╔██║  ██╔████╔██║  ║",
  "║  ██║  ██║ ╚██╔██║  ██║ ╚██╔██║  ██║  ██║  ██║ ╚██╔██║  ██║ ╚██╔██║  ║",
  "║  ██║  ██║  ╚═╝██║  ██║  ╚═╝██║  ██║  ██║  ██║  ╚═╝██║  ██║  ╚═╝██║  ║",
  "║  ╚═╝  ╚═╝     ╚═╝  ╚═╝     ╚═╝  ╚═╝  ╚═╝  ╚═╝     ╚═╝  ╚═╝     ╚═╝  ║",
  "║                                                              ║",
  "║          ▓▓▓ IMASHA JAYARATHNE ▓▓▓                           ║",
  "║      PORTFOLIO TERMINAL v2.1.337                             ║",
  "║                                                              ║",
  "╠══════════════════════════════════════════════════════════════╣",
  "║  [SYSTEM] Terminal initialized successfully                  ║",
  "║  [ACCESS] Guest privileges granted                           ║",
  "║  [STATUS] All systems operational                            ║",
  "║                                                              ║",
  "║  Type 'help' to access command database                      ║",
  "║  Type 'cv' to download my resume                             ║",
  "║  Type 'socials' to connect with me                           ║",
  "║  Type 'matrix' for something special...                      ║",
  "╚══════════════════════════════════════════════════════════════╝",
  "",
  "[" + new Date().toLocaleTimeString() + "] Connection established",
  ""
],
      timestamp: new Date().toLocaleTimeString(),
    }
    setCommands([welcomeCommand])
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [commands])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commands])

  const executeCommand = async (input: string) => {
    const trimmedInput = input.trim().toLowerCase()
    const timestamp = new Date().toLocaleTimeString()

    if (trimmedInput === "clear") {
      setCommands([])
      return
    }

    if (trimmedInput === "theme") {
      const newTheme = !isDarkMode
      setIsDarkMode(newTheme)
      localStorage.setItem("terminal-theme", newTheme ? "dark" : "light")

      setIsTyping(true)
      await new Promise((resolve) => setTimeout(resolve, 800))
      setIsTyping(false)

      const newCommand: Command = {
        input: input,
        output: COMMANDS.theme.output,
        timestamp,
      }
      setCommands((prev) => [...prev, newCommand])
      return
    }

    let output: string[] = []

    if (trimmedInput === "") {
      output = [""]
    } else if (COMMANDS[trimmedInput as keyof typeof COMMANDS]) {
      setIsTyping(true)
      await new Promise((resolve) => setTimeout(resolve, 800))
      output = COMMANDS[trimmedInput as keyof typeof COMMANDS].output
      setIsTyping(false)
    } else {
      output = [
        "╔══════════════════════════════════════════════════════════════╗",
        "║                        ERROR 404                            ║",
        "╠══════════════════════════════════════════════════════════════╣",
        `║  Command not found: ${trimmedInput.padEnd(42)} ║`,
        "║                                                              ║",
        "║  [SUGGESTION] Type 'help' to see available commands         ║",
        "║  [TIP] Check your spelling and try again                    ║",
        "╚══════════════════════════════════════════════════════════════╝",
      ]
    }

    const newCommand: Command = {
      input: input,
      output,
      timestamp,
    }

    setCommands((prev) => [...prev, newCommand])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentInput.trim() || currentInput === "") {
      executeCommand(currentInput)
      setCurrentInput("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "Tab") {
      inputRef.current?.focus()
    }
  }

  if (isBooting) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono p-8 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold mb-4 text-cyan-400">▓▓▓ HACKER TERMINAL BOOT SEQUENCE ▓▓▓</div>
            <div className="text-sm text-gray-400">Initializing secure portfolio environment...</div>
          </div>

          <div className="mb-6">
            <div className="bg-gray-800 rounded-full h-4 mb-2">
              <div
                className="bg-gradient-to-r from-green-400 to-cyan-400 h-4 rounded-full transition-all duration-300"
                style={{ width: `${bootProgress}%` }}
              ></div>
            </div>
            <div className="text-center text-sm text-green-400">{bootProgress.toFixed(0)}% Complete</div>
          </div>

          <div className="space-y-1 h-48 overflow-hidden">
            {bootMessages.map((message, index) => (
              <div key={index} className="text-sm opacity-80 animate-pulse">
                <span className="text-yellow-400">[BOOT]</span> {message}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const themeClasses = isDarkMode ? "bg-black text-green-400" : "bg-gray-100 text-gray-800"

  const promptColors = isDarkMode
    ? "text-red-400 text-white text-cyan-400 text-white text-blue-400 text-white text-green-400"
    : "text-red-600 text-gray-800 text-blue-600 text-gray-800 text-indigo-600 text-gray-800 text-gray-800"

  return (
    <div
      className={`min-h-screen ${themeClasses} font-mono p-4 overflow-hidden relative transition-colors duration-300`}
      onClick={() => inputRef.current?.focus()}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      style={{
        backgroundImage: isDarkMode
          ? `
          radial-gradient(circle at 25% 25%, #001100 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, #001100 0%, transparent 50%)
        `
          : `
          radial-gradient(circle at 25% 25%, #f0f0f0 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, #f0f0f0 0%, transparent 50%)
        `,
        backgroundSize: "100px 100px",
        backgroundPosition: "0 0, 50px 50px",
      }}
    >
      {isDarkMode && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse"></div>
        </div>
      )}

      <div ref={terminalRef} className="h-screen overflow-y-auto pb-20 relative z-10">
        {commands.map((command, index) => (
          <div key={index} className="mb-2">
            {command.input && (
              <div className="flex items-center">
                <span className={isDarkMode ? "text-red-400 font-bold" : "text-red-600 font-bold"}>root</span>
                <span className={isDarkMode ? "text-white" : "text-gray-800"}>@</span>
                <span className={isDarkMode ? "text-cyan-400 font-bold" : "text-blue-600 font-bold"}>
                  hacker-terminal
                </span>
                <span className={isDarkMode ? "text-white" : "text-gray-800"}>:</span>
                <span className={isDarkMode ? "text-blue-400" : "text-indigo-600"}>~</span>
                <span className={isDarkMode ? "text-white" : "text-gray-800"}># </span>
                <span className={isDarkMode ? "text-green-400" : "text-gray-800"}>{command.input}</span>
              </div>
            )}
            <div className="ml-0">
              {command.output.map((line, lineIndex) => (
                <div key={lineIndex} className="whitespace-pre-wrap leading-tight">
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center">
            <span className={isDarkMode ? "text-yellow-400" : "text-yellow-600"}>[PROCESSING]</span>
            <span className={isDarkMode ? "text-green-400 ml-2" : "text-gray-800 ml-2"}>Executing command</span>
            <span className={`animate-pulse ml-2 ${isDarkMode ? "text-red-400" : "text-red-600"}`}>▓▓▓</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex items-center">
          <span className={isDarkMode ? "text-red-400 font-bold" : "text-red-600 font-bold"}>root</span>
          <span className={isDarkMode ? "text-white" : "text-gray-800"}>@</span>
          <span className={isDarkMode ? "text-cyan-400 font-bold" : "text-blue-600 font-bold"}>hacker-terminal</span>
          <span className={isDarkMode ? "text-white" : "text-gray-800"}>:</span>
          <span className={isDarkMode ? "text-blue-400" : "text-indigo-600"}>~</span>
          <span className={isDarkMode ? "text-white" : "text-gray-800"}># </span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            className={`bg-transparent border-none outline-none ${isDarkMode ? "text-green-400" : "text-gray-800"} flex-1 font-mono`}
            autoComplete="off"
            spellCheck="false"
          />
          <span
            className={`animate-pulse ${isDarkMode ? "text-green-400 drop-shadow-[0_0_5px_#00ff00]" : "text-gray-800"}`}
          >
            █
          </span>
        </form>
      </div>
    </div>
  )
}
