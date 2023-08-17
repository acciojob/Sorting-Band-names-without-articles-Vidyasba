//your code here
function removeArticles(name) {
    const articles = ['a', 'an', 'the'];
    const words = name.toLowerCase().split(' ');

    if (articles.includes(words[0])) {
      words.shift();
    }

    return words.join(' ');
  }
/ Sort the band names while removing articles
  touristSpots.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

  // Get the ul element by id
  const bandList = document.getElementById('band');

  // Populate the ul element with li elements
  touristSpots.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    bandList.appendChild(li);
  });
