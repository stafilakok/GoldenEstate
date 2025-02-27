import React from "react";
import { Button } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const revenueData = {
    labels: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн"],
    datasets: [
      {
        label: "Выручка (млн ₽)",
        data: [1.2, 1.3, 1.5, 1.2, 1.4, 1.1],
        borderColor: "#ffd700",
        backgroundColor: "rgba(255, 215, 0, 0.5)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Выручка за 2024 год",
      },
    },
  };

  return (
    <div className="App">
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          МОНОЛИТ
        </a>
        <div className="navbar-buttons">
          <Button
            variant="contained"
            startIcon={<AccountCircle />}
            sx={{
              backgroundColor: "#ffd700",
              color: "#000",
              "&:hover": { backgroundColor: "#ccac00" },
            }}
          >
            Профиль
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "#ffd700",
              borderColor: "#ffd700",
              "&:hover": { borderColor: "#ccac00", color: "#ccac00" },
            }}
          >
            Регистрация
          </Button>
        </div>
      </nav>

      <main className="main-content">
        <section className="hero-section">
          <h1 className="hero-title">МОНОЛИТ</h1>
          <p className="hero-subtitle">
            Лидер в области добычи золота в Магадане и окрестностях
          </p>
        </section>

        <section className="info-section">
          <div className="company-info">
            <h2>О компании</h2>
            <p>
              МОНОЛИТ специализируется на добыче золота в Магаданской области.
              За 2024 год наша выручка составила 7.7 млн рублей, что
              подтверждает нашу эффективность и стабильность на рынке.
            </p>
            <div className="info-grid">
              <div className="info-item">
                <h3>Основной вид деятельности</h3>
                <p>
                  Добыча руд и песков драгоценных металлов и руд редких металлов
                  (07.29.4)
                </p>
              </div>
              <div className="info-item">
                <h3>Налоговый орган</h3>
                <p>Управление ФНС России по Магаданской области</p>
              </div>
            </div>
            <div className="info-grid">
              <div className="info-item">
                <h3>Коды статистики</h3>
                <ul>
                  <li>ОКПО: 31635703</li>
                  <li>ОКАТО: 44401000000</li>
                  <li>ОКТМО: 44701000001</li>
                  <li>ОКФС: 16 (Частная собственность)</li>
                </ul>
              </div>
              <div className="info-item">
                <h3>Организационная информация</h3>
                <ul>
                  <li>ОКОГУ: 4210014</li>
                  <li>
                    Тип: Организации, учрежденные юридическими лицами или
                    гражданами
                  </li>
                  <li>ОКОПФ: 12300</li>
                  <li>Форма: Общества с ограниченной ответственностью</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="chart-section">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Line options={chartOptions} data={revenueData} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
