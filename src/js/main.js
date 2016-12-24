floating({
  content: '🖕',
  number: 5,
  size: [1, 10]
});

floating({
  content: '🖕',
  number: 5,
  size: [1, 10],
  direction: 'reverse'
});

floating({
  content: '🚽',
  number: 5,
  size: [1, 10]
});

setTimeout(() => {
  console.speak('shame on you', {
    rate: 0.5,
    pitch: 0.5
  });
}, 1000);
