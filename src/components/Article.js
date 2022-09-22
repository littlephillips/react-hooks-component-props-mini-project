import React from "react";

function displayEmojis(minutes) {
  const readTime= minutes < 30 ? 5 : 10;
  const emoji = minutes < 30 ? "☕️" : "🍱";

  let emojis = "";
  for (let i = 0; i < minutes; i += readTime) {
    emojis += emoji;
  }
  return emojis;

}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const emojis = displayEmojis(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} • {emojis} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;