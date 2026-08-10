import React from "react";

export default function AmazonMusic() {
  return (
    <>
      <div className="cs-hero">
        <img src="photos/amazon_music_mockups.png" alt="Amazon Music prototypes" />
      </div>

      <div className="cs-container">
        <span className="cs-org">Amazon Music</span>
        <h1 className="cs-title">Building community in Amazon Music</h1>

        <div className="cs-meta">
          <div className="cs-meta-item">
            <span className="cs-meta-label">Timeline</span>
            <span className="cs-meta-value">10 weeks</span>
          </div>
          <div className="cs-meta-item">
            <span className="cs-meta-label">Skills</span>
            <span className="cs-meta-value">Figma, UX design, user research</span>
          </div>
        </div>

        {/* OVERVIEW */}
        <div className="cs-section">
          <span className="cs-h2a">Overview</span>
          <p>"Why would anyone ever use Amazon Music?"</p>
          <p>
            That's what my teenage brother said when I told him about this
            project. Amazon Music's senior project manager tasked my team
            with finding out why the platform struggled to attract young
            users like him — and how we could change that.
          </p>
          <br />
          <p>
            20 young adults told us they'd always used either Spotify or
            Apple Music, and had no desire to switch. Our early user
            interviews and competitive analysis highlighted one key
            difference: <strong>on Amazon Music, there are hardly any ways to
            be social.</strong>
          </p>
          <p>
            But <strong>85% of people</strong> said they love to share their
            music taste with others. For them, Amazon Music's inability to
            facilitate that was a dealbreaker. So,
          </p>
          <p className="cs-pullquote-a">
            How might we transform Amazon Music into a social music
            playground that encourages fan-to-fan activity?
          </p>
        </div>

        {/* PROCESS */}
        <div className="cs-section">
          <span className="cs-h2a">Process</span>
          <p>
            I worked in a team of design, engineering and computer science
            students to brainstorm ideas. We began by throwing our wildest
            dreams at the wall, and then narrowed them down and iterated
            through group work sessions, interviews and feedback from our
            client.
          </p>
          <div className="cs-img-placeholder">
            <img src="photos/amazon_process.png" alt="Amazon Music process" />
          </div>
          <p>
            Using my journalism background, I led the charge with user
            research and crafting our final presentation. I also learned a
            lot from my team throughout the process, honing my Figma skills
            as we put together four high fidelity prototypes.
          </p>
        </div>

        {/* OUTCOMES */}
        <div className="cs-section">
          <span className="cs-h2a">Outcomes</span>
          <div className="cs-feature-box">
            <div className="cs-feature-grid">
              <div className="cs-feature">
                <span className="cs-feature-title">1. Profile Badges</span>
                <img
                  className="cs-feature-img"
                  src="photos/badges.png"
                  alt="Profile Badges prototype"
                />
                <p>
                  Users earn badges by attending concerts or becoming a top
                  listener of an artist. They can display these on their
                  profile to show off how big of a fan they are.
                </p>
              </div>

              <div className="cs-feature">
                <span className="cs-feature-title">2. Mixtapes</span>
                <img
                  className="cs-feature-img"
                  src="photos/mixtape.png"
                  alt="Mixtapes prototype"
                />
                <p>
                  Collaborative playlists that let multiple users add songs
                  and generate recommendations based on the group's
                  collective music taste.
                </p>
              </div>

              <div className="cs-feature">
                <span className="cs-feature-title">3. The Feed</span>
                <img
                  className="cs-feature-img"
                  src="photos/feed.png"
                  alt="The Feed prototype"
                />
                <p>
                  The epicenter of fan-to-fan interaction. Users can comment
                  on music, see what's trending, and share posts — within
                  their friend group or across the broader Amazon Music
                  community.
                </p>
              </div>

              <div className="cs-feature">
                <span className="cs-feature-title">4. The Events Page</span>
                <img
                  className="cs-feature-img"
                  src="photos/music_match.png"
                  alt="Events Page prototype"
                />
                <p>
                  A home for out-of-the-box experiences like "Music Pact," a
                  music-based matchmaker, and "Fantasy Music Leagues," where
                  users can bet on award show outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PRESENTATION */}
        <div className="cs-section">
          <p>
            We presented our concepts to executives at Amazon's San Francisco
            office, receiving positive feedback for our thorough execution
            and engaging presentation — complete with live demos and skits.
          </p>
          <br />
          <div className="cs-img-present">
            <img
              src="photos/amazon_presentation.png"
              alt="Amazon Music presentation"
            />
          </div>
        </div>

        {/* TAKEAWAYS */}
        <div className="cs-section">
          <span className="cs-h2a">Takeaways</span>
          <p>
            Beyond just pushing me to improve my wireframing skills, this
            project showed me that{" "}
            <strong>great design is nothing without great communication.</strong>{" "}
            For users, this meant going through several iterations to ensure
            that our user flows were intuitive. For Amazon executives, this
            meant clearly illustrating the current landscape of Gen Z music
            listening so they could understand the reasoning behind each
            design decision.
          </p>
        </div>
      </div>
    </>
  );
}