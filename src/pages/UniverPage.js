import Header from '../components/Header'

function UniverPage () {
  return (
    <div className="wrapper clear">
      <Header />
      <div className="video-block">
        <video
          className=""
          src="./video/1.mp4"
          controls
          poster="./img/itmo.jpg"
        >
          <p>
            Ваш браузер не поддерживает HTML5 видео. Используйте{' '}
            <a href="video/dma_melodiclamation.mp4">ссылку на видео</a> для
            доступа.
          </p>
        </video>
      </div>
      <div className="d-flex justify-between align-center p-30 mr-20 mt-5">
        <div>
          <h1>
            <a href="/univer"> Наш Университет</a>
          </h1>
          <h3>
            {' '}
            Это ИТМО – больше чем университет! ИТМО – научно-образовательная
            корпорация. Индивидуальное образование, позволяющее строить успешную
            карьеру с первых курсов. Академическая свобода, DeepTech, отсутствие
            рамок. Бизнес-подходы к организации работы, стартаперская культура и
            открытый код. Влюбляться в науку, вдохновлять, находить таланты —
            наш образ жизни.
          </h3>
        </div>
      </div>
      <div className="content p-40"></div>
    </div>
  )
}

export default UniverPage
