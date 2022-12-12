import React, { useContext, useEffect, useState } from "react";
import noteContext from "../Context/notes/noteContext";
import styled from "styled-components";

const About = () => {
  const context = useContext(noteContext);

  const [user, setUser] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const userdetails = async () => {
        const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.

          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
        const detail = await response.json();
        setUser(detail);
      };
      userdetails();
    }
  }, []);

  return (
    <Section>
      <div>
        <h1>About You</h1>
        <h4>{user.name}</h4>
        <h4>{user.email}</h4>
        <br />
        <h1>About Us</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra,
          lacus at rutrum faucibus, tellus nisl egestas turpis, a ullamcorper
          lacus velit at purus. Maecenas eleifend consectetur libero sit amet
          bibendum. Sed quis pretium ante. Curabitur pretium neque imperdiet,
          scelerisque turpis gravida, lobortis nulla. Sed in pulvinar nibh. Nam
          sollicitudin pellentesque dui, non ornare orci mollis at. Praesent
          pellentesque euismod quam, nec consequat metus pretium sed. Integer
          sagittis erat a elit tristique volutpat. Morbi a nulla at erat gravida
          accumsan ac tempus libero. Curabitur mollis lorem et erat vulputate
          hendrerit. Nam iaculis arcu in gravida imperdiet. In porttitor congue
          eros a accumsan. Nullam dapibus leo maximus dignissim congue. Aenean
          interdum congue orci, quis lacinia magna porta et. Ut ut mollis
          turpis, eget blandit nibh. Duis et pretium purus, quis condimentum
          felis. Phasellus viverra magna dictum ante varius, non faucibus turpis
          rhoncus. Donec facilisis turpis neque, a mollis tellus suscipit in.
          Quisque nec metus eu leo lacinia maximus. Sed quis lectus aliquam,
          sollicitudin tortor quis, varius est. Aenean porta consequat ex vel
          pulvinar. Suspendisse lobortis viverra sapien, at malesuada lacus
          vestibulum et. Ut maximus risus eu erat ullamcorper commodo. Fusce
          pretium justo a odio semper egestas. Sed ligula neque, porttitor sit
          amet mollis sit amet, luctus efficitur mi. Aenean volutpat, nunc vel
          pellentesque aliquet, mi turpis varius est, eu efficitur ex sem vitae
          arcu. Aenean interdum sem non dolor condimentum, vel luctus elit
          scelerisque. Sed et sollicitudin orci. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. In
          bibendum laoreet nulla sit amet iaculis. Integer ornare venenatis
          magna, commodo scelerisque nunc. In interdum auctor gravida. Nulla
          lacinia odio ipsum, eget venenatis tortor mollis eget. Suspendisse
          commodo, purus in suscipit malesuada, ante dolor gravida tellus, eu
          maximus ex lacus non enim. Donec ut nisi rutrum, interdum orci eu,
          malesuada nulla. In bibendum lectus et varius ornare. Cras odio dolor,
          ultricies ut semper auctor, hendrerit sit amet nulla. Mauris porttitor
          enim non maximus rutrum. Sed porttitor auctor lorem vitae volutpat.
          Mauris tincidunt eros non est aliquet aliquet. Cras mollis diam vitae
          pharetra aliquam. Suspendisse nulla quam, tempor a erat ut, facilisis
          accumsan nibh. In eu dui a lacus ultricies maximus. In posuere tortor
          eget ante cursus pharetra. Etiam a velit iaculis nunc ornare ultrices.
          Aenean facilisis ex magna, in auctor ligula ultrices sed. Nunc mollis
          iaculis scelerisque. Suspendisse potenti. Suspendisse sit amet
          scelerisque neque. Nunc id nisl eu elit viverra rutrum. Donec lobortis
          elementum magna sit amet facilisis. Mauris eu egestas quam.
          Suspendisse potenti. Morbi vel lorem fermentum, ultricies eros non,
          accumsan nibh. Pellentesque congue, est a bibendum molestie, orci enim
          dignissim erat, eu semper arcu eros nec leo. Curabitur vel felis nec
          justo pellentesque molestie in vehicula ante. Ut in enim purus. Sed
          nec turpis a dolor luctus tristique. Phasellus mattis enim eu ex
          efficitur, vitae egestas dui sagittis. Vestibulum finibus lorem at
          sapien ornare iaculis. Maecenas elementum magna ante, eu tincidunt
          ipsum congue nec. In erat dolor, finibus ac odio id, posuere
          vestibulum augue. Nulla sed odio rutrum, auctor magna ac, consectetur
          nulla. Aliquam erat volutpat.
        </p>
      </div>
    </Section>
  );
};

export default About;

const Section = styled.section`
  height: 95vh;
  width: 100vw;
  padding: 6%;
  background: #1cd8d2; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #93edc7,
    #1cd8d2
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #93edc7,
    #1cd8d2
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  p {
    font-size: 1.2rem;
  }
`;
