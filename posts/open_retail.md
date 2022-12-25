---
title: open source retail
publish_date: 2022-12-25
description: The inspiration behind open source POS
tags: [rust, development, full-stack, pos, open-source] 

og:image: ./open_retail/open-stock.svg
og:credit: https://github.com/bennjii/
og:title: OpenStock Icon
---

## Open Source

Open source is a wonderful concept, giving free access to others to explore your code, so they can grow or expand upon what you have made, to create plugins, mods, forks and all else which follows. Throughout my endeavours, I have made almost all of my code avaliable on github for others to see - it not only helps me to see where I have improved, but can help others who can learn from my implemented techniques; good, or bad, to improve their own code. 

Recently, I worked on [`reseda-vpn`](https://github.com/reseda-vpn), a VPN network. It helped me to really get to grips with the rust language as well as learning much more about networking through the use of low-level wireguard implementations. Conjointly, it was my first experience working with rust in the full stack. It showed some clear advantages and disadvantages of the language with the re-write of the backend which was initially implemented in Typescript. 

With large improvements to both performance and system design, I quickly found my home in the rust ecosystem. Although the server code is not publically avaliable for security reasons - the client architecture is, [here](https://github.com/reseda-vpn/reseda). I invite you to take a look for yourself and even suggest improvements - there are many to be made! 

However, it also showcased some problems which were not inheritly the fault of rust but instead a fault of my own attempts such that the language forced me to think in different ways to approach a problem in a way which would prevent issues, specifically in memory with many instances of thread-locking with multithreaded systems. However, I often found myself unable to figure out another way, and only by searching through articles online or reading others code could I discover new design patterns for myself. 

However, from what I have learnt, it has made me better at what I do currently. All is to say, open source has been a large contributing factor to  my ability to grow and learn on a need-to-know basis as opposed to reading hundreds of textbooks only to never use some information and generating a reliance on the information given; thus lacking the ability to solve problems when the need arises.

So now, my contribution. 

## Retail
Whoa, hold on a minute - I thought this blog was going to be about code. Well, yes of course it is - but retail is a key part of open-retail. I've worked for over 8 months in retail jobs earning money before college and one gripe I've had with retail is how poor the POS systems are. Usually this comes down to three factors;

1. An inability to be expandable for the specific use-cases of the company
2. A high entry-cost or transition-cost to migrate data and pay an external source
3. Reliance on external hosting and the associated fees.

So, in an effort to combat this; I decided to try my hand at the problem, and adressing each issue. First, I would need to write a POS, for which I would need a backend system; so was born [`open-stock`](https://github.com/bennjii/open-stock). 