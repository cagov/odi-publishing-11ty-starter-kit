# Set up

[Setting up a new headless site instance](https://github.com/cagov/odi-engineering/wiki/Setting-up-a-new-headless-site-instance)

## Demo site configurations

### Editor

*What is it?*
Pantheon hosted WordPress installation that implements the CA Design system.

*Where is it?*

- [ ] Editor guidance
- [ ] Configure editor
- [ ] Security features
- [ ] Hosting
- [ ] Design system integration
- [ ] Example sites
 
### `wordpress-to-github`

*What is it?*
Azure hosted microservice/FaaS that pulls from WordPress REST API endpoints and writes data to specified git repo branches on a regular schedule as well as on user interaction.

*Where is it?*

*How do I configure it?*

### 11ty build

*What is it?*
Static site compiler. Uses data written into github to build static pages. 
`.yml` files in `.github/workflows/*.yml` push branch content to AWS s3 buckets

### AWS s3 buckets

### CDN 

### Cloudfront

### Domains