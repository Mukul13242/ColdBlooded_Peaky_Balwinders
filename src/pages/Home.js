import DropFileInput from "../components/drop-file-input/DropFileInput";

const Home = () => {
  return (
    <div className="body">
      <div className="box">
        <h2 className="header">Drag And Drop Files Here</h2>
        <DropFileInput />
      </div>

    </div>
  );
};

export default Home;
