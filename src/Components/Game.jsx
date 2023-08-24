import {  useState } from "react";
import image1  from '../assets/images/image1.jpg'
import image2  from '../assets/images/image2.jpg'
import image3  from '../assets/images/image3.jpg'
import image4  from '../assets/images/image4.jpg'
import image5  from '../assets/images/image5.jpg'
import image6  from '../assets/images/image6.jpg'
import image7  from '../assets/images/image7.jpg'
import image8  from '../assets/images/image8.jpg'
import image9  from '../assets/images/image9.jpg'
import image10 from '../assets/images/image10.jpg'
import image11 from '../assets/images/image11.jpg'
import image12 from '../assets/images/image12.jpg'
import image13 from '../assets/images/image13.jpg'
import image14 from '../assets/images/image14.jpg'




const Game = () => {

    console.log(localStorage.getItem('bestScore'));
    
    const [cards, setCards] = useState([
      { title: image1, picked: false },
      { title: image2, picked: false },
      { title: image3, picked: false },
      { title: image4, picked: false },
      { title: image5, picked: false },
      { title: image6, picked: false },
      { title: image7, picked: false },
      { title: image8, picked: false },
      { title: image9, picked: false },
      { title: image10, picked: false },
      { title: image11, picked: false },
      { title: image12, picked: false },
      { title: image13, picked: false },
      { title: image14, picked: false },


    ]);
  
    const [score, setScore] = useState(0);
    const [bestScore, setbestScore] = useState(() => {
      const storedBestScore = localStorage.getItem('bestScore');
      return storedBestScore ? parseInt(storedBestScore) : 0;
    });
    const handleClick = (index) => {
      if (!cards[index].picked) {
        const updatedCards = [...cards];
        updatedCards[index].picked = true;
        const newcards = shuffleArray(updatedCards);
        setCards(newcards);
        const allPicked = updatedCards.every(card => card.picked);
        if (allPicked) {
          //display winner
        }
        setScore(score + 1);
        if(score+1>bestScore) 
        {   
          localStorage.setItem('bestScore', bestScore+1);
          setbestScore(bestScore+1);
          console.log(localStorage.getItem('bestScore')+"waffle");
        }
        // shuffleCards();
      }else{
        //looser
      }
    };
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
   }

    return (
      <div className="content">
        <div className="score">
            <div>
                Score: {score}
            </div>
            <div>
                Bestscore :{bestScore}
            </div>
        </div>
        <div className="board">
        {cards.map((card, index) => (
          <div className="card" key={index} onClick={() => handleClick(index)}>
             <img src= {card.title} alt="power rangers" />
          </div>
        ))}
        </div>
      </div>
    );
  };

export default Game;

