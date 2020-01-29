
c.fillStyle = 'rgba(0, 0, 0, 0.1)';
c.fillRect(0,100,100,100);
c.fillStyle = 'rgba(0, 0, 0, 0.2)';
c.fillRect(50,100,100,100);
c.fillStyle = 'rgba(0, 0, 0, 0.3)';
c.fillRect(100,100,100,100);
c.fillStyle = 'rgba(0, 0, 0, 0.4)';
c.fillRect(150,100,100,100);
c.fillStyle = 'rgba(0, 0, 0, 0.5)';
c.fillRect(200,100,100,100);
c.fillStyle = 'rgba(0, 0, 0, 0.6)';
c.fillRect(250,100,100,100);
c.fillStyle = 'rgba(0, 0, 0, 0.7)';
c.fillRect(300,100,100,100);
c.fillStyle = 'rgba(0, 0, 0, 0.8)';
c.fillRect(350,100,100,100);
c.fillStyle = 'rgba(0, 0, 0, 0.9)';
c.fillRect(400,100,100,100);
c.fillStyle = 'rgba(0, 0, 0, 1)';
c.fillRect(450,100,100,100);



c.beginPath();
c.moveTo(50,300);
c.lineTo(300, 100);
c.lineTo(400,300)
c.strokeStyle = "red"
c.stroke();




for(i=0; i < 300; i++) {

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
c.arc(i*2, 30, 30, 0, 2 * Math.PI, false);
c.strokeStyle = `rgba(0, 0, 0, ${Math.random()})`;
c.stroke();
}

