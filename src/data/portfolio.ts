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
  status: "Production" | "Internal System" | "Open Protocol";
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

export const portfolioData = {
  personal: {
    name: "Shubham Chawla",
    role: "Data Engineer & Agentic AI / LLM Developer",
    company: "Google",
    location: "Hyderabad, India",
    bio: "Specializing in enterprise Big Data lakehouse architectures, distributed data processing, and autonomous multi-agent LLM systems with production-grade observability.",
    statusBadge: "Data & Agentic AI Engineer @ Google",
    terminalIntro: "Architecting resilient data pipelines & autonomous agent loops.",
    github: "https://github.com/shubhamdal",
    linkedin: "https://www.linkedin.com/in/shubhamchawla10/",
    email: "shubhamchawla.work@gmail.com",
    resumeUrl: "#contact",
  },

  stats: [
    { label: "Data Pipeline Scale", value: "Multi-TB+", detail: "Batch & CDC Lakehouse" },
    { label: "Agentic Systems", value: "Production", detail: "GraphRAG & MCP Tooling" },
    { label: "Distributed Storage", value: "Spanner & BQ", detail: "Graph & Clustered Tables" },
    { label: "Observability", value: "OpenTelemetry", detail: "End-to-end Agent Tracing" },
  ],

  featuredSystems: [
    {
      id: "graph-rag-spanner-bq",
      title: "Enterprise GraphRAG & Knowledge Graph Agent",
      category: "agentic-ai",
      status: "Production",
      summary: "Sub-second knowledge retrieval combining Cloud Spanner Graph & BigQuery Graph with multi-step autonomous LLM reasoning.",
      description:
        "Designed an enterprise GraphRAG architecture that eliminates vector-only hallucination pitfalls. By pairing structured property graphs with semantic embeddings, this agent traversals deep multi-hop entity relationships and answers complex analytical queries with grounded citations.",
      architectureFlow: [
        "Unstructured Data & Tabular Feeds",
        "Entity & Relation Extraction Pipeline (LLM + PySpark)",
        "Property Graph Storage (Cloud Spanner Graph & BigQuery)",
        "Hybrid Retriever (Vector Similarity + Multi-Hop Graph Traversal)",
        "LangGraph Supervisor Agent & Verification Loop",
        "Grounded Response with Lineage Tracing"
      ],
      metrics: [
        { label: "Retrieval P99", value: "< 320ms" },
        { label: "Graph Density", value: "2M+ Nodes" },
        { label: "Eval Faithfulness", value: "96.4%" }
      ],
      stack: ["Cloud Spanner", "BigQuery Graph", "LangGraph", "Python", "Vertex AI", "OpenTelemetry"],
      highlights: [
        "Built automated entity reconciliation to deduplicate extracted knowledge nodes.",
        "Integrated multi-agent supervisor loops for self-correcting query refinement.",
        "Instrumented with OpenTelemetry to trace graph traversal depth and token efficiency."
      ],
      github: "https://github.com/shubhamdal"
    },
    {
      id: "database-mcp-servers",
      title: "Production Database Model Context Protocol (MCP) Suite",
      category: "mcp-tooling",
      status: "Open Protocol",
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
      github: "https://github.com/shubhamdal"
    },
    {
      id: "bigquery-cdc-lakehouse",
      title: "High-Throughput CDC & Lakehouse Physical Modeling",
      category: "data-engineering",
      status: "Production",
      summary: "Real-time Change Data Capture (CDC) streaming into BigQuery with partitioned physical modeling and semantic metric layers.",
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
      github: "https://github.com/shubhamdal"
    },
    {
      id: "agentic-opentelemetry-engine",
      title: "Agentic AI Observability & Telemetry Framework",
      category: "agentic-ai",
      status: "Internal System",
      summary: "Distributed tracing and evaluation framework tracking multi-agent reasoning steps, tool latencies, and token cost telemetry.",
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
      github: "https://github.com/shubhamdal"
    },
    {
      id: "automated-kg-llm-pipeline",
      title: "Automated Knowledge Graph Construction via LLM",
      category: "agentic-ai",
      status: "Production",
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
      github: "https://github.com/shubhamdal"
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
      github: "https://github.com/shubhamdal"
    }
  ] as SystemProject[],

  skills: [
    {
      title: "Big Data & Distributed Systems",
      description: "Enterprise storage engines, lakehouses, streaming ingestion, and scalable data transformations.",
      skills: [
        { name: "Google BigQuery (CDC & Graph)", level: "Advanced" },
        { name: "Google Cloud Spanner (Spanner Graph)", level: "Advanced" },
        { name: "PySpark & Spark SQL", level: "Advanced" },
        { name: "Google Cloud Dataplex", level: "Proficient" },
        { name: "Cloud SQL & PostgreSQL", level: "Proficient" },
        { name: "Data Modeling (Physical, Dimensional, TPC-DS)", level: "Advanced" },
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
        { name: "LLM Evaluation (Faithfulness & Ragas)", level: "Proficient" },
        { name: "GQL (Graph Query Language)", level: "Proficient" }
      ]
    },
    {
      title: "Observability, Infra & Engineering Craft",
      description: "Production telemetry, container orchestration, testing frameworks, and cloud runtime.",
      skills: [
        { name: "OpenTelemetry for LLMs", level: "Advanced" },
        { name: "Google Cloud Run & Serverless", level: "Advanced" },
        { name: "Docker & Containerization", level: "Proficient" },
        { name: "FastAPI & Asynchronous Python", level: "Advanced" },
        { name: "PyTest & PySpark Unit Testing", level: "Advanced" },
        { name: "CI/CD & Cloud Source Repositories", level: "Proficient" },
        { name: "Prometheus & Cloud Trace", level: "Proficient" },
        { name: "Git & Version Control", level: "Advanced" }
      ]
    }
  ] as SkillCategory[],

  experience: [
    {
      role: "Software / Data Engineer",
      company: "Google",
      location: "Hyderabad, Telangana, India",
      period: "Present",
      summary: "Working at the intersection of enterprise Big Data systems and cutting-edge Agentic AI. Architecting distributed data lakehouses, GraphRAG engines, and Model Context Protocol (MCP) ecosystems.",
      achievements: [
        "Developed autonomous multi-agent pipelines and knowledge graph integrations using Cloud Spanner Graph and BigQuery Graph.",
        "Built production MCP (Model Context Protocol) servers and database toolboxes enabling secure, LLM-driven query execution.",
        "Implemented high-volume CDC streaming and physical modeling architectures benchmarked against enterprise TPC-DS workloads.",
        "Pioneered end-to-end LLM agent observability using OpenTelemetry to capture latency, token economics, and evaluation scores."
      ],
      technologies: ["BigQuery", "Cloud Spanner", "PySpark", "LangGraph", "Model Context Protocol", "Vertex AI", "OpenTelemetry", "Cloud Run"]
    }
  ] as ExperienceItem[],

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
    metrics: "Multi-TB+ data scales | Sub-second GraphRAG P99 (<320ms) | 100% MCP tool validation | OpenTelemetry full-trace coverage",
    contact: "Email: shubhamchawla.work@gmail.com | LinkedIn: linkedin.com/in/shubhamchawla10/ | GitHub: github.com/shubhamdal"
  }
};
