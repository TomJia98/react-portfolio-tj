import profilePicture from "../assets/profile_picture.jpg";

export default function about() {
  return (
    <div>
      <h2>About Me -- Tom Jia</h2>
      <p>
        Hello and welcome to my Portfolio!
        <img
          id="profile-pic"
          src={profilePicture}
          alt="picture of me"
          style={{ height: "20em", margin: "5em" }}
        />
        <br /> <br />
        My name is Tom Jia and I am a dedicated Full Stack Developer currently
        studying at the University of Western Australia. <br />
        <br />
        I found an interest in coding back in 2018 after I watch YouTube Evil
        Mastermind Micheal Reeves using facial recognition software to <br />
        track and point a laser into someones eye. <br /> <br />
        Although this was my intro into coding, I plan on using my powers for
        good.
      </p>
    </div>
  );
}
