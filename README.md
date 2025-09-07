# Wildcat Canyon Migration

This repo reworks the school website built on WordPress, and looks to re-arch it to a simpler, static core for easier management and reducing cost and complexity. 

The intention here is to flatten the layers of configuration, styling, and external dependencies that currently compile to generate the WordPress site (Database, Plugins, Theme customizations).


## Comparing

| Feature | WordPress (Original) | Next.js (New) |
|---------|---------------------|------------------------|
| **Hosting** | $15-50/month + maintenance | Free (Vercel) |
| **Performance** | Server queries, slow | Static, sub-second |
| **Security** | Vulnerabilities, plugins | No server risks |
| **Content** | Complex admin | Simple Git CMS |
| **Maintenance** | Updates, backups | Zero maintenance |

Both approaches are based on open source, popular community projects that have a lot Of extensibility documentation and developer support. Because our school website does not need dynamic functionality (bar a couple of webforms), a lot of the WordPress platform functionality is overkill for serving static, simple pages of content.


### WordPress Notes (??-2025):

* [Backup repo](https://github.com/flynnduism/wildcatcanyon.org)
* [Database export](https://github.com/flynnduism/wildcatcanyon.org/tree/main/export/database)
* Hosted on GoDaddy's paid WP service with a duplicated staging environment
* Theme is Swift Framework, using the Cardinal child theme, with a `wp-admin` modified set of styles 

### Next.js Notes

The new website rendering here is based on using web scrapers to index the WP site, migrate content into a Markdown format (`.md`) for use in the more modern [Next.js](https://nextjs.org/docs) framework. See `AGENT.md` and `TODOS.md` for context on the steps involved in generating this transition.


### Deployment

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/flynnduisms-projects/v0-wccs-word-press-migration-to-next)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/UWR1LqzD5o8)

The project is staged at:

**[https://wccs-react.vercel.app/](https://wccs-react.vercel.app/)**
