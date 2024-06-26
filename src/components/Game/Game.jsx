import React from "react";
import "./Game.css";
import { useState } from "react";
import { favGame, deleteFavGame } from "../../services/users.js";
import { Link, useNavigate } from "react-router-dom";


function Game(props) {
  const [showDetails, setShowDetails] = useState(false);

  const navigate = useNavigate()

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  if (showDetails) {
    document.body.classList.add("active-showDetails");
  } else {
    document.body.classList.remove("active-showDetails");
  }

  async function handleFavGameClick() {


    if (props.userName){
      if (props.isFavGame) {
        await deleteFavGame(props.id);
        props.setToggleUser((prev) => !prev);
        setShowDetails(false);
      } else {
        await favGame(props.id);
        props.setToggleUser((prev) => !prev);
      }
    } else {
      navigate("/sign-in")

    }
  }

  return (
    <div>
      <div className="image-container" onClick={toggleDetails}>
        <div className="game-name"> {props.name}</div>
        <img className="game-image" src={props.image} alt={props.name} />
      </div>
      {showDetails && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <h2 className="game-modal-name">
                {props.name}
                <button
                  className="heart-button"
                  style={{
                    backgroundColor: props.isFavGame ? "#EA37A3" : "black",
                    // border: "none",
                    cursor: "pointer",
                  }}
                  onClick={handleFavGameClick}
                >
                  <img
                    className="heart-img"
                    src="https://github.com/jbourke16/team-rekt-frontend/blob/dev/public/Icons/HEART-ICON.png?raw=true"
                    alt="Heart Icon"
                    style={{ width: "2.5vw", height: "auto", padding: "3px", filter:"invert(100%) sepia(90%) saturate(0%) hue-rotate(181deg) brightness(104%) contrast(108%)"}}
                  />
                </button>
              </h2>

              <p className="game-bio">
                <span className="game-header">Bio:</span> {props.bio}
              </p>
              <p className="game-genre">
                <span className="game-header">Genre:</span> {props.genre}
              </p>
              <p className="game-console">

                <span className="game-header">Console:</span> {props.console.join(", ")}

              </p>
              <p className="game-release">
                <span className="game-header">Release Date:</span>
                {props.release}
              </p>
              <Link

                className="reviews-link"

                to={props.userName ? `/reviews/games/${props.id}` : "/sign-in"}
              >
                {" "}
                Reviews{" "}
              </Link>

              {/* <button>Add Review</button> */}


              <button className="close-modal" onClick={toggleDetails}>
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Game;
