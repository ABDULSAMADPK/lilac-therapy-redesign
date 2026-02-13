# Project Breakdown: Dr. Maya Reynolds Redesign
**Role**: Lead Frontend Developer / UI Designer
**Project Type**: Healthcare / Private Practice Branding
**Status**: Completed Redesign (Transitioned from "Lilac Template")

---

## 🏛️ Project Overview
The objective was to pivot a generic wellness template ("Lilac") into a specific, high-end brand for **Dr. Maya Reynolds, PsyD**. The goal was to create a site that didn't just look "nice," but actually functioned as a clinical tool—building trust, setting expectations, and streamlining the intake process.

## 🛠️ Key Technical Decisions

### 1. The "Sage & Sand" Theme System
- **Decision**: Moved away from hardcoded colors to a CSS Variable-based theme system in `globals.css`.
- **Reason**: This allowed for rapid iteration. When we switched from Purple to Sage Green, it was a one-line change that propagated across the entire app (`--color-primary`).
- **Result**: A consistent, maintainable design system that is easy to update in the future.

### 2. Component Refactoring & Naming
- **Decision**: Renamed generic components (`ContactSection`) to domain-specific names (`Consultation`).
- **Reason**: The code should reflect the business logic. This isn't just a "Contact Form"; it's a patient intake workflow.
- **Convention**: Standardized on **PascalCase** for components to match React best practices and distinguish them from helper functions.

### 3. Image Optimization & Cache Busting
- **Challenge**: Next.js image caching was aggressive, causing users to see old assets even after updates.
- **Solution**: Implemented a rigorous naming convention (`-final`, `-v2`) and manual cache busting during the development phase to ensure the client always saw the latest visual assets.

## 🧠 Challenges & Solutions

### **Challenge: Making it "Real" (Asset Management)**
We started with AI placeholders, but the client provided specific real-world images of their office and headshot late in the process.
- **Solution**: I created a flexible layout (`Office.tsx`) that could handle both generated concepts and real photography without breaking the grid. I used `object-fit: cover` and `object-position: top` to ensure Dr. Maya's face was never cropped, regardless of the aspect ratio of the uploaded photo.

### **Challenge: The "Contact" vs. "Consultation" Pivot**
The original template had a simple "Send Message" form. Dr. Maya needed something more clinical.
- **Solution**: I completely rewrote the `ContactSection` to be a **Consultation Request**.
- **Features**: Added specific dropdowns for "Area of Focus" (Anxiety, Trauma) and set clear expectations about response times (24-48 hours), turning a generic form into a professional intake step.

## 🏆 Key Accomplishments
- **Visual Identity**: Successfully executed a complete rebrand to "Sage & Sand," creating a grounding, therapeutic atmosphere.
- **User Experience**: Streamlined the user journey from "Learning" (Services/About) to "Action" (Book Consultation).
- **Code Quality**: Cleaned up unused technical debt (`Portfolio.tsx`) and established a clear, semantic file structure.

---

## 💬 Potential Interview Answers

**Q: "How do you handle changing client requirements?"**
*A: "On the Dr. Reynolds project, we shifted from a generic 'Contact' form to a specific 'Consultation' workflow. Instead of resisting, I refactored the component to match the new business logic, adding fields that actually helped the client filter inquiries better."*

**Q: "Tell me about a time you debugged a tricky UI issue."**
*A: "We had a persistent issue with image caching where new assets weren't showing up. I diagnosed it as a Next.js/Browser caching conflict. I resolved it by implementing a versioned filename strategy to force cache invalidation, ensuring the client could verify changes instantly."*
