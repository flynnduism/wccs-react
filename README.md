# Wildcat Canyon Migration

This repo reworks the school website built on WordPress, and looks to re-arch it to a simpler, static core for easier management and reducing cost and complexity. Here the 


## Why Migrate?

| WordPress (Original)                                       | Next.js JAMstack (New)
          |
  |------------------------------------------------------------|-------------------------------------------------
  --------|
  | Hosting: $15-50/month WordPress hosting + maintenance      | Hosting: $0/month (Vercel free tier)
          |
  | Performance: Server-side rendering, database queries       | Performance: Static generation, sub-second load
  times   |
  | Security: WordPress vulnerabilities, plugin risks          | Security: No server, no database, no WordPress
  exploits |
  | Content Management: WordPress admin (complex)              | Content Management: Git-based Decap CMS (simple)
          |
  | Maintenance: Server updates, plugin updates, backups       | Maintenance: Zero server maintenance, Git
  auto-backup   |


Notes on WordPress Site (??-2025):

* [Backup repo](https://github.com/flynnduism/wildcatcanyon.org)
* [Database export](https://github.com/flynnduism/wildcatcanyon.org/tree/main/export/database)
* Hosted on GoDaddy's paid WP service with a duplicated staging environment
* Theme is Swift Framework, using the Cardinal child theme, with a `wp-admin` modified set of styles 

New rendering here is based on using web scrapers to index the WP site, migrate content into a Markdown format (.md) for use in a simpler Next.js site. See AGENT.md and TODOS.md for context on the steps involved in generating this transition.


## Deployment

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/flynnduisms-projects/v0-wccs-word-press-migration-to-next)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/UWR1LqzD5o8)

The project is staged at:

**[https://wccs-react.vercel.app/](https://wccs-react.vercel.app/)**
