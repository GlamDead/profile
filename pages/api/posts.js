/* eslint-disable no-undef */
const postsAsync = async (request, response) => {
  const { body, method } = request

  if (method === "POST") {
    await fetch("http://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        "x-token-access": "random",
      },
    })
    response.status(200).end()
  }
}

export default postsAsync
