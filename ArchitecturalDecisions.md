# Links to repos

### Frontend

[https://github.com/rmysliwczyk/insurance-risk-wizard-frontend](https://github.com/rmysliwczyk/insurance-risk-wizard-frontend)

### Backend

This is not the main focus, so I haven't spend a lot of time here. It's a minimal thing that works. For more complete examples of API's, check my other projects.  
[https://github.com/rmysliwczyk/insurance-risk-wizard-backend](https://github.com/rmysliwczyk/insurance-risk-wizard-backend)

# Technologies I've used and why

### Vite

It's a good starting point with hot reload, eslint, and sane defaults for TypeScript configuration. Its convinient.

### TypeScript

TypeScript lets me use enums and types to write cleaner, more readable code. By using TypeScript I can take advantage of tooling that shows me what to expect when I interact with my code, and code brought in by external packages.

### MaterialUI

I've used it before and I like using it. It gives me access to neat building blocks for creating clean and familiar interfaces. It's easy to make my components mobile responsive thanks to breakpoints.

### ReactHookForms

It makes it easier for me to store current state form, takes care of storing errors for each of the form fields and integrates with validation libraries like Zod.

### Zod

Zod takes care of schema creation and schema validation for me. It can infer a TypeScript type from the schema I've declared.

### Docker

It makes deployment easier, because I can be sure that my project will run on another machine.

### Jenkins

I have a self-hosted Jenkins, which I use do deploy all my personal projects. It's convinient, because it grabs recent changes from GitHub, builds a Docker container, and deploys it for me, without me having to spend time doing that.

### Nginx

I use it as a reverse proxy to point to the containers that are running on my homelab server. It's easy to set up HTTPS with Certbot and Let's Encrypt.

### FastAPI

I'm familiar with it, it allows me to build API's with documentation and type hinting easily and quickly.

# Code organization and decisions

I've decided to put each step of the form in a separate component, in order to keep the code readable. I haven't put any logic in the form components themselves, because I feel it's easier to keep the logic on a level above. By having the state of the form be up a level from the component forms, I can share the state between form steps and have access to all of the data all at once, and thus it is easy to go back or forward.

I've kept all the logic on a single route (SPA), because it's easier this way for a smaller project like this. And I don't have to think about how to share the state between different routes. For a bigger project I'd probably go with something like React Router and a way to share state between the routes.

I wanted to keep the UI minimal. But changed the default color scheme to one which is more fitting. (Check the hex codes and compare to a logo of a certain company ;-)). I've put a lot of effort to make sure the page is mobile responsive by managing breakpoints for Grid, and other components.

# What I'd improve

- I'd add a better regex for firstName, lastName, city. As it is right now it doesn't allow dashes or spaces between words.
- Besides the unit tests on the backend, I'd add some testing for the frontend portion using selenium.
- I'd like to add moving between pages of the form by swiping left/right on mobile and by pressing arrow keys on PC.
- I'd like to add switching to the step of the form where errors are upon failed submit attempt, so that the user sees where the most errors are.
- Probably spend some more time thinking on the UI design.
