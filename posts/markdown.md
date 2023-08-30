---
title: "Learn Markdown"
date: "2023-08-30"
---

# Basic writing and formatting syntax

## Headings

### this is h3

###### this is h6

## Styling text

**this is bold text** , _this is italicized_, ~~this was mistaken text~~, this is a <sub>subscript</sub>text

## Quoting text

> Text that is quote
> Use `console.log()` to display information

```
git push
git pull
git merge
```

## Support color models

The background color is `#1d4ed8` or `#be123c`

## Links

This site is Github Octodex [Octodex](https://octodex.github.com/)

## Relative Links

[this is README](/README.md)

## images

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://octodex.github.com/images/mona-the-rivetertocat.png">
  <source media="(prefers-color-scheme: light)" srcset="https://myoctocat.com/assets/images/base-octocat.svg">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://octodex.github.com/images/mona-the-rivetertocat.png">
</picture>

## list

- vinyltocat
- rivetertocat
- octode
  _order_

1. QQ
2. Wechat

## Nested Lists

1. Nice
   - Nice Try
     - Nice Try Something

## Task lists

- [x] 🧑‍💻😂
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:

## Mentioning people and teams

@github/support What do you think about these updates?

## Using emoji

@octocat :+1: This PR looks great - it's ready to merge! :shipit:
Face Affection :smiling_face_with_three_hearts: :yum: :hugs:

## Footnotes

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

This is a footnote[^3]
[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
This is a second line.
[^3]: nice try

## Alerts

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

## Ignoring Markdown formatting

Let's rename \*our-new-project\* to \*our-old-project\*. 😉
