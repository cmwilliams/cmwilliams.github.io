---
layout: page
title: Piaware Articles
subtitle: Learn how to set up, configure, and troubleshoot your Piaware ADS-B receiver setup
---

{% assign piaware_posts = site.posts | where_exp: "post", "post.tags contains 'piaware'" %}

{% if piaware_posts.size > 0 %}
{% for post in piaware_posts %}
### [{{ post.title }}]({{ post.url | relative_url }})
*{{ post.date | date: "%B %d, %Y" }}* - {{ post.content | number_of_words | divided_by: 200 | plus: 1 }} min read

{{ post.excerpt | strip_html | truncate: 200 }}

---

{% endfor %}
{% else %}
No Piaware posts yet. Check back soon!
{% endif %}
