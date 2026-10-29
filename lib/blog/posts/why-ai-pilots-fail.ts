import type { Post } from "@/lib/blog/types"

export const post: Post = {
  slug: "why-ai-pilots-fail",
  title: "Why AI pilots fail: most are lost before the build starts",
  seoTitle: "Why AI pilots fail: the data, and POC vs pilot explained",
  description:
    "Why most AI pilots never reach production, what MIT NANDA and Madrona found, the six causes to catch in discovery, and when to run a POC instead of a pilot.",
  answer:
    "Most AI pilots fail for reasons decided before the build starts. MIT NANDA’s 2025 report The GenAI Divide found 95% of organizations getting zero return from generative AI, and Madrona’s 2026 research found 83% of enterprises convert fewer than half of their AI pilots to production. The usual causes: no agreed baseline, data discovered too late, scope that grows mid-build, and no owner after launch.",
  takeaways: [
    "MIT NANDA (2025) found 95% of organizations getting zero return from generative AI; Madrona (2026) found 83% of enterprises convert fewer than half of their pilots to production.",
    "Most failures are decided before the build: no baseline, late data, disagreement, scope creep, no owner.",
    "A POC tests whether something can work; a pilot proves it works here and is meant to ship.",
    "Name the stage in writing so the client knows which one they are paying for.",
  ],
  track: "both",
  category: "AI pilots",
  author: "shawn-sias",
  published: "2026-10-28",
  updated: "2026-10-28",
  body: [
    { type: "p", text: "Most AI pilots are lost before anyone writes a prompt. The baseline was never measured, the data was never checked, or the client thought they were buying production and got a demo. The model is rarely the problem." },
    { type: "h2", id: "what-is", text: "What counts as a failed AI pilot?" },
    { type: "definition", term: "Failed AI pilot", text: "A failed AI pilot is one that ends without moving into production, either because it missed its agreed success measure or because nobody could tell whether it hit one." },
    { type: "h2", id: "how-many", text: "How many AI pilots fail?" },
    {
      type: "p",
      text: "Two widely cited studies point the same way. **MIT NANDA, The GenAI Divide: State of AI in Business 2025** reported that despite heavy enterprise investment, 95% of organizations were getting zero return from generative AI. **Madrona, Harnessing Enterprise Value: The ROI of AI (2026)** found that 83% of enterprises convert fewer than half of their AI pilots to production.",
    },
    {
      type: "p",
      text: "Neither finding says the models do not work. They say the projects around the models are not set up to reach production. That is good news for anyone running pilots, because project setup is within your control.",
    },
    { type: "h2", id: "why", text: "Why do AI pilots fail?" },
    {
      type: "p",
      text: "Six causes account for most stalled pilots. Each has an early symptom you can catch in discovery, before any money is spent on the build.",
    },
    {
      type: "table",
      caption: "Six causes of failed AI pilots",
      head: ["Cause", "Early symptom", "What prevents it"],
      rows: [
        ["No baseline", "Nobody can say how the work is measured today", "Measure the current number from a real system before signing"],
        ["Data found too late", "Access is requested after kickoff", "Check data read-only before the quote"],
        ["Stakeholders disagree", "Different answers to “how often” or “what counts as done”", "Interview each stakeholder separately and resolve conflicts in writing"],
        ["Scope grows mid-build", "“Can it also…” in week two", "A change order process written into the SOW"],
        ["No production owner", "The sponsor is the only person who cares", "Name the owner and the reviewers in the scope"],
        ["Pilot never meant to ship", "Demo data, no real users, no integration", "Decide upfront whether this is a POC or a pilot"],
      ],
    },
    {
      type: "p",
      text: "The MIT NANDA report also points at a learning gap: many generative AI tools do not retain feedback or adapt to the workflow they sit in. Pilots that build in memory, review steps and a way to improve after launch are better placed to survive contact with real work.",
    },
    { type: "h2", id: "poc-vs-pilot", text: "What is the difference between a POC and a pilot?" },
    {
      type: "definition",
      term: "Proof of concept (POC)",
      text: "A proof of concept is a short, contained test that answers one technical question, such as whether a model can extract the right fields from these documents. It uses sample data, has no real users and is not meant to ship.",
    },
    {
      type: "definition",
      term: "Pilot",
      text: "A pilot is a limited production deployment: real users, real data, real integrations, a defined group or time window, and success measured against an agreed baseline. A pilot is meant to become production if it hits its target.",
    },
    {
      type: "table",
      caption: "POC vs pilot vs production",
      head: ["", "POC", "Pilot", "Production"],
      rows: [
        ["Question answered", "Can it work?", "Does it work here, for these people?", "Is it running the work?"],
        ["Data", "Samples or a copy", "Live, scoped, often read-only first", "Live, full scope"],
        ["Users", "The build team", "A defined group of real users", "Everyone in scope"],
        ["Success measure", "Technical pass or fail", "Baseline vs target on a business metric", "Ongoing metric with an owner"],
        ["Typical length", "Days to a few weeks", "A few weeks to a quarter", "Ongoing"],
        ["Meant to ship", "No", "Yes, if it hits target", "Already shipped"],
      ],
    },
    {
      type: "p",
      text: "A large share of “failed pilots” were POCs that someone expected to ship. Name the stage in the scope, in writing, so the client knows which one they are paying for.",
    },
    { type: "h2", id: "when-poc", text: "When should you run a POC instead of a pilot?" },
    {
      type: "ul",
      items: [
        "**Run a POC** when the technical risk is the open question: unusual documents, an untested model behavior, or an integration nobody has built before.",
        "**Run a pilot** when the technique is proven and the open questions are adoption, data quality at scale and business impact.",
        "**Run neither yet** when stakeholders disagree on the goal or the data has not been checked. That is a readiness problem, and a build will not fix it. See [how to run an AI readiness assessment](/insights/ai-readiness-assessment).",
      ],
    },
    { type: "h2", id: "what-ships", text: "What do pilots that reach production have in common?" },
    {
      type: "ol",
      items: [
        "A signed scope that names what is out of scope, not only what is in.",
        "A baseline measured from the same system the result will be measured in.",
        "Data checked before the price was set.",
        "A human-review step for the cases that should never be automated.",
        "A named owner for production, agreed before the build.",
        "A change order path, so new requests become paid work instead of silent scope creep. See the [change order template](/insights/change-order-template).",
      ],
    },
    { type: "h2", id: "poc-template", text: "What should a proof of concept template include?" },
    {
      type: "template",
      title: "AI proof of concept: one-page template",
      download: "proof-of-concept-template",
      sections: [
        { label: "Question", lines: ["The single technical question this POC answers."] },
        { label: "Inputs", lines: ["Sample data used, where it came from, and how representative it is."] },
        { label: "Pass criteria", lines: ["The measurable result that counts as a pass (for example, 95% field accuracy on 200 documents)."] },
        { label: "Out of scope", lines: ["Users, integrations and production concerns this POC does not test."] },
        { label: "Timebox", lines: ["Start date, end date, and who reviews the result."] },
        { label: "Decision", lines: ["What happens on pass (pilot scope), and on fail (stop or reshape)."] },
      ],
    },
    { type: "h2", id: "next", text: "What should you do next?" },
    { type: "ol", items: [
      "Before your next pilot, write down which stage it is: proof of concept, pilot or production.",
      "Measure the baseline from a real system before the price is agreed.",
      "Run the [AI readiness assessment](/insights/ai-readiness-assessment) on the use case, then [scope it](/insights/how-to-scope-an-ai-project) with an out-of-scope list.",
    ] },
  ],
  faq: [
    {
      q: "What percentage of AI pilots fail?",
      a: "MIT NANDA’s The GenAI Divide (2025) found 95% of organizations getting zero return from generative AI, and Madrona’s 2026 research found 83% of enterprises convert fewer than half of their AI pilots to production.",
    },
    {
      q: "Why do most AI projects fail?",
      a: "Most fail on setup rather than technology: no agreed baseline, data problems discovered after kickoff, stakeholders who disagree on the goal, scope that grows mid-build, and no owner once the pilot ends.",
    },
    {
      q: "What is the difference between a POC and a pilot?",
      a: "A proof of concept answers one technical question with sample data and is not meant to ship. A pilot is a limited production deployment with real users and data, measured against a baseline, and meant to become production if it hits its target.",
    },
    {
      q: "How long should an AI pilot run?",
      a: "Long enough to measure the success metric against its baseline with real usage, commonly a few weeks to a quarter. The length should be set in the scope, together with the target that ends it.",
    },
    {
      q: "What is the MIT AI report?",
      a: "Usually it refers to The GenAI Divide: State of AI in Business 2025 from MIT’s NANDA initiative, which reported that 95% of organizations were getting zero return from their generative AI investments.",
    },
  ],
  sources: [
    { label: "MIT NANDA, The GenAI Divide: State of AI in Business 2025", url: "https://nanda.media.mit.edu/" },
    { label: "Madrona, Harnessing Enterprise Value: The ROI of AI (2026)", url: "https://www.madrona.com/" },
  ],
  cta: {
    heading: "Scope the pilot so it can reach production.",
    body: "Interviews, a read-only data check and a signed baseline before the build. Run it on your next client; the first 30 days are free for founding partners.",
  },
  related: ["ai-readiness-assessment", "change-order-template"],
}
