import { Code2, Layers, FileText, Zap, Bot, Globe } from "lucide-react";

export default function IntroductionPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] px-4 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground">
                Welcome
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Where AI Meets{" "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                  Innovation
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
              I&apos;m Aaron George — a Computer Science undergraduate specializing in Artificial Intelligence.
              This is my portfolio, a space where I showcase projects, share learnings, and document
              my journey in AI, machine learning, and software development.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded border border-border/50 bg-card/50 p-6 sm:p-10 backdrop-blur-sm space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
                About Me
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                AI &amp; Computer Science Student
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a B.Tech CSE (AI) student at SAINTGITS College of Engineering, passionate about
                building intelligent systems that solve real-world problems. My work spans computer vision,
                natural language processing, and full-stack AI applications.
              </p>

              <p>
                From real-time emotion detection systems using convolutional neural networks to RAG-powered
                chatbots with zero-hallucination guarantees, I focus on projects that push the boundaries
                of what AI can do — while keeping practical applications in mind.
              </p>

              <p>
                I&apos;m also exploring the intersection of AI and 3D workflows through MCP protocol
                integration with Blender, and have hands-on experience in cyber security fundamentals
                from my internship at IIIT Kottayam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative px-4 sm:px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary">
              Skills & Focus Areas
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What I Work With
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: "Machine Learning",
                description:
                  "Building and training CNN models for computer vision tasks like real-time emotion detection and image classification.",
              },
              {
                icon: Layers,
                title: "Full-Stack Development",
                description:
                  "End-to-end application development with FastAPI, Supabase, Docker, and modern frontend frameworks.",
              },
              {
                icon: FileText,
                title: "NLP & RAG Systems",
                description:
                  "Developing retrieval-augmented generation chatbots with semantic search, vector databases, and zero-hallucination guarantees.",
              },
              {
                icon: Zap,
                title: "Computer Vision",
                description:
                  "Real-time video processing with OpenCV, face detection pipelines, and deep learning-based feature extraction.",
              },
              {
                icon: Bot,
                title: "AI Integration",
                description:
                  "Connecting AI models with real-world tools through MCP protocol — enabling AI-assisted 3D workflows with Blender.",
              },
              {
                icon: Globe,
                title: "Cyber Security",
                description:
                  "Working knowledge of cryptography, encryption, hashing, vulnerability analysis, and defensive security mechanisms.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-mono text-sm font-semibold uppercase tracking-wider text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
