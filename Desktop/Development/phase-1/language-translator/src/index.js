const { default: axios } = require("axios");
const axios = require(axios);

let result = document.getElementById("display-all");
let selectLanguage = document.getElementById("select-language");
let searchBtn = document.getElementById("search");

let url = "'https://google-translate1.p.rapidapi.com/language/translate/v2'";

const translateFunction = async () => {
  const data = {};
  await axios
    .post(`${url}`)
    .then((response) => {
      return response.data;
    })
    .catch((e) => console.log("Error: ", e));
};

const userInput = {
  method: "POST",
  url: `${url}`,
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  },
  data: encodedParams,
};

let languages = {
  Swahili: "sw",
  Afrikaans: "af",
  Albanian: "sq",
  Amharic: "am",
  Arabic: "ar",
  Armenian: "hy",
  Azerbaijani: "az",
  Basque: "eu",
  Belarusian: "be",
  Bengali: "bn",
  Bosnian: "bs",
  Bulgarian: "bg",
  Catalan: "ca",
  Cebuano: "ceb (ISO-639-2)",
  Chinese: "zh-CN (BCP-47)",
  Chinese: "zh-TW (BCP-47)",
  Corsican: "co",
  Croatian: "hr",
  Czech: "cs",
  Danish: "da",
  Dutch: "nl",
  English: "en",
  Esperanto: "eo",
  Estonian: "et",
  Finnish: "fi",
  French: "fr",
  Frisian: "fy",
  Galician: "gl",
  Georgian: "ka",
};
