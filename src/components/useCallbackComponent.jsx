import React from 'react'
import {useState, useCallback} from 'react'

export default function UseCallbackComponent() {
    const [message, setMessage] = useState('');

    // İşlevi hatırlatmak için useCallback kullanımı
    const showMessage = useCallback(() => {
      setMessage('Button clicked!');
    }, []); // Boş bağımlılık dizisi: İşlev yaratıldığında bir kere çağrılır
  
    return (
      <div>
        <button onClick={showMessage}>Click Me</button>
        <p>{message}</p>
      </div>
    );
}
