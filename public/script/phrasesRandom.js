// Script para geração de frases pseudo-aleatorias

let phrases = [
    'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    'Aenean nec justo ac sem euismod molestie ut accumsan ante',
    'In vel dui quis eros porta mattis',
    'Nullam non felis finibus, semper justo a, pharetra enim',
    'In non sem sed sapien sagittis mattis',
    'Vestibulum maximus ante ac posuere malesuada',
    'Etiam mollis lorem ac nibh commodo at placerat lorem mollis',
    'Pellentesque eu eros id neque scelerisque vulputate',
    'Phasellus id erat ultrices finibus dolor sit amet porttitor tellus',
    'Proin molestie velit vitae lacus gravida rutrum pellentesque ligula fermentum',
    'Mauris lobortis libero eu arcu pulvinar nec ultricies justo sagittis',
    'Fusce vehicula leo non mauris sodales convallis',
    'Etiam at turpis sed diam accumsan efficitur',
    'Nunc efficitur dui aliquet lobortis purus vitae condimentum turpis',
    'Vivamus tincidunt eros eu arcu pharetra eget ultrices tortor pulvinar',
    'Maecenas gravida purus quis risus feugiat vehicula',
    'Aliquam at tellus at lacus sodales scelerisque',
    'Pellentesque ullamcorper ligula non luctus gravida',
    'Maecenas in orci non ante rutrum euismod',
    'Mauris ut sapien ut erat pellentesque interdum'
        
];

var changePhrase = document.querySelector('.phrase');
changePhrase.textContent = phrases[Math.floor((0, 19) * Math.random())];

var wordCounter = () => {
    var phrase = document.querySelector('.phrase').textContent;
    var numberOfWords = phrase.split(' ').length;

    var sentenceSize = document.querySelector('#sentence-size');
    sentenceSize.textContent = numberOfWords;
        }
