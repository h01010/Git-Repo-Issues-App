import './App.css';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>이슈정리</h1>
      </div>
      <div className="issue__list">
        <div className="issue__filter">
          <div>이슈 상태</div>
          <div>sort 필터</div>
        </div>
        <div className="issue__table">이슈 테이블</div>
        <div className="issue__pagination">12345</div>
      </div>
    </div>
  );
}

export default App;
