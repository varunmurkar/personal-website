---
title: The Pitfalls of A/B Testing
author: Varun Murkar
date: 2021-04-28
excerpt: A/B Tests are great. But are they always a great idea?
hero: ./the-pitfalls-of-a-b-testing.jpg

---

'Data-driven design' is a hot phrase in more recent times, and for good reason. Assumption-based design decisions rarely give a good-enough answer. The qualitative or quantitative evidence would, in effect, at least let you back up your decision better.

These results in 2 main paths, usually. Pre-emptive research, and A/B Testing.

## Data, data, data

Pre-emptive research usually involves a designer positing a hypothesis and interviewing users, gaining primary (and in some cases secondary) data.
costs time and money in ways designers and other stakeholders don't assume it will. More often than not, the researcher's confirmation bias plays a role in this, looking only at the datapoints which support their hypothesis. It's rather difficult to find objective data points for something that's not clearly defined in the first place. What users say and what they do aren't usually the same thing. 

A/B Tests, on the other hand, measure actual difference in user behaviour between 2 slightly different versions of a platform they can objectively test and quantify through user actions. I'd say they're a very reliable way to gain actionable insights.

The reason they work is the limited scope for vaguery in what you're asking or expecting them to do. For example:
1. Will my audience connect better with a marketing banner featuring a kind, older gentleman, or featuring a dashing young daredevil?
2. Will my users be more likely to check product details if the pricing is $4.00 or $3.99?
3. Will my users be more likely to complete a purchase if I offer free shipping with the cost included in the product price, or if I offer a cheaper product price with a higher shipping cost?

Users are faced with a binary choice in these scenarios, and as a result, you have a binary outcome you can objectively measure and derive insights from. One idea was better than the other. You can then compare the cost-benefit ratio for both alternatives and decide which one to go with.

Straightforward enough, right?

## Yes, but...

As effective as they are, over time I've found that A/B tests can be highly addictive to trigger-happy designers. The draw of being able to know exactly which option to go with can sometimes blind designers to the caveats that come with it, leading to poor decisions, especially if you don't know what you're doing.

### Unforeseen outcomes
A classic case of something that seems like a great idea at the time, only to come back and bite you in the posterior down the line. 
For example, offering a free-trial instead of requiring an upfront subscription might increase your customer acquisition rate, but what happens once the trial period expires? Are these free-trial-loving users invested enough in your app to pay for it? Or will they be more likely to just cancel their subscription after the trial? I know I've done that. So have you, I'd wager. So why wouldn't your users do the same?

### Data is objective. Human error is not.
Even discounting for things like confirmation bias, it's possible for someone to misread or misattribute the data collected. I've encountered a situation where we ran a campaign for our client to encourage more users to subscribe to their meal service through. And the number of subscriptions did get a sizeable boost. Backs were patted, cold ones were opened with the bois. But we later discovered that this had nothing to do with the campaign, but was the result of an unintentional word-of-mouth referral done by an enterprise client.

### Who you talkin' to tho?
The selection of your test users also matters. This problems get compounded the smaller and more specific your sample size is. Differences may be statistically insignificant for a small sample size. 2 out of 10 people is nowhere near the same as 4 out of 50 people. 
Within the sample set, is the demographic and psychographic uniform enough to normalize the test conditions? Are you sure you're not pitting tech pros against grannies? 
I'm exaggerating the example, but you get the point. The audience selected may affect the test conditions (compounded by a smaller sample size), leading to inaccurate results.

### Users are more than numbers on a spreadsheet
Just because one alternative is giving better result numbers than the other in an A/B Test, doesn't necessarily mean you're getting the full picture for why your users are doing what they're doing. This also includes Dark UX practices such as naming a cancel/dismiss action "No, I don't like saving money". Don't be a dick for your conversion rates. Some changes might look lucrative in the short run, but can lead to deeper issues in the long run -- case in point, FOMO-driven social media notifications for everything. We're [already seeing](https://pubmed.ncbi.nlm.nih.gov/32685296/) the mental health issues this has lead to.

### A/B tests cost resources
Creating the designs or code variants for different tests costs time and money. Valuable time and money which you could have otherwise spent on moving the project further. If the required outcome or workflow for a project is clear, it would probably be more cost-effective to move forward with the most logical, balanced design, and analyze the data coming in as the product is live and used by real users. The insights from this data can then be used to decide what could use improvement, whether an A/B test is required for it in the first place, and consequently, what the tests should be.

## In closing
As "subjective" as design can be, data helps provide a more objective view of what's going on. It's a great way to understand user behaviour, and plan better design decisions.

But designers/product managers should be careful about misusing/abusing A/B Tests. Data helps, but it's not a fix-all solution. Design sensibilities have a role in design decisions, too. The impact of some failed test option (say, fixing some minor annoyance users have complained about forever) might be minimal. But maybe it was something really required, and didn't justify an A/B Tests. Those tiny things can add up to something substantial.

So how about a simple check?
- Is there an obvious/existing solution which you know will work?
- Is there another, equally viable alternative that should be considered?
- Is an A/B test the best way to decide between them?

I'm sure we can figure it out.