# Smile Makeover Consultation: Landing Page for a Dubai Cosmetic Dentist

A single-goal, mobile-first landing page built to turn paid-ad and search visitors into **WhatsApp consultation requests** for a cosmetic dentist in the UAE.

**Live:** https://consult.alkabulchandani.com
**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Google Tag Manager (GA4)
**Status:** Live, pro bono project. No paid campaign has run yet, so there is **no conversion data**. The measurement setup is ready, and the performance numbers below are lab data.

## Results at a glance

Mobile PageSpeed Insights, captured Oct 27, 2026 (emulated Moto G Power, Lighthouse 13.5.0):

| Performance | Accessibility | Best Practices | SEO |
| :---------: | :-----------: | :------------: | :-: |
|     99      |      93       |      100       | 100 |

|  FCP  |  LCP  |  TBT  | CLS | Speed Index |
| :---: | :---: | :---: | :-: | :---------: |
| 0.9 s | 2.1 s | 40 ms |  0  |    2.1 s    |

These are lab results, not field data. They show the page is fast on a mid-range phone, which matters because ad traffic in the UAE is mostly mobile.

## The conversion goal

One page, one action: **book a free smile makeover consultation**. The visitor is warm but cautious. Cosmetic treatment is expensive and people fear a sales pitch, so the page is designed to lower the cost of taking the first step rather than to explain every treatment.

**Primary conversion:** a click on the WhatsApp booking button.
**Secondary signals:** scroll depth and page views.

## Key design decisions (and why)

| Decision                           | Reasoning                                                                                                                                                                    |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **WhatsApp instead of a form**     | Messaging is the default way to contact a clinic in the UAE. Tapping a button that opens a pre-filled message removes the form, the typing, and the wait for a callback.     |
| **One CTA, repeated**              | The same offer appears in the hero, in the final CTA section, and in a sticky mobile bar, so the next step is always in reach.                                               |
| **Mobile sticky CTA**              | Appears after the visitor scrolls past half the first screen, so it does not compete with the hero button. Mobile only, with safe-area padding for notched phones.           |
| **"No pressure" messaging**        | The hero, benefits, and FAQ keep answering the same fear: "Will I be sold something?" The H1 sells the outcome ("See What Your Smile Could Look Like"), not the appointment. |
| **FAQ as objection handling**      | Eight questions cover cost, duration, pressure, payment plans, and international patients (the clinic is in a medical-tourism market).                                       |
| **Proof before explanation**       | Avatars with "+5000 Happy Patients" sit in the hero on mobile. Credential stats appear on desktop. Testimonials and before/after images follow immediately.                  |
| **Three-step process**             | Book on WhatsApp → personalised assessment → start when ready. It shows the first step is small and reversible.                                                              |
| **Privacy policy and terms pages** | Trust signal and basic compliance for a healthcare brand collecting enquiries.                                                                                               |

<!-- Confirm before publishing: that the statistics, testimonials, and before/after images were supplied by the clinic, and whether naming the clinic is approved. -->

## Measurement

Google Tag Manager is installed site-wide, with GA4 tags configured in the container:

| Tag                    | Purpose                                             |
| ---------------------- | --------------------------------------------------- |
| Google tag (all pages) | Page views and GA4 configuration                    |
| `whatsapp_click`       | Fires when a visitor clicks a WhatsApp booking link |
| `scroll_depth`         | Tracks how far visitors scroll                      |

<!-- Confirm before publishing: that the latest GTM workspace changes are submitted as the live version, and add the scroll thresholds and trigger conditions here. -->

**Metrics to watch once ads run:** WhatsApp click-through rate (`whatsapp_click` ÷ sessions), cost per WhatsApp click, and scroll-depth drop-off by section.

## CRO hypotheses and testing plan

The design treats conversion decisions as hypotheses to investigate, not as proven results. **No conversion uplift or real-user behavior is claimed.**

**Defining the conversion.** A WhatsApp click is a _proxy_, not a booked consultation. The full funnel is: page view → WhatsApp click → conversation started → consultation booked → consultation attended. The page can only measure the first two steps, so I would agree with the clinic on tracking the later steps (for example, a simple weekly count of bookings that came from the page) before judging any change.

|  #  | Observation                                                      | Hypothesis                                                                                                  | Test                                  | Primary metric                                          |
| :-: | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------- | ------------------------------------------------------- |
|  1  | Clinic enquiries in this market usually start in messaging apps. | A WhatsApp-first CTA lowers friction compared with a booking form.                                          | Compare against a short form variant. | WhatsApp click-through rate                             |
|  2  | On mobile, the hero CTA scrolls out of view.                     | A sticky CTA that appears after half a screen of scrolling raises click-through without hurting engagement. | Sticky CTA on vs. off.                | Click-through rate, scroll depth                        |
|  3  | Many visitors will not scroll far.                               | Moving testimonials closer to the hero raises click-through from low-scroll visitors.                       | Reorder sections.                     | Click-through rate for visitors who stop above the fold |
|  4  | The H1 sells an outcome; the CTA names an offer.                 | Outcome-led CTA copy outperforms offer-led copy.                                                            | Two CTA copy variants.                | WhatsApp click-through rate                             |

**Realistic testing approach.** A single clinic page may not get enough traffic for a statistically sound A/B test. Until traffic grows, the plan is to establish a baseline first, change one thing at a time, compare before and after over equal periods, and read scroll-depth data alongside clicks to see where visitors drop off.

**Privacy.** Dental enquiries can involve sensitive personal information, so analytics events should record interactions only and never names, phone numbers, or health details.

## Performance and accessibility techniques

- **Fonts:** `next/font` (Lora and Gilda Display) with `display: swap` to avoid invisible text.
- **Images:** `next/image` with AVIF and WebP output and a tuned set of device sizes; assets stored as WebP.
- **Lazy-loaded sections:** everything below the fold (testimonials, before/afters, benefits, process, about, FAQ, CTA, footer) loads through `next/dynamic` with skeleton placeholders, which keeps the initial bundle and main thread light.
- **CSS:** `inlineCss` enabled to cut a render-blocking request.
- **Sticky CTA:** passive scroll listener and `env(safe-area-inset-bottom)` padding.
- **FAQ accordion:** native buttons with `aria-expanded`.

## Trade-offs and next steps

- The below-the-fold sections load client-side only (`ssr: false`), which helped performance but means their content is not in the initial HTML. Server-rendering the FAQ is worth testing for search visibility.
- The FAQ items share one `aria-controls` id. Unique ids per item should lift the accessibility score above 93.
- The WhatsApp link is repeated across components. Moving it into a single constant removes the risk of mismatched numbers.
- The CTA button wraps a link in a `<button>`. A single styled `<a>` would make the full button area tappable and the markup valid.
- Once traffic exists: validate the GTM events in GA4, register custom dimensions, and run the first test (sticky CTA on vs. off).

## Project structure

```
app/
  layout.tsx            Metadata, fonts, GTM
  page.tsx              Hero, statistics, lazy sections, sticky CTA
  ClientSections.tsx    next/dynamic loading with skeletons
  privacy-policy/       Privacy policy page
  terms-of-service/     Terms page
components/
  Header/               Desktop and mobile navigation
  sections/             Hero, Testimonials, BeforeAfters, Benefits,
                        Process, About, FAQs, CTA, Footer
  UI/                   CTABtn, StickyCTA, FAQItem, cards, Statistics
constants/index.tsx     All page copy and content data
hooks/useOnScreen.ts    Visibility hook
```

All copy lives in `constants/index.tsx`, so content can be updated without touching components.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. The GTM container ID is set in `app/layout.tsx`.

## About this project

Built end to end (design, copy structure, development, deployment, and analytics setup) as a pro bono project to practise conversion-focused landing page work on a real business. The clinic has not yet run paid campaigns, so I do not claim any uplift. What I can show is a fast, accessible page, a deliberate conversion path, and tracking that is ready to prove or disprove the hypotheses above.
