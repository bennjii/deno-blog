/** @jsx h */
import blog, { ga, h, redirects } from "./components/blog.tsx";

blog({
  author: "Bennjii",
  title: "./blog",
  description: "Coding Experiences and More",
  avatar: "avatar.png",
  avatarClass: "rounded-full",
  showHeaderOnPostPage: false, // by default, the header will only show on home, set showHeaderOnPostPage to true to make it show on each post page
  theme: "light",
  links: [
    { title: "Email", url: "mailto:bot@deno.com" },
    { title: "GitHub", url: "https://github.com/bennjii" },
    { title: "Twitter", url: "https://twitter.com/denobot" },
  ],
  lang: "en",
  dateStyle: "long", // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  favicon: "favicon.ico",
});