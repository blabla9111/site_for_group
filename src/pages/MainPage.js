import { useState } from 'react'

import Header from '../components/Header'
import Card from '../components/Card/Card'
import arr from '../justJS'

function MainPage () {
  const [query, setQuery] = useState('')
  return (
    <div className="wrapper clear">
      <Header />
      <div className="d-flex justify-between align-center p-40 mr-20">
        <div>
          <h2>О нас</h2>
          <h3>
            Мы студенты 3 курса Университета ИТМО факультета Программной
            инженерии и компьютерной техники. Позитивные, молодые, умные,
            красивые и это всё о нас!!!
          </h3>
        </div>
        <p className="text-center">
          <img
            className="coolImg"
            width={500}
            src="./img/itmo.jpg"
            alt=""
          ></img>
        </p>
      </div>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Наша группа</h1>
          <div className="search d-flex">
            <input
              placeholder="Поиск..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="align-center">
          {arr
            .filter((student, index) =>
              student.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((student, index) => (
              <div key={student.link} className="inline mb-40">
                <Card
                  title={student.name}
                  img={student.img}
                  link={student.link}
                  index={index}
                />
                <div className={index % 4 === 3 ? '' : 'none'}></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default MainPage
