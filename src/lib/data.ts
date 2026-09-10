export type Stat = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  stats: Stat[];
  features: string[];
  bestFor: string[];
};

export type Application = {
  slug: string;
  name: string;
  summary: string;
  challenge: string;
  approach: string;
  image: string;
  imageAlt: string;
  considerations: string[];
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  summary: string;
  image: string;
  imageAlt: string;
  facts: Stat[];
  story: string[];
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
  image: string;
  imageAlt: string;
  sections: ArticleSection[];
};

export const products: Product[] = [
  {
    slug: "beacon-one",
    name: "Beacon One",
    eyebrow: "Integrated system",
    summary:
      "A fictional all-in-one luminaire for straightforward site planning and compact installations.",
    description:
      "Beacon One demonstrates how a product detail page can combine a clear value proposition, scannable specifications, and practical selection guidance without relying on a CMS.",
    image: "/illustrations/product-integrated.svg",
    imageAlt: "Illustration of a fictional integrated solar light",
    stats: [
      { label: "Demo output", value: "20-40 W" },
      { label: "Demo pole", value: "12-18 ft" },
      { label: "Demo reserve", value: "3 nights" },
    ],
    features: [
      "Integrated panel and luminaire",
      "Example motion-control schedule",
      "Single-page product data model",
      "Fictional specifications for UI demonstration",
    ],
    bestFor: ["Paths", "Small parking areas", "Campus connectors"],
  },
  {
    slug: "meridian-split",
    name: "Meridian Split",
    eyebrow: "Configurable system",
    summary:
      "A fictional split-panel system used to demonstrate more detailed commercial product content.",
    description:
      "Meridian Split keeps the solar module separate from the luminaire so the example page can explain orientation, component choices, and site-specific configuration.",
    image: "/illustrations/product-split.svg",
    imageAlt: "Illustration of a fictional split-panel solar light",
    stats: [
      { label: "Demo output", value: "30-60 W" },
      { label: "Demo pole", value: "18-25 ft" },
      { label: "Demo reserve", value: "4 nights" },
    ],
    features: [
      "Separate module and light head",
      "Example dimming profiles",
      "Configurable card and detail layouts",
      "Fictional specifications for UI demonstration",
    ],
    bestFor: ["Parking lots", "Local roads", "Facility perimeters"],
  },
  {
    slug: "trailmark-mini",
    name: "Trailmark Mini",
    eyebrow: "Low-height system",
    summary:
      "A fictional pedestrian-scale light for examples focused on paths, entries, and gathering spaces.",
    description:
      "Trailmark Mini shows how the same typed product model can support a visually different product while preserving a consistent page structure.",
    image: "/illustrations/product-path.svg",
    imageAlt: "Illustration of a fictional pedestrian-scale solar light",
    stats: [
      { label: "Demo output", value: "8-16 W" },
      { label: "Demo pole", value: "8-12 ft" },
      { label: "Demo reserve", value: "2 nights" },
    ],
    features: [
      "Pedestrian-scale example",
      "Shielded downward light",
      "Shared metadata and card model",
      "Fictional specifications for UI demonstration",
    ],
    bestFor: ["Trails", "Courtyards", "Building entries"],
  },
];

export const applications: Application[] = [
  {
    slug: "parking-areas",
    name: "Parking areas",
    summary:
      "Plan a clear, repeatable content path from site constraints to a suitable lighting concept.",
    challenge:
      "Parking layouts vary by stall geometry, circulation, nearby buildings, and the hours when useful light is required.",
    approach:
      "Start with the activity zones and target coverage, then test pole locations, fixture output, shading, and operating schedules together.",
    image: "/illustrations/application-parking.svg",
    imageAlt: "Abstract illustration of a parking area with solar lights",
    considerations: [
      "Vehicle and pedestrian circulation",
      "Available solar exposure",
      "Mounting height and setback",
      "Required overnight schedule",
    ],
  },
  {
    slug: "paths-and-parks",
    name: "Paths and parks",
    summary:
      "Use pedestrian-scale examples to explain comfort, spacing, and careful light placement.",
    challenge:
      "Paths need enough visual guidance without turning every natural area into an over-lit corridor.",
    approach:
      "Map decision points and activity areas first, then use the lowest practical mounting height and a controlled distribution.",
    image: "/illustrations/application-path.svg",
    imageAlt: "Abstract illustration of a path with pedestrian-scale lights",
    considerations: [
      "Trail intersections and entries",
      "Wildlife and neighboring properties",
      "Tree-canopy shading",
      "Maintenance access",
    ],
  },
  {
    slug: "campuses",
    name: "Campuses",
    summary:
      "Show how one content model can cover connectors, entries, remote lots, and shared outdoor spaces.",
    challenge:
      "Campus projects often mix several user groups, operating schedules, and visual priorities across one site.",
    approach:
      "Create a hierarchy of routes and gathering areas, then choose a small family of fixtures that can cover each condition consistently.",
    image: "/illustrations/application-campus.svg",
    imageAlt: "Abstract illustration of a campus with solar lighting",
    considerations: [
      "Primary and secondary routes",
      "Event and after-hours use",
      "Emergency access",
      "Consistent visual language",
    ],
  },
];

// A non-empty tuple keeps the homepage's featured project lookup type-safe.
export const projects: [Project, ...Project[]] = [
  {
    slug: "riverwalk-pilot",
    name: "Riverwalk pilot",
    location: "Fictional case study",
    summary:
      "A demo project page showing how goals, constraints, and measurable outcomes can be presented together.",
    image: "/illustrations/project-riverwalk.svg",
    imageAlt: "Abstract illustration of a fictional illuminated riverwalk",
    facts: [
      { label: "Demo systems", value: "18" },
      { label: "Demo route", value: "0.8 mi" },
      { label: "Demo phase", value: "Pilot" },
    ],
    story: [
      "The fictional project team needed a low-impact way to mark a river path without trenching through the demonstration landscape.",
      "The example solution groups lighting around entries, intersections, and seating areas rather than applying one spacing rule everywhere.",
      "This case study is intentionally fictional and exists only to demonstrate a reusable project-detail template.",
    ],
  },
  {
    slug: "transit-depot",
    name: "Transit depot",
    location: "Fictional case study",
    summary:
      "A second demo project for a larger site with parking, circulation, and perimeter conditions.",
    image: "/illustrations/project-depot.svg",
    imageAlt: "Abstract illustration of a fictional transit depot",
    facts: [
      { label: "Demo systems", value: "32" },
      { label: "Demo zones", value: "4" },
      { label: "Demo phase", value: "Concept" },
    ],
    story: [
      "The fictional depot example starts with shift changes, vehicle routes, and areas that need clear pedestrian visibility.",
      "Each zone receives its own illustrative operating schedule while the product family remains visually consistent across the site.",
      "The numbers and outcome are interface samples and must not be treated as project or engineering claims.",
    ],
  },
];

export const articles: Article[] = [
  {
    slug: "planning-an-off-grid-lighting-project",
    title: "Planning an off-grid lighting project",
    category: "Planning",
    summary:
      "A concise example of turning site observations into a useful project brief.",
    readTime: "4 min demo",
    image: "/illustrations/article-planning.svg",
    imageAlt: "Abstract plan with a sun path and light locations",
    sections: [
      {
        heading: "Start with the job to be done",
        paragraphs: [
          "Describe who uses the space, when they use it, and what must be visible before selecting a product.",
          "A path, loading area, and parking entrance can share a site while requiring different light levels and operating schedules.",
        ],
      },
      {
        heading: "Record the physical constraints",
        paragraphs: [
          "Document shade, setbacks, underground conflicts, maintenance access, and the directions from which people approach the site.",
          "A simple annotated plan is often more useful than a long product list during the first conversation.",
        ],
      },
      {
        heading: "Validate before procurement",
        paragraphs: [
          "A real project needs a qualified lighting plan and product data from the selected manufacturer.",
          "The content in this starter is fictional and demonstrates page structure only.",
        ],
      },
    ],
  },
  {
    slug: "choosing-a-lighting-layout",
    title: "Choosing a lighting layout",
    category: "Design",
    summary:
      "An educational article template built around decisions rather than product marketing.",
    readTime: "5 min demo",
    image: "/illustrations/article-layout.svg",
    imageAlt: "Abstract lighting layout with overlapping coverage areas",
    sections: [
      {
        heading: "Map activity before spacing",
        paragraphs: [
          "Place entrances, intersections, waiting areas, and conflict points on the plan before drawing a regular grid.",
          "The most important areas may need a different fixture or mounting height from the rest of the site.",
        ],
      },
      {
        heading: "Treat uniformity as a design input",
        paragraphs: [
          "Average output alone does not explain dark gaps, glare, or how the space feels while moving through it.",
          "A photometric model can expose those problems before equipment is installed.",
        ],
      },
      {
        heading: "Keep assumptions visible",
        paragraphs: [
          "Record operating hours, dimming behavior, surface reflectance, and maintenance factors alongside the layout.",
          "Visible assumptions make later reviews faster and reduce accidental changes to the design intent.",
        ],
      },
    ],
  },
  {
    slug: "maintaining-solar-lighting-systems",
    title: "Maintaining solar lighting systems",
    category: "Operations",
    summary:
      "A sample operations article with clear sections and restrained technical detail.",
    readTime: "3 min demo",
    image: "/illustrations/article-maintenance.svg",
    imageAlt: "Abstract checklist beside a solar light",
    sections: [
      {
        heading: "Create a repeatable inspection",
        paragraphs: [
          "Use a short checklist for module condition, vegetation, fasteners, fixture cleanliness, and visible damage.",
          "Consistent records make gradual changes easier to spot than occasional informal checks.",
        ],
      },
      {
        heading: "Use system data carefully",
        paragraphs: [
          "When monitoring is available, compare trends instead of reacting to one isolated reading.",
          "Weather, shading, settings, and component condition can all affect the same metric.",
        ],
      },
      {
        heading: "Follow the real supplier guidance",
        paragraphs: [
          "Maintenance intervals and procedures depend on the installed equipment and environment.",
          "Replace this demonstration copy with verified documentation for any production site.",
        ],
      },
    ],
  },
];

function findBySlug<T extends { slug: string }>(items: T[], slug: string) {
  return items.find((item) => item.slug === slug);
}

export const getProduct = (slug: string) => findBySlug(products, slug);
export const getApplication = (slug: string) =>
  findBySlug(applications, slug);
export const getProject = (slug: string) => findBySlug(projects, slug);
export const getArticle = (slug: string) => findBySlug(articles, slug);
