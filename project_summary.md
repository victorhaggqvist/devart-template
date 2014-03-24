# Figure Ride
Create beautiful imagery by drawing figures.

## Authors
- Victor Häggqvist, [@victorhaggqvist](https://twitter.com/victorhggqvst), https://github.com/victorhaggqvist

## Description
First time ever I've been exploring the HTML5 Canvas element and it's posibilities. Just playing
around to see what happened.

## Link to Prototype
http://apps.snilius.com/devart

## Example Code
```js
function makeRect(context,x,y,color) {
  var s = 20;
  context.beginPath();
  context.moveTo(x,y);
  context.lineTo(x,y+s);
  context.lineTo(x+s,y+s);
  context.lineTo(x+s,y);
  context.lineTo(x,y);
  context.closePath();
  context.strokeStyle = color;
  context.stroke();
}
```
## Links to External Libraries
- Sass-Bootstrap, https://github.com/twbs/bootstrap-sass
- Font Awesome, https://github.com/FortAwesome/Font-Awesome

## Images & Videos
![Example Image](project_images/cover.jpg?raw=true "Example Image")
