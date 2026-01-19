---
title: .NET Tutorials
permalink: /category/dotnet/
---

{% assign posts = site.categories.dotnet %}

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
<p>No .NET posts yet.</p>
{% endif %}
