---
layout: post
title:  "Gaussian Integers are being a Euclidean Domain"
date:   2022-04-12 12:00:00 +0530
tags: [mathematics, algebra, ring theory]
mathjax: "true"
TeX: {
  extensions: ["AMSmath.js", "AMSsymbols.js"]
}
---

I encountered this theorem during my study of ring theory last term. Now, I'll demonstrate that Gaussian Integers form a Euclidean Domain. Before delving into the proof, let me provide some necessary definitions.

Euclidean Domain
------------

Let D be an Euclidean Domain. Then, D is a comutative ring with 1. D must satisfy the following properties
<br>
{: .text-justify}
First define a function, usually it is called norm: 
$$N: D \rightarrow \mathbb{Z}^{+}$$

* If $$ a,b \in D$$ and $$ a \neq 0, b \neq 0$$ then  $$N(a) \leq N(ab)$$ 
* If $$ a,b \in D $$ where $$ b \neq 0$$ there exists $$q, r \in D$$ such that $$a = bq + r$$ where $$r = 0$$ or $$ N(r) < N(b)$$ 

{: .text-justify}
A common example of an Euclidean domain is $$\mathbb{Z}$$  with  $$ N(m) = \vert m \vert$$


Gaussian Integers
------------
{: .text-justify}
Gaussian Integers are a subset of $$ \mathbb{C} $$. So that means a gaussian integer have real and imaginary parts and those parts are integers.
Here is the definition of the set:

{: .text-justify}
$$ \mathbb{Z}[i] = \{ a + bi \vert  a, b \in \mathbb{Z} \} $$ 

{: .text-justify}
Now we will define a norm that will work for us.

{: .text-justify}
Define $$ N(\alpha) = \alpha \overline{\alpha} = \vert \alpha^{2} \vert $$ 

{: .text-justify}
Take $$ \alpha = a + bi, \overline{\alpha} = a - bi \in \mathbb{Z}[i]$$ where $$a,b \in \mathbb{Z}$$. Then $$ N(\alpha) = a^{2} + b^{2} $$

{: .text-justify}
Then let's prove the first requirement to be a Euclidean domain.

{: .text-justify}
### First Part
We will show that for all $$ \alpha, \beta \in \mathbb{Z}[i]$$
we have $$ N(\alpha) \leq N(\alpha \beta)$$.

{: .text-justify}
$$ N(\alpha \beta) = \alpha \beta \overline{\alpha \beta} = \alpha \beta \overline{\alpha} \overline{\beta} = \alpha \overline{\alpha} \beta \overline{\beta} = N(\alpha) N(\beta)$$

{: .text-justify}
Since for all $$\alpha \in \mathbb{Z}[i]$$ we have $$N(\alpha) \geq 1$$. \(We have it because of definiton of function N.\)

{: .text-justify}
Now, we can say $$ N(\alpha) \leq N(\alpha \beta)$$.

{: .text-justify}
### Second part
Now, we will proceed with showing that for all $$ \alpha, \beta \in \mathbb{Z}[i]$$, where $$\beta \neq 0 $$
there exists $$\gamma, \rho \in \mathbb{Z}[i]$$ such that $$ \alpha = \beta \gamma + \rho $$ where $$ \rho = 0$$ or $$\rho \leq N(\beta)$$.

{: .text-justify}
Now, assume $$ \alpha = (a + bi), \beta = (c + di)$$ then we have $$\beta^{-1} = \frac{(c-di)}{c^{2}+d^{2}} = \frac{\overline{\beta}}{\vert \vert \beta \vert \vert^{2}}$$

{: .text-justify}
Now examine $$ \alpha \beta^{-1}$$

{: .text-justify}
$$ \alpha \beta^{-1} = \frac{ (a+bi)(c-di) }{c^{2}+d^{2}} = \frac{1}{c^{2}+d^{2}} ( (ac + bd) + (bc-ad)i ) $$

$$ \hspace{0.1cm} = \frac{(ac+bd)}{c^{2}+d^{2}} + \frac{(bc-ad)}{c^{2}+d^{2}} i $$

$$ \hspace{0.1cm} = (q_{1} + r_{1}) + (q_{2} + r_{2})i$$

{: .text-justify}
With $$ -\frac{1}{2} \leq r_{1}, r_{2} \leq \frac{1}{2} $$

{: .text-justify}
So we can ask, why we have $$q_{1}, r_{1}, q_{2}$$ and $$r_{2}?$$. The answer is simple we know that $$ \frac{(ac+bd)}{c^{2}+d^{2}} $$ and $$ \frac{(bc-ad)}{c^{2}+d^{2}} $$ are rational numbers, more general they are reel numbers since $$ a, b, c, d \in \mathbb{Z}$$
Then we have this feature:
<br>
{: .text-justify}
For any $$ x \in \mathbb{R} $$, we have
{: .text-justify}
$$x = \lfloor x \rfloor + r_{1}, 0 \leq r_{1} \leq \frac{1}{2} $$
{: .text-justify}
$$x = \lceil x \rceil + r_{2},  -\frac{1}{2} \leq r_{2} \leq 0 $$


![image1](/assets/img/gaussian-integers/tada.png){:height="100%"width="100%"}

{: .text-justify}
Then finally we can write

{: .text-justify}

$$ \alpha \beta^{-1} = (q_{1} + q_{1}i) + (r_{1} + r_{2}i) \Rightarrow \alpha = \beta \underset{\gamma}{\underbrace{(q_{1} + q_{2}i)}} +  \underset{\rho}{\underbrace{\beta(r_{1} + r_{2}i)}} $$

$$ \alpha = \beta\gamma + \rho$$

{: .text-justify}
Now we find $$\gamma $$ and $$\rho$$. We just need to show $$\rho = 0$$ or $$ N(\rho) \leq N(\beta)$$.If $$ \rho = 0 $$ is okay. There is nothing to show. Let's show the second one.

{: .text-justify}
$$N(\rho) = \beta \overline{\beta} (r_{1} + r_{2}i)(r_{1} - r_{2}) = N(\beta) \underset{0 \leq r_{1}^{2} + r_{2}^{2} \leq 1}{ \underbrace{(r_{1}^{2} + r_{2}^{2}})} \leq N(\beta)$$

{: .text-justify}
Hence, $$ \mathbb{Z}[i]$$ is a Euclidean Domain.

{: .text-justify}
[Here is a video about the proof.](https://www.youtube.com/watch?v=ILS-v54ovr8&t=617s)






