import { useState } from 'react';

// useLogged hook'u tanımlanıyor
function useLogged() {
  // Kullanıcının giriş yapmış olup olmadığını izlemek için state tanımlayın
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Kullanıcı oturumunu başlatan fonksiyon
  function login() {
    setIsLoggedIn(true);
    // Giriş yapıldığında ekstra işlemler yapılabilir (örneğin, kullanıcı bilgilerini saklamak)
  }

  // Kullanıcı oturumunu sonlandıran fonksiyon
  function logout() {
    setIsLoggedIn(false);
    // Çıkış yapıldığında ekstra işlemler yapılabilir (örneğin, kullanıcı bilgilerini temizleme)
  }

  // Kullanıcının giriş yapmış olup olmadığını döndürür
  return {
    isLoggedIn,
    login,
    logout
  };
}

// Kullanılacak bileşen
function MyComponent() {
  // useLogged hook'u kullanılıyor
  const { isLoggedIn, login, logout } = useLogged();

  return (
    <div>
      <p>Kullanıcı giriş durumu: {isLoggedIn ? 'Giriş yapıldı' : 'Giriş yapılmadı'}</p>
      <button onClick={isLoggedIn ? logout : login}>
        {isLoggedIn ? 'Çıkış Yap' : 'Giriş Yap'}
      </button>
    </div>
  );
}

export default MyComponent;
