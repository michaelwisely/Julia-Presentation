# Julia-Presentation

A quick presentation for introducing Julia!

## The Notebooks!

IPython notebooks are stored in `notebooks/`. They can be opened with
[IJulia](https://github.com/JuliaLang/IJulia.jl). Links within the
presentation open these notebooks for handy-dandy demos.

## The Presentation!

### Build it!

The presentation in written in
[Markdown](http://pandoc.org/demo/example9/pandocs-markdown.html), and
it can be compiled to a [Reveal.js](http://lab.hakim.se/reveal-js/#/)
slide show using [Pandoc](http://pandoc.org/README.html). There is a
`Makefile` in `presentation/` that will build the slides.

After you run `make`, the compiled file is placed in
`presentation/build/index.html`.

You can also build it with pandoc by running something like...

```bash
pandoc \
  --from markdown+yaml_metadata_block+inline_code_attributes \
  --to revealjs \
  --output index.html
  --standalone \
  --highlight-style=kate \
  --template=lib/default.revealjs \
  --slide-level=2 \
  src/index.md
```

[Pandoc is magic](http://pandoc.org/index.html), so feel free to
compile the content to other document types.


### Use it!

You'll need to start an IJulia server if you want to do the code demos
as they're linked in the presentation. Otherwise, you can present the
slides like any other Reveal.js slide show.

If you're not familiar with Reveal, type `?` to see your options once
you've loaded the page. There's a demo available here:
<michaelwisely.com/Julia-Presentation/>.
