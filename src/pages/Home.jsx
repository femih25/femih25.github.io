import { useEffect, useState } from "react";
import Categories, { Category } from "../components/Categories";
import AllCards, { Card } from "../components/AllCards";

function Home() {
  useEffect(() => {
    document.body.classList.add("page-home");
    return () => document.body.classList.remove("page-home");
  }, []);

  const [category, setCategory] = useState("featured");

  return (
    <div className="page-content">
      {/* INTRO */}
      <section id="HOME" className="hero">
        <img
          src="photos/daily_polaroid.jpeg"
          className="hero-img left-img"
          alt="Femi at The Daily Northwestern"
        />

        <div className="hero-content">
          <h1 className="title" id="title">
            Hi, I’m Femi!
          </h1>

          <p className="intro">
            I’m a multifaceted reporter and designer studying{" "}
            <span className="highlight">
              journalism, data science and design
            </span>{" "}
            at Northwestern University, and I’m passionate about using 
            my skillset to meet readers and users where they are. 
            I’m especially drawn to roles in data and visual 
            storytelling as well as digital media design.
            Take a look around!
            <br />
          </p>

          <div className="contact-links">
            {/* Email */}
            <a href="mailto:femihorrall2027@u.northwestern.edu" title="Email">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="2,4 12,13 22,4" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/femi-horrall-1103342aa/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="3" />
                <line x1="7" y1="10" x2="7" y2="17" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
                <path d="M11 10v7M11 13a3 3 0 0 1 6 0v4" />
              </svg>
            </a>

            {/* Resume download */}
            <a
              href="photos/Femi Horrall Resume - October 2026.pdf"
              target="_blank"
              rel="noreferrer"
              title="Resume"
            >
              <svg viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="12" y1="11" x2="12" y2="17" />
                <polyline points="9,14 12,17 15,14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="WORKS" className="works-section">
        <Categories active={category} onSelect={setCategory}>
          <Category id="writing" label="Writing" />
          <Category id="data" label="Data" />
          <Category id="featured" label="Featured" />
          <Category id="web" label="Web" />
          <Category id="ux" label="UX Design" />
        </Categories>

        {category === "featured" && (
          <AllCards>
            <Card
              href= "/campaign-finance-radar"
              img="photos/CF_radar.png"
              alt="Project image"
              publication="USA TODAY Co."
              title="Campaign Finance Radar"
              tags={["Data scraping", "Redbird", "Python", "User research"]}
              linkText="See more →"
            />

            <Card
              href="https://apps.dailynorthwestern.com/s26poll/"
              img="photos/s26poll.png"
              alt="Website image"
              publication="The Daily Northwestern"
              title="The Daily Northwestern's Spring 2026 Poll"
              tags={["Web development", "React", "Scrollytelling"]}
              linkText="View website →"
            />

            <Card
              href="https://dailynorthwestern.com/2025/10/27/top-stories/live-a-map-of-ice-activity-in-evanston/"
              img="photos/daily_ice_map.png"
              alt="Article image"
              publication="The Daily Northwestern"
              title="Live: A map of ICE activity in Evanston"
              tags={["Breaking news", "Data visualization", "Flourish"]}
            />

            <Card
              href="/knight-lab"
              img="photos/knight_lab_mockups.jpeg"
              alt="Project preview image"
              publication="Northwestern Knight Lab"
              title="Designing new approaches to news on social media"
              tags={["UX design", "Figma Make", "User research"]}
              linkText="See more →"
            />

            <Card
              href="https://www.publicsource.org/pitt-student-enrollment-oakland-housing-challenges/"
              img="photos/publicsource_pitt_housing_graph.png"
              alt="Article image"
              publication="Pittsburgh's Public Source"
              title="New Pitt students housed in hotels or apartments 'disconnected,' but making the best of it"
              tags={["Feature writing", "Data visualization", "Flourish"]}
            />           

            <Card
              href="https://www.publicsource.org/extreme-weather-climate-change-pittsburgh-wilkinsburg-penn-hills/"
              img="photos/publicsource_weather.jpeg"
              alt="Article image"
              publication="Pittsburgh's Public Source"
              title="As extreme weather worsens in Pittsburgh area, 'Superman isn’t showing up'"
              tags={["Feature writing"]}
            />              

          </AllCards>
        )}

        {category === "writing" && (
          <AllCards> 
            <Card
              href="https://dailynorthwestern.com/2026/02/25/data-visualization/best-of-evanston-by-the-numbers-reflecting-on-evanstons-business-activity/"
              img="photos/BOE_graph.png"
              alt="Article image"
              publication="The Daily Northwestern"
              title="Best of Evanston: By The Numbers: Reflecting on Evanston’s business activity"
              tags={["Data visualization", "Flourish"]}
            />

<Card
              href="https://dailynorthwestern.com/2025/10/15/top-stories/evanston-implements-ice-free-zones-amid-continued-community-concerns/"
              img="photos/daily_ice_free.jpg"
              alt="Article image"
              publication="The Daily Northwestern"
              title="Evanston implements 'ICE free zones' amid continued community concerns"
              tags={["Quick news"]}
            />

            <Card
              href="https://www.publicsource.org/pitt-student-enrollment-oakland-housing-challenges/"
              img="photos/publicsource_pitt_housing_graph.png"
              alt="Article image"
              publication="Pittsburgh’s Public Source"
              title="New Pitt students housed in hotels or apartments 'disconnected,' but making the best of it"
              tags={["Feature writing", "Data visualization", "Flourish"]}
            />           

            <Card
              href="https://www.publicsource.org/extreme-weather-climate-change-pittsburgh-wilkinsburg-penn-hills/"
              img="photos/publicsource_weather.jpeg"
              alt="Article image"
              publication="Pittsburgh’s Public Source"
              title="As extreme weather worsens in Pittsburgh area, 'Superman isn't showing up'"
              tags={["Feature writing"]}
            />

            <Card
              href="https://www.publicsource.org/housing-advocates-hosts-split-on-bill-to-regulate-short-term-rental-in-pittsburgh/"
              img="photos/publicsource_airnb.jpeg"
              alt="Article image"
              publication="Pittsburgh’s Public Source"
              title="Housing advocates, hosts split on bill to regulate short-term rentals in Pittsburgh"
              tags={["Feature writing"]}
            />

            <Card
              href="https://dailynorthwestern.com/2024/10/30/lateststories/now-is-when-we-have-power-citizens-consider-withholding-presidential-votes-in-protest-of-war-in-gaza/"
              img="photos/daily_uncommitted_voters.jpg"
              alt="Article image"
              publication="The Daily Northwestern"
              title="'Now is when we have power': Voters consider withholding presidential votes in protest of war in Gaza"
              tags={["Quick news"]}
            />    

          </AllCards>
        )}

        {category === "data" && (
          <AllCards>
            <Card
              href="/campaign-finance-radar"
              img="/photos/CF_radar.png"
              alt="Project image"
              publication="USA TODAY Co."
              title="Campaign Finance Radar"
              tags={["Data scraping", "Redbird", "Python", "User research"]}
              linkText="See more →"
            />

            <Card
              href="https://dailynorthwestern.com/2026/02/25/data-visualization/best-of-evanston-by-the-numbers-reflecting-on-evanstons-business-activity/"
              img="photos/BOE_graph.png"
              alt="Article image"
              publication="The Daily Northwestern"
              title="Best of Evanston: By The Numbers: Reflecting on Evanston’s business activity"
              tags={["Data visualization", "Flourish"]}
            />

            <Card
              href="https://dailynorthwestern.com/2025/10/27/top-stories/live-a-map-of-ice-activity-in-evanston/"
              img="photos/daily_ice_map.png"
              alt="Article image"
              publication="The Daily Northwestern"
              title="Live: A map of ICE activity in Evanston"
              tags={["Breaking news", "Data visualization", "Flourish"]}
            />

            <Card
              href="https://www.publicsource.org/pitt-student-enrollment-oakland-housing-challenges/"
              img="photos/publicsource_pitt_housing_graph.png"
              alt="Article image"
              publication="Pittsburgh’s Public Source"
              title="New Pitt students housed in hotels or apartments 'disconnected,' but making the best of it"
              tags={["Feature writing", "Data visualization", "Flourish"]}
            />   

          </AllCards>
        )}

        {category === "web" && (
                    <AllCards>
                    <Card
                      href="https://apps.dailynorthwestern.com/ofb/"
                      img="photos/ofb.jpeg"
                      alt="Website image"
                      publication="The Daily Northwestern"
                      title="Open for Business"
                      tags={["Web development", "React"]}
                      linkText="View website →"
                    />
        
                    <Card
                      href="https://apps.dailynorthwestern.com/s26poll/"
                      img="photos/s26poll.png"
                      alt="Website image"
                      publication="The Daily Northwestern"
                      title="The Daily Northwestern's Spring 2026 Poll"
                      tags={["Web development", "React", "Scrollytelling"]}
                      linkText="View website →"
                    />
                  </AllCards>
        )}

        {category === "ux" && (
          <AllCards>
            <Card
              href="/knight-lab"
              img="photos/knight_lab_mockups.jpeg"
              alt="Project preview image"
              publication="Northwestern Knight Lab"
              title="Designing new approaches to news on social media"
              tags={["UX design", "Figma Make", "User research"]}
              linkText="See more →"
            />

            <Card
              href="/amazon-music"
              img="photos/amazon_music_mockups.png"
              alt="Project preview image"
              publication="Amazon Music"
              title="Building community in Amazon Music"
              tags={["UX Design", "Figma", "User research"]}
              linkText="See more →"
            />   

          </AllCards>
        )}
      </section>
    </div>
  );
}

export default Home;