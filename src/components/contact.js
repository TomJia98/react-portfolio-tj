export default function contact() {
  return (
    <div>
      <h3>Contact</h3>
      <div class="container">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name.." />

        <label htmlFor="email">Email Address</label>
        <input type="text" id="email" name="email" placeholder="Your email.." />

        <label htmlFor="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea>

        <input type="submit" value="Submit" />
      </div>
    </div>
  );
}
