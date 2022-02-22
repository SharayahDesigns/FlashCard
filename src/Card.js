import React,{useState} from "react";


const Card = (props) => {
  const [showFront,setShowFront] = useState(true);

  const { id , question, answer } = props;
  const renderCard = () => {
    if(showFront) {
      return (
        <div>
          <h3>{question}</h3>
        </div>
      );
    }
    
    return (
      <div>
        <h3>{answer}</h3>
      </div>
    );
  };
  const handleClick = () => {
    setShowFront(!showFront);
  };
  
  return (
    <div onClick={handleClick} className="card">
      {renderCard()}
      <p>{id}</p>
    
    </div>
  
  );

};

  export default Card;

