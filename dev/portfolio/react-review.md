**Short Review for React**


React-dom contains features that are only supported for web applications (which run in the browser DOM environment). 
This section is broken into the following:

* Hooks - Hooks for web applications which run in the browser DOM environment.
* Components - React supports all of the browser built-in HTML and SVG components.
* APIs - The react-dom package contains methods supported only in web applications.
* Client APIs - The react-dom/client APIs let you render React components on the client (in the browser).
* Server APIs - The react-dom/server APIs let you render React components to HTML on the server.


**Example from React site**:

App.js
function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

