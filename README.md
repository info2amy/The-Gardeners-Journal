# The-Gardener's-Journal

## Overview

### _The **Gardener's Journal**_ _is a place to collect and organize all of your gardening information: plant details, bed layouts, plans, dreams and aspirations!_

<br>

## MVP

### for The **Gardener's Journal** I will:

- Have a **RESTful JSON API**.

  - Build a **Ruby on Rails** server, exposing RESTful JSON endpoints.
  - Build a database with at least 3 tables, with at least 1 association.
  - Utilize **Rails** to define models for interacting with the database.
  - Implement working generic controller actions for Full CRUD (`index`, `show`, `create`, `update`, `delete`) between non-User tables

- Have a working, interactive **React** app, built using `npx create-react-app`.
  - Have at least 8 separate, rendered components in an organized and understandable React file structure.
  - Utilize functional and class React components appropriately.
  - Utilize state and props in your components efficiently.
  - Use _only_ React for DOM Manipulation.
- Consume data from **Ruby on Rails API**, and render that data in components.
- Utilize **React Router**, for client-side routing.
- Demonstrate Full CRUD actions ( `index`, `show`, `create`, `update`, and `delete` ) on the front end.

### Styling

- Styled with CSS (or learn and attempt SASS, if time permits).
- Use Flexbox and/or Grid in layout design.
- Implement media queries for responsive design.

### Linting

- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow `camelCase`, `snake_case`, and `kebab-case` convention.
- Remove unnecessary boilerplate React files and code.
- Remove commented out code; leave only functional notes and comments.

### Deployment

- Deploy the back-end via Heroku.
- Deploy the fully functional front-end via Netlify.

### Procedural

- Initialize a git repo on Github\*\*, with a link to the hosted project.
- Create a Development Branch, and make frequent commits
- Use effective and safe branching and merging processes.

<br>

### Goals

- _Back-end setup, with full CRUD, day one;_
- _Front-end setup, day two;_
- _Front-end full CRUD, day three;_
- _Styling and optional Post MVPs, day four;_
- _Present, day five._

<br>

<!-- ### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|     Express      | _Lorem ipsum dolor sit amet, consectetur._ |
|  Express Router  | _Lorem ipsum dolor sit amet, consectetur._ |
| Axios            | _Lorem ipsum dolor sit amet, consectetur._ |
| Ruby            | _Lorem ipsum dolor sit amet, consectetur._ |
| Rail            | _Lorem ipsum dolor sit amet, consectetur._ |
| JWT            | _Lorem ipsum dolor sit amet, consectetur._ | -->

<br>

### Wireframes

Landscape (Desktop and Tablet) Wireframe
<img width="1133" alt="Screen Shot 2021-01-28 at 15 34 51 PM" src="https://user-images.githubusercontent.com/71468425/106201795-99db6d00-617e-11eb-88ff-dcc309dab721.png">

Link: https://lucid.app/lucidchart/invitations/accept/5c01b19c-5041-42f3-8038-64fd8f630b8e

<br>

Portrait (Mobile) Wireframe example
<img width="1119" alt="Mobile Wireframe" src="https://user-images.githubusercontent.com/71468425/106200785-2422d180-617d-11eb-8904-f56ff40aa286.png">

Link: https: https://lucid.app/lucidchart/invitations/accept/30767912-c9b1-4587-accc-306f158aeb06

<br>

#### Component Tree

<img width="1030" alt="Component Tree" src="https://user-images.githubusercontent.com/71468425/106159550-86aeaa00-614a-11eb-9b42-4fe6c7e07900.png">

Link: https://lucid.app/lucidchart/invitations/accept/0f5293f0-7a84-49dd-b37d-2483aa432188

<br>

#### Component Hierarchy

> This reflects how I expect the directory/file tree to look.

```structure

client/src
|__ containers/
      |__ MainContainer.jsx

|__ layouts/
      |__ Layout.jsx
        |__ Header.jsx
        |__ Footer.jsx

|__ screens/
      |__ CreatePlant.jsx
      |__ EditPlant.jsx
      |__ LoginRegister.jsx
      |__ PlantDetail.jsx
      |__ Zones.jsx

|__ services/
      |__ app-config.js
      |__ auth.js
      |__ plants.js
      |__ zones.js

|__ App.js

|__ index.css

|__ index.js

```

#### Time Estimates

>

| Task                 | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------- | :------: | :------------: | :-----------: | :---------: |
| Back-end development |    H     |     10 hrs     |     - hrs     |    - hrs    |
| Front-end setup      |    H     |     10 hrs     |     - hrs     |    - hrs    |
| Front-end full CRUD  |    H     |     10 hrs     |     - hrs     |    - hrs    |
| Styling              |    H     |     10 hrs     |     - hrs     |    - hrs    |
| TOTAL                |          |     40 hrs     |     - hrs     |    - hrs    |

>

<br>

<br>

#### ERD Model

<img width="1039" alt="ERB" src="https://user-images.githubusercontent.com/71468425/106154564-5c0e2280-6145-11eb-88b2-9a4161672bb3.png">
> Link:  https://whimsical.com/gardener-s-journal-WDzYjmUvuMvm4G42ARmija

<br>

---

## Post-MVP

- Add a Footer with links.
- Change the Login/Register page to a Landing Page modal.
- Create a Logo.
- Add Authentication on this site.
- Allow a gardener to set up and save their personal garden information.
- Add calendar functionality, to plan watering, pruning, ferilizing, etc.

---

## Code Showcase

> TBD

## Code Issues & Resolutions

> TBD
