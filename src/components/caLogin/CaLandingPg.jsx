import { useEffect } from "react";
import './CaLandingPg.css'
const CaLandingPg = () => {
  useEffect(() => {
    document.querySelectorAll(".question").forEach(function (question) {
      question.addEventListener("click", function () {
        var answer = this.querySelector(".answer");
        var icon = this.querySelector(".icon");

        // Hide all answers and change all icons to "+"
        document.querySelectorAll(".answer").forEach(function (ans) {
          if (ans !== answer) {
            ans.style.display = "none";
          }
        });

        document.querySelectorAll(".icon").forEach(function (icn) {
          if (icn !== icon) {
            icn.classList.remove("fa-angle-up");
            icn.classList.add("fa-angle-down");
          }
        });

        // Remove box shadow from all questions
        document.querySelectorAll(".question").forEach(function (q) {
          if (q !== question) {
            q.style.boxShadow = "none";
          }
        });

        if (answer.style.display === "none" || answer.style.display === "") {
          // Show the clicked answer and change its icon to "-"
          answer.style.display = "block";
          icon.classList.remove("fa-angle-down");
          icon.classList.add("fa-angle-up");
          question.style.boxShadow =
            "0px 0px 2px 0px rgba(255, 255, 255, 0.75)";
        } else {
          // Hide the clicked answer and change its icon to "+"
          answer.style.display = "none";
          icon.classList.remove("fa-angle-up");
          icon.classList.add("fa-angle-down");
          question.style.boxShadow = "none";
        }
      });
    });

    document.querySelectorAll(".question").forEach(function (question) {
      question.addEventListener("click", function () {
        // Hide all answers
        document.querySelectorAll(".answer").forEach(function (answer) {
          answer.style.maxHeight = null;
        });

        // Show the clicked answer
        var answer = this.querySelector(".answer");
        if (answer.style.maxHeight) {
          answer.style.maxHeight = null;
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });

    // Function to change color based on intersection
    function changeColor(entries) {
      entries.forEach((entry) => {
        const targetId = entry.target.id;
        const correspondingElement = document.querySelector(
          `[data-queSec="${targetId}"]`
        );

        if (entry.isIntersecting) {
          correspondingElement.style.color = "#3FEB8C"; // Change to your desired color
        } else {
          correspondingElement.style.color = ""; // Change to the default color or another color
        }
      });
    }

    // Initialize Intersection Observer
    const observer = new IntersectionObserver(changeColor, { threshold: 0.5 });

    // Observe each target element
    document.querySelectorAll(".queSec").forEach((target) => {
      observer.observe(target);
    });
  }, []);

  return (
    <>
      <div className="ca-landing-nav">
        <a className="logoa" href="">
          <img className="logo" src="./images/sc.png" alt="" />
        </a>
        <a className="loginbutt" href="">
          Login / Register
        </a>
      </div>
      <h2 className="heading">CAMPUS AMBASSADOR</h2>
      <div className="contentWrap">
        <div className="left">
          <p>
            <strong>AURORA</strong> promises not just a fest but an immersive
            experience that transcends conventional boundaries. Join our Campus
            Ambassador Program and become an integral part of the organizing
            team, contributing to the creation of unforgettable moments and
            leaving behind a legacy of cultural excellence.{" "}
            <strong>AURORA 2024</strong> – where talents converge, diversity
            shines, and legacies are written. Seize the opportunity to be part
            of this cultural extravaganza and make history with us!
          </p>
          <div className="butt">
            <button className="know" onClick="location.href='#sec'">
              Know More
            </button>
            <button className="know">Register Now</button>
          </div>
        </div>
        <div className="right">
          <img src="./images/6.jpeg" alt="" />
        </div>
      </div>
      <div id="sec" className="questions">
        <div className="question">
          <div className="que">
            <p>RESPONSIBILITIES</p>
            <span className="icon fas fa-angle-down"></span>
          </div>
          <div className="answer">
            <ul>
              <li>
                <strong className="strongCon">Event Coordination:</strong>
                <p>Aid in planning and executing pre-AURORA events.</p>
              </li>
              <li>
                <strong className="strongCon">Campus Outreach:</strong>
                <p>
                  Engage with student groups and influencers to expand
                  AURORA&apos;s reach.
                  <br />
                  Collaborate with various campus organizations for diverse
                  participation.
                </p>
              </li>
              <li>
                <strong className="strongCon">Feedback Collection:</strong>
                <p>
                  Gather student feedback for improving AURORA.
                  <br />
                  Relay constructive input to the organizing team.
                </p>
              </li>
              <li>
                <strong className="strongCon">Social Media Management:</strong>
                <p>
                  Oversee AURORA&apos;s social media, sharing engaging content
                  regularly.
                </p>
              </li>
              <li>
                <strong className="strongCon">Content Creation:</strong>
                <p>
                  Craft creative content like blog posts, articles, or videos
                  showcasing AURORA&apos;s uniqueness.
                </p>
              </li>
              <li>
                <strong className="strongCon">Representative Role:</strong>
                <p>Serve as your college&apos;s contact person for AURORA.</p>
              </li>
              <li>
                <strong className="strongCon">Helping Hand:</strong>
                <p>
                  Address participant and volunteer queries, offering solutions
                  or escalating issues when necessary.
                </p>
              </li>
              <li>
                <strong className="strongCon">Publicity:</strong>
                <p>
                  Actively promote AURORA through various channels like social
                  media, posters, and flyers.
                  <br />
                  Generate excitement among students to enhance awareness and
                  participation.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="question">
          <div className="que">
            <p>PERKS</p>
            <span className="icon fas fa-angle-down"></span>
          </div>
          <div className="answer">
            <ul>
              <li>
                <strong className="strongCon">Free Night Passes:</strong>
                <p>
                  Complimentary entry to AURORA events, concerts, and
                  performances.
                </p>
              </li>
              <li>
                <strong className="strongCon">Meet Celebrities:</strong>
                <p>
                  VIP access during the festival for closer interaction with
                  artists.
                </p>
              </li>
              <li>
                <strong className="strongCon">Rewards/Certificate:</strong>
                <p>
                  Formal recognition from IITM Gwalior as a Campus Ambassador.
                </p>
              </li>
              <li>
                <strong className="strongCon">Merchandise & Goodies:</strong>
                <p>
                  Exclusive AURORA merchandise including T-shirts and badges.
                </p>
              </li>
              <li>
                <strong className="strongCon">Networking Opportunities:</strong>
                <p>
                  Connect with fellow Campus Ambassadors and influential
                  individuals.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="question">
          <div className="que last">
            <p>WHY YOU SHOULD BE A PART OF TEAM?</p>
            <span className="icon fas fa-angle-down"></span>
          </div>
          <div className="answer">
            <p>
              Joining the Aurora team offers a unique opportunity to become
              ambassadors of our vibrant and esteemed program. Beyond the
              evident pride and continuous personal growth, as part of the
              Aurora team, you&apos;ll reap exciting rewards for your commitment
              and dedication. This role goes beyond mere promotion; it&apos;s
              about nurturing a vibrant, inclusive, and culturally enriching
              atmosphere on campus. It provides students with a chance to
              significantly contribute to the success of one of North
              India&apos;s leading cultural festivals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaLandingPg;
