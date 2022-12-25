### Retail

Open source is a wonderful concept, giving free access to others to explore your code, so they can grow or expand upon what you have made, to create plugins, mods, forks and all else which follows. Throughout my endeavours, I have made almost all of my code available on GitHub for others to see - it not only helps me to see where I have improved, but can help others who can learn from my implemented techniques; good, or bad, to improve their own code. 

Recently, I worked on [`reseda-vpn`](https://github.com/reseda-vpn), a VPN network. It helped me to really get to grips with the rust language as well as learning much more about networking through the use of low-level wireguard implementations. Conjointly, it was my first experience working with rust in the full stack. It showed some clear advantages and disadvantages of the language with the re-write of the backend which was initially implemented in Typescript. 

With large improvements to both performance and system design, I quickly found my home in the rust ecosystem. Although the server code is not publicly available for security reasons - the client architecture is, [here](https://github.com/reseda-vpn/reseda). I invite you to take a look for yourself and even suggest improvements - there are many to be made! 

However, it also showcased some problems which were not inherently the fault of rust but instead a fault of my own attempts such that the language forced me to think in different ways to approach a problem in a way which would prevent issues, specifically in memory with many instances of thread-locking with multithreaded systems. However, I often found myself unable to figure out another way, and only by searching through articles online or reading others code could I discover new design patterns for myself. 

However, from what I have learnt, it has made me better at what I do currently. All is to say, open source has been a large contributing factor to my ability to grow and learn on a need-to-know basis as opposed to reading hundreds of textbooks only to never use some information and generating a reliance on the information given; thus lacking the ability to solve problems when the need arises.

So now, my contribution. 

### Open Source

Whoa, hold on a minute - I thought this blog was going to be about code. Well, yes of course it is - but retail is a key part of open-retail. I've worked for over 8 months in retail jobs earning money before college and one gripe I've had with retail is how poor the POS systems are. Usually this comes down to three factors;

1. An inability to be expandable for the specific use-cases of the company
2. A high entry-cost or transition-cost to migrate data and pay an external source
3. Reliance on external hosting and the associated fees.

So, in an effort to combat this; I decided to try my hand at the problem, and addressing each issue. First, I would need to write a POS, for which I would need a backend system; so was born [`open-stock`](https://github.com/bennjii/open-stock). OpenStock acts as the base from which this project stems. It is an open-source retail system API, and in order to prove its usefullness, I built [`open-pos`](https://github.com/bennjii/open-pos) on top. 

OpenStock is fully extendable and can be integrated or built upon in existing retail systems, as the software is open-source, it becomes fully contributable and as mentioned earlier can therefore address point 1 clearly. I intend to extend the software to include a migration profiler to move existing retail data into the OpenStock standard. People can build their own migrators to include their specific data schema or otherwise. This addresses the transitional cost (Point 2) of the difficulty to migrate. 

Further, OpenPOS is exactly as the name suggests, an open-source Point of Sale software, thus is free to use. The OpenStock API has pre-compiled docker compose builds that can be deployed on any machine and accessed by a computer running OpenPOS, thus the running and hosting costs become solely up to the deployer. For people with pre-existing deployment hardware, this can be re-used. However, a non-technical tool may need to be developed for those without pre-existing knowledge in computer science. This directly addresses point 3 of the migration difficulty.

### Integration
OpenStock can be easily integrated into existing systems following a data migration by deploying a docker image with MySQL and the following in a `docker-compose.yaml` file:

```yaml
open-stock:
    image: bennjii/open-stock:latest (or link to ghcr.io image)
    restart: always
    ports: 
      - "8000:8000"
    links:
      - "db:database"
    environment:
      - DATABASE_URL=mysql://root:root@database/stock
      - ROCKET_SECRET_KEY= (generate your own) i.e. e5c63abf90fb076d7037a32d8dc2951c4b402e7357ca84b0da8e03595f84b30f
      - RUST_BACKTRACE=1
      - RUST_LOG=debug
      - ROCKET_ADDRESS=0.0.0.0
      - ROCKET_PORT=8000
```

From there, the API is accessible through the port specified. Deploying OpenPOS on the same system by building the next.js server and running on the same machine will make the service accessible on the local network. A guide for exacting this is intended to be released in the near future after OpenStock has reached a state of maturity and OpenPOS has been fully implemented. At the time of writing; OpenPOS only has a Kiosk mode implemented and is nowhere near finished, but this will soon change. Once I know OpenStock is able to run a POS system of my own implementation, I can be sure it will work well as a basis for others.

This software is therefore a web-based interface but can be run with any analytics necessary and can be accessed from anywhere. I intend to provide a hosted variation for those less tech-savvy but this would come at a cost that I am not yet willing to charge, as I wish for greater accessibility for the product, if this turns out to be the best way to approach that goal then by all means.

It is worth noting, as the system is hosted internally, a queue system for payments is planned for the future - in which case the service can operate without external internet and rely solely on its own. OpenPOS may implement a further redundancy for those with an externally hosted system to provide offline POS capability. 


---

Happy Coding and Merry Christmas,

Benji