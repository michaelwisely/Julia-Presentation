.PHONY: all

%.html: %.md
	pandoc \
		--from=markdown+yaml_metadata_block+inline_code_attributes \
		--to=revealjs \
		--standalone \
		--mathjax="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML" \
		--highlight-style=kate \
		--template="lib/default.revealjs" \
		--slide-level=2 \
		--output=$@ \
		$^

all: index.html
