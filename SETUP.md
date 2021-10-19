# Set up

[Setting up a new headless site instance](https://github.com/cagov/odi-engineering/wiki/Setting-up-a-new-headless-site-instance)

## Demo site configurations

### Editor

*What is it?*
Pantheon hosted WordPress installation that implements the CA Design system.

*Where is it?*

#### Important docs
- [ ] Editor guidance
- [ ] Configure editor
- [ ] Security features
- [ ] Hosting
- [ ] Design system integration
- [ ] Example sites
- [ ] Requirements to get started
- [ ] Source code
 
### `wordpress-to-github`

*What is it?*
Azure hosted microservice/FaaS that pulls from WordPress REST API endpoints and writes data to specified git repo branches on a regular schedule as well as on user interaction.

*Where is it?*

*How do I configure it?*

#### Important docs
- [ ] Configuration guidance
- [ ] Reliability
- [ ] Hosting requirements
- [ ] Schemas
- [ ] Example sites
- [ ] System status
- [ ] Requirements to get started
- [ ] Source code

### 11ty build

*What is it?*
Static site compiler. Uses data written into github to build static pages. 
`.yml` files in `.github/workflows/*.yml` push branch content to AWS s3 buckets

#### Important docs
- [ ] Configuration guidance
- [ ] Design system website
- [ ] Design system upgrades
- [ ] Using dependabot
- [ ] Hosting requirements
- [ ] Make your own web components
- [ ] Working with content models
- [ ] Example sites
- [ ] Requirements to get started
- [ ] Source code
### AWS s3 buckets

#### Important docs
- [ ] Bucket configuration
- [ ] Using *.ca.gov domains
- [ ] Preview content
- [ ] Github actions references
- [ ] Working with no domains
- [ ] Turn off robots.txt
### CDN 
We are using Cloudfront with AWS s3.
- [ ] Cloudfront configurations

### Domains and endpoints
A full system recommends the following domains.

The WordPress system uses the following endpoints.
The most up to date version of the endpoints can be found [here]().