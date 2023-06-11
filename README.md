# svelte-te

Building Svelte components out of the base styles and components of [Tailwind Elements](https://tailwind-elements.com). Note that my components will not necessarily match their docs in all cases, for a few reasons:

- I am building only the stuff I need/want, and even then, only the features I want. e.g. At the time of writing, I haven't bothered with outline or round style Buttons, because I currently have no need for them.
- Some things I have just re-styled completely. e.g. I don't like the "floating label" style of <code>InputField</code>, so I just did my own styling there.
- It's a known issue that their JS is broken in many cases when trying to use an SSR framework like SvelteKit, so I omitted any JS usage that I don't directly need. (Again, <code>InputField</code> is an example of something that is completely broken here, so that implementation is my own.)
- The docs are just plain wrong in many cases.

[![Netlify Status](https://api.netlify.com/api/v1/badges/5ae5a6d9-7a2d-4cca-88dc-aa45da519653/deploy-status)](https://app.netlify.com/sites/svelte-te/deploys)

You can view the latest build at [https://svelte-te.netlify.app/ui](https://svelte-te.netlify.app/ui). It's a very simple demo site that shows _most_ of the components, not all—some are just not really worth the trouble to demo.
