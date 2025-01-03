// импортировали отдельный css файл
import "./business_card.css";
// импорт картинок
import viteLogo from "/vite.svg";
import reactLogo from "../../assets/react.svg";

// ! как создать React компонент?

// 1. файл называется с большой буквы
// 2. имеет расшмрение .jsx
// 3. внутри есть функции,у которой в return вёрстка
// 4. функция называется именем файлаб с большой буквы
// 5. функция экспортируется из файла

function Business_card () {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Привет, меня зовут Виктория. ⚡️</h1>

      <p className="read-the-docs">
        Этот React проект собран на сборщике Vite 🙌
      </p>
    </>
  );
}
export default Business_card;

