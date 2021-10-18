import Main from './components/Main';
import SiderBar from './components/SiderBar';

export default function App() {
  return (
    <>
      <div className="flex flex-row">
        <SiderBar />
        <Main />
      </div>
    </>
  );
}
