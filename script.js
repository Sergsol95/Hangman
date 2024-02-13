"use strict";
// 1) Создаем теги на странице с помощью js (почитать про методы получения элементов и коллекций элементов на странице, а также про методы создания элементов и вставки в DOM-дерево)
// 1.1) https://learn.javascript.ru/searching-elements-dom
// 1.2) https://learn.javascript.ru/basic-dom-node-properties
// 1.3) Остальную теорию искать в разделе "Браузер: документ, события, интерфейсы" учебника learn.js

// Пример алгоритма:
// 1) Нашли корневой элемент на странице (например, div c id="root")
// 2) Создали необходимые элементы (все html блоки)
// 3) Вставили созданные элементы в корневой элемент с помощью функции вставки

// 2) Подготовить набор с вопросами и ответами, которые мы будем вставлять на страницу (например, массив обьектов формата { question, answer }

// 3) Подготовить функцию, которая будет брать рандомный вопрос-ответ и выводить в соответствующие теги

// 4) Повесить соответствующие события на кнопки клавиатуры (onClick). Событием должна быть одна и та же функция, которая проверяет есть ли текущая буква, по которой мы кликнуле, в текущем ответе. Если буква есть, то вызываем функцию, которая добавляет букву на экран. Если буквы нет, то вызываем функцию, которая рисует кусок человека

// 5) Делаем функцию, которая умеет показывать модальное окно на выигрыш и на проигрыш. Она будет срабатывать когда мы либо угадали всё слово, либо человечек полностью нарисовался.

const hangmanDiv = document.createElement("div");
hangmanDiv.className = "hangman";

const firstPageSection = document.createElement("section");
firstPageSection.className = "first__page";

const title = document.createElement("h1");
title.className = "title";
title.textContent = "The Hangman";
firstPageSection.appendChild(title);

const description = document.createElement("p");
description.className = "first__page_description";
description.textContent =
  "One player thinks of a word or phrase, and the other player try to guess, make sure to black out extras if player guess the wrong word the line is filled on hangman, if hangman diagram has completed, the guesser has lost the game.";
firstPageSection.appendChild(description);

const secondPageSection = document.createElement("section");
secondPageSection.className = "second__page";

const gallowDiv = document.createElement("div");
gallowDiv.className = "gallow";
[
  "bottom",
  "middle",
  "top",
  "head",
  "body",
  "right-arm arm",
  "left-arm arm",
  "right-leg leg",
  "left-leg leg",
].forEach((part) => {
  const div = document.createElement("div");
  div.className = `gallow__${part}`;
  gallowDiv.appendChild(div);
});
secondPageSection.appendChild(gallowDiv);

const underscoresDiv = document.createElement("div");
underscoresDiv.className = "underscored-letters";
for (let i = 0; i < 8; i++) {
  const underscore = document.createElement("div");
  underscore.className = "underscore";
  underscoresDiv.appendChild(underscore);
}
secondPageSection.appendChild(underscoresDiv);

const alphabetDiv = document.createElement("div");
alphabetDiv.className = "alphabet";
alphabetDiv.textContent = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
secondPageSection.appendChild(alphabetDiv);

const winnerDiv = document.createElement("div");
winnerDiv.className = "winner";
winnerDiv.textContent = "WINNER:";
secondPageSection.appendChild(winnerDiv);

hangmanDiv.appendChild(secondPageSection);
document.body.appendChild(hangmanDiv);

const question = {
    'Biggest mountain in the world' : "Everest",
    'Coldest city in the world' : 'Yakutsk',
    'Capital of Britain' : 'London',
}

function initGame() {};

function guessWord () {};

function displayWord () {};

function displayHangman () {};

