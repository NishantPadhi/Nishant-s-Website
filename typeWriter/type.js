    const typewriter = new Typewriter('#typewriter', {
      loop: true,
    });

    typewriter.typeString('Hi, I am Nishant Padhi!')
      .pauseFor(2500)
      .deleteAll()
      .typeString('I am Web & Android developer')
      .pauseFor(2500)
      .deleteChars(13)
      .typeString('<strong>Full Stack Web Developer & Android Developer!<strong>')
      .pauseFor(2500)
      .start();
