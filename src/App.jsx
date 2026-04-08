import { startTransition, useEffect, useMemo, useState } from "react";
import BackToTopButton from "./components/BackToTopButton";
import ImageModal from "./components/ImageModal";
import Sidebar from "./components/Sidebar";
import { navSections, siteContent } from "./data/siteContent";
import AnatomySection from "./sections/AnatomySection";
import CholangiocarcinomaSections from "./sections/CholangiocarcinomaSections";
import ClosingSections from "./sections/ClosingSections";
import GallbladderSections from "./sections/GallbladderSections";
import IntroSections from "./sections/IntroSections";

function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) return;

        const nextId = visibleEntries[0].target.id;
        startTransition(() => setActiveSection(nextId));
      },
      {
        rootMargin: "-32% 0px -54% 0px",
        threshold: [0.15, 0.3, 0.55, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

function useRevealObserver() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(".reveal"));
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const sectionIds = useMemo(() => navSections.map((section) => section.id), []);
  const activeSection = useScrollSpy(sectionIds);
  useRevealObserver();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen || modalItem ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen, modalItem]);

  const openImage = (item) => setModalItem(item);
  const closeImage = () => setModalItem(null);

  return (
    <div className="relative min-h-screen bg-stone-50 text-ink">
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid bg-[size:24px_24px] opacity-[0.08]" />

      <Sidebar
        sections={navSections}
        activeId={activeSection}
        branding={siteContent.branding}
        open={isSidebarOpen}
        onToggle={() => setIsSidebarOpen((value) => !value)}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="relative z-10 lg:pl-72">
        <main className="mx-auto flex max-w-[1650px] flex-col gap-6 px-4 pb-6 pt-20 sm:px-6 sm:pt-24 lg:gap-8 lg:px-8 lg:pt-6 xl:px-10">
          <IntroSections
            hero={siteContent.hero}
            orientador={siteContent.orientador}
            presenters={siteContent.presenters}
            objectives={siteContent.objectives}
            branding={siteContent.branding}
            onOpenImage={openImage}
          />

          <AnatomySection anatomy={siteContent.anatomy} overview={siteContent.overview} onOpenImage={openImage} />

          <CholangiocarcinomaSections
            cca={siteContent.cca}
            gallery={siteContent.gallery}
            bismuth={siteContent.bismuth}
            tnm={siteContent.tnm}
            treatment={siteContent.treatment}
            onOpenImage={openImage}
          />

          <GallbladderSections
            gallbladder={siteContent.gallbladder}
            polypPorcelain={siteContent.polypPorcelain}
            onOpenImage={openImage}
          />

          <ClosingSections
            quiz={siteContent.quiz}
            references={siteContent.references}
            footer={siteContent.footer}
            onOpenImage={openImage}
          />
        </main>
      </div>

      <BackToTopButton />
      <ImageModal item={modalItem} onClose={closeImage} />
    </div>
  );
}
