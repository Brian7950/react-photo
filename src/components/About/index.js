import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
//Important**** React components must always return a single parent JSX element but may have many children elements
function About () {
    return(
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%"}} alt="cover" />
        </section>

    );
}

export default About;