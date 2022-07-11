/** @jsx h */
import blog, { ga, h, redirects } from "./components/blog.tsx";

blog({
  author: "Bennjii",
  title: "The Code Blog",
  description: "",
  showHeaderOnPostPage: false, // by default, the header will only show on home, set showHeaderOnPostPage to true to make it show on each post page
  theme: "auto",
  lang: "en",
  dateStyle: "long", // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  favicon: "favicon.ico",
});