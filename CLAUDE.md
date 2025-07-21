Product Requirements Document (PRD)
Rafael Corporan | Full-Stack IT & AI Solutions Portfolio
Version: 2.0
Last Updated: July 2024

1. Overview & Objectives
Goal:
Build an interactive portfolio showcasing 12+ technical projects across networking, cloud, AI, and IoT—proving expertise from infrastructure hardening to AI integration.

Key Objectives:

Demonstrate end-to-end project ownership (design → deployment).

Highlight cross-domain skills:

Legacy IT (Cisco, Windows Server) → Modern AI (LLMs, predictive analytics).

Provide code snippets/architecture diagrams for technical validation.

Include live demos where feasible (e.g., chatbot, IoT dashboard).

2. Target Audience
Persona    Needs    Relevant Projects
Cloud Architects    IaC/DevOps proof    Cloud Migration Portal, Predictive Maintenance
AI Product Teams    LLM integration    AI Chatbot, Threat Detection
Infrastructure Leads    Network/security chops    Network Monitoring, IoT Management
FinTech Recruiters    Financial tech proof    Financial Dashboard, WePay Crypto Wallet
3. Project Showcases
A. Infrastructure & Networking
Enterprise Network Monitoring Dashboard

Stack: Prometheus/Grafana, Python, Cisco APIs

Key Feature: Real-time VLAN health tracking

Secure IoT Device Management Platform

Stack: AWS IoT Core, TLS/DTLS, React

Key Feature: Zero-trust device auth

Predictive Network Maintenance System

Stack: TensorFlow, ELK Stack, Grafana alerts

Outcome: 30% fewer downtime incidents

B. AI & Automation
Intelligent Customer Support Chatbot

Stack: OpenAI + RAG, WebSockets, Next.js

Demo: Live chat interface with pre-trained IT FAQs

AI-Powered Security Threat Detection

Stack: PyTorch, Wireshark integration

Output: Anomaly heatmaps

Data Graphs Converter

Stack: D3.js, Python Pandas

Use Case: CSV → Interactive visualizations

C. Web & Utilities
Financial Dashboard

Stack: React, Plaid API, Chart.js

Feature: Real-time crypto/fiat balances

URL Shorter - Yuupi

Stack: Node.js, Redis, Rate-limiting

Metric: 2ms redirect latency

Online Video Converter

Stack: FFmpeg (Wasm), Cloudflare Workers

Note: Browser-only processing

D. Blockchain & IoT
WePay - Crypto Wallet

Stack: Solidity, MetaMask SDK

Security: Multi-sig approvals

IoT-Dashboard

Stack: MQTT, WebSockets, Three.js

Demo: Live sensor data rendering

4. Technical Requirements
Frontend
Next.js (App Router) + WebAssembly (for FFmpeg/Video Converter)

State: Zustand + Web Workers (for IoT real-time data)

Backend
AI Services: FastAPI (Python) + OpenAI

Auth: JWT + OAuth (for WePay demo)

DBs: PostgreSQL (SQL), Redis (caching)

DevOps
Infra: Terraform + AWS ECS Fargate

CI/CD: GitHub Actions (with pytest/SAST)

Monitoring: Prometheus + Grafana (mirroring Project #1)

5. Design Specifications
UI/UX
Theme: "Neon Terminal" (dark mode with ANSI color accents)

Key Components:

Project Cards: Interactive CLI-style tabs (<tab1> Network </tab1> | <tab2> AI </tab2>)

Live Demos: Embedded iframes (e.g., chatbot, IoT dashboard)

Certification Badges: Clickable CompTIA/CCNA verification links

Accessibility
WCAG 2.1 AA compliant

Keyboard-navigable terminal UI

6. Success Metrics
KPI    Target
Technical Recruiter Engagement    ≥3 min/session
Demo Interactions (AI/IoT)    60% try ≥1 live tool
Project Code Inspections    40% view GitHub snippets
Contact Form Conversions    25% submission rate
7. Roadmap
Phase 1 (MVP):

Core projects (#1, 4, 5, 7, 10) + basic hosting

Phase 2 (AI Focus):

Expand LLM demos (fine-tuning walkthroughs)

Phase 3 (IoT Expansion):

Raspberry Pi integration for physical device demo

Appendix:

Competitor Reference: https://uxdesignerstockholm.se/ (for UX inspiration)

Tech Stack Icons: Devicon integration