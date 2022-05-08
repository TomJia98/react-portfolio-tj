export default function contact() {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h3>Contact</h3>
      <div className="container">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />

          <label htmlFor="subject">Subject</label>
          <textarea
            required
            id="subject"
            name="subject"
            placeholder="Talk to me!"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
