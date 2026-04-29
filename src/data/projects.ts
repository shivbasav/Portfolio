import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'AI-Powered Documentation Assistant',
    description: 'RAG-based system using LangChain and Vector DBs to automatically generate and maintain technical documentation from codebases. Reduces documentation time by 70%.',
    status: 'building',
    tech: ['Python', 'LangChain', 'RAG', 'Vector DBs', 'FastAPI'],
  },
  {
    id: 'p2',
    title: 'Multi-Agent Research Platform',
    description: 'LangGraph-powered autonomous agent system that orchestrates multiple specialized AI agents to conduct comprehensive research and synthesis tasks.',
    status: 'building',
    tech: ['LangGraph', 'AI Agents', 'Python', 'LLM APIs', 'Prompt Engineering'],
  },
  {
    id: 'p3',
    title: 'Real-Time Analytics Dashboard',
    description: 'High-performance React dashboard with live data streaming, interactive visualizations, and predictive analytics for enterprise decision-making.',
    status: 'building',
    tech: ['React', 'TypeScript', 'GraphQL', 'WebSockets', 'GCP'],
  },
  {
    id: 'p4',
    title: 'GenAI Security Audit Tool',
    description: 'Automated security analysis tool that identifies prompt injection vulnerabilities, data leakage risks, and model manipulation threats in AI applications.',
    status: 'building',
    tech: ['Python', 'LLM APIs', 'Security Testing', 'FastAPI'],
  },
  {
    id: 'p5',
    title: 'Enterprise Knowledge Graph',
    description: 'Production-scale knowledge management system serving 10K+ users with semantic search, entity extraction, and intelligent recommendations.',
    status: 'shipped',
    tech: ['Angular', 'TypeScript', 'GraphQL', 'Vector DBs', 'CI/CD'],
    link: 'https://example.com',
  },
  {
    id: 'p6',
    title: 'Microservices Testing Framework',
    description: 'Comprehensive testing suite with contract testing, integration tests, and automated E2E scenarios. Reduced production incidents by 85%.',
    status: 'shipped',
    tech: ['Jest', 'TypeScript', 'REST APIs', 'CI/CD', 'GCP'],
    github: 'https://github.com/shivabasava',
  },
];
