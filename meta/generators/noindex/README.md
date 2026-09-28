# noindex — keeping the prototype out of search results

This repo is a **private prototype** that is served **publicly** at
`https://tashicorp.github.io/cosive-homepage/`. GitHub Pages on a public repo has no access
control: anything committed here is reachable by anyone who knows the URL, and by any crawler
that finds it.

`check.mjs` enforces the one defence that works for HTML.

```
node meta/generators/noindex/check.mjs          # report; exit 1 if any page is indexable
node meta/generators/noindex/check.mjs --fix    # insert the tag where it is missing
```

Every `.html` file in the repo must carry, in `<head>` (or line 1 for a partial):

```html
<!-- github-pages-preview-only --><meta name="robots" content="noindex, nofollow">
```

The `github-pages-preview-only` comment marks the line as **staging-only** — it is stripped when
markup is moved into Webflow. Production pages on `www.cosive.com` must NOT carry it, or they
drop out of search. That comment is the only thing distinguishing the two cases, so keep it.

The check runs automatically via the `PostToolUse` hook in `.claude/settings.json` after any
`.html` write, so a new page cannot be created without the tag.

## What this does NOT cover

**1. `robots.txt` cannot help here.** Crawlers only read `robots.txt` at the *domain root*.
This is a GitHub Pages **project** site, so a `robots.txt` committed to this repo would serve at
`tashicorp.github.io/cosive-homepage/robots.txt` — a path crawlers ignore. The file that would
work is `tashicorp.github.io/robots.txt`, which comes from a separate **user site** repo named
`tashicorp.github.io`. That repo does not currently exist (the URL 404s).

To block the whole account's Pages output at the domain level, create a repo named
`tashicorp.github.io` containing only:

```
User-agent: *
Disallow: /
```

That is the single highest-value action available, because it is the only thing that covers the
files below.

**2. Non-HTML files are exposed and cannot be protected from inside this repo.** They are served
with a `200` and cannot carry a meta tag:

- `CLAUDE.md`, `package.json`, `package-lock.json`
- `meta/reference/llms/llms.txt` and its archive
- `meta/reference/tov/Cosive Tone of Voice.txt`
- every `meta/**/README.md`
- `.claude/skills/**/*.md` — note `.claude/` is skipped by the checker but **is** served

Only the domain-root `robots.txt` above covers these. `.nojekyll` is required for
`_header.html` / `_footer.html` to resolve, so the usual Jekyll exclusion trick is not available.

**3. `noindex` is a request, not a lock.** It is honoured by Google and Bing, but it does not
make a page private — anyone with the URL still sees it. For genuinely private hosting the
options are a private repo with GitHub Enterprise Cloud Pages, or a host that supports HTTP auth.
