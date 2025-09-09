function PostCreate() {
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const title = formData.get("title") as string;
    fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    });

    (event.target as HTMLFormElement).reset();
  }
  return (
    <>
      <h2>Create Post</h2>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" className="form-control" />
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </>
  );
}

export default PostCreate;
