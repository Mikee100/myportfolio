export default function About() {
  return (
    <div className="container_about" id="container_about">
      <h1 className="about_hd"> About me</h1>

      <div className="pic_holder">
        <img
        // eslint-disable-next-line
  src="\images\278495017_308699898064887_7618075920024263592_n.webp"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
