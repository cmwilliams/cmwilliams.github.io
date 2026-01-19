---
title: .NET Console App Basics
tags: [dotnet, console, csharp]
---

## Introduction

In this article, we will explore the basics of creating a console application using .NET. Console applications are a great way to get started with programming in C# and .NET, as they allow you to focus on the core concepts without the complexity of a graphical user interface.

## Setting Up Your Environment

Before we begin coding, ensure you have the .NET SDK installed on your machine. You can download it from the official [.NET website](https://dotnet.microsoft.com/download).

Once installed, you can verify the installation by opening a terminal or command prompt and running:

```
dotnet --version
```

This command should return the version of the .NET SDK you have installed.

## Creating a New Console Application

To create a new console application, open your terminal and run the following command:

```
dotnet new console -n MyFirstConsoleApp
```

This command creates a new directory called `MyFirstConsoleApp` with the necessary files for a console application.

## Navigating to Your Project

Change into the project directory:

```
cd MyFirstConsoleApp
```

## Understanding the Project Structure

Inside your project directory, you will find a few important files:

- `Program.cs`: This is the main entry point of your application.
- `MyFirstConsoleApp.csproj`: This file contains the project configuration and dependencies.

## Writing Your First Program

Open `Program.cs` in your favorite code editor. You will see a basic template that looks like this:

```csharp
using System;

namespace MyFirstConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }
    }
}
```

You can modify the `Console.WriteLine` statement to print any message you like.

## Running Your Application

To run your console application, use the following command in your terminal:

```
dotnet run
```

You should see your message printed in the console.

## Conclusion

Congratulations! You have successfully created and run your first console application using .NET. From here, you can explore more advanced topics such as user input, data processing, and integrating with other libraries.

Stay tuned for more articles on .NET development!