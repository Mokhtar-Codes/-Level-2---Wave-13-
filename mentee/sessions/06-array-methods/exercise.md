# Session 06 — exercise

_Due before the next session._

### 1. M1 Stage 3

Due **before S7** now, not S6 — Stage 3 needs today's session. `filter`, `map`, `find` with a not-found check. See the M1 brief.

### 2. Parsons

Goal output: `[ 'Pen', 'Bag' ]` — names of in-stock products.

```
A   const available = products.filter((product) => product.inStock);
B   const names = available.map((product) => product.name);
C   console.log(names);
X   const names = products.map((product) => product.inStock);
Y   const available = products.filter((product) => product.name);
```

---

**Submit in `#lvl-2-homework-or-exercise-subm` before the next session.**

Stuck? _"I got stuck at \_\_\_ and here's what I tried"_ is a great question — post it.
