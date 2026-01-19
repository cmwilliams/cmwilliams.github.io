---
title: Home
---

<div class="hero">
  <div class="hero-content">
    <h1 class="animate-fade-in-up">Welcome to My Tech Blog</h1>
    <p class="animate-fade-in-up delay-100">Exploring the intersection of aviation technology and software development. Dive into tutorials on Piaware, .NET, and more.</p>
    <div class="hero-buttons animate-fade-in-up delay-200">
      <a href="/category/piaware/" class="btn btn-primary">Piaware Tutorials</a>
      <a href="/category/dotnet/" class="btn btn-secondary">.NET Guides</a>
    </div>
  </div>
</div>

<div class="container">

<div class="section-header">
  <h2>Explore Topics</h2>
  <p>Choose a category to start learning</p>
</div>

<div class="categories-grid">
  <a href="/category/piaware/" class="category-card" style="text-decoration: none;">
    <div class="category-icon">✈️</div>
    <h3>Piaware</h3>
    <p>Learn how to set up and optimize your ADS-B receiver to track aircraft in real-time.</p>
    <span class="read-more">View Articles</span>
  </a>
  
  <a href="/category/dotnet/" class="category-card" style="text-decoration: none;">
    <div class="category-icon">💻</div>
    <h3>.NET Development</h3>
    <p>From basics to advanced topics - master .NET development with practical tutorials.</p>
    <span class="read-more">View Articles</span>
  </a>
</div>

<div class="section-divider">
  <span>Latest Posts</span>
</div>

<div class="posts-grid">
{% assign posts = site.posts | slice: 0, 6 %}
{% for post in posts %}
  <div class="card animate-fade-in-up">
    <div class="card-body">
      {% if post.categories %}
      <span class="category-badge {{ post.categories[0] }}">{{ post.categories[0] }}</span>
      {% endif %}
      <h3 class="card-title mt-2">
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <div class="card-meta">
        <span>{{ post.date | date: "%B %d, %Y" }}</span>
        <span>{{ post.content | number_of_words | divided_by: 200 | plus: 1 }} min read</span>
      </div>
      <p class="card-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>
      <a href="{{ post.url | relative_url }}" class="read-more">Read More</a>
    </div>
  </div>
{% endfor %}
</div>

</div>