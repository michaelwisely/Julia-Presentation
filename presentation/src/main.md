---
revealjs-url: "http://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.0.0"
theme: "white"
transition: "none"

style: "
    .reveal section img { border:none; box-shadow:none;}
    .reveal pre code { background: #F8F8F8; color: #3F3F3F; }
"

extra-script: "
    Reveal.configure({controls: false});
"
...

![](https://camo.githubusercontent.com/e1ae5c7f6fe275a50134d5889a68f0acdd09ada8/687474703a2f2f6a756c69616c616e672e6f72672f696d616765732f6c6f676f5f68697265732e706e67)

# Functions

## Operators

Operators are just normal functions, but with special calling syntax.

```julia
type Complex
    real::Float64
    imag::Float64
end

function +(a::Complex, b::Complex)
  Complex(a.real + b.real, a.imag + b.imag)
end
```

# Vectors and Matrices

## Special Operators



# Multiple Dispatch

## Ambiguity

What happens when multiple function signatures fit?

Methods are stored in order of specificity. The function with the more
specific type signature will be the one that's used.

If two functions are equally specific, a warning is generated.
