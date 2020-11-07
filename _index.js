async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("response= ", response)


    const data = await response.json()
    console.log("Data= ", data)
}

async function postData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({
            title: 'Post data',
            body: 'info',
            userId: 6,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    console.log("response= ", response)


    const data = await response.json()
    console.log("Data= ", data)
}
getData();
// postData();