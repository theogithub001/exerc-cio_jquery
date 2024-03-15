document.getElementById('add-button').addEventListener('click', () => {
  const itemInput = document.getElementById('item-input');
  const itemText = itemInput.value.trim();

  if (itemText) {
    const li = document.createElement('li');
    li.textContent = itemText;

    const strikeButton = document.createElement('button');
    strikeButton.textContent = 'Strike';
    strikeButton.className = 'strike';
    li.appendChild(strikeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    li.appendChild(deleteButton);

    document.getElementById('shopping-list').appendChild(li);
    itemInput.value = '';
  }
});
document.getElementById('shopping-list').addEventListener('click', Event => {
  const target = Event.target;

  if (target.tagName === 'BUTTON') {
  const li = target.parentNode;
  const itemText = li.firstChild.nodeValue;
  
  if (target.className === 'strike'){
      li.classList.toggle('strike-through');
  }   else if (target.className === 'delete') {
      li.parentNode.removeChild(li);
      }
  }
})