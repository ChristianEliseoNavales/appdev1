import { StudentProvider, StudentProfile } from './Components/StudentProfile';

const App = () => (
  <StudentProvider>
    <div>
      <StudentProfile />
    </div>
  </StudentProvider>
);

export default App;
