import logo from './logo.svg';
import './App.css';
import Article from './Article';

function App() {
  return (
    <div>
        <Article
            title={'youtube教材 React 入門編'}
            content='今日のトピックはpropsについて!!(データの受け渡しについても追加)'
        />
                <Article
            title={'youtube教材 React 初級編'}
            content='今日のトピックはpropsについて!!(データの受け渡しについても追加)'
        />
                <Article
            title={'youtube教材 React 中級編'}
            content='今日のトピックはpropsについて!!(データの受け渡しについても追加)'
        />
                <Article
            title={'youtube教材 React 上級編'}
            content='今日のトピックはpropsについて!!(データの受け渡しについても追加)'
        />
    </div>
  );
}

export default App;
