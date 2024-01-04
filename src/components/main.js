/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import classy from "../images/posts/classy.jpg";
import la from "../images/posts/la.jpg";
import newYork from "../images/posts/new-york.jpg";
import knight from "../images/posts/knight.jpg";
import nature from "../images/posts/nature.jpg";
import spiderman from "../images/posts/spiderman.jpg";
import open from "../images/icons/open.svg";

function main() {
  return (
    <main>
      <h1 className="main-header">My Work</h1>
      <div className="work-cards-container">
        <div className="work-card">
          <img
            src={classy}
            alt="john pork wearing a top hat, suit, and bowtie"
            className="work-card-image"
          />
          <div className="work-card-content">
            <div className="work-card-header">
              <h2 className="work-card-header-text">Classy</h2>
              <a href="https://www.facebook.com/photo?fbid=634200738871749&set=a.416017144023444">
                <img src={open} alt="open in new tab" className="icon" />
              </a>
            </div>
            <p className="work-card-info">
              A photo representing my classier side.
            </p>
          </div>
        </div>
        <div className="work-card">
          <img
            src={la}
            alt="john pork wearing a bright button up shirt, orange undershirt, purple sunglasses, and fedora"
            className="work-card-image"
          />
          <div className="work-card-content">
            <div className="work-card-header">
              <h2 className="work-card-header-text">Party</h2>
              <a href="https://www.facebook.com/photo?fbid=637683621856794&set=a.416017144023444">
                <img src={open} alt="open in new tab" className="icon" />
              </a>
            </div>
            <p className="work-card-info">
              I came up with this combo is LA, it&apos;s one of my more creative
              outfits.
            </p>
          </div>
        </div>
        <div className="work-card">
          <img
            src={newYork}
            alt="john pork wearing a baseball cap and a leather jacket"
            className="work-card-image"
          />
          <div className="work-card-content">
            <div className="work-card-header">
              <h2 className="work-card-header-text">Casual</h2>
              <a href="https://www.facebook.com/photo?fbid=620503976908092&set=a.416017144023444">
                <img src={open} alt="open in new tab" className="icon" />
              </a>
            </div>
            <p className="work-card-info">
              Having a go-to casual outfit is a must, I&apos;ve always loved the
              leather jacked for casual dress.
            </p>
          </div>
        </div>
        <div className="work-card">
          <img
            src={knight}
            alt="john pork wearing a medieval suit of armor"
            className="work-card-image"
          />
          <div className="work-card-content">
            <div className="work-card-header">
              <h2 className="work-card-header-text">Medieval</h2>
              <a href="https://www.facebook.com/photo?fbid=631081002517056&set=a.416017144023444">
                <img src={open} alt="open in new tab" className="icon" />
              </a>
            </div>
            <p className="work-card-info">
              I&apos;ve had to model as a knight a suprising amount of times,
              and this armor has always been my favorite.
            </p>
          </div>
        </div>
        <div className="work-card">
          <img
            src={nature}
            alt="john pork wearing a loose white gi"
            className="work-card-image"
          />
          <div className="work-card-content">
            <div className="work-card-header">
              <h2 className="work-card-header-text">Natural</h2>
              <a href="https://www.facebook.com/photo/?fbid=615769047381585&set=a.416017144023444">
                <img src={open} alt="open in new tab" className="icon" />
              </a>
            </div>
            <p className="work-card-info">
              Took this while relaxing on my own time. I felt very at peace and
              calm, which I thought was perfect for snaping some photos.
            </p>
          </div>
        </div>
        <div className="work-card">
          <img
            src={spiderman}
            alt="john pork wearing a baseball cap, brown pants, spider-man shirt, spider-man hoodie, and a backpack"
            className="work-card-image"
          />
          <div className="work-card-content">
            <div className="work-card-header">
              <h2 className="work-card-header-text">Cosplay</h2>
              <a href="https://www.facebook.com/photo/?fbid=569894101969080&set=a.416017144023444">
                <img src={open} alt="open in new tab" className="icon" />
              </a>
            </div>
            <p className="work-card-info">
              Though I do like to dress up for pictures, I&apos;ve liked cosplay
              very much. Of course, I have tried it in the past, this being one
              of my more casual cosplays.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default main;
