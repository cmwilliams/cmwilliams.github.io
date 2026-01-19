## What are Migrations?

Migrations are a way to incrementally update your database schema as your data model changes. They allow you to add, remove, or modify tables and columns without losing existing data. EF Core provides a set of commands to create and apply migrations.

## Getting Started with Migrations

To start using migrations in your EF Core project, follow these steps:

1. **Install the EF Core Tools**: Ensure you have the EF Core tools installed. You can do this via NuGet Package Manager or by running the following command in your terminal:

   ```
   dotnet add package Microsoft.EntityFrameworkCore.Tools
   ```

2. **Enable Migrations**: In your project, enable migrations by running the following command:

   ```
   dotnet ef migrations add InitialCreate
   ```

   This command creates a new migration named `InitialCreate`. It will generate a file in the `Migrations` folder containing the code to create the initial database schema.

3. **Apply Migrations**: To apply the migration to your database, run:

   ```
   dotnet ef database update
   ```

   This command updates your database to the latest migration.

## Creating Additional Migrations

As your data model evolves, you may need to create additional migrations. For example, if you add a new property to an existing entity, you can create a new migration:

1. Modify your entity class to include the new property.
2. Run the following command to create a new migration:

   ```
   dotnet ef migrations add AddNewProperty
   ```

3. Apply the migration with:

   ```
   dotnet ef database update
   ```

## Viewing Migration History

You can view the history of applied migrations by running:

```
dotnet ef migrations list
```

This command will display a list of all migrations that have been applied to the database.

## Conclusion

Migrations in Entity Framework Core provide a robust way to manage database schema changes over time. By following the steps outlined in this article, you can ensure that your database remains in sync with your application's data model, making it easier to evolve your application without losing data.

For more advanced scenarios, such as handling complex migrations or seeding data, refer to the official EF Core documentation. Happy coding!