// document.body.innerHTML = '<h1>Hello World</h1>';

// const h1 = document.createElement('h1');
// h1.innerText = 'Hello World!';
// h1.style.color = 'red';
// document.body.appendChild(h1); // h1을 body 자식 중 마지막으로 지정한다
// // document.body.prepend(h1); // h1을 body 자식 중 첫번째로 지정한다

// h1.classList.add('title');
// h1.classList.add('another-class');
// h1.classList.remove('title');
// h1.className = 'content';

// const p = document.createElement('p');
// p.innerText = 'Hi!';
// document.body.insertBefore(p, h1); // p를 h1 앞에 위치시킨다

// document.querySelector('#app').innerHTML = `
//   <p>Hello1</p>
//   <p>Hello2</p>
//   <p>Hello3</p>
// `;

// console.log(document.querySelector('p'));
// console.log(document.querySelectorAll('p')); // 반환값: Node List

document.querySelector('#app').innerHTML = `
  <button class='hello1' type='button'>Click the input</button>
  <button class='hello2' type='button'>Hello2</button>
  <button class='hello3' type='button'>Hello3</button>

  <div>
    <input class='name' type='text' placeholder='Type your name' />
  </div>

  <div class='parent-of-button'>
    <button class='helloworld-button' type='button'>
      <span>Hello</span>
      <span>World</span>
    </button>
  </div>
`;

document.querySelector('button').addEventListener('click', (event) => {
  const input = document.querySelector('.name');
  console.log(input.value);
});

document.querySelector('.name').addEventListener('change', (event) => {
  console.log(event.target.value);
}); // change: 값 입력 후 벗어났을 때 적용

// document.querySelector('.name').addEventListener('input', (event) => {
//   console.log(event.target.value);
// }); // input: 타이핑 할 때마다 적용

document
  .querySelector('.helloworld-button')
  .addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('event from button', event);
  });

document
  .querySelector('.parent-of-button')
  .addEventListener('click', (event) => {
    console.log('event from div', event);
  });

document.querySelector('.name').addEventListener('keyup', (event) => {
  console.log('input keyup', event);
});
