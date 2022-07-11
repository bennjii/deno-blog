---
title: rust - an honest review
publish_date: 2022-07-11
description: Rust is amazing, and heres why.
tags: [rust, development, full-stack] 

og:image: ./rust_review/cover2.png
og:credit: https://twitter.com/whoisaldeka/status/674465785557860353
og:title: Safe vs Unsafe Rust
---

[Rust](https://rust-lang.org). I'm sure you've heard of it by this point, but incase you haven't heres a quick rundown.

### What is rust?
Rust is a relatively [`low-level`](https://en.wikipedia.org/wiki/Low-level_programming_language) language... in comparison to ASM. In fact, rust offers incredible support for memory management but in a way that is incredibly intuitive. It forces you to write good code with its strict policies and IDE support which let you know whats wrong, before its gone wrong.

In some cases, I find myself considering rust as a language that you can say: "If it compiles, it works". Because if your code compiles, you'll often find yourself marveling in the fact that your code will work 100% of the time, assuming your logic is correct that is.

<br>

> My biggest compliment to Rust is that it's boring, and this is an amazing compliment. <br> "Chris Dickinson, Engineer at npm, Inc"

<br>

The language can be used in the same places `c` or `c++` can, however offers many benefits. The most important I believe, is the compiler. In languages like `c++`, there is no centralized place to add code, and with hundreds of compilers it makes it a headache to set up a reliable and consistent development environment. However, `rust` does not face these challenges and makes it very easy to import and manage code by the `Cargo.toml` and `crate` system. Its compiler gives valuable opinions on your code, often times suggesting how you can fix your code with code suggestions. 

In these respects, rust is incredible, and once learnt is one of the best languages out there for any range of projects. However, a problem with rust is its adoptability, as a large company with hundreds of developers is likely not to switch to rust as it means retraining and rewriting all of their code, although this has become a [sensation](https://github.com/learnbyexample/awesome-rewrite-it-in-rust).

<br>

> <...> a year is probably the minimum to feel really confident, and probably expect a little bit more if you have no experience with manual memory management languages. <br> [10y+ C++ Developer](https://www.reddit.com/r/rust/comments/nshcbu/how_long_should_it_take_a_beginner_to_learn_rust/)

<br>


### Learning Rust
So, I've been learning rust since April and I feel like I only really became productive just over a month ago (June) - 3 months, where I was able to write freely and handle errors efficiently, and this is possibly only due to my 1-commit-a-day personal challenge. For me, I used the `zero-2-prod in rust` book and found it really helpful at the time, as it taught many basic fundamental things in rust that you would have to spend hours on stack overflow working out instead. 

One of my major complaints  when learning rust was in its file structure idiosyncrasies. The use of `mod` and `use`, w.r.t. files and their placements confused me at first. It was not till this book that I understood it. 

After these 3 months I have comfortably developed two multithreaded https servers with complex backend structures for the tasks they need to complete. However, I still have not ventured into creating macros or using static memory lifetimes - there is so much of rust that I have yet to explore!

The language follows a less than simple syntax, so its major flaw is how long it takes to learn. However, if you have a team of happy rust-taught developers, it makes reading source code significantly easier than other languages, providing greater context for what is going on.

<br>

### A quick insight into rust code

Below is a code snippet taken from my reseda project's backend code, lets see how simple this is to understand.

```rust
let execution_delay = match SystemTime::now().checked_add(Duration::new(1, 0)) {
    Some(delay) => delay,
    None => SystemTime::now(),
};
```

As a more experienced rust developer - you would understand this code's intention immediately. However, to a beginner, this looks daunting. 

There is a lot of new syntax and ways of programming in rust that feels foreign. 

If we look at the code again, the first thing that we see is: `let`. Now, `let` in rust may make you assume something akin to javascript - being a non-constant value. However, as one of the first hurdles I came across in rust, this is not the case. In rust, **all variables are constants**, or `immutable` as it is called. We have to add a `mut` key word after `let` and before the variable name to let the code know we want to be able to mutate its value. 

This outlines but one of the learning hurdles which makes rust so difficult to just pick up, being one of the slowest languages to I've adopted, and I've learnt `c++`! hahahah.

<br>

### What does this mean for rust's adoption?
Hopefully that very brief explanation helped with understand how rust works - now I want to talk about the implications. 

The rust team have noticed its high learning curve to be an issue in its adoption, so they have made a lot of material to help you get started. There are an absolute plethora of ways to learn rust, here are a few of my recommended ways:
- [Rust by example](https://doc.rust-lang.org/stable/rust-by-example/)
- [Rust Book](https://doc.rust-lang.org/stable/book/)
- [Zero2Prod](https://www.zero2prod.com/index.html)
- ... and so much more

Overall, rust is a big challenge to learn, but once mastered is an incredibly valuable skill.

<br>

### Verdict
Now, I know I said this would be a review - although this ended up just becoming a rant on how good rust is! 

All in all, I think rust is an incredible language, and if you have the time - give it a go! It might be daunting at first but it really is a valuable skill that I encourage you to acquire!

---

Thanks a lot for reading, I really appreciate it! <br> <br>
*¡Nos vemos!* <br>
Ben