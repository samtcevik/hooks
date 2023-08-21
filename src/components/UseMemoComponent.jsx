import React, {useState, useMemo } from 'react'

export default function UseMemoComponent() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
  
   
    //Aşağıdaki şekilde yazılırsa her render edildiğinde sum fonksiyonu tekrar çalışacağı için useMemo hook kullanılacak.
    // const sum = () => {
    //   console.log("Sum calculation");
    //   return number1 + number2;
    // }; 
  
     // İşlem sonucunu bellekte saklamak için useMemo kullanımı
  const sum = useMemo(() => {
    console.log("Sum calculation");
    return number1 + number2;
  }, [number1, number2]); // Bu bağımlılık dizisi değiştiğinde hesaplama yapılır

    return (
      <div>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(parseInt(e.target.value))}
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(parseInt(e.target.value))}
        />
        <p>Sum: {sum}</p>
      </div>
    );
}
