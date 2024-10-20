**API**

What is a RESTFUL API?
  - Can handle multiple calls
  - Returns different data formats
  - Is best for efficient Internet usage

How to add an API to a project:

1. install Express: npm install express and node
2. Create an .env file to hold port and secret information
3. Define a route that listens to requests: example const PORT = process.env.PORT || 3000;
4. Set up file to listen to that port: example:
   app.listen(PORT, () => {
  console.log("Server Listening on PORT:", port); });
5. FETCH the url for the API. example:
     const response = await fetch("https://example.org/post", {
  method: "POST",
  // ...
});
6. Then you can use the GET, POST, PUT, DELETE to use the api how needed.



Works Cited:
{https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch}
{https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm}
