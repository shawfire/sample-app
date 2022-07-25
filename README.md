# sample-app

## Initial setup of Full Stack App
### Create repo sample-app

- Create repo on github with a unique name for example: sample-app
  - Select `Public` repo fro example
  - Add default `.gitignore` file for `Java`
  - Add `README` file
  - Choose `license` for example `MIT`
  - Create repository

### Clone repo `sample-app`

```bash
cd ~/dev
git clone https://github.com/shawfire/sample-app.git
```

### Update README.md with TODO list in Visual Studio Code

```bash
cd ~/dev/sample-app
code .
```

## Create Initial API endpoint
### Create initial boilerplate api with [spring initializr](https://start.spring.io/)

- [Testing the Web Layer](https://spring.io/guides/gs/testing-web/)
- [Testing the Web Layer](https://spring.io/guides/gs/testing-web/)
- [Spring Boot – Rest Controller Unit Test with @WebMvcTest](https://www.bezkoder.com/spring-boot-webmvctest/)

## Create Initial UI to call API endpoint

### Use create-react-app to create initial ui
```
cd ~/dev/sample-app
npx create-react-app@latest sample-ui --template typescript
```

- references
  - [Create React App with TypeScript - Complete Guide](https://bobbyhadz.com/blog/react-create-react-app-typescript)

### Call endpoint react

- references:
  - [How to Use Fetch with async/await](https://dmitripavlutin.com/javascript-fetch-async-await/)
  - [json placeholder](https://jsonplaceholder.typicode.com/)
  - [React Developer Tools - Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
  - [Allow CORS plugin - Firefox](https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/)

## Outline

- [ ] Create Initial API endpoint
- [ ] Create Initial UI to call API endpoint
- [ ] Add secure API endpoint
- [ ] Call secure endpoint from UI
- [ ] Refactor to use Lombok
- [ ] Include support for Gradle
- [ ] Create a Table of Contents for README
- [ ] Have small video segments implementing each step

## TODO

- [x] Create repo sample-app
- [x] Clone repo sample-app
- [x] Update README.md with TODO list in Visual Studio Code
- [ ] Create initial boilerplate api with [spring initializr](https://start.spring.io/)
- [ ] Expand spring initializr starter into repo
- [ ] Write initial test with corresponding endpoint
- [ ] Commit initial spring endpoint
- [ ] Create UI to call initial endpoint 
