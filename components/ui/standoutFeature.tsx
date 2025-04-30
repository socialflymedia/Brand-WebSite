'use client';
import { useState, useEffect, useRef } from 'react';

// button component for consistency
// const button = ({ children, className, ...props }) => {
//   return (
//     <button
//       className={`rounded-lg bg-[#FF4520] px-4 py-2 text-white transition-all hover:bg-opacity-90 ${className || ''}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// Interface for section data
interface Section {
  id: string;
  step: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  description: React.ReactNode;
  component: React.ReactNode;
}

const SplitLayout = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);

  // Actual sections data from your provided content
  const sections: Section[] = [
    {
      id: "section-1",
      step: "",
      title: (
        <>
          Copilot for <span className="text-[#FF4520]">Recruiters</span>
        </>
      ),
      subtitle: (
        <>
          It&apos;s your end-to-end assistant for smarter,{" "}
          <span className="text-[#FF4520]">faster</span> hiring.
        </>
      ),
      description: (
        <>
          Upload a JD and let Asynq&apos;s{" "}
          <span className="text-[#50FFFF]">AI Copilot</span> source pre-vetted
          candidates, suggest smart interview questions, and craft personalized
          outreach—all in one place.
        </>
      ),
      component: (
        <div className="mx-auto max-w-4xl rounded-lg border border-gray-500 bg-black p-6">
          <div className="mb-8 flex items-center justify-between">
            <div className="h-6 w-6"></div>
            <h2 className="text-2xl font-bold text-white">Talent Pool</h2>
            <div className="rounded-lg bg-blue-900 px-3 py-1 text-xs text-white">
              Beta
            </div>
          </div>

          <div className="mb-8 flex items-center rounded-lg border border-gray-800 bg-black p-2">
            <input
              type="text"
              placeholder="Machine Learning, 3 years experience"
              className="flex-grow border-none bg-transparent px-2 text-white outline-none"
            />
            <button className="mx-1 text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 6h18M3 12h18M3 18h18"></path>
              </svg>
            </button>
            <button className="mx-1 text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((card) => (
              <div
                key={card}
                className="rounded-lg border border-gray-500 bg-black p-4"
              >
                <div className="mb-3 flex justify-between">
                  <div>
                    <h3 className="font-medium text-white">Candidate Name</h3>
                    <p className="text-sm text-gray-400">Position</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-gray-700"></div>
                </div>

                <div className="mb-4 flex justify-center">
                  <div className="h-20 w-20 overflow-hidden rounded-full border-4 border-[#FF4520] bg-gray-700"></div>
                </div>

                <div className="mb-4 text-center">
                  <div className="text-white">
                    Match Score: <span className="text-[#FF4520]">90%</span>
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-1">
                  {["Skill 1", "Skill 2", "Skill 3"].map((skill, i) => (
                    <span
                      key={i}
                      className="rounded bg-[#FF4520] bg-opacity-30 px-2 py-1 text-xs text-[#FF4520]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mb-4 flex flex-wrap gap-1">
                  {["Full-Time", "Remote"].map((option, i) => (
                    <span
                      key={i}
                      className="rounded bg-[#FF4520] bg-opacity-20 px-2 py-1 text-xs text-[#FF4520]"
                    >
                      {option}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button className="rounded bg-gray-900 py-2 text-sm text-white">
                    Reject
                  </button>
                  <button className="rounded bg-[#50FFFF] py-2 text-sm text-white">
                    Accept
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "section-2",
      step: "",
      title: (
        <>
          One-Click <span className="text-[#FF4520]">Candidate</span>{" "}
          <span className="text-[#50FFFF]">Engagement</span>
        </>
      ),
      subtitle: (
        <>
          Automate <span className="text-[#FF4520]">follow-ups</span>, nudges,
          and <span className="text-[#50FFFF]">interview scheduling</span> with
          a single click.
        </>
      ),
      description: (
        <>
          Deliver timely and personalized messages that keep top candidates
          engaged—without the manual hustle.
        </>
      ),
      component: (
        <div className="mx-auto max-w-3xl rounded-lg border border-gray-500 bg-black p-6">
          <div className="mb-8 flex items-center justify-between">
            <div className="h-6 w-6"></div>
            <h2 className="text-2xl font-bold text-white">Assessments</h2>
            <div className="rounded-lg bg-blue-900 px-3 py-1 text-xs text-white">
              Beta
            </div>
          </div>

          <div className="mb-8 flex space-x-2">
            <button className="rounded-lg bg-blue-900 px-6 py-2 text-white">
              Active
            </button>
            <button className="rounded-lg bg-blue-950 px-6 py-2 text-white">
              Past
            </button>
            <button className="rounded-lg bg-blue-950 px-6 py-2 text-white">
              Pending
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              {
                name: "Slash",
                position: "Full-Stack Engineer",
                location: "San Francisco",
              },
              {
                name: "Sciff",
                position: "Founding Engineer",
                location: "San Francisco",
              },
              {
                name: "Luminal",
                position: "Forward Deployed Eng",
                location: "San Francisco",
              },
            ].map((company, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-gray-500 bg-black p-4"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-gray-700 to-gray-900">
                    <span className="text-xl font-bold text-white">
                      {company.name.charAt(0)}
                    </span>
                  </div>
                </div>

                <div className="mb-2 text-center">
                  <div className="font-medium text-white">{company.name}</div>
                </div>

                <div className="mb-2 rounded-full bg-[#FF4520] bg-opacity-30 px-4 py-1 text-center text-xs text-[#FF4520]">
                  {company.position}
                </div>

                <div className="mb-4 rounded-full bg-[#FF4520] bg-opacity-20 px-4 py-1 text-center text-xs text-[#FF4520]">
                  {company.location}
                </div>

                <button className="w-full rounded bg-[#FF4520] py-2 text-sm text-white">
                  Begin Interview
                </button>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "section-3",
      step: "",
      title: (
        <>
          Predictive Hiring <span className="text-[#FF4520]">Analytics</span>
        </>
      ),
      subtitle: (
        <>
          Get real-time insights into candidate{" "}
          <span className="text-[#50FFFF]">quality</span>, pipeline bottlenecks,
          and hiring performance.
        </>
      ),
      description: (
        <>
          Make data-backed decisions and improve hiring velocity across every
          role.
        </>
      ),
      component: (
        <div className="mx-auto max-w-3xl rounded-lg border border-gray-500 bg-black p-6">
          {/* Placeholder for third component */}
          <div className="py-12 text-center text-white">
            <h2 className="mb-4 text-2xl font-bold">
              Skills Assessment Platform
            </h2>
            <p className="mb-8 text-gray-400">
              Complete interactive challenges to showcase your abilities
            </p>
            <div className="mb-8 rounded-lg border border-gray-500 p-8">
              <div className="flex h-40 items-center justify-center">
                <span className="text-xl text-[#FF4520]">
                  Interactive Code Editor
                </span>
              </div>
            </div>
            <button className="rounded-lg bg-primary px-8 py-2 text-white">
              Start Assessment
            </button>
          </div>
        </div>
      ),
    },
  ];

  // Initialize section refs array
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, sections.length);
  }, [sections.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Check which section is currently most visible
      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        // If the middle of the viewport is within this section
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call it once to set initial state
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col text-white">
      {/* Main content with split layout - each section takes full height */}
      <div className="flex flex-row w-full">
        {/* Left Section - Fixed */}
        <div
          ref={leftSideRef}
          className="w-1/2  border-r border-gray-900 h-screen sticky top-0 left-0"
        >
          {/* Fixed content section */}
          <div className="relative h-full w-full">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="absolute left-0 top-0 flex h-full w-full items-center transition-all duration-500 ease-in-out"
                style={{
                  opacity: index === activeSection ? 1 : 0,
                  transform: `translateY(${
                    index === activeSection ? 0 : index < activeSection ? -20 : 20
                  }px)`,
                  zIndex: index === activeSection ? 10 : 0,
                  pointerEvents: index === activeSection ? 'auto' : 'none',
                }}
              >
                <div className="mx-auto w-full max-w-3xl px-20">
                  {section.step && (
                    <div className="mb-12 text-5xl font-bold text-gray-400">
                      {section.step}
                    </div>
                  )}
                  <h2 className="mb-8 text-5xl font-bold leading-tight text-white">
                    {section.title}
                  </h2>
                  <p className="mb-12 text-4xl leading-tight text-white">
                    {section.subtitle}
                  </p>
                  {section.description && (
                    <p className="text-xl leading-relaxed text-white">
                      {section.description}
                    </p>
                  )}
                  <button className="mt-5">Coming Soon...</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Scrollable */}
        <div className="w-1/2 ">
          {sections.map((section, index) => (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="w-full h-screen flex items-center justify-center px-10"
              id={section.id}
            >
              {section.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplitLayout;