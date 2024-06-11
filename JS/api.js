function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let jsonObject = {};
    formData.forEach((value, key) => {
        jsonObject[key] = value;
    });
    console.log(jsonObject)
}