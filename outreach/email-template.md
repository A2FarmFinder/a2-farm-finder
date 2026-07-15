# Farm Outreach Email Template

Use this as a starting point — personalize the bracketed parts for each farm
before sending. Send from your own email address; this is intentionally NOT
automated (see notes at the bottom).

## Suggested timing
Best window: **late January through March**, before the spring CSA sign-up
rush (most local CSAs open registration in Feb/March for a May/June start).

## Suggested pricing
- **Featured listing**: $15-25/month, or a discounted **$60-100 for a
  3-month "CSA season" package** (Feb-April) — easier sell as a one-time
  seasonal push rather than an ongoing subscription
- Featured = top placement on the [Farms & CSAs](/farms) directory page with
  a "Sponsored" badge (already built — just set `featured: true` in the
  farm's listing)

---

## Email template

**Subject:** Your farm is listed on A2 Farm Finder — want top placement for CSA sign-up season?

Hi [Name / "there"],

My name is [Your Name], and I run **A2 Farm Finder**
(a2farmfinder.com — replace with your real domain), a new directory site for
farms, CSAs, and farmers markets across Washtenaw County.

I've already added [Farm Name] to the directory — here's your current
listing: [link to /farms/[slug]]. Feel free to let me know if anything needs
correcting (hours, pricing, products, etc.).

With CSA sign-up season coming up, I wanted to offer farms the option of a
**featured placement** at the top of the farm directory with a highlighted
"Sponsored" badge — it's a simple way to get extra visibility to local
families looking for a CSA right when they're deciding where to sign up.

If you're interested, featured spots are **$[price]** for a 3-month run
through the spring sign-up window (Feb-April), or $[monthly price]/month
ongoing. Happy to answer any questions or adjust your listing details first
— just reply here.

Thanks for everything you grow for this area!

[Your Name]
[Your Email / Phone]
a2farmfinder.com

---

## Notes on why this isn't automated

- Several of these farms don't have a public partnerships email — a couple
  only have a phone number or contact form (see `farms-outreach.csv`).
- Sending unsolicited commercial email at scale has real reputation/legal
  considerations (CAN-SPAM: needs your real identity, a physical address, and
  an opt-out — easy to satisfy for a handful of personalized emails, risky to
  automate blindly).
- These are small local businesses you may want an ongoing relationship
  with — a personalized note (mentioning something specific about their farm)
  will convert far better than a templated blast.

## Tracking

Update `farms-outreach.csv` as you go: set `status` to `contacted`,
`responded`, `paid`, or `declined`, fill in `date_contacted`, and record the
price you quoted/agreed on.
