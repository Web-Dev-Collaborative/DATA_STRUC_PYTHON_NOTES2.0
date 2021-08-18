 


- [Home](/index.php)
- ▼Apollo GraphQL
- [The Apollo GraphQL platform](/apollo-graphql/the-apollo-graphql-platform.php)
- [Why GraphQL?](/apollo-graphql/why-use-apollo-graphql.php)
- [Introduction](/apollo-graphql/introduction.php)
- [Build a schema](/apollo-graphql/build-a-schema.php)
- [Hook up your data sources](/apollo-graphql/hook-up-your-data-sources.php)
- [Connect to a database](/apollo-graphql/connect-a-database.php)
- [Write your graphs resolvers](/apollo-graphql/write-your-graphs-resolvers.php)
- [Graph resolves with pagination](/apollo-graphql/resolvers-with-paginated-queries.php)
- [Run your graph in production](/apollo-graphql/run-your-graph-in-production.php)
- [Connect your API to a client](/apollo-graphql/connect-your-api-to-a-client.php)
- [Fetch data with queries](/apollo-graphql/fetch-data-with-queries.php)
- [Update data with mutations](/apollo-graphql/update-data-with-mutations.php)
- [Build a paginated list](/apollo-graphql/build-a-paginated-list.php)
- [Authenticate users](/apollo-graphql/authenticate-users.php)
- [Update local data with resolvers](/apollo-graphql/update-local-data-with-resolvers.php)
- [local state management](/apollo-graphql/local-state-management.php)
- ▼DEVELOPMENT TOOLS
- [The Apollo CLI](/apollo-graphql/the-apollo-cli.php)
- [Apollo extension for VS Code](/apollo-graphql/apollo-extension-for-vs-code.php)
- [Configuring Apollo projects](/apollo-graphql/configuring-apollo-projects.php)
- ▼Apollo Client
- [Introduction](/apollo-graphql/apollo-client-introduction.php)
- [Why Apollo Client?](/apollo-graphql/why-apollo-client.php)
- [Get started: Set up Apollo Client in your React app](/apollo-graphql/get-started-set-up-apollo-client-in-your-react-app.php)
- ▼FETCHING DATA
- [Queries](/apollo-graphql/queries.php)
- [Mutations](/apollo-graphql/mutations.php)
- [Local state management](/apollo-graphql/local-state-management-apollo-client.php)
- [Subscriptions](/apollo-graphql/subscriptions.php)
- [Pagination](/apollo-graphql/pagination.php)
- [Using fragments](/apollo-graphql/using-fragments.php)
- [Error handling](/apollo-graphql/error-handling.php)
- ▼CACHING
- [Configuring the cache](/apollo-graphql/configuring-the-cache.php)
- [Interacting with cached data](/apollo-graphql/interacting-with-cached-data.php)
- ▼DEVELOPMENT & TESTING
- [Using Apollo with TypeScript](/apollo-graphql/using-apollo-with-typescript.php)
- [Testing React components](/apollo-graphql/testing-react-components.php)
- [Mocking new schema capabilities](/apollo-graphql/mocking-new-schema-capabilities.php)
- ▼PERFORMANCE
- [Improving performance](/apollo-graphql/improving-performance.php)
- [Optimistic UI](/apollo-graphql/optimistic-ui.php)
- [Server-side rendering](/apollo-graphql/server-side-rendering.php)
- [Compiling queries with Babel](/apollo-graphql/compiling-queries-with-babel.php)
- ▼INTEGRATIONS
- [View integrations](/apollo-graphql/view-integrations.php)
- [Integrating with React Native](/apollo-graphql/integrating-with-react-native.php)
- [Integrating with Meteor](/apollo-graphql/integrating-with-meteor.php)
- [Loading queries with Webpack](/apollo-graphql/loading-queries-with-webpack.php)
- ▼NETWORKING
- [Network layer Apollo Link](/apollo-graphql/network-layer-apollo-link.php)
- [Authentication](/apollo-graphql/authentication.php)
- ▼API Reference
- [Apollo react-hooks](/apollo-graphql/apollo-react-hooks.php)
- [Apollo react-ssr](/apollo-graphql/apollo-react-ssr.php)
- [class ApolloClient](/apollo-graphql/class-apollo-client.php)
- [Apollo react-common](/apollo-graphql/apollo-react-common.php)
- [Apollo react-components](/apollo-graphql/apollo-react-components.php)
- [Apollo react-hoc](/apollo-graphql/apollo-react-hoc.php)
- [Apollo react-testing](/apollo-graphql/apollo-react-testing.php)
- ▼Hooks Migrating
- [Hooks Migration](/apollo-graphql/hooks-migration-guide.php)
- ▼Graph Manager
- [Gets started with Graph Manager](/apollo-graphql/get-started-with-graph-manager.php)
- [Accounts and Organizations](/apollo-graphql/accounts-and-organizations.php)
- [The schema registry](/apollo-graphql/schema-registry.php)
- [Schema validation](/apollo-graphql/schema-validation.php)
- [Pushing trace data to Graph Manager](/apollo-graphql/pushing-trace-data-to-graph-manager.php)
- [Segmenting metrics by client](/apollo-graphql/segmenting-metrics-by-client.php)
- [Analyzing performance](/apollo-graphql/analyzing-performance.php)
- [Managed federation overview](/apollo-graphql/managed-federation-overview.php)
- [Setting up managed federation](/apollo-graphql/setting-up-managed-federation.php)
- [Advanced topics for managed federation](/apollo-graphql/advanced-topics-for-managed-federation.php)
- [Securing your graph](/apollo-graphql/securing-your-graph.php)
- [Graph Manager data privacy and compliance](/apollo-graphql/graph-manager-data-privacy-and-compliance.php)
- [Integrating Graph Manager with GitHub](/apollo-graphql/integrating-graph-manager-with-github.php)
- [Integrating Graph Manager with Slack](/apollo-graphql/integrating-graph-manager-with-slack.php)
- ▼Apollo GraphQL iOS
- [Apollo GraphQL iOS](/apollo-graphql/client-side-caching.php)
- ▼Apollo GraphQL Link
- [Apollo GraphQL Link](/apollo-graphql/concepts-overview.php)
- [More....]()
- []()

# The Apollo GraphQL platform

Last update on July 14 2020 16:35:37 (UTC/GMT +8 hours)

<span class="underline"></span>

<span class="underline"></span>

Have you been building REST APIs? Are you concerned about having to call an endpoint for every single request? Apollo is an implementation of GraphQL designed for the needs of product engineering teams building modern, data-driven applications. It encourages an agile, incremental approach and takes special care to avoid requiring any changes to existing APIs and services. Apollo puts particular emphasis on tooling and workflows.

Apollo GraphQL is composed of three major set pieces.

**Core open source components**

- **Apollo Server** This is a typical JavaScript GraphQL server that defines a schema and a set of resolvers that implement each part of that schema defined.
- **Apollo Client** is a sophisticated GraphQL client that manages data and state in an application. Among other benefits, it enables a declarative programming style that lets developers define queries as part of UI components; the client manages all the hairy details of binding query results to the UI, managing consistency, caching etc.
- **iOS and Android** clients, originally contributed by the community, make it possible to query a GraphQL API from native iOS and Android applications.
- **Apollo CLI** is a simple command line client that provides access to Apollo cloud services.

**Cloud services**

- **Schema registry** - a registry for GraphQL schemas that acts as a central source of truth for a schema, enriched with additional metadata like field-level usage statistics.
- **Client registry** - a registry to track each known consumer of a schema, which can include both pre-registered and ad-hoc clients.
- **Operation registry** - a registry of all the known operations against the schema, which similarly can include both pre-registered and ad-hoc operations.
- **Trace warehouse** - a data pipeline and storage layer that captures structured information about each GraphQL operation processed by an Apollo Server (or any other server that implements the Apollo trace API), including the specific set of fields accessed, the tree of resolver calls that were made with timing data for each, and important metadata such as client identity and which version of the schema was queried.

**Gateway**

- **Apollo Gateway** - a configuration of Apollo Server and additional plugins that functions as a GraphQL gateway. The gateway composes separately deployed "micro-schemas" that reference each other into a single master schema, which looks to a client just like any regular GraphQL schema. To answer queries, the gateway builds a query plan, fetches data from each upstream GraphQL service, and assembles it all back together into a single result.

**Workflows**

Alongside these components, Apollo has some useful workflows for managing a GraphQL API. Each of these workflows makes use of several different parts of the platform. Some of these workflows are:

**Schema change validation**

Apollo includes a facility for checking the compatibility of a given schema against a set of previously observed operations. This uses the trace warehouse, operation registry, and (typically) the client registry. As an example, an operation that references a missing field or an operation that doesn't pass a required argument to a field would cause an incompatibility error. The compatibility check runs statically, taking advantage of the schema's type definitions, so it doesn't require a running server.

**Safelisting**

Apollo provides an end-to-end mechanism for safelisting known clients and queries, a recommended best practice that limits production use of a GraphQL API to specific pre-arranged operations. There are two parts here. First, the Apollo CLI extracts all the queries from a client codebase, computes the over-the-wire subset of the query (stripping out the part that references the client's local schema), and stores it in the operation registry. Separately, an Apollo Server plugin synchronizes the list of pre-registered operations to the server, which then rejects queries that aren't present in its local copy.

**Next:** [Why Use GraphQL](https://www.w3resource.com/apollo-graphql/why-use-apollo-graphql.php)

---

<span class="underline"></span>

 

---

 

[This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.](https://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_US)

©w3resource.com 2011-2021

- [Privacy](https://www.w3resource.com/privacy.php)
- [About](https://www.w3resource.com/about.php)
- [Contact](https://www.w3resource.com/contact.php)
- [Feedback](https://www.w3resource.com/feedback.php)
- [Advertise](https://www.w3resource.com/advertise.php)
