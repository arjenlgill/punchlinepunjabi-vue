# punchlinepunjabivue

Understanding how to circumvent the inherent technical SEO issues caused by JavaScript DOM-injection when building sites with frameworks such as Vue and React.

While such frameworks have obvious advantages when it comes to templating, binding functions to HTML elements, and build optimisations such as code-splitting, the JavaScript-first method of building webpages also poses a great threat to technical SEO. In this project I will be using Vue whilst preserving technical SEO.

What I learned:

When first picking up Vue, I immediately saw how it wasn't very SEO-friendly out-of-the-box. Due to the nature of single page apps, there was the immediate issue of the Vuex router not producing unique URLs, but rather fragments that gave the illusion of separate pages. My first task was to sort this out by creating unique entry points for each physical page, which was not too obtrusive but did cause issues with Vue DevTools detecting Vue on the page.

Once this was done, I focused on re-building the music website with Vue templating, which was fantastic for saving code and making it much less tedious to format lyrics. 

Upon completing the re-structuring of the website, I encountered a few technical SEO issues -- including page speed. Initially the score was drastically lower than the score I had achieved (97) with GULP and manual optimisations that were carried over into this project. After looking deeper into this, I found one another drawback of SPAs: the heavy reliance on dependencies to render page content. My chunk-vendors.js file was 2MB. I fixed this by splitting chunks per entry point, lazy-loading JS modules, implementing a cache API to cache the app shell, and gzipping the file; the Lighthouse score was revived back to 90+. 

There is one, ultimate problem that remains, which is the JS-injection of page content that is problematic with client-side rendering. For this, I will look into dynamic rendering. 
