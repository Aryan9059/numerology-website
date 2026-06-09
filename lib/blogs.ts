export interface Blog {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  emoji?: string;
  color?: string;
  author?: string;
}

// In a real project, these would be stored in a database or markdown files.
// For now, we use an in-memory store that can be extended.
// To add blogs, add objects to this array or integrate a CMS/database.

const blogs: Blog[] = [
  {
    slug: "mulank-1-personality-traits",
    title: "Mulank 1: The Sun's Children – Personality, Strengths & Life Path",
    excerpt:
      "People born on the 1st, 10th, 19th, or 28th of any month are ruled by the powerful Sun. Discover what makes Mulank 1 individuals natural-born leaders.",
    content: `
## What is Mulank 1?

People born on the 1st, 10th, 19th, or 28th of any month carry the vibration of number 1, ruled by the mighty Sun (Surya). This makes them natural pioneers with an innate desire to lead and create.

## Core Personality Traits

Mulank 1 individuals are characterized by:

- **Strong willpower** and determination
- **Natural leadership** abilities — they prefer to lead, not follow
- **Originality** — they are creative thinkers who forge new paths
- **Ambition** — they set high goals and work tirelessly to achieve them
- **Independence** — they value their freedom and dislike being controlled

## Strengths

The Sun blesses Mulank 1 people with confidence, charisma, and vitality. They excel in positions of authority, entrepreneurship, and any field requiring innovation. Their energy is infectious, and people naturally gravitate toward them.

## Challenges

The shadow side of number 1 is ego. These individuals must learn humility, patience, and collaboration. Their drive for independence can sometimes become stubbornness, and their confidence can tip into arrogance if unchecked.

## Lucky Numbers, Colors & Days

- **Lucky numbers**: 1, 10, 19, 28
- **Lucky color**: Gold, Orange, Yellow
- **Lucky day**: Sunday
- **Favorable gemstone**: Ruby (Manik)

## Career Guidance

Mulank 1 individuals thrive as: Entrepreneurs, CEOs, Politicians, Military Officers, Sportspeople, Surgeons, Architects, and Creative Directors.

## Numerology Tip

If you're Mulank 1, embrace your leadership nature but cultivate compassion. Your Sun energy is powerful — channel it toward uplifting others, and your success will multiply.
    `,
    date: "June 1, 2025",
    category: "Mulank Readings",
    emoji: "☀️",
    color: "#f0d080",
    author: "Astro Gyan Prakash",
  },
  {
    slug: "mobile-number-numerology-guide",
    title: "Is Your Mobile Number Lucky or Unlucky? A Complete Numerology Guide",
    excerpt:
      "Your mobile number vibrates with cosmic energy every time someone calls you. Learn how to calculate your mobile number's numerological value and what it means for your life.",
    content: `
## Why Does Your Mobile Number Matter?

In numerology, every number carries a specific vibration. Your mobile number, which you use dozens of times a day, creates a constant energetic field around you. A harmonious number attracts opportunities; a discordant one can create subtle resistance in your life.

## How to Calculate Your Mobile Number's Value

Add all the digits of your mobile number until you reach a single digit (1-9).

**Example**: 9876543210
9+8+7+6+5+4+3+2+1+0 = 45 → 4+5 = **9**

This person's mobile number vibrates with the energy of number 9 (Mars).

## What Each Sum Means

**1 (Sun)** – Excellent for leaders, businesspeople. Attracts recognition and authority.

**2 (Moon)** – Good for relationships and creative work. Can be emotionally fluctuating.

**3 (Jupiter)** – Very auspicious! Brings growth, expansion, and good fortune.

**4 (Rahu)** – Needs caution. Can bring unexpected changes and obstacles.

**5 (Mercury)** – Excellent for communication, trading, and travel. Fast-moving energy.

**6 (Venus)** – Great for creative professionals, artists, and those in relationships.

**7 (Ketu)** – Spiritual growth, but can bring detachment and isolation.

**8 (Saturn)** – Powerful but slow. Justice and karma at work. Use carefully.

**9 (Mars)** – Energetic and determined. Good for ambition but watch aggression.

## Numbers to Avoid

Numbers totaling 4, 8 (especially for those with Life Path 4 or 8) can amplify challenges. The combination of 4+8 or 8+4 in any form needs careful consideration.

## How to Choose a Lucky Mobile Number

When getting a new SIM card, calculate the sum of potential numbers and match them to your Mulank (birth number) or Life Path Number for maximum harmony.
    `,
    date: "May 15, 2025",
    category: "Mobile Numerology",
    emoji: "📱",
    color: "#c8e0d8",
    author: "Astro Gyan Prakash",
  },
  {
    slug: "karmic-debt-numbers-explained",
    title: "Karmic Debt Numbers 13, 14, 16, 19 – What They Mean & How to Heal",
    excerpt:
      "Karmic Debt Numbers appear in your numerology chart as signs of lessons from past lives. Understanding them is the first step to breaking free from recurring patterns.",
    content: `
## What Are Karmic Debt Numbers?

In numerology, Karmic Debt Numbers — 13, 14, 16, and 19 — appear in your chart (as Life Path, Expression, or other core numbers) and indicate unfinished business from previous lifetimes. They signal areas where you have patterns to heal.

## The Four Karmic Debt Numbers

### Karmic Debt 13 (reduces to 4)

**Theme**: Laziness and misuse of creative power in a past life.

**Lesson**: Discipline, hard work, and consistent effort. People with 13 often feel burdened by endless obstacles — but each challenge is an opportunity to build unshakeable character.

**Healing**: Embrace routine and structure. Celebrate small wins.

### Karmic Debt 14 (reduces to 5)

**Theme**: Overindulgence and abuse of freedom in a past life.

**Lesson**: Moderation and emotional mastery. Number 14 people may struggle with addiction, impulsivity, or restlessness.

**Healing**: Practice mindfulness and delayed gratification. Build healthy habits.

### Karmic Debt 16 (reduces to 7)

**Theme**: Ego-driven love and destruction of relationships in a past life.

**Lesson**: Spiritual humility and rebuilding from zero. Life events often demolish carefully built structures — forcing deep inner reflection.

**Healing**: Surrender ego. Seek spiritual practice. Trust divine timing.

### Karmic Debt 19 (reduces to 1)

**Theme**: Selfishness and misuse of power and influence in a past life.

**Lesson**: Independence balanced with compassion. Number 19 people often face isolation until they learn to ask for and receive help.

**Healing**: Practice interdependence. Lead with empathy, not dominance.

## How to Find Your Karmic Debt

Check if your Life Path Number, Birthday Number, Expression Number, or Soul Urge Number appears as 13, 14, 16, or 19 before reduction.

## The Gift Inside the Karmic Debt

Every Karmic Debt carries a gift. Healing these patterns doesn't just free you — it can make you exceptionally strong in those areas, often turning your greatest wound into your greatest wisdom.
    `,
    date: "April 28, 2025",
    category: "Spiritual Numerology",
    emoji: "🔮",
    color: "#d8c8e8",
    author: "Astro Gyan Prakash",
  },
];

export async function getAllBlogs(): Promise<Blog[]> {
  return blogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  return blogs.find((b) => b.slug === slug) ?? null;
}