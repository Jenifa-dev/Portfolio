import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import * as React from "react";
import { useState, useEffect } from "react";
import { X, Menu, ArrowDownRight, FileDown, Mail, ArrowUpRight } from "lucide-react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Overlay, { className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className), ...props, ref }));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
  variants: {
    side: {
      top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
    }
  },
  defaultVariants: {
    side: "right"
  }
});
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(SheetPrimitive.Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Title, { ref, className: cn("text-lg font-semibold text-foreground", className), ...props }));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Description, { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
      children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all ${scrolled ? "glass shadow-card-soft" : ""}`, children: [
        /* @__PURE__ */ jsx("a", { href: "#top", className: "font-display font-bold tracking-tight text-base sm:text-lg", children: /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Jenifa J" }) }),
        /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-7", children: links.map((l) => /* @__PURE__ */ jsxs(
          "a",
          {
            href: l.href,
            className: "relative text-sm text-muted-foreground hover:text-foreground transition-colors group",
            children: [
              l.label,
              /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" })
            ]
          },
          l.href
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              className: "hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-90 transition",
              children: "Hire me"
            }
          ),
          /* @__PURE__ */ jsxs(Sheet, { children: [
            /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                "aria-label": "Open navigation menu",
                className: "inline-flex md:hidden items-center justify-center h-10 w-10 rounded-full border border-border bg-background/80 text-foreground hover:bg-secondary transition",
                children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
              }
            ) }),
            /* @__PURE__ */ jsx(SheetContent, { side: "right", className: "w-[280px] sm:w-[340px] bg-background", children: /* @__PURE__ */ jsxs("div", { className: "pt-10", children: [
              /* @__PURE__ */ jsx("nav", { className: "flex flex-col gap-2", children: links.map((l) => /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: l.href,
                  className: "rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary transition",
                  children: l.label
                }
              ) }, l.href)) }),
              /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#contact",
                  className: "inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition",
                  children: "Hire me"
                }
              ) }) })
            ] }) })
          ] })
        ] })
      ] }) })
    }
  );
}
const portrait = "/Portfolio/assets/shared%20image%20(36)-DvJ_HKQS.jpg";
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx(TooltipPrimitive.Content, { ref, sideOffset, className: cn("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)", className), ...props }) }));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
function LinkedinIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      ...props,
      children: [
        /* @__PURE__ */ jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "4" }),
        /* @__PURE__ */ jsx("path", { d: "M8 10.5V17" }),
        /* @__PURE__ */ jsx("path", { d: "M8 7.5h.01" }),
        /* @__PURE__ */ jsx("path", { d: "M12 17v-3.8c0-1.6 1.1-2.8 2.6-2.8s2.4 1.1 2.4 2.8V17" }),
        /* @__PURE__ */ jsx("path", { d: "M12 13.4c.2-1.1.9-1.8 2-1.8" })
      ]
    }
  );
}
const RESUME_URL = "https://jenifa-dev.github.io/Projects/Jenifa%20J-Full%20Stack%20Developer%20(1).pdf";
const EASE = [0.22, 1, 0.36, 1];
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
};
const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: EASE } }
};
function Hero() {
  const emailAddress = "jenifaj2003@gmail.com";
  const linkedinHref = "https://www.linkedin.com/in/jenifa-j-b8bb5136a";
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent("Portfolio Inquiry")}`;
  const openGmail = (event) => {
    event.preventDefault();
    window.location.assign(gmailHref);
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      id: "top",
      className: "relative min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" }),
        /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-6xl px-4 sm:px-6 w-full grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center", children: [
          /* @__PURE__ */ jsxs(motion.div, { variants: container, initial: "hidden", animate: "show", className: "max-w-4xl", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: item,
                className: "inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1.5 text-xs font-mono text-muted-foreground mb-8",
                children: [
                  /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" }),
                    /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })
                  ] }),
                  "Available for opportunities - 2026"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                variants: item,
                className: "whitespace-nowrap font-display font-bold leading-[0.9] text-4xl sm:text-6xl lg:text-8xl tracking-tighter",
                children: [
                  "Jenifa ",
                  /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "J" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.p,
              {
                variants: item,
                className: "mt-8 max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed",
                children: [
                  "Node.js Developer crafting scalable web & mobile products with",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "React" }),
                  ",",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Express.js" }),
                  ",",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Flutter" }),
                  ", and",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "AI-driven automation" }),
                  "."
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: item,
                className: "mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4",
                children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "#projects",
                      className: "group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-glow transition-all duration-300",
                      children: [
                        "View my work",
                        /* @__PURE__ */ jsx(ArrowDownRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#contact",
                      className: "inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary transition-colors",
                      children: "Get in touch"
                    }
                  ),
                  /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 100, children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 sm:ml-2", children: [
                    { Icon: LinkedinIcon, href: linkedinHref, label: "LinkedIn" },
                    { Icon: FileDown, href: RESUME_URL, label: "Resume" },
                    { Icon: Mail, href: gmailHref, label: "Gmail", onClick: openGmail }
                  ].map(({ Icon, href, label, onClick }) => /* @__PURE__ */ jsxs(Tooltip, { children: [
                    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
                      "a",
                      {
                        href,
                        onClick,
                        "aria-label": label,
                        target: label === "LinkedIn" || label === "Resume" ? "_blank" : void 0,
                        rel: label === "LinkedIn" || label === "Resume" ? "noopener noreferrer" : void 0,
                        className: "p-2.5 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-all",
                        children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
                      }
                    ) }),
                    /* @__PURE__ */ jsx(TooltipContent, { side: "bottom", sideOffset: 8, children: label })
                  ] }, label)) }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                variants: item,
                className: "mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl",
                children: [
                  { k: "2", v: "Years building" },
                  { k: "5+", v: "Production apps" },
                  { k: "8.5", v: "Bsc CGPA" }
                ].map((s) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "rounded-2xl border border-border/60 bg-background/40 p-4 sm:p-0 sm:border-0 sm:bg-transparent",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "font-display text-3xl sm:text-4xl font-bold text-gradient-accent", children: s.k }),
                      /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs sm:text-sm text-muted-foreground", children: s.v })
                    ]
                  },
                  s.v
                ))
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.92, y: 30 },
              animate: { opacity: 1, scale: 1, y: 0 },
              transition: { duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
              className: "relative mx-auto mt-10 w-full max-w-sm lg:mt-0 lg:max-w-none",
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent/40 via-primary/20 to-transparent blur-2xl" }),
                /* @__PURE__ */ jsxs("div", { className: "relative rounded-[2rem] overflow-hidden border border-border glass shadow-glow aspect-[4/5]", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: portrait,
                      alt: "Jenifa J, Node.js Developer",
                      className: "h-full w-full object-cover"
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute left-4 top-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-mono text-muted-foreground backdrop-blur", children: "Portfolio" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-4 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary backdrop-blur", children: "Node.js" })
                ] }),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    animate: { y: [0, -8, 0] },
                    transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                    className: "absolute -bottom-6 -left-6 glass rounded-2xl px-4 py-3 text-xs font-mono shadow-card-soft",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "text-accent", children: "online" }),
                      /* @__PURE__ */ jsx("div", { className: "text-foreground/90 mt-0.5", children: "Building in public" })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.2, duration: 1 },
              className: "hidden lg:flex absolute right-8 bottom-10 flex-col items-center gap-2 text-xs text-muted-foreground font-mono",
              children: [
                /* @__PURE__ */ jsx("span", { className: "rotate-180", style: { writingMode: "vertical-rl" }, children: "scroll" }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { y: [0, 8, 0] },
                    transition: { repeat: Infinity, duration: 1.8 },
                    className: "h-10 w-px bg-gradient-to-b from-primary to-transparent"
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
function SectionHeading({ index, title, kicker }) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
      className: "mb-14 max-w-3xl",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-xs font-mono text-primary mb-4", children: [
          /* @__PURE__ */ jsx("span", { children: index }),
          /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary/50" }),
          /* @__PURE__ */ jsx("span", { className: "uppercase tracking-widest", children: kicker })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter", children: title })
      ]
    }
  );
}
function Section({ id, children }) {
  return /* @__PURE__ */ jsx("section", { id, className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children }) });
}
function About() {
  return /* @__PURE__ */ jsxs(Section, { id: "about", children: [
    /* @__PURE__ */ jsx(SectionHeading, { index: "01", kicker: "About", title: "Building end-to-end products with Node.js and React." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "lg:col-span-3 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed",
          children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "I'm a Full Stack Developer at ",
              /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "CubenSquare" }),
              ", where I design and ship scalable web applications and RESTful APIs across React, Node.js, Express.js and MongoDB."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "I build scalable web applications with React, Node.js, and Express.js, turning ideas into polished digital products with clean code and reliable APIs." }),
            /* @__PURE__ */ jsx("p", { children: "I also enjoy refining user flows, improving performance, and shaping maintainable codebases that make day-to-day development smoother for the whole team." })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.15 },
          className: "lg:col-span-2",
          children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 shadow-card-soft", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4", children: "Currently" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm text-primary font-mono", children: "June 2024 - Present" }),
                /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-lg mt-1", children: "Node.js Full Stack Developer" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: "CubenSquare - On-site" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-px bg-border" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-primary", children: "→" }),
                  " Improved API performance by 15%"
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-primary", children: "→" }),
                  " Boosted user engagement by 10%"
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-primary", children: "→" }),
                  " Reached 90% test coverage across critical modules"
                ] })
              ] })
            ] })
          ] })
        }
      )
    ] })
  ] });
}
const groups = [
  {
    title: "Frontend",
    items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Redux", "Flutter (Dart)"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST API Development", "JWT Authentication", "Microservices"]
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL"]
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "Jira", "Docker", "Firebase", "Google Maps API"]
  },
  {
    title: "Payments & Automation",
    items: ["Razorpay", "PDF Generation", "Email/WhatsApp Sharing"]
  },
  {
    title: "Mobile & Tools",
    items: ["Flutter", "Dart", "Git", "Postman", "Jira", "Razorpay", "WebSockets", "Figma"]
  }
];
function Skills() {
  return /* @__PURE__ */ jsxs(Section, { id: "skills", children: [
    /* @__PURE__ */ jsx(SectionHeading, { index: "02", kicker: "Skills", title: "A toolkit for shipping real products." }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: groups.map((g, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
        whileHover: { y: -4 },
        className: "group relative rounded-2xl border border-border glass p-6 overflow-hidden",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-lg", children: g.title }),
              /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
                "0",
                i + 1
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: g.items.map((s) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "text-xs font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground/80 border border-border hover:border-primary/50 hover:text-primary transition-colors",
                children: s
              },
              s
            )) })
          ] })
        ]
      },
      g.title
    )) })
  ] });
}
function Education() {
  return /* @__PURE__ */ jsxs(Section, { id: "education", children: [
    /* @__PURE__ */ jsx(SectionHeading, { index: "03", kicker: "Education", title: "My academic foundation." }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        className: "max-w-3xl rounded-3xl border border-border glass p-6 sm:p-8 shadow-card-soft",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-mono uppercase tracking-widest text-primary", children: "2020 - 2024" }),
          /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight", children: "BSc Physics" }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: "Nesamony Memorial Christian College - CGPA 8.5" }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "Focused on core physics, analytical thinking, and problem solving." }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed", children: "Complemented by extensive self-directed learning in full stack development through industry certifications and live project experience." }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: "Certified in Full Stack Web Development (Udemy)." })
        ]
      }
    )
  ] });
}
const items = [
  {
    when: "June 2024 - Present",
    role: "Node.js Full Stack Developer",
    org: "CubenSquare - On-site",
    points: [
      "Architected scalable React + Node.js applications and REST APIs, lifting system performance by 15%.",
      "Designed responsive Tailwind UIs that improved user engagement by 10%.",
      "Built AI-driven invoice automation using n8n + OpenAI and integrated payment gateways.",
      "Reached 90% test coverage across critical modules."
    ]
  }
];
function Experience() {
  return /* @__PURE__ */ jsxs(Section, { id: "work", children: [
    /* @__PURE__ */ jsx(SectionHeading, { index: "04", kicker: "Experience", title: "The story so far." }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-12", children: items.map((it, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.7, delay: i * 0.1 },
          className: "relative pl-14 sm:pl-20",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute left-2 sm:left-4 top-1.5 h-5 w-5 rounded-full border-2 border-primary bg-background shadow-glow" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs font-mono text-primary uppercase tracking-widest", children: it.when }),
            /* @__PURE__ */ jsx("h3", { className: "mt-2 font-display text-2xl sm:text-3xl font-bold", children: it.role }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground mb-4", children: it.org }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-muted-foreground", children: it.points.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-primary mt-1.5 h-1 w-3 bg-primary/60 rounded-full shrink-0" }),
              /* @__PURE__ */ jsx("span", { children: p })
            ] }, p)) })
          ]
        },
        it.role
      )) })
    ] })
  ] });
}
const projects = [
  {
    name: "Fuel Management System",
    tag: "Production - Canada",
    desc: "Broker onboarding, RBAC, fleet & driver management with WEX API for automated fuel transactions and real-time dashboards.",
    stack: ["React", "Node.js", "Express.js", "Material UI", "MySQL"]
  },
  {
    name: "Logistics Management System",
    tag: "Production - Malaysia",
    desc: "Role-based logistics platform with GPS tracking, AI invoice generation, Razorpay payments, Dockerized and deployed via AWS ECR.",
    stack: ["Vite", "Express.js", "MySQL", "Google Maps"]
  },
  {
    name: "Kelunga Platform",
    tag: "Marketplace",
    desc: "Two-sided expert/seeker marketplace with JWT auth, slot scheduling, Razorpay checkout and n8n-powered engagement workflows.",
    stack: ["React", "Node.js", "Express.js", "MySQL", "JWT", "Razorpay"]
  },
  {
    name: "SaaS Grocery Application",
    tag: "Mobile + Web",
    desc: "Multi-tenant grocery SaaS with mobile shopping experience, location-aware delivery and an admin management console.",
    stack: ["React", "Node.js", "Express.js", "MySQL", "Flutter", "Google Maps"]
  },
  {
    name: "Learning Management System",
    tag: "EdTech",
    desc: "Role-based LMS for admins, instructors and students with optimized REST APIs and responsive Material UI dashboards.",
    stack: ["React", "Node.js", "MySQL", "REST", "Material UI"]
  }
];
function Projects() {
  return /* @__PURE__ */ jsxs(Section, { id: "projects", children: [
    /* @__PURE__ */ jsx(SectionHeading, { index: "05", kicker: "Selected Work", title: "Things I've designed, built and shipped." }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: projects.map((p, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.7, delay: i % 2 * 0.1, ease: [0.22, 1, 0.36, 1] },
        whileHover: { y: -6 },
        className: "group relative rounded-3xl border border-border bg-card p-7 overflow-hidden shadow-card-soft",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-start mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-mono uppercase tracking-widest text-primary", children: p.tag }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl sm:text-3xl font-bold tracking-tight mb-3", children: p.name }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: p.desc }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: p.stack.map((s) => /* @__PURE__ */ jsx("span", { className: "text-[11px] font-mono px-2 py-1 rounded bg-secondary border border-border text-muted-foreground", children: s }, s)) })
          ] })
        ]
      },
      p.name
    )) })
  ] });
}
function Contact() {
  const emailAddress = "jenifaj2003@gmail.com";
  const linkedinHref = "https://www.linkedin.com/in/jenifa-j-b8bb5136a";
  const emailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}&su=${encodeURIComponent("Portfolio Inquiry")}`;
  const openGmail = (event) => {
    event.preventDefault();
    window.location.assign(emailHref);
  };
  return /* @__PURE__ */ jsxs(Section, { id: "contact", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        className: "relative rounded-[2rem] border border-border glass p-8 sm:p-16 overflow-hidden text-center",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs font-mono uppercase tracking-widest text-primary mb-5", children: "06 - Contact" }),
            /* @__PURE__ */ jsxs("h2", { className: "font-display text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tighter", children: [
              "Let's build ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "something" }),
              /* @__PURE__ */ jsx("br", {}),
              "worth shipping."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl mx-auto", children: "Open to Node.js roles, freelance collaborations and ambitious side-projects." }),
            /* @__PURE__ */ jsx("div", { className: "mt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: emailHref,
                onClick: openGmail,
                className: "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:shadow-glow transition-all",
                children: [
                  "Email me",
                  /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx("div", { className: "mt-10 flex items-center justify-center gap-2 flex-wrap", children: [
              { Icon: LinkedinIcon, href: linkedinHref, label: "LinkedIn" },
              { Icon: FileDown, href: RESUME_URL, label: "Resume" },
              { Icon: Mail, href: emailHref, label: "Email" }
            ].map(({ Icon, href, label }) => /* @__PURE__ */ jsx(
              "a",
              {
                href,
                onClick: href === emailHref ? openGmail : void 0,
                "aria-label": label,
                target: label === "LinkedIn" || label === "Resume" ? "_blank" : void 0,
                rel: label === "LinkedIn" || label === "Resume" ? "noopener noreferrer" : void 0,
                className: "p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition",
                children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
              },
              label
            )) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("footer", { className: "mt-16 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground", children: [
      /* @__PURE__ */ jsx("span", { children: "Copyright 2026 Jenifa J" }),
      /* @__PURE__ */ jsx("span", { children: "Designed & built with care." })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Skills, {}),
    /* @__PURE__ */ jsx(Education, {}),
    /* @__PURE__ */ jsx(Experience, {}),
    /* @__PURE__ */ jsx(Projects, {}),
    /* @__PURE__ */ jsx(Contact, {})
  ] });
}
export {
  Index as component
};
