export default function About() {
  return (
    <div className="container_about" id="container_about">
      <h1 className="about_hd"> About me</h1>

      <div className="pic_holder">
        <img
          // eslint-disable-next-line
          src="/images/IMG-20231013-WA0009.jpg"
          className="mypic"
          alt=""
        />
      </div>

      <div className="about_desc">
        <ul className="list_icons">
          <li style={{ backgroundColor: "red" }}> </li>
          <li style={{ backgroundColor: "yellow" }}> </li>
          <li style={{ backgroundColor: "green" }}></li>
        </ul>
        <h3 className="hd_hi"> Hi :) </h3>

        <div className="myabout_desc">
          <p>
            {" "}
            As a project management student with a passion for technology,
            particularly in software development, I am continuously seeking new
            challenges to expand my skill set. My expertise in organizing and
            executing projects from start to finish has enabled me to excel in
            various roles. 💻 Additionally, as a self-taught front-end
            developer, I am dedicated to staying up to date with the latest
            technology and software development trends. I thrive on finding
            innovative solutions to complex problems and delivering high-quality
            results that surpass expectations.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
