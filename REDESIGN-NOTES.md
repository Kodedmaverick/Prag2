# Prag redesign notes

## Visual changes

- Replaced the generic skyline hero with a commissioned editorial-style image of Nigerian legal professionals.
- Added a second collaboration image for the homepage, About page and Practices page.
- Added animated route/bridge line art derived from the firm's positioning.
- Added a slow editorial marquee, scroll-reveal transitions and restrained hover movement.
- Added reduced-motion support for visitors who disable animation.
- Added abstract line work to internal page headers.

## Generated imagery

The following project assets were generated with the built-in OpenAI image generation workflow:

- `public/assets/prag-hero-editorial.png`
- `public/assets/prag-collaboration-editorial.png`

The images depict representative professional scenes. They are not photographs of Prag employees and must not be captioned or presented as named team members.

## Content requiring client verification

The supplied project contains claims that should be confirmed before publishing, including:

- Firm founding date and all timeline milestones
- Office count and office addresses
- Years of experience and turnaround-time statistics
- Memberships and rankings, including Legal 500, Chambers Africa and Lex Mundi
- Representative matters and regulator/licensing outcomes
- Team roles, biographies, bar dates, memberships and email addresses
- All insight titles, authors and publication dates
- Open career roles

Four current team profiles were verified through the client-authorised signed-in LinkedIn session and added or updated: Olanrewaju Jolaoso, Oluwatimilehin B. Omotayo, Omolade Ajila and Abisoye (Josephine) Ajayi. Ayantunde Joshua was not added because his profile shows that his employment with Prag ended in May 2024.

## Image-generation prompts

### Hero

High-end editorial photograph of three Nigerian commercial-law professionals collaborating in a refined Lagos office, warm late-afternoon light, deep navy and warm-neutral colour grade, people positioned to the right with darker negative space to the left, natural expressions, no legal clichés, text, logos or watermarks.

### Collaboration

Editorial photograph of Nigerian legal professionals reviewing a commercial agreement in a contemporary Lagos office, warm stone and timber materials, candid human interaction, burgundy and navy tailoring, no readable confidential text, legal clichés, logos or watermarks.

## Verification status

The source changes were reviewed statically. A production build could not be run in the restricted environment because the archive did not include dependencies and the package registry was unavailable.
