---
title  : "Pi-Health"
slug   : casestudy3
tags  : [casestudy]
image : picase.svg
---

**Introduction**


Pi-Health is a comprehensive health and wellness application 
designed to empower users in managing their physical and mental 
well-being. The app aims to provide personalized health insights, 
promote healthy habits, and facilitate communication between users
and healthcare professionals. Whether you're tracking your fitness 
goals, monitoring vital signs, or seeking medical advice, Pi-Health 
has you covered.

**Technology Stack**

Pi-Health leverages a robust technology stack to deliver a seamless 
user experience. Here are the key components:

1.Front-End:
○ React: A popular JavaScript library for building user 
interfaces.

○ Typescript: Provides static typing and enhances code 
quality.

○ Chakra UI: A component library for creating accessible 
and customizable UI components.

○ Axios: Handles HTTP requests to external APIs.

○ Tanstack React Query: Manages data fetching and 
caching.

○ Tanstack React Router: Handles client-side routing.

○ Dexie: A lightweight IndexedDB wrapper for local data 
storage.

○ Dexie React Hooks: Integrates Dexie with React 
components.

○ Felte: A form library for handling form state and 
validation.

○ Jotai: A state management library.

○ Zod: A TypeScript-first schema-driven validation library.

2.Back-End:
○ Rust: A systems programming language known for its 
safety, performance, and expressive syntax.

○ Actix Web Framework: A high-performance, actor-
based web framework in Rust, employed for handling 
HTTP requests and responses efficiently. 

○ SQLite DB: SQLite is utilized as the back-end database 
for server-side data storage.

○ JSON-RPC API: Implementation of JSON-RPC endpoints 
facilitates structured communication between the front-
end and back-end.

○ Event Sourcing and CQRS: Integration of Event 
Sourcing and CQRS concepts to improve the application's
scalability, auditability, and state management.


**Engine Separation Strategy**

The engine separation strategy in Pi-Health focuses on decoupling 
the core application logic from external dependencies. Here's how 
it's achieved:

● Components: The application is organized into reusable 
components, promoting a component-based architecture.

● Features: Each feature (e.g., doctor details, patient vitals, 
medication, appointments) resides in its own folder, 
encapsulating related functionality.

● Routes: Separate route files define routes for each feature, 
ensuring modularity and easy navigation.

● Types: Necessary types are defined in a dedicated folder, 
promoting type safety and consistency.

● Services: Services handle API calls using Axios for 
communication with the back-end.

● Query-Mutation-Services: Tanstack React Query is used for 
mutation purposes (adding, updating, and deleting data) to the
server. The benefits of useMutation from Tanstack simplify 
mutation handling.

● Database: 
Client – Side : Dexie is used for storing data locally in a 
database, avoiding network requests and resulting in faster 
responses. Dexie React Hooks integrates the Dexie database 
with React components, ensuring real-time data reflection.
Server – Side : SQLite was chosen as the back-end database 
for server-side data storage. Its lightweight nature, ease of 
integration, and ACID compliance make it suitable for 
applications with moderate data storage and retrieval 
requirements.

**Challenges and Solutions**

Client-Side
       Synchronization:
 Challenge: Syncing local data with the server.
 Solution: Dexie's built-in synchronization mechanisms or 
real-time techniques.
       State Management:
 Challenge: Handling complex state across features.
 Solution: Jotai for global and local state management

Server-Side
       Considerations:
 While Rust and the selected technologies offer numerous
advantages, the adoption of a relatively new language 
and framework may present challenges in terms of 
available resources and expertise. However, these 
challenges can be mitigated through training, 
documentation, and community support.

**Achievements**

● Client-Side
  Reliability: Separation of concerns promotes reliability.
  High Performance: Dexie minimizes network requests.
  User-Friendly: Well-organized features enhance the user 
experience.
  Offline Capability: Dexie enables offline usage.

● Server-Side
  The integration of Rust, Actix Web, SQLite, JSON-RPC API, and
Event Sourcing/CQRS has resulted in a robust, scalable, and 
performant back-end. The chosen technologies contribute to 
the overall safety, efficiency, and maintainability of the 
system, aligning with the project's objectives and ensuring a 
positive user experience.
Key Learning

● Modularity Matters: Breaking down the application into 
smaller, manageable pieces simplifies development.

● Client-Side Storage: Dexie improves responsiveness.

● Rust and Actix Web Framework for Safety and 
Performance: Leveraging Rust's memory safety and Actix 
Web's actor-based architecture ensures a secure and efficient 
web application.

● Event Sourcing, CQRS, and Structured Communication 
Drive Scalability: Integrating Event Sourcing and CQRS 
principles, along with a JSON-RPC API, enhances scalability and
auditability.

**Conclusion**

Pi-Health demonstrates how thoughtful architecture and technology 
choices can lead to a successful health application that meets user
needs and delivers a positive impact. 