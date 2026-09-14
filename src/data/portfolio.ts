export interface SystemProject {
  id: string;
  title: string;
  category: "agentic-ai" | "data-engineering" | "mcp-tooling";
  summary: string;
  description: string;
  architectureFlow?: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  stack: string[];
  highlights: string[];
  github?: string;
  link?: string;
  status: "Production" | "Internal System" | "Open Protocol" | "Open Source";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  specialization: string;
  details: string[];
}

export interface ArticleItem {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  publication?: string;
  tags: string[];
  url: string;
}

export const portfolioData = {
  personal: {
    name: "Shubham Chawla",
    role: "AI & Data Engineer",
    company: "Google",
    location: "Hyderabad, India",
    bio: "Specializing in enterprise Big Data lakehouse architectures, distributed data processing, and autonomous multi-agent LLM systems for major banks and financial institutions.",
    statusBadge: "AI & Data Engineer @ Google",
    terminalIntro: "Architecting resilient data pipelines & autonomous agent loops.",
    github: "https://github.com/shubhamgoogle",
    linkedin: "https://www.linkedin.com/in/shubhamchawla10/",
    medium: "https://medium.com/@shubu_google",
    email: "shubhamchawla10@gmail.com",
    resumeUrl: "#contact",
    hobbies: {
      strava: "https://www.strava.com/athletes/92222693",
      cricheroes: "https://cricheroes.com/player-profile/1529762/shubham-chawla/matches",
      chess: "https://www.chess.com/member/shubhamdal",
      photos: {
        triathlon: "https://photos.app.goo.gl/FqYPM5RDYxY5o2YK9",
        cricket: "https://photos.app.goo.gl/39nvdnAWToizzqgE6",
      },
      visitedCountries: [
        { name: "India", flag: "🇮🇳", region: "Asia" },
        { name: "Australia", flag: "🇦🇺", region: "Oceania" },
        { name: "Maldives", flag: "🇲🇻", region: "South Asia" },
        { name: "Singapore", flag: "🇸🇬", region: "Southeast Asia" },
        { name: "UAE", flag: "🇦🇪", region: "Middle East" },
        { name: "France", flag: "🇫🇷", region: "Western Europe" },
        { name: "Belgium", flag: "🇧🇪", region: "Western Europe" },
        { name: "Netherlands", flag: "🇳🇱", region: "Western Europe" },
        { name: "Luxembourg", flag: "🇱🇺", region: "Western Europe" },
        { name: "USA", flag: "🇺🇸", region: "North America" },
        { name: "UK", flag: "🇬🇧", region: "Western Europe" },
      ],
    },
  },

  stats: [
    { label: "Data Pipeline Scale", value: "Multi-TB+", detail: "Batch & CDC Lakehouse" },
    { label: "Agentic Systems", value: "Production", detail: "GraphRAG & MCP Tooling" },
    { label: "Distributed Storage", value: "Spanner & BQ", detail: "Graph & Clustered Tables" },
    { label: "Observability", value: "OpenTelemetry", detail: "End-to-end Agent Tracing" },
  ],

  featuredSystems: [
    {
      id: "equity-portfolio-analyzer",
      title: "Equity Portfolio Analyzer Agent (Google ADK)",
      category: "agentic-ai",
      status: "Open Source",
      summary: "Multi-source financial agent built on Google ADK fanning out across 4 market data feeds (Yahoo Finance, Twelve Data, NSE/BSE, Tavily) to synthesize an opinionated BUY / HOLD / SELL verdict.",
      description:
        "Engineered an autonomous equity research agent using Google's Agent Development Kit (ADK) and LiteLLM. Fans out across Yahoo Finance, Twelve Data, NSE/BSE live feeds, and Tavily in parallel to cross-reference fundamentals, technicals, and live sentiment with complete source attribution.",
      architectureFlow: [
        "Client Portfolio Analysis Query",
        "Google ADK Supervisor Agent + LiteLLM",
        "Parallel 4-Way Adapter Fanout (YFinance, TwelveData, NSE/BSE, Tavily)",
        "Cross-Source Disagreement & Anomaly Detection",
        "Verdict Synthesis Engine (BUY / HOLD / SELL / WATCHLIST)",
        "Grounded Financial Report with Lineage Tracing"
      ],
      metrics: [
        { label: "Data Feeds", value: "4 Parallel" },
        { label: "Data Points", value: "~115 Metrics" },
        { label: "Framework", value: "Google ADK" }
      ],
      stack: ["Google ADK", "LiteLLM", "Python", "FastAPI", "Financial APIs", "NSE/BSE"],
      highlights: [
        "Triangulates global fundamentals with live Indian market data (NSE/BSE circuit limits, VWAP).",
        "Surfaces discrepancies between data providers explicitly rather than papering over conflicts.",
        "Built modular adapter architecture for rapid integration with Model Context Protocol (MCP) toolboxes."
      ],
      github: "https://github.com/shubhamgoogle/equity-portfolio-analyzer-agent"
    },
    {
      id: "database-mcp-servers",
      title: "Production Database Model Context Protocol (MCP) Suite",
      category: "mcp-tooling",
      status: "Open Source",
      summary: "Enterprise MCP servers enabling AI agents to safely introspect schemas, generate optimized SQL, and execute database tasks with strict guardrails.",
      description:
        "Engineered scalable MCP (Model Context Protocol) servers deployed on Cloud Run. Enables LLM assistants and autonomous agents to safely explore schemas, generate explainable query plans, and query enterprise databases with zero unauthorized DDL/DML.",
      architectureFlow: [
        "Agent Client Request (Claude / Custom Agent)",
        "MCP Protocol Transport (SSE / JSON-RPC)",
        "FastAPI Gateway on Google Cloud Run",
        "Schema Sandbox & AST SQL Validation Guardrail",
        "Target Database (Cloud SQL / BigQuery / Spanner)",
        "Serialized Result Payload with Cost Estimation"
      ],
      metrics: [
        { label: "Invocation Latency", value: "< 140ms" },
        { label: "Safety Pass Rate", value: "100%" },
        { label: "Supported Runtimes", value: "Cloud Run / Docker" }
      ],
      stack: ["Model Context Protocol (MCP)", "FastAPI", "Google Cloud Run", "BigQuery", "Cloud SQL", "Docker"],
      highlights: [
        "Implemented SQL AST parsing to block destructive operations before execution.",
        "Supported dynamic schema introspection with semantic caching to minimize metadata queries.",
        "Packaged as modular containerized microservices for seamless multi-agent integration."
      ],
      github: "https://github.com/shubhamgoogle/mcp-toolbox-for-databases-implementation"
    },
    {
      id: "gcp-aml-ai-dashboard",
      title: "GCP Anti-Money Laundering (AML) AI Framework",
      category: "data-engineering",
      status: "Open Source",
      summary: "Enterprise Anti-Money Laundering (AML) transaction compliance pipeline and dashboard deployed on GCP using FastAPI, BigQuery, and Cloud SQL.",
      description:
        "Architected an end-to-end AML transaction monitoring framework for banking workloads. Implements automated SQL DDL/DML pipelines, export workflows, and a containerized FastAPI backend to detect anomalous financial patterns and generate compliance audit trails.",
      architectureFlow: [
        "Raw Core Banking Transactions",
        "BigQuery Ingestion & Partitioned Staging Tables",
        "GCP Cloud SQL Compliance Sandbox",
        "AML Anomaly Detection Queries & Rule Engine",
        "FastAPI REST Services on Google Cloud",
        "Compliance Auditor Dashboard & Export Feed"
      ],
      metrics: [
        { label: "Target Domain", value: "Banking AML" },
        { label: "Query Engine", value: "BigQuery / SQL" },
        { label: "Backend", value: "FastAPI / GCP" }
      ],
      stack: ["Google Cloud", "BigQuery", "FastAPI", "Cloud SQL", "Python", "SQL DDL/DML"],
      highlights: [
        "Designed comprehensive SQL schemas and queries for multi-entity financial tracking.",
        "Implemented automated gcloud deployment scripting and environment provisioning.",
        "Built extensible REST API framework for downstream reporting and analytics integrations."
      ],
      github: "https://github.com/shubhamgoogle/GCP-AML-AI-Dashboard"
    },
    {
      id: "agentic-opentelemetry-engine",
      title: "Agentic AI Observability & Telemetry Framework",
      category: "agentic-ai",
      status: "Open Source",
      summary: "Distributed tracing and evaluation framework tracking multi-agent reasoning steps, tool latencies, and token cost telemetry into GCP Cloud Trace.",
      description:
        "Built comprehensive observability infrastructure specifically designed for autonomous agent systems. Captures real-time span traces for every model call, retrieval step, and MCP tool execution to diagnose bottlenecks and measure hallucination rates.",
      architectureFlow: [
        "Multi-Agent Execution Loop (ADK / LangGraph)",
        "OpenTelemetry Instrumentation Hooks",
        "Collector Pipeline (OpenTelemetry Collector / GCP)",
        "Span Trace & Metric Store (Cloud Trace & Prometheus)",
        "Real-Time Evals (Faithfulness, Precision, Cost)",
        "Observability Dashboard & Latency Alerting"
      ],
      metrics: [
        { label: "Trace Overhead", value: "< 4ms" },
        { label: "Eval Pipeline SLA", value: "Near Real-Time" },
        { label: "Cost Attribution", value: "Per-Agent Granular" }
      ],
      stack: ["OpenTelemetry", "Google Cloud Trace", "Python", "Vertex AI Pipelines", "Prometheus"],
      highlights: [
        "Provided granular token and cost attribution across complex nested sub-agents.",
        "Integrated automated evaluation hooks for production confidence scoring.",
        "Created actionable dashboards for latency hotspots and tool error rates."
      ],
      github: "https://github.com/shubhamgoogle/gcp-opentelemetry-llm-agent"
    },
    {
      id: "automated-kg-llm-pipeline",
      title: "Automated Knowledge Graph Construction via LLM",
      category: "agentic-ai",
      status: "Open Source",
      summary: "Pipeline leveraging few-shot prompt chaining and graph reconciliation to convert unstructured domain documents into queryable property graphs.",
      description:
        "Automates the end-to-end extraction of ontology-aligned entities and relationships from raw documents. Employs recursive chunking, schema mapping, and entity resolution algorithms to create connected graph structures ready for GQL and graph database queries.",
      architectureFlow: [
        "Raw Documents (PDFs, Transcripts, Specs)",
        "Document Chunking & Layout Analysis",
        "LLM Entity-Relationship Extraction with Pydantic Schema",
        "Entity Resolution & Graph De-duplication Engine",
        "Property Graph Storage (Spanner / NetworkX)",
        "GQL Query Interface"
      ],
      metrics: [
        { label: "Entity Extraction F1", value: "91.8%" },
        { label: "Processing Speed", value: "100k+ docs/day" },
        { label: "Ontology Alignment", value: "Strict Schema" }
      ],
      stack: ["Gemini 1.5 Pro", "Python", "Spanner Graph", "Pydantic", "NetworkX", "GQL"],
      highlights: [
        "Designed deterministic schema validation using Pydantic to ensure zero hallucinated node types.",
        "Developed graph clustering routines to merge coreferent entities.",
        "Enabled direct GQL graph querying for downstream agents."
      ],
      github: "https://github.com/shubhamgoogle/automatic-KG-creation-with-LLM"
    },
    {
      id: "reverse-engineering-agent",
      title: "SQL Reverse-Engineering & Data Model Agent",
      category: "agentic-ai",
      status: "Open Source",
      summary: "AI agent that parses complex enterprise SQL queries, reverse-engineers entity-relationship models, and visualizes schemas in structured JSON.",
      description:
        "Built a specialized AI-driven database reverse-engineering system. Ingests raw multi-dialect SQL queries, dissects table relationships, joins, and attribute lineage, and synthesizes complete entity-relationship schemas with interactive Streamlit visualization.",
      architectureFlow: [
        "Multi-Dialect SQL Script Ingestion",
        "Abstract Syntax Tree (AST) & Lexical Parsing",
        "Entity & Attribute Extraction Agent",
        "Relationship & Foreign Key Inference Engine",
        "JSON Data Model Serialization",
        "Streamlit Interactive Schema Visualization"
      ],
      metrics: [
        { label: "Output Format", value: "Structured JSON" },
        { label: "UI Interface", value: "Streamlit" },
        { label: "Architecture", value: "FastAPI + AI" }
      ],
      stack: ["Python", "FastAPI", "Streamlit", "SQL Parser", "Google Cloud SDK", "Poetry"],
      highlights: [
        "Automates legacy database documentation by reconstructing data models from query history.",
        "Generates clean JSON schemas for direct ingestion into semantic models or data catalogs.",
        "Full-stack architecture featuring a FastAPI backend and interactive Streamlit UI."
      ],
      github: "https://github.com/shubhamgoogle/reverse-engineering-agent"
    },
    {
      id: "bigquery-cdc-lakehouse",
      title: "High-Throughput CDC & Lakehouse Physical Modeling",
      category: "data-engineering",
      status: "Production",
      summary: "Real-time Change Data Capture (CDC) streaming into BigQuery with partitioned physical modeling and LookML semantic metric layers.",
      description:
        "Engineered an enterprise data ingestion and warehouse pipeline supporting real-time CDC updates. Leveraged BigQuery storage optimization, table partitioning, clustering, and LookML semantic layers to maximize query concurrency while cutting compute spend.",
      architectureFlow: [
        "Source Databases (Postgres / MySQL CDC Streams)",
        "Kafka / PubSub Event Broker",
        "PySpark Streaming / Dataproc Processing",
        "BigQuery Bronze & Silver Clustered Tables",
        "Dataplex Governance & Data Quality Rules",
        "LookML Semantic Layer for Business Intelligence"
      ],
      metrics: [
        { label: "Throughput", value: "50k+ eps" },
        { label: "Query Cost Reduction", value: "38%" },
        { label: "Data Quality Score", value: "99.9%" }
      ],
      stack: ["BigQuery CDC", "PySpark", "Dataplex", "LookML", "Cloud Storage", "PyTest"],
      highlights: [
        "Designed physical data models adhering to TPC-DS benchmark standards.",
        "Built robust PySpark unit test suites with pytest for reproducible transformation logic.",
        "Implemented automated data governance policies using Google Cloud Dataplex."
      ],
      github: "https://github.com/shubhamgoogle/lookml-semanticmodel-tpcds"
    },
    {
      id: "fastapi-cloudrun-services",
      title: "Cloud Run Microservices & Semantic Agent API",
      category: "mcp-tooling",
      status: "Production",
      summary: "Containerized, auto-scaling API services on Google Cloud Run delivering low-latency semantic search and analytical agent endpoints.",
      description:
        "High-performance microservice architecture deploying FastAPI services onto Google Cloud Run. Optimized cold starts, connection pooling to Cloud SQL, and integrated streaming responses for agentic chat and analytical query generation.",
      architectureFlow: [
        "HTTPS Client Traffic",
        "Cloud Run Auto-scaler (0 to N instances)",
        "FastAPI Asynchronous Request Pipeline",
        "Connection Pool Manager (Cloud SQL / BigQuery)",
        "Async Agentic Reasoning & Streaming SSE",
        "Client Response Stream"
      ],
      metrics: [
        { label: "Cold Start", value: "< 800ms" },
        { label: "Availability", value: "99.99%" },
        { label: "Throughput", value: "Thousands req/min" }
      ],
      stack: ["FastAPI", "Google Cloud Run", "Docker", "Cloud SQL", "Python", "GCP"],
      highlights: [
        "Optimized Docker container footprint down to minimal base layers for instant cold starts.",
        "Implemented streaming Server-Sent Events (SSE) for low-latency agent responses.",
        "Configured automated CI/CD deployment pipelines."
      ],
      github: "https://github.com/shubhamgoogle/GCP-AML-AI-Dashboard"
    }
  ] as SystemProject[],

  skills: [
    {
      title: "Big Data & Distributed Systems",
      description: "Enterprise storage engines, lakehouses, streaming ingestion, and scalable data transformations.",
      skills: [
        { name: "Google BigQuery", level: "Advanced" },
        { name: "Google Cloud Spanner", level: "Advanced" },
        { name: "PySpark & Spark SQL", level: "Advanced" },
        { name: "Google Cloud Dataplex", level: "Proficient" },
        { name: "Cloud SQL & PostgreSQL", level: "Proficient" },
        { name: "Data Modeling", level: "Advanced" },
        { name: "Vertex AI Pipelines", level: "Proficient" },
        { name: "LookML & Semantic Layers", level: "Proficient" }
      ]
    },
    {
      title: "Agentic AI & LLM Systems",
      description: "Autonomous reasoning loops, multi-agent supervision, graph retrieval, and tool ecosystems.",
      skills: [
        { name: "Model Context Protocol (MCP)", level: "Advanced" },
        { name: "GraphRAG & Knowledge Graphs", level: "Advanced" },
        { name: "Agent Development Kit (ADK)", level: "Advanced" },
        { name: "LangGraph / Multi-Agent Supervision", level: "Advanced" },
        { name: "Tool Calling & Function Orchestration", level: "Advanced" },
        { name: "Vector Databases & Semantic Retrieval", level: "Proficient" },
        { name: "LLM Evaluation", level: "Proficient" },
        { name: "GQL (Graph Query Language)", level: "Proficient" }
      ]
    },
    {
      title: "GCP & Agentic Platform Expert",
      description: "Enterprise Google Cloud architecture, specialized in the GCP Agentic Platform, Vertex AI, serverless runtimes, and production observability.",
      skills: [
        { name: "Google Cloud Platform (GCP)", level: "Expert" },
        { name: "GCP Agentic Platform", level: "Expert" },
        { name: "Vertex AI Agent Builder", level: "Advanced" },
        { name: "Google Cloud Run & Serverless", level: "Advanced" },
        { name: "Cloud Architecture & Security", level: "Advanced" },
        { name: "OpenTelemetry & Cloud Trace", level: "Advanced" },
        { name: "FastAPI & Microservices", level: "Advanced" },
        { name: "Docker & Containerization", level: "Proficient" }
      ]
    }
  ] as SkillCategory[],

  experience: [
    {
      role: "AI & Data Engineer",
      company: "Google",
      location: "Hyderabad, India",
      period: "2022 – Present",
      summary: "Partnering with major banks, financial institutions, and global enterprises to architect mission-critical Big Data lakehouses and deploy production Agentic AI systems with strict security guardrails.",
      achievements: [
        "Engineered production agentic AI workflows and Model Context Protocol (MCP) database toolboxes for financial workloads with AST-level query validation.",
        "Designed sub-second GraphRAG retrieval pipelines combining Cloud Spanner Graph and BigQuery for complex multi-hop financial knowledge reasoning.",
        "Implemented high-volume CDC streaming and lakehouse physical models processing 50k+ events/sec benchmarked against enterprise TPC-DS workloads.",
        "Pioneered end-to-end LLM agent observability using OpenTelemetry to capture reasoning traces, latency, token economics, and evaluation scores."
      ],
      technologies: ["BigQuery", "Cloud Spanner", "PySpark", "LangGraph", "Model Context Protocol", "Vertex AI", "OpenTelemetry", "Cloud Run"]
    },
    {
      role: "Senior Data Engineer",
      company: "Carelon",
      location: "Hyderabad, India",
      period: "2021 – 2022",
      summary: "Engineered scalable Big Data pipelines and cloud analytics infrastructure for massive healthcare and enterprise workloads.",
      achievements: [
        "Built distributed PySpark pipelines processing multi-TB transactional healthcare and claims records.",
        "Engineered automated ETL workflows and validation frameworks ensuring zero data drift.",
        "Optimized query runtimes and partitioning models on distributed storage for executive reporting.",
        "Collaborated across international engineering teams on production cloud data platforms."
      ],
      technologies: ["PySpark", "Apache Spark", "Python", "Cloud Platforms", "SQL", "Airflow"]
    },
    {
      role: "Business Technology Analyst",
      company: "Deloitte",
      location: "Hyderabad, India",
      period: "2018 – 2021",
      summary: "Delivered large-scale Big Data analytics and automation platforms for premier US enterprise clients across healthcare and financial services.",
      achievements: [
        "Architected and developed an automated Test Engine for distributed Spark-Scala pipelines, reducing SIT testing turnaround time by 60%.",
        "Engineered automated data pipelines and scheduling workflows using Python, Teradata SQL, and Apache Airflow.",
        "Created custom analytics integration tools in Python to process and visualize high-scale tabular data for executive stakeholders.",
        "Spearheaded cloud platform POCs implementing containerized services with Docker and Kubernetes for scalable workloads."
      ],
      technologies: ["Apache Spark", "Scala", "Python", "Apache Airflow", "Teradata", "Docker", "Kubernetes", "Hive"]
    },
    {
      role: "Programmer Analyst",
      company: "Cognizant",
      location: "Chennai, India",
      period: "2016 – 2018",
      summary: "Engineered and automated regulatory risk assessment frameworks (CCAR, CECL, IFRS9) mandated by the US Federal Reserve for Tier-1 multinational banks.",
      achievements: [
        "Developed and automated regulatory risk reporting engines using PySpark, Hive, and Unix across large-scale financial transaction records.",
        "Collaborated with quantitative data modeling teams to integrate monthly/annual credit-risk predictive models seamlessly into big data pipelines.",
        "Migrated legacy banking mainframe architectures (COBOL/DB2) onto modern Apache Hadoop and Hive Big Data clusters.",
        "Delivered 100% audit compliance for Federal Reserve regulatory stress-testing cycles."
      ],
      technologies: ["PySpark", "Hadoop", "Hive", "Unix / Shell", "DB2 / SQL", "CCAR / CECL", "Data Modeling"]
    }
  ] as ExperienceItem[],

  articles: [
    {
      id: "mastering-observability-google-adk",
      title: "Mastering Observability in Google ADK: Implementing OpenTelemetry for GCP Metrics, Traces, and Logs",
      description: "A comprehensive guide to capturing distributed spans, metrics, and agent reasoning traces in Google Agent Development Kit (ADK) using OpenTelemetry and Cloud Trace.",
      date: "2025",
      readTime: "8 min read",
      publication: "Google Cloud",
      tags: ["Google ADK", "OpenTelemetry", "Cloud Trace", "Agentic AI"],
      url: "https://medium.com/google-cloud/mastering-observability-in-google-adk-implementing-opentelemetry-for-gcp-metrics-traces-and-cf5422256633"
    },
    {
      id: "hive-to-bigquery-dataproc-serverless",
      title: "Hive to BigQuery: Move Data Efficiently Using GCP Dataproc Serverless",
      description: "Architecting high-throughput, cost-effective data migrations from on-premise Apache Hive metastores to Google BigQuery using serverless PySpark on Dataproc.",
      date: "2024",
      readTime: "6 min read",
      publication: "Google Cloud",
      tags: ["Google BigQuery", "Dataproc Serverless", "Apache Hive", "PySpark"],
      url: "https://medium.com/google-cloud/hive-to-bigquery-move-data-efficiently-using-gcp-dataproc-serverless-ee30d35aaf03"
    }
  ] as ArticleItem[],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University",
      period: "Graduated with Honors",
      specialization: "Big Data & Distributed Computing",
      details: [
        "In-depth coursework in Distributed Systems, Database Management Systems, Data Structures & Algorithms, and Cloud Architecture.",
        "Competency in Big Data frameworks (Hadoop, Spark, MapReduce) and relational/NoSQL databases."
      ]
    }
  ] as EducationItem[],

  terminalCommands: {
    help: "Available commands: whoami, systems, skills, exp, contact, metrics, clear",
    whoami: "Shubham Chawla — Data Engineer & Agentic AI Developer @ Google (Hyderabad). Specialized in Lakehouses, GraphRAG, and MCP tooling.",
    systems: "Key Systems: 1) GraphRAG with Spanner/BQ Graph  2) Database MCP Servers  3) BigQuery CDC Lakehouse  4) Agent Observability Framework",
    skills: "Core: BigQuery, Cloud Spanner, PySpark, LangGraph, Model Context Protocol (MCP), OpenTelemetry, FastAPI, Cloud Run",
    exp: "Google (Present) — Engineering distributed data systems & autonomous agentic workflows.",
    metrics: "Multi-TB+ scalable data pipelines | Production-ready Agentic AI platforms | 100% MCP tool validation | OpenTelemetry full-trace coverage",
    contact: "Email: shubhamchawla10@gmail.com | LinkedIn: linkedin.com/in/shubhamchawla10/ | GitHub: github.com/shubhamgoogle"
  }
};
