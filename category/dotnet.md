---
layout: page
title: .NET Tutorials
subtitle: Master .NET development from basics to advanced topics with practical, hands-on tutorials
---

{% assign dotnet_posts = site.posts | where_exp: "post", "post.tags contains 'dotnet'" %}

{% if dotnet_posts.size > 0 %}
{% for post in dotnet_posts %}
### [{{ post.title }}]({{ post.url | relative_url }})
*{{ post.date | date: "%B %d, %Y" }}* - {{ post.content | number_of_words | divided_by: 200 | plus: 1 }} min read

{{ post.excerpt | strip_html | truncate: 200 }}

---

{% endfor %}
{% else %}
No .NET posts yet. Check back soon!
{% endif %}
