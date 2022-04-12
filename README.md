# Styling Summary
1. Global - In our application, we need to import the CSS file within pages/_app.js
2. Component Level - Next.js support CSS modules using a [name].module.css naming convention and import respectinve file. for example about.module.css import to pages/about.js
3. SASS Support - Install the sall package and import same like abouve 1 & 2 for global and component level. only the extention will change
4. CSS-in-JS Solution - Inline styles and Styled Components
5. Add bootstrap
   npm add bootstrap
   add in _app.js "import 'bootstrap/dist/css/bootstrap.min.css'" for gloabl access
