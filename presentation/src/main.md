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

## What is Julia?

Julia is a high-level programming language for technical computing. It
was designed to incorporate the best features of other technical
computing tools to create a **blazing fast**, **easy-to-write** language.

## Motivation

In their
[inaugural blog post](http://julialang.org/blog/2012/02/why-we-created-julia/),
the authors explained that they created Julia out of greed.

They wanted language that was fast, easy, and usable that would be
applicable to their own work. Namely:

* Scientific computing
* Machine learning
* **Data mining**
* Large-scale linear algebra
* Distributed and parallel computing

## Language Facts

* Garbage collected
* Just-in-time compiled
* Built on LLVM Compiler Infrastructure
    * The same framework Clang, Rust, and Swift are built on
* Reuses best-of-the-best libraries from C and Fortran
* Cross-platform
* Designed for distributed and parallel computing

# Why Julia?

## It's High-Level

Like Python or Matlab, its simple syntax makes it easy to get started
writing programs in Julia.

Julia is imperative, and language constructs are familiar to Ruby,
Python, and Matlab programmers.

Also, it's garbage collected. You don't have to worry about memory
unless you want to.

## It's So [Fast](http://julialang.org)

![2012 Study. Performance relative to `C`. `C` Performance is 1.0](http://i.imgur.com/iXcAFqr.png)

## Packages!

The Julia community is growing and releasing a lot of libraries for
you to use. Julia even has a built-in package manager to make using
and sharing community packages easy!

[Julia Package Registry](http://pkg.julialang.org/)

# Language Features & Batteries

## Topics

# Functions

## Definitions

Julia offers several ways to define functions:

```julia
function f(x, y)
    return x + y
end

f(x, y) = x + y
```

[Function Definition Demo](http://localhost:8998/notebooks/Function%20Declaration.ipynb)

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

# Multiple Dispatch

## What is it?

Developers are free to implement functions with a variety of type
signatures to handle different usage.

Julia decides **at runtime** which version of a function to use.

[Multiple Dispatch Demo](http://localhost:8998/notebooks/Multiple%20Dispatch.ipynb)

## Ambiguity

What happens when multiple function signatures fit?

Methods are stored in order of specificity. The function with the more
specific type signature will be the one that's used.

If two functions are equally specific, a warning is generated.

[Ambiguous Function Matching](http://localhost:8998/notebooks/Ambiguous%20Functions.ipynb)

## Anonymous Functions

Sometimes it's convenient to write functions that will only be used once.

```julia
lst = [1, 2, 3, 4]
squared = map(x -> x * x, lst)
```

[Anonymous Function Demo](http://localhost:8998/notebooks/Anonymous%20Functions.ipynb)

# Vectors and Matrices

## Julia and Linear Algebra

Linear algebra was one of the focuses the authors considered when
designing Julia.

If you know Matlab, this should seem familiar

## Indexing

Indexing starts at 1.

<img src="http://i.imgur.com/733gBWb.jpg" style="width:40%;">

## Vectors / Arrays

[Vectors and Arrays Demo](http://localhost:8998/notebooks/Vectors%20and%20Arrays.ipynb)

## Special Operators

Each of the bracket operators are just shortcuts for other functions.

[Vector And Matrix Function Demo](http://localhost:8998/notebooks/Vector%20and%20Matrix%20Functions.ipynb)

# Types

## Types

Julia's blazing performance relies heavily on its type system.

It offers several different types that can be defined by developers:

* Abstract types
* Bits types
* Composite types
* Union types

## Abstract Types

Abstract types cannot be instantiated. Their purpose is to give
structure to Julia's type hierarchy. The root of the type hierarchy is
the `Any` type. `<:` can be read as "subtype of."

```julia
abstract Number
abstract Real     <: Number
abstract FloatingPoint <: Real
abstract Integer  <: Real
abstract Signed   <: Integer
abstract Unsigned <: Integer
```

Implicitly, `Number` is a direct descendant of `Any`.

[Abstract Type Demo](http://localhost:8998/notebooks/Abstract%20Types.ipynb)

## Bits Types

Bits types can be instantiated. They are fixed-width numbers.

If you so choose, you can define your own bits types!

```julia
bitstype 16 Float16 <: FloatingPoint
bitstype 32 Float32 <: FloatingPoint
bitstype 64 Float64 <: FloatingPoint
```

## Composite Types

Composite types are like structs in C or Go. Each type has members,
and optional constructors.

```julia
type MyComplex
    real::Float64
    imag::Float64

    MyComplex(r, i) = new(r, i)
end
```

[Composite Type Demo](http://localhost:8998/notebooks/Composite%20Types.ipynb)

## Union Types

Union types combine types together. Note that union types are
different from subtypes.

```julia
StringOrInteger = Union(AbstractString,Integer)
```

[Union Type Demo](http://localhost:8998/notebooks/Union%20Types.ipynb)

# Plotting and Drawing

## TextPlots

If you're working on the command line, `TextPlots` makes it convenient
to show quick plots as text output.

[TextPlots demo](http://localhost:8998/notebooks/TextPlots.ipynb)

## Gadfly

Gadfly is a prettier alternative to make plots in Julia.

However, it takes a minute to start up.

*Why is that?*

[Gadfly Demo](http://localhost:8998/notebooks/Gadfly.ipynb)

## PyPlot

Yet another plotting library. This one is built on top of Python's
`matplotlib`.

# Parallel and Distributed Julia

## Parallel Julia

## Distributed Julia

# Getting Julia

## Command line

![Get the binary from <http://julialang.org/downloads/>](http://i.imgur.com/WrAAozT.png)

## Juno

A [Julia IDE](http://junolab.org/) based on [LightTable](http://lighttable.com/).

![For all your code-completing needs.](http://i.imgur.com/WIvdtCO.png)

## IJulia

Install Julia for command line, then install `ipython`.

## JuliaBox

Or, run your code in the cloud!

![<https://www.juliabox.org/>](https://www.juliabox.org/assets/img/juliacloudlogo.png)

# Wildcard

## Wildcard

Time to pop open a Julia Notebook and try some stuff.

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

# The Tip of the Iceberg

## Pretty cool so far

![Mind. Blown.](http://i.imgur.com/Bcb2myV.gif)

## Learning the Rest

Like any programming language, there's more to be learned about Julia.

A myriad of built-in and community-driven libraries are available for
a wide range of domains. If you're interested, go see what's out
there.

There are [plenty of learning resources](http://julialang.org/learning/)
available.

# What's next for us?

## Data Mining with Julia

* `DataFrames.jl` and `Stats.jl`
* What kinds of packages are already available?
* Can it really replace R?

## Find out next time

![](http://i.kinja-img.com/gawker-media/image/upload/s--1nJMHTaH--/654763566364366513.png)
