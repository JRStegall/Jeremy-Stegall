import React from "react";
import js from "../Images/js.jpg";

function Main() {
  return (
    <div className="jumbotron text-center main">
      <div className="row">
        <h4 className="col-12 col-lg-3">Life Student</h4>
        <h4 className="col-12 col-lg-3">Musician</h4>
        <h4 className="col-12 col-lg-3">Coffee Enthusiast</h4>
        <h4 className="col-12 col-lg-3">Coder</h4>
      </div>
      <br />
      <br />
      <div className="row">
        <div className="col-12 col-lg-3 ">
          <img className="img-circle" src={js} alt="" title="Mushroom Road" />
        </div>
        <div className="col-sm-12 col-lg-3 bio">
          <p>
            What is life, really, if not a prolonged exploration of what we
            don’t know?{" "}
          </p>

          <p>
            For as long as we have collectively hurdled through the cosmos on
            this very unique and organic spaceship- Traveling at unfathomable
            speed through the unknown- We have always had the innate desire for
            knowledge. &nbsp;It is engrained in each and every one of us.
          </p>
          <p>
            And when we seek out knowledge, we are forced to look beyond what we{" "}
            <em>think</em> we know.{" "}
          </p>
          <p>
            Before we are born, we possess the Ultimate Knowledge of the
            entirety of the universe! &nbsp;All that was and ever will be in all
            of cosmic creation is ours!{" "}
          </p>
          <p>
            As such, when we are first born, we know all of the answers to all
            of the questions that humans have asked ourselves since time
            immemorial. &nbsp;We know how everything began and will end.
            &nbsp;But because this is such powerful knowledge, not to be yielded
            by the impure, we are born weak and defenseless, unable to speak in
            a language mortals can understand.
          </p>
          <p>Thus safeguarding that precious and Ultimate Knowledge. </p>
        </div>
        <div className="col-sm-12 col-lg-3">
          <p>
            When we are infants, we must first learn how to communicate our
            needs to those we have chosen to care for us, and the very process
            of learning that basic, essential skill begins the erasure of that
            Ultimate Knowledge.{" "}
          </p>
          <p>
            As we continue to grow, we see the other humans in our clan walking
            about freely without constriction and our need to explore kicks into
            overdrive. &nbsp;We must all learn how to crawl, flop, stumble,
            walk, fall, run, climb, trip and sprint as if it is dependent to our
            very lives! &nbsp;Because it most certainly is. And as we acquire
            more and more core skills, we lose more and more of the Ultimate
            Knowledge that we were are all inherently born with.
          </p>
          <p>
            At some point in our early development, the scales tip, we lose all
            previous knowledge and become innocent children. &nbsp;But we still
            carry with us the purest bit of that Ultimate Knowledge:&nbsp; Be
            Kind.
          </p>
          <p>We see it in children everyday.</p>
        </div>
        <div className="col-lg-3">
          <p>
            Once those proverbial scales tip, these beautiful creations we all
            are, these amazingly innocent children we all become, no longer
            carry the burden of the Why and How of everything. &nbsp;But we
            instinctively know to be kind.
          </p>
          <p>From then on we become free.</p>{" "}
          <p>Free from the knowing of All.</p>{" "}
          <p>Free to start from scratch.</p>
          <p>Which ultimately leads to exploration.</p>
          <p>
            And what is life, really, if not a prolonged exploration of what we
            don’t know?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
