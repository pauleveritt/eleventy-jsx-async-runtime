# 11ty and jsx-async-runtime

Explain [a ticket in the jsx-async-runtime](https://github.com/jeasx/jsx-async-runtime/issues/1#issuecomment-2202170527)
repo about subcomponents and binding to `this`.

We'd like to avoid prop drilling to subcomponents by allowing `this` to have access to render `data`. Preact can do this
with an extra arg to `render`. This arg becomes `this.context` in all components and subcomponents.

[Demonstration video on YouTube](https://youtu.be/3y1-tuk2Z9E)

## Summary

1. Run `npm run build` (or start).

2. Look in `_site/index.html` at the `title` on the `<h2>`.

3. It comes from `_includes/Heading.tsx` which has a comment explaining how it works.
