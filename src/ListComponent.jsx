import { useState } from "react";

export const ListComponent = () => {
  let [massiveOfWords] = useState([]);

  let [name, setName] = useState(true);
  let [showAnswer, setShowAnswer] = useState("");
  const enterNewValue = () => {
    setShowAnswer((showAnswer = prompt("Введите значение")));
	if(showAnswer !== null) {
		if (showAnswer.length >= 3) {
			massiveOfWords.push(showAnswer);
			setName(false);
		  } else {
			setName(true);
			return <div>Введеное значение должно содержать минимум 3 символа</div>;
		  }
	} else {
		console.log('error')
	}

  };

  let [ListOfAddWords, setListOfAddWords] = useState(
    "Нет добавленных элементов"
  );
  const addToList = () => {
    setListOfAddWords(
      (ListOfAddWords = <>{showAnswer !== "" ? createElement() : false}</>)
    );
  };

  const createElement = () => {
    console.log(massiveOfWords.map((item) => item));
    return (
      <>
        {massiveOfWords.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </>
    );
  };

  const Error = () => {
    return <div>Введеное значение должно содержать минимум 3 символа</div>;
  };

  return (
    <>
      <div>
        <strong>Ввод значения</strong>
      </div>
      <div>
        Текущее значение value "{showAnswer !== null? (showAnswer.length >= 3 ?  showAnswer : false) : false}"
      </div>
      <div>{showAnswer !== null? (showAnswer.length >= 3 || showAnswer === "" ? false : Error()) : false}</div>
      <div>
        <button onClick={enterNewValue}>Ввести новое значение</button>
        <button onClick={addToList} disabled={name}>
          Добавить в список
        </button>
      </div>
      <div>
        Список
        <div>{ListOfAddWords}</div>
      </div>
    </>
  );
};
