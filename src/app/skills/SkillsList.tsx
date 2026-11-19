"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./services.module.css";

const SKILLS = [
    {
        title: "Front-End Engineering",
        description:
            "Building fast, accessible, and maintainable interfaces with a Computer Engineering foundation and years of shipping production software for healthcare and events.",
        highlights: [
            "Next.js & React",
            "TypeScript & JavaScript",
            "Responsive, accessible UI",
            "Motion & interaction",
        ],
    },
    {
        title: "AI Experience Design",
        description:
            "Designing interfaces where AI takes action on someone’s behalf—making its decisions understandable, keeping people in control, and giving them a clear path forward.",
        highlights: [
            "Agentic UX patterns",
            "Explainable AI actions",
            "Human-in-the-loop controls",
            "AI feature integration",
        ],
    },
    {
        title: "Backend Development",
        description:
            "Designing the logic, data, and services behind the interface—secure, reliable systems built to handle real users in industries like healthcare and events.",
        highlights: [
            "API design & integrations",
            "Databases & data modeling",
            "Authentication & security",
            "Server-side rendering & caching",
        ],
    },
    {
        title: "Full-Stack & Platforms",
        description:
            "Connecting the front end to the systems behind it, from APIs and content to commerce, hosting, and measurement.",
        highlights: [
            "Node.js & APIs",
            "CMS & Headless Shopify",
            "DevOps & hosting",
            "Analytics & tracking",
        ],
    },
];

export default function SkillsList() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    setIsVisible(false);
                    return;
                }

                if (window.scrollY > 0) {
                    setIsVisible(false);
                    requestAnimationFrame(() => setIsVisible(true));
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="skills" className={`section ${styles.list}`}>
            <div className="container">
                <div className={styles.offerLayout}>
                    <div className={`${styles.offerIntro} ${isVisible ? styles.offerIntroVisible : ""}`.trim()}>
                        <span className="eyebrow">What I Do</span>
                        <h2>Skills</h2>
                        <p>
                            Where engineering discipline meets creative instinct—the skills I bring from idea to interface.
                        </p>
                    </div>

                    <div className={styles.serviceItems}>
                        {SKILLS.map((skill, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <article
                                    key={skill.title}
                                    className={`${styles.serviceItem} ${isActive ? styles.active : ""} ${isVisible ? styles.visible : ""}`.trim()}
                                    tabIndex={0}
                                    onClick={() => setActiveIndex(index)}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter" || event.key === " ") {
                                            event.preventDefault();
                                            setActiveIndex(index);
                                        }
                                    }}
                                >
                                    <div className={styles.serviceItemHeader}>
                                        <span className={styles.serviceIndex}>{String(index + 1).padStart(2, "0")}</span>
                                        <h3 className={styles.serviceTitle}>{skill.title}</h3>
                                    </div>

                                    <div className={styles.serviceItemBody}>
                                        <p>{skill.description}</p>
                                        <ul className={styles.deliverables}>
                                            {skill.highlights.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
