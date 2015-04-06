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

# Outline

## Outline
* [Introduction](#introduction)
* [Why Julia?](#why-julia)
* [Language Features & Batteries](#language-features-batteries)
* [The Future of Julia](#the-future-of-julia)
* [What's next?](#whats-next-for-us)

# Introduction

# Why Julia?

# Language Features & Batteries

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

[Operator Demo](http://127.0.0.1:8998/notebooks/Operators.ipynb)

# Vectors and Matrices

## Special Operators



# Multiple Dispatch

## Ambiguity

What happens when multiple function signatures fit?

Methods are stored in order of specificity. The function with the more
specific type signature will be the one that's used.

If two functions are equally specific, a warning is generated.

# Wildcard

## Wildcard

[Get a new notebook](http://127.0.0.1:8998/tree)

# The Future of Julia

## Growing Interest

According to a survey done by [KDNuggets](http://www.kdnuggets.com/2014/08/four-main-languages-analytics-data-mining-data-science.html),

```
3. Languages with the highest growth in 2014 were

Julia, 316% growth, from 0.7% share in 2013 to 2.9% in 2014
SAS, 76% growth, from 20.8% in 2013 to 36.4% in 2014
Scala, 74% growth, from 2.2% in 2013 to 3.9% in 2014
```

<small><i>2013 Survey: 713 Participants</i></small>
<br>
<small><i>2014 Survey: 719 Participants</i></small>

---

*What will it take for* **you** *to start using Julia?*

---

*What will it take for Julia to be successful?*

## Packages!

Community involvement $\implies$ Community packages

As the Julia community grows, more users will open source their
libraries to <http://pkg.julialang.org>.

That means developers can spend less time reinventing the wheel and
more time being productive.

# What's next for us?

## Data Mining with Julia

* `DataFrames.jl` and `Stats.jl`
* What kinds of packages are already available?
* Can it really replace R?

## Find out next time

![](http://i.kinja-img.com/gawker-media/image/upload/s--1nJMHTaH--/654763566364366513.png)
