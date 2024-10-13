import './App.css'
import AdminPanel from  './AdminPanel';
import LoginForm from  './LoginForm';

export default function MyApp() {
  let content;
  let isLoggedIn = true;

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div>
      {content}
    </div>
  );

}

