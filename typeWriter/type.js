    const typewriter = new Typewriter('#typewriter', {
      loop: true,
    });

    typewriter.typeString('Hi, I am Nishant Padhi!')
      .pauseFor(2500)
      .deleteAll()
      .typeString('I am Web & Andorid Developer!!!')
      .pauseFor(2500)
      .start();
