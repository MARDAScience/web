---
slug: this-website
title: This website
author: Dan Buscombe
author_title: Chief Webber @ Marda
author_url: https://github.com/dbuscombe-usgs
tags: [web, scicomm]
---

How did we set up this Marda science website? It was a rocky road ... we initially paid for a commercial WordPress hosting which was, well, let's just say awful and move on!

Next, we wanted something easy, free, and just code.  

I decided to use github's free `gh pages` web hosting service, which also provides an ssl certificate through [letsencrypt](https://letsencrypt.org/). For web pages, I went with [docusaurus](https://docusaurus.io/), which is meant for documentation but works great for simple webpages such as these, with a relatively shallow learning curve. There's a little bit of javascript, a bit of css, and some markdown. Then its all about git, and confusing web stuff.

## Github
First I set up [this github repository](https://github.com/MARDAScience/web)

```
git clone https://github.com/MARDAScience/web.git
cd web
```

## Docusaurus
Generated a `classic` v2 docusaurus website template:

```
npx @docusaurus/init@latest init website classic
```

Switched to the newly created `website` directory:

```
cd website
npx docusaurus start
```

(started writing the website)

Pushed it to github

```
Git add .
Git commit -m “your commit msg here”
Git push origin main
```

Pushed website to `gh-pages` like so:

```
GIT_USER=MARDAScience   CURRENT_BRANCH=main   yarn run deploy
```

At which point the website was visible at https://MARDAScience.github.io/web/

## Custom Domain
I transferred the domain name, "mardascience.com", from the awful hosting service we had naively gone with previously, to namecheap.

In namecheap, under the domain listing, I used the "Advanced DNS" tab to add these “A records” (host for each is @)

```
host=@, value=185.199.108.153
host=@, value=185.199.109.153
host=@, value=185.199.110.153
host=@, value=185.199.111.153
```

(those IPs were obtained from [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) and apparently change every so often)

I also added the following CNAME record

```
host=www
value=mardascience.github.io.
```

(not the trailing dot after `io`)

## Back to Docusaurus

The top of the `docusaurus.config.js` file should look like

```
module.exports = {
  title: 'Marda Science',
  tagline: '{Communications | Analytics | Training} for the {Marine | Earth | Life} Sciences',
  url: 'http://mardascience.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MARDAScience', // Usually your GitHub org/user name.
  projectName: 'web', // Usually your repo name.
```


Add a `CNAME` file to both the root (`web`) and `/website/` that says, simply

```
www.mardascience.com
```

(note the `www.` is included)

Push it to github:
```
Git add .
Git commit -m “msg”
Git push origin main
```

Push website to gh-pages

```
GIT_USER=MARDAScience   CURRENT_BRANCH=main   yarn run deploy
```

## Back to Github

On [github pages](https://github.com/MARDAScience/web/settings/pages), add custom domain name:

```
www.mardascience.com
```

Check `Enforce HTTPS`. After a DNS check, it should be visible at https://www.mardascience.com/
