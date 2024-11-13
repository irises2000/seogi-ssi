document.addEventListener('DOMContentLoaded', function() {
  const parent = document.querySelector('.parent');
  const child = document.querySelector('.child');

  parent.addEventListener('mouseover', function() {
    child.style.display = 'block';
  });

  parent.addEventListener('mouseout', function() {
    child.style.display = 'none';
  });
});