---
title: .NET Tutorials
permalink: /category/dotnet/
---

<div class="container container-narrow">

<div class="category-header">
  <span class="category-badge dotnet" style="font-size: 0.875rem; padding: 0.5rem 1rem;">💻 .NET</span>
  <h1>{{ page.title }}</h1>
  <p style="color: var(--text-muted);">Master .NET development from basics to advanced topics with practical, hands-on tutorials.</p>
</div>

{% assign posts = site.categories.dotnet %}

{% if posts and posts.size > 0 %}
<div class="posts-list">
  {% for post in posts %}
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <div class="card-meta">
        <span>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
          {{ post.date | date: "%B %d, %Y" }}
        </span>
        <span>
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          {{ post.content | number_of_words | divided_by: 200 | plus: 1 }} min read
        </span>
      </div>
      <p class="card-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
      <a href="{{ post.url | relative_url }}" class="read-more">Read Article</a>
    </div>
  </div>
  {% endfor %}
</div>
{% else %}
<div class="card">
  <div class="card-body text-center">
    <p>No .NET posts yet. Check back soon!</p>
  </div>
</div>
{% endif %}

<div class="mt-5 text-center">
  <a href="/" class="btn btn-outline">← Back to Home</a>
</div>

</div>
