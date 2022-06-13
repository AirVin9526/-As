+++
# type = "docs"
title = "Prerequisites"
date = 2022-06-13T16:32:09+08:00
# description = "" # Used by description meta tag, summary will be used instead if not set or empty.
featured = false
draft = false
comment = true
toc = true
reward = true
pinned = false
carousel = false
categories = []
tags = []
series = []
images = []
weight = 90
+++

Summary.

<!--more-->

## Configuration

Since `0.68.0`, HBS requires the following configurations are be set.

{{< code-toggle filename="config" >}}
[build]
  writeStats = true
{{</ code-toggle >}}

## Build Tools

- [Git](https://git-scm.com/downloads).
- [Hugo](https://gohugo.io/getting-started/installing/): **extended** version `0.97.0` or above.
- [npm](https://nodejs.org/en/download/): used for installing CSS and JS dependencies.
- [Go](https://go.dev/dl/): version `1.12` or above, required only when installed as a [Hugo Module]({{< ref "/docs/getting-started/installation/hugo-module" >}}).

> We recommend using the latest version of those tools.
