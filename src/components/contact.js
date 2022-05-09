export default function contact() {
  const fontStyle = {
    fontSize: "1.5em",
  };
  const onSubmit = (e) => {
    e.preventDefault(); //stops the page from resetting on submit
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="container">
        <form onSubmit={onSubmit}>
          <label htmlFor="name" style={fontStyle}>
            Name
          </label>
          <br />

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
          <br />

          <br />
          <label htmlFor="email" style={fontStyle}>
            Email Address
          </label>
          <br />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
          <br />
          <br />

          <label htmlFor="subject" style={fontStyle}>
            Subject
          </label>
          <br />

          <textarea
            rows="6"
            cols="100"
            required
            id="subject"
            name="subject"
            placeholder="Talk to me!"
          ></textarea>
          <br />
          <br />

          <input
            type="submit"
            value="Submit"
            style={{
              backgroundColor: "blue",
              border: "none",
              borderRadius: "5px",
              color: "white",
              padding: "15px 32px",
              textAlign: "center",
              textDecoration: "none",
              display: "inline-block",
              fontSize: "16px",
            }}
          />
        </form>
      </div>
    </div>
  );
}
