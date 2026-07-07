import React, { useRef, useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Instagram, Youtube, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import curlBrushImg from "@/assets/products/curl-brush.jpg.asset.json";
import hairFoodImg from "@/assets/products/hair-food.png.asset.json";
import almondOilImg from "@/assets/products/almond-oil.png.asset.json";
import batanaOilImg from "@/assets/products/batana-oil.png.asset.json";
import shortBonnetImg from "@/assets/products/short-bonnet.png.asset.json";
import longBonnetImg from "@/assets/products/long-bonnet.png.asset.json";
import afterHeroImg from "@/assets/after-hero.jpeg.asset.json";
import beforeImg from "@/assets/before.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Chomba Method — How I Got My Curls Tighter" },
      {
        name: "description",
        content:
          "The exact products and routine The Chomba Method uses for healthier, more defined curls. A creator-curated routine in six steps.",
      },
      { property: "og:title", content: "The Chomba Method — How I Got My Curls Tighter" },
      {
        property: "og:description",
        content:
          "The exact products and routine The Chomba Method uses for healthier, more defined curls.",
      },
    ],
  }),
  component: Index,
});

const routine = [
  {
    label: "Brush",
    name: "Curl Brush",
    does: "Gently detangles curls, helps with styling, and creates more volume.",
    why: "The brush I use to detangle, style, and create volume.",
    usLink: "https://amzn.to/4emm9Vw",
    auLink: "https://amzn.to/49wh4r0",
    image: curlBrushImg.url,
  },
  {
    label: "Moisturise",
    name: "Hair Food",
    does: "Deeply moisturises and nourishes hair for lasting softness.",
    why: "What I use to keep my hair moisturised and healthy.",
    usLink: "https://amzn.to/3QlMNon",
    auLink: "https://amzn.to/49wh9Lk",
    image: hairFoodImg.url,
  },
  {
    label: "Oil",
    name: "Almond Hair Oil",
    does: "Provides hydration and adds natural shine without weighing hair down.",
    why: "My go-to oil for hydration and shine.",
    usLink: "https://amzn.to/4oaVEGb",
    auLink: "https://amzn.to/4vnVeyh",
    image: almondOilImg.url,
  },
  {
    label: "Treatment",
    name: "Batana Oil",
    does: "Rich treatment oil that supports healthy, strong curls.",
    why: "Part of my routine for maintaining healthy hair.",
    usLink: "https://amzn.to/4e1mY4Z",
    auLink: "https://amzn.to/4nZPbh3",
    image: batanaOilImg.url,
  },
  {
    label: "Protect",
    name: "Short Hair Bonnet",
    does: "Protects curls overnight while sleeping.",
    why: "The bonnet I use when my hair is shorter.",
    usLink: "https://amzn.to/4v8ZjXL",
    auLink: "https://amzn.to/43K36yg",
    image: shortBonnetImg.url,
    portrait: true,
  },
  {
    label: "Long Hair",
    name: "Long Hair Bonnet",
    does: "Extra room to protect longer hair without flattening curls.",
    why: "The bonnet I use when my hair is longer and needs more room.",
    usLink: "https://amzn.to/4fmNCaN",
    auLink: "https://amzn.to/4eg6t6c",
    image: longBonnetImg.url,
    portrait: true,
  },
];

const faqs = [
  {
    q: "How did your curls get tighter?",
    a: "My hair has always been curly, but consistently using this method, protecting it overnight, and using the products on this page helped me achieve tighter, healthier, and more defined curls over time.",
  },
  {
    q: "What made the biggest difference?",
    a: "Putting my hair into a bonnet while it's still wet at night and not taking it out until it's completely dry.",
  },
  {
    q: "Do you personally use all of these products?",
    a: "Yes. These are the exact products I personally use and recommend.",
  },
  {
    q: "How long did it take?",
    a: "I started noticing improvements within a few weeks, but the biggest changes came from staying consistent for several months.",
  },
  {
    q: "What should I start with?",
    a: "If I could only recommend one thing, I'd start with protecting your curls overnight and using a quality brush. Those two changes make the biggest difference for most people.",
  },
];

function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

type RoutineItem = (typeof routine)[number];

function Index() {
  const [selected, setSelected] = useState<RoutineItem | null>(null);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="h-full w-full bg-gradient-to-b from-accent/40 via-background to-background" />
        </div>

        <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-20 md:pt-14 md:pb-32">
          <nav className="flex items-center justify-between">
            <span className="font-serif text-2xl tracking-tight">TCM</span>
            <a
              href="#routine"
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:inline-block"
            >
              View routine
            </a>
          </nav>

          <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-6 md:pt-8">
              <p className="eyebrow">A creator routine</p>
              <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
                How I got my curls tighter.
              </h1>
              <p className="mt-6 max-w-md font-serif text-xl italic text-muted-foreground md:text-2xl">
                The exact products and routine I use.
              </p>
              <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/80">
                I get asked almost every day how I transformed my curls.
                Instead of replying to the same message over and over, I put
                everything here.
              </p>

              <div className="mt-10">
                <a
                  href="#routine"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  View Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative overflow-hidden rounded-[24px] bg-accent/60 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.25)]">
                <div className="aspect-[4/5] w-full">
                  <img
                    src={afterHeroImg.url}
                    alt="The Chomba Method — tight defined curls"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CURL HACK */}
      <section className="bg-secondary/30 py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-6">
          <FadeUp className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">My biggest curl hack</p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              The One Thing That Made The Biggest Difference For My Curls
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              If there&apos;s one thing that changed my curls the most, it&apos;s this.
            </p>
          </FadeUp>

          <FadeUp className="mx-auto mt-20 max-w-3xl md:mt-28">
            <div className="space-y-6 text-base leading-relaxed text-foreground/80 md:text-lg">
              <p>
                I do my hair at night, put it in a bonnet while it&apos;s still wet, and let it dry inside the bonnet overnight.
              </p>
              <p>
                The next morning, I don&apos;t take the bonnet off until my hair is completely dry.
              </p>
              <p>
                This helped my curls become much tighter, more defined, and gave me significantly more volume.
              </p>
              <p>
                My hair has always been curly, but it never looked like this before I started doing this consistently.
              </p>
              <p>
                Combined with the products below, this completely changed how my curls looked.
              </p>
            </div>

            <blockquote className="relative mt-16 border-l-2 border-foreground/20 pl-8 md:mt-20">
              <p className="font-serif text-2xl leading-relaxed italic text-foreground md:text-3xl lg:text-4xl">
                &ldquo;Don&apos;t take the bonnet off until your hair is fully dry.&rdquo;
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                — The one rule that changed everything
              </p>
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* BIGGEST DIFFERENCE */}
      <section className="mx-auto max-w-[1200px] px-6 py-24 md:py-36">
        <FadeUp className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">The truth</p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight md:text-5xl">
            The Biggest Difference?
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80 md:text-lg">
            <p>Honestly, consistency.</p>
            <p>
              Growing my hair out, protecting it overnight, and sticking to the same routine made the biggest difference.
            </p>
            <p className="text-muted-foreground">
              The products below are the exact products I personally use and recommend.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* ROUTINE */}
      <section id="routine" className="mx-auto max-w-[1200px] px-6 py-24 md:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">My curl routine</p>
          <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">
            The products I actually use on every wash day.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Good curls come from consistency, technique, and using the right
            tools. This is the simple routine that helped me get more
            definition, less frizz, and healthier curls.
          </p>
          <p className="mt-4 text-sm text-muted-foreground/80">
            Choose your country after tapping &ldquo;View Product.&rdquo;
          </p>
        </div>

        <div className="mt-20 space-y-8 md:mt-28 md:space-y-12">
          {routine.map((item) => (
            <article
              key={item.name}
              className="group grid gap-8 rounded-[24px] border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)] md:grid-cols-12 md:gap-10 md:p-10"
            >
              <div className="md:col-span-5">
                <div className="overflow-hidden rounded-[20px] bg-white ring-1 ring-border/40">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={item.image}
                      alt={item.name}
                      className={cn(
                        "h-full w-full",
                        item.portrait
                          ? "object-contain object-bottom pt-6 px-6"
                          : "mx-auto max-h-full max-w-full object-contain p-10 md:p-14"
                      )}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 md:py-2">
                <p className="eyebrow">
                  {item.label}
                </p>
                <h3 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
                  {item.name}
                </h3>

                <div className="mt-6 space-y-5 text-base leading-relaxed">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground/50">
                      What it does
                    </p>
                    <p className="mt-1.5 text-foreground/85">{item.does}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-foreground/50">
                      Why I use it
                    </p>
                    <p className="mt-1.5 text-foreground/85">{item.why}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(item)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-foreground/15 px-6 py-3 text-sm font-medium transition-colors hover:border-foreground/40 hover:bg-foreground hover:text-background"
                >
                  View Product
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-secondary/60 py-24 md:py-36">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Before & After</p>
            <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">
              Same hair. Better method.
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              { label: "Before", src: beforeImg.url },
              { label: "After", src: afterHeroImg.url },
            ].map(({ label, src }) => (
              <figure
                key={label}
                className="overflow-hidden rounded-[24px] bg-background shadow-[0_24px_60px_-40px_rgba(0,0,0,0.25)]"
              >
                <div className="aspect-[4/5] w-full">
                  <img
                    src={src}
                    alt={`${label} — The Chomba Method`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="px-6 py-4 font-serif text-lg italic text-muted-foreground">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-2xl text-center text-base leading-relaxed text-foreground/80 md:text-lg">
            The biggest difference wasn't changing my hair type — it was
            changing my routine. I learned how to detangle correctly, apply
            products more effectively, and protect my curls overnight. Small
            improvements made consistently over time created the results you
            see today.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[820px] px-6 py-24 md:py-36">
        <div className="text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-5 font-serif text-4xl tracking-tight md:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-14">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-border/70"
            >
              <AccordionTrigger className="py-6 text-left font-serif text-xl tracking-tight hover:no-underline md:text-2xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-foreground/80">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-[1200px] px-6 py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">Follow along</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { name: "Instagram", href: "https://instagram.com/notchomba", icon: Instagram },
                  { name: "TikTok", href: "https://tiktok.com/@notchomba", icon: TikTokIcon },
                  { name: "YouTube", href: "https://youtube.com/@notchomba", icon: Youtube },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-5 py-2.5 text-sm transition-colors hover:border-foreground/40 hover:bg-foreground hover:text-background"
                  >
                    <s.icon className="h-4 w-4" />
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 md:text-right">
              <p className="font-serif text-3xl tracking-tight">The Chomba Method</p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground md:ml-auto">
                These are the products I personally use and recommend.
              </p>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-between border-t border-border/60 pt-8 text-xs text-muted-foreground">
            <span>© 2026 The Chomba Method</span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-4 z-40 mx-auto flex max-w-fit justify-center px-4 md:hidden">
        <a
          href="#routine"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_12px_30px_-10px_rgba(0,0,0,0.4)]"
        >
          View Products
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <CountryModal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

function CountryModal({
  item,
  onClose,
}: {
  item: RoutineItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  const stores = [
    { label: "United States", href: item.usLink, flag: "🇺🇸" },
    { label: "Australia", href: item.auLink, flag: "🇦🇺" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/40 p-4 backdrop-blur-sm md:items-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-md rounded-[24px] bg-card p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.35)] md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-foreground/5 hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="eyebrow">Shop product</p>
        <h3 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
          Choose your store
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Products may vary depending on your country.
        </p>

        <div className="mt-8 space-y-3">
          {stores.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="group flex items-center justify-between gap-3 rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <span className="flex items-center gap-3">
                <span className="text-lg leading-none" aria-hidden="true">
                  {s.flag}
                </span>
                {s.label}
              </span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9.01a8.16 8.16 0 0 0 4.77 1.52V7.16a4.85 4.85 0 0 1-1.84-.47Z" />
    </svg>
  );
}
