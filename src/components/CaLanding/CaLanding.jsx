import { useEffect, useState } from "react";
import './CaLanding.css';


const CaLanding = () => {

    const [openAnswer, setOpenAnswer] = useState(null);
    const [hoveredQuestion, setHoveredQuestion] = useState(null);

    const handleQuestionClick = (index) => {
        setOpenAnswer((prevIndex) => (prevIndex === index ? null : index));
    };

    useEffect(() => {

        // Function to change color based on intersection
        function changeColor(entries) {
            entries.forEach(entry => {
                const targetId = entry.target.id;
                const correspondingElement = document.querySelector(`[data-queSec="${targetId}"]`);

                if (entry.isIntersecting) {
                    correspondingElement.style.color = '#3FEB8C'; // Change to your desired color
                } else {
                    correspondingElement.style.color = ''; // Change to the default color or another color
                }
            });
        }

        // Initialize Intersection Observer
        const observer = new IntersectionObserver(changeColor, { threshold: 0.5 });

        // Observe each target element
        document.querySelectorAll('.queSec').forEach(target => {
            observer.observe(target);
        });


    }, []);

    return (
        <>
            <div style={{height:"115px"}}>
                <div class="ca_portal_nav">
                    <a class="logoa" href=""
                    ><img class="logo" src="../../../images/sc.png" alt=""
                        /></a>
                    <a class="loginbutt" href="login.html">Login / Register</a>
                </div>
                <h2 class="ca_portal_heading">CAMPUS AMBASSADOR</h2>

            </div>

            <div class="contentWrap">
                <div class="left">
                    <p>
                        <strong>AURORA</strong> promises not just a fest but an immersive
                        experience that transcends conventional boundaries. Join our Campus
                        Ambassador Program and become an integral part of the organizing team,
                        contributing to the creation of unforgettable moments and leaving
                        behind a legacy of cultural excellence. <strong>AURORA 2024</strong> –
                        where talents converge, diversity shines, and legacies are written.
                        Seize the opportunity to be part of this cultural extravaganza and
                        make history with us!
                    </p>
                    <div class="butt">
                        <button class="know">Register Now</button>
                        {/* <button class="know"><a href="signup1.html">Register Now</a></button> */}
                    </div>
                </div>
                <div class="right">
                    <img src="../../../images/6.jpeg" alt="" />
                </div>
            </div>

            <div id="sec" class="questions">
                <div id="q1" class="question" onClick={() => handleQuestionClick(1)} onMouseOver={() => setHoveredQuestion(1)}
                    onMouseOut={() => setHoveredQuestion(null)}
                    style={{
                        boxShadow: hoveredQuestion === 1 ? "1px 1px 20px 2px rgba(255, 255, 255, 0.75)" : "none"
                    }}>
                    <div class="que">
                        <p>RESPONSIBILITIES</p>
                        <span class="icon fas fa-angle-down"></span>
                    </div>
                    <div class="answer" style={{ display: openAnswer === 1 ? "block" : "none" }}>
                        <ul>
                            <li>
                                <strong class="strongCon">Event Coordination:</strong>
                                <p>Aid in planning and executing pre-AURORA events.</p>
                            </li>
                            <li>
                                <strong class="strongCon">Campus Outreach:</strong>
                                <p>
                                    Engage with student groups and influencers to expand AURORA's
                                    reach.
                                    <br />
                                    Collaborate with various campus organizations for diverse
                                    participation.
                                </p>
                            </li>
                            <li>
                                <strong class="strongCon">Feedback Collection:</strong>
                                <p>
                                    Gather student feedback for improving AURORA.
                                    <br />
                                    Relay constructive input to the organizing team.
                                </p>
                            </li>
                            <li>
                                <strong class="strongCon">Social Media Management:</strong>
                                <p>
                                    Oversee AURORA's social media, sharing engaging content
                                    regularly.
                                </p>
                            </li>
                            <li>
                                <strong class="strongCon">Content Creation:</strong>
                                <p>
                                    Craft creative content like blog posts, articles, or videos
                                    showcasing AURORA's uniqueness.
                                </p>
                            </li>
                            <li>
                                <strong class="strongCon">Representative Role:</strong>
                                <p>Serve as your college's contact person for AURORA.</p>
                            </li>
                            <li>
                                <strong class="strongCon">Helping Hand:</strong>
                                <p>
                                    Address participant and volunteer queries, offering solutions or
                                    escalating issues when necessary.
                                </p>
                            </li>
                            <li>
                                <strong class="strongCon">Publicity:</strong>
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
                <div id="q2" class="question" onClick={() => handleQuestionClick(2)} onMouseOver={() => setHoveredQuestion(2)}
                    onMouseOut={() => setHoveredQuestion(null)}
                    style={{
                        boxShadow: hoveredQuestion === 2 ? "1px 1px 20px 2px rgba(255, 255, 255, 0.75)" : "none"
                    }}>
                    <div class="que" >
                        <p>PERKS</p>
                        <span class="icon fas fa-angle-down"></span>
                    </div>
                    <div class="answer" style={{ display: openAnswer === 2 ? "block" : "none" }}>
                        <ul>
                            <li>
                                <strong class="strongCon">Free Night Passes:</strong>
                                <p>
                                    Complimentary entry to AURORA events, concerts, and
                                    performances.
                                </p>
                            </li>
                            <li>
                                <strong class="strongCon">Meet Celebrities:</strong>
                                <p>
                                    VIP access during the festival for closer interaction with
                                    artists.
                                </p>
                            </li>
                            <li>
                                <strong class="strongCon">Rewards/Certificate:</strong>
                                <p>
                                    Formal recognition from IITM Gwalior as a Campus Ambassador.
                                </p>
                            </li>
                            <li>
                                <strong class="strongCon">Merchandise & Goodies:</strong>
                                <p>Exclusive AURORA merchandise including T-shirts and badges.</p>
                            </li>
                            <li>
                                <strong class="strongCon">Networking Opportunities:</strong>
                                <p>
                                    Connect with fellow Campus Ambassadors and influential
                                    individuals.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="q3" class="question" onClick={() => handleQuestionClick(3)} onMouseOver={() => setHoveredQuestion(3)}
                    onMouseOut={() => setHoveredQuestion(null)}
                    style={{
                        boxShadow: hoveredQuestion === 3 ? "1px 1px 20px 2px rgba(255, 255, 255, 0.75)" : "none"
                    }}>
                    <div class="que last">
                        <p>WHY YOU SHOULD BE A PART OF TEAM?</p>
                        <span class="icon fas fa-angle-down"></span>
                    </div>
                    <div class="answer" style={{ display: openAnswer === 3 ? "block" : "none" }}>
                        <p>
                            Joining the Aurora team offers a unique opportunity to become
                            ambassadors of our vibrant and esteemed program. Beyond the evident
                            pride and continuous personal growth, as part of the Aurora team,
                            you'll reap exciting rewards for your commitment and dedication.
                            This role goes beyond mere promotion; it's about nurturing a
                            vibrant, inclusive, and culturally enriching atmosphere on campus.
                            It provides students with a chance to significantly contribute to
                            the success of one of North India's leading cultural festivals.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CaLanding;