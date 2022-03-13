import Main from "../components/common/Main";
import Header from "../components/shared/header/Header";

const TheLayout = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div>
        <Main></Main>
      </div>
    </div>
  );
};

export default TheLayout;
