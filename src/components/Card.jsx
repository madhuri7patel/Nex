import { useState } from "react";

const Card = ({ item, loading }) => {

    const [isImageVisible, setIsImageVisible] = useState(false);

  const showImage = () => {
    setIsImageVisible(true);
  };

  const hideImage = () => {
    setIsImageVisible(false);
  };

  const handleKeyDown = (event) => {
    alert("amit")

    if (event.keyCode === 27) { // 27 is the keyCode for ESC key
      hideImage();
    }
  };

    return (
      <div
        style={{ width: "150px", height: "150px" }}
        onClick={showImage}
      >
        <div>{item.title}</div>
        <div>
            {loading ?? <h1>Loading......</h1>}

          <img
            src={item.imageUrl}
            width="100px"
            height="100px"
            alt={item.title}
            id="overlay" onClick={hideImage} onKeyDown={handleKeyDown} tabIndex="0"
          />
           {isImageVisible && (
        <div >
          <img id="overlayImage" src={item.imageUrl} alt="Overlay" />
        </div>
      )}
        </div>
      </div>
    );
  };
  export default Card