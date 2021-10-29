# ODI Publishing, 11ty sandbox

DRAFT

This is a working copy of odi-publishing-11ty-starter-kit.

* Used for testing the publishing pipeline without affecting production sites.
* Can be used for demos, training, review, and testing pipeline errors and reliability.
* The `odi-publishing-11ty-starter-kit` is intended to act as a "quick-start" for setting up a new static site using the ODI Publishing system, and up-to-date design system components. 
* We currently support integration with the WordPress REST API through a middleware service called "wordpress-to-github."

# Local development 

`npm run dev`

# @todo

- [ ] Doument `odi-publishing.json`
- [ ] Reenable branch-specific configs. 
- [ ] rename _drought.css
- [ ] remove drought.ca.gov reference in ./src/js/gatracker/index.js
- [ ] Replace agency footer with ds version.
- [ ] Move index.njk meta keywords to config
- [ ] Use config for src/templates/_data/wordpress.js
- [ ] Only use prod dependencies for github build. 
