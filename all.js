const data = [
  {
    sport_logo: "🏀",
    sport_name: "basketball",
    league_name: "NCAA",
    schedule_id: 441148,
    datetime_utc: "2025-02-26",
    away_team_name: "Buffalo",
    home_team_name: "Central Michigan",
    away_team_logo: "https://img.icons8.com/emoji/48/taiwan-emoji.png",
    home_team_logo: "https://img.icons8.com/emoji/48/japan-emoji.png",
    home_score: 73,
    away_score: 69,
    new_status: "completed",
    away_win_conf: 0.28,
    home_win_conf: 0.72,
    expected_result: "home",
  },
  {
    sport_logo: "🏀",
    sport_name: "basketball",
    league_name: "NCAA",
    schedule_id: 441142,
    datetime_utc: "2025-02-26",
    away_team_name: "Baylor",
    home_team_name: "Cincinnati",
    away_team_logo:
      "https://img.icons8.com/emoji/48/heard--mcdonald-islands-emoji.png",
    home_team_logo: "https://img.icons8.com/emoji/48/japan-emoji.png",
    home_score: 69,
    away_score: 67,
    new_status: "completed",
    away_win_conf: 0.4,
    home_win_conf: 0.6,
    expected_result: "away",
  },
  {
    sport_logo: "⚾",
    sport_name: "baseball",
    league_name: "MLB",
    schedule_id: 441147,
    datetime_utc: "2025-02-26",
    away_team_name: "St. Louis Billikens",
    home_team_name: "Davidson",
    away_team_logo:
      "https://img.icons8.com/emoji/48/heard--mcdonald-islands-emoji.png",
    home_team_logo: "https://img.icons8.com/emoji/48/japan-emoji.png",
    home_score: 56,
    away_score: 57,
    new_status: "completed",
    away_win_conf: 0.44,
    home_win_conf: 0.56,
    expected_result: "home",
  },
  {
    sport_logo: "⚾",
    sport_name: "baseball",
    league_name: "MLB",
    schedule_id: 441146,
    datetime_utc: "2025-02-26",
    away_team_name: "Florida",
    home_team_name: "Georgia",
    away_team_logo: "https://img.icons8.com/emoji/48/taiwan-emoji.png",
    home_team_logo: "https://img.icons8.com/emoji/48/south-korea-emoji.png",
    home_score: 88,
    away_score: 83,
    new_status: "completed",
    away_win_conf: 0.62,
    home_win_conf: 0.38,
    expected_result: "home",
  },
];

// export default data;

const container = document.querySelector(".container");
let str = "";
data.forEach(function (item, index) {
  const win = item.away_score > item.home_score ? "away" : "home";
  str += `
    <div class="item" data-win="${win}" data-expected="${item.expected_result}">
      <div class="title">
        <div class="sportDes">
          <div class="sportName">${item.sport_logo} ${item.sport_name} - ${item.league_name}</div>
            <div class="sportDate">${item.datetime_utc}</div>
        </div>
        <button class="newStatus" type="button">${item.new_status}</button>
      </div>
      <div class="awayTeam">
        <div class="awayWin">${Math.floor(item.away_win_conf * 100)}%</div>
        <div class="awayTeamName"><img src=${item.away_team_logo} alt="away_team_logo" />${item.away_team_name}</div>
        <div class="awayScore">${item.away_score}</div>
      </div>
      <div class="homeTeam">
        <div class="homeWin">${Math.floor(item.home_win_conf * 100)}%</div>
          <div class="homeTeamName"><img src=${item.home_team_logo} alt="home_team_logo" />${item.home_team_name}</div>
          <div class="homeScore">${item.home_score}</div>
      </div>
    </div>
    `;
  container.innerHTML = str;
});

document.querySelectorAll(".item").forEach((el) => {
  const winTeam = el.dataset.win; // 取得 `data-win` 屬性
  const expectedResult = el.dataset.expected; // 取得 `data-expected` 屬性
  const awayScore = el.querySelector(".awayScore");
  const homeScore = el.querySelector(".homeScore");
  const awayWin = el.querySelector(".awayWin");
  const homeWin = el.querySelector(".homeWin");

  if (winTeam === "away") {
    awayScore.classList.add("win");
  } else if (winTeam === "home") {
    homeScore.classList.add("win");
  }
  if (expectedResult === "away") {
    awayWin.classList.add(expectedResult === winTeam ? "success" : "failed");
  } else if (expectedResult === "home") {
    homeWin.classList.add(expectedResult === winTeam ? "success" : "failed");
  }
});
