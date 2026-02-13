# 🎤 Interview Cheat Sheet: Dr. Maya Reynolds Project

Use this "One-Pager" to prepare for questions about this project. It uses the **STAR Method** (Situation, Task, Action, Result) which recruiters love.

---

## ⚡ The Elevator Pitch (30 Seconds)
"I built a custom, high-performance website for a clinical psychologist, Dr. Maya Reynolds. I started with a Next.js template but completely refactored it into a bespoke brand identity. I focused on creating a 'digital sanctuary' using a custom 'Sage & Sand' design system in Tailwind CSS, and I transformed the standard contact form into a clinical intake workflow. The result is a fast, SEO-optimized site that builds trust with high-achieving clients."

---

## ⭐ STAR Stories (Memorize These)

### 1. The Design System Challenge
*   **Situation**: The original site used a generic "Lilac" template that didn't match the client's warm, grounded personality.
*   **Task**: Create a unique visual identity without rewriting every line of CSS.
*   **Action**: I utilized **Tailwind CSS v4 variables** to build a dynamic theme system (`globals.css`). I defined a palette (Sage Green, Warm Sand, Terracotta) and applied it globally.
*   **Result**: A consistent design system where I could change the entire site's mood by tweaking just 3 CSS variables.

### 2. The "Business Logic" Pivot (Contact vs. Consultation)
*   **Situation**: The client felt the standard "Contact Us" form was too informal and attracted low-quality leads.
*   **Task**: Turn the contact page into a professional intake step.
*   **Action**: I refactored the `ContactSection` into a `Consultation` component. I added specific dropdowns for clinical issues (Anxiety, Burnout) and set expectations about response times (24-48 hours).
*   **Result**: The form now acts as a filter, qualifying leads before they even send a message, saving the doctor time.

### 3. The Technical Bug (Image Caching)
*   **Situation**: During the redesign, updated images (Dr. Maya's headshot and office photos) weren't showing up due to aggressive browser/Next.js caching.
*   **Task**: Ensure the client always saw the latest changes immediately.
*   **Action**: I implemented a **cache-busting strategy** by renaming asset files with version suffixes (`-v2`, `-final`) and updating component references to force the browser to fetch new data.
*   **Result**: Eliminated the "I still see the old image" feedback loop and streamlined the review process.

---

## 🛠️ Tech Stack Reasoning
*   **Why Next.js?** "For SEO and performance. Server-side rendering is crucial for a doctor's local search ranking."
*   **Why Tailwind?** "Speed and consistency. It allowed me to rapid-prototype the 'Sage & Sand' theme directly in markup."
*   **Why Framer Motion?** "To add a professional 'polish'. The subtle fade-ins make the site feel premium and calming."

---

## ❓ Common Questions & Answers

**Q: How did you handle file structure?**
> "I followed React best practices: PascalCase for components (`Hero.tsx`) to distinguish them from helper functions, and lowercase for routing files (`page.tsx`) as required by Next.js App Router."

**Q: Did you prioritize mobile or desktop?**
> "Mobile-first. High-achieving professionals (the target audience) are busy and likely viewing this on their phones between meetings. I ensured the navigational tap targets were large and the layout stacked beautifully on small screens."

**Q: How did you ensure the content was accurate?**
> "I treated the client's profile as the 'Single Source of Truth'. Every heading and service description was extracted directly from her clinical bio to ensure tone consistency."
