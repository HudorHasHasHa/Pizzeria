/*
//class Slider{

function slider(){
  let thisSlide = document.querySelector('carousel');
  const templateSlide = Handlebars.compile(document.getElementById('template-slide').innerHTML);

  const textOne = {
    title: 'AMAZING SERVICE!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante tortor, hendrerit in consectetur a, suscipit fermentum magna. Donec eros sem,',
    author: '-Margaret Osborne'
  };

  const textTwo = {
    title: 'TRULLY AMAZING',
    text: 'Sed dictum convallis suscipit. Etiam dui tellus, ullamcorper viverra metus convallis, laoreet blandit erat. Phasellus malesuada libero nec erat vehicula ornare.',
    author: '-Rambo'
  };

  const textThree = {
    title: 'SIMPLY EXCEPTIONAL',
    text: 'Vivamus aliquet magna in suscipit suscipit. Aliquam tincidunt, est sit amet sagittis pulvinar, elit enim blandit lectus, et pharetra diam erat vitae tortor Ill be back...',
    author: '-Terminator'
  };

  const texts = [];
  texts.push(textOne, textTwo, textThree);

  for(let text in texts){
    const generatedHTML = templateSlide(text);
    thisSlide.insertAdjacentHTML('beforeend', generatedHTML);
  }

  setTimeout(slider, 3000);
}

slider();
//export default Slider;*/
