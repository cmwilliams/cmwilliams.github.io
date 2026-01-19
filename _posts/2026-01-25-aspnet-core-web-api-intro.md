---
title: ASP.NET Core Web API Intro
tags: [dotnet, aspnet-core, web-api]
---

## What is ASP.NET Core?

ASP.NET Core is an open-source, cross-platform framework for building cloud-based applications, such as web apps, IoT apps, and mobile backends. It is designed to be lightweight and modular, allowing developers to use only the components they need.

## Setting Up Your Environment

Before we start building our Web API, ensure you have the following installed:

- [.NET SDK](https://dotnet.microsoft.com/download)
- A code editor (e.g., Visual Studio, Visual Studio Code)

## Creating a New Web API Project

To create a new ASP.NET Core Web API project, open your terminal or command prompt and run the following command:

```
dotnet new webapi -n MyWebApi
```

This command creates a new directory called `MyWebApi` with a basic Web API template.

## Understanding the Project Structure

Once the project is created, you will notice several files and folders:

- **Controllers**: This folder contains the API controllers that handle incoming HTTP requests.
- **Models**: This folder is where you define the data models used in your application.
- **Startup.cs**: This file configures services and the app's request pipeline.

## Building Your First API Endpoint

Let's create a simple API endpoint that returns a list of items. Open the `Controllers` folder and create a new file named `ItemsController.cs`:

```csharp
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace MyWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemsController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "Item1", "Item2", "Item3" };
        }
    }
}
```

This code defines a new controller with a single GET endpoint that returns a list of strings.

## Running Your Web API

To run your Web API, navigate to the project directory in your terminal and execute:

```
dotnet run
```

Your API will be available at `http://localhost:5000/items`. You can test it using a web browser or tools like Postman.

## Conclusion

In this introduction, we covered the basics of setting up an ASP.NET Core Web API project, creating a simple endpoint, and running the application. ASP.NET Core provides a powerful platform for building APIs, and there is much more to explore, including routing, middleware, and data access.

Stay tuned for more articles where we will dive deeper into ASP.NET Core features and best practices!