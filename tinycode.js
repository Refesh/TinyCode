function setup(){
createCanvas(w=640,h=640,WEBGL)
noStroke(),t=0}
function draw(){
background(0)
t+=0.007,n=50,w=18,r=35,p=2*PI,u=5*exp(6.5-t*2.5)
for(j=0;j++<w;){
push()
rotateZ(sin(2*t)/6*p+min(1,t/1.1)*j*p/w)
translate(u,u,-620-2.3*u)
rotateX(p/w)
rotateZ(t*1.2)
rotateY(-t)
for(i=0;i++<n;){
translate(-r,0)
fill(255)
if(j%2==0)fill(0,166,255)
rotateY(p/n)
sphere(4)}
pop();}}