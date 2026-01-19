---
title: Piaware Articles
permalink: /category/piaware/
---

{% assign posts = site.categories.piaware %}

{% if posts and posts.size > 0 %}
<ul>
  {% for post in posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <small>{{ post.date | date: "%Y-%m-%d" }}</small>
    </li>
  {% endfor %}
</ul>
{% else %}
<p>No Piaware posts yet.</p>
{% endif %}
